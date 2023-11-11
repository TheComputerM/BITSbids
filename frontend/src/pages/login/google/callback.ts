import { auth, googleAuth } from "~/lib/lucia.js";
import { OAuthRequestError } from "@lucia-auth/oauth";

import type { APIRoute } from "astro";

const DEV_ID: string | null = "874f37f8-0fe4-4b4f-ab56-af67d61a67ef";

export const GET: APIRoute = async (context) => {

	if (DEV_ID) {
		const session = await auth.createSession({
			userId: DEV_ID,
			attributes: {}
		});
		context.locals.auth.setSession(session);
		return context.redirect("/app", 302);
	}

	const storedState = context.cookies.get("google_oauth_state")!.value;
	const state = context.url.searchParams.get("state");
	const code = context.url.searchParams.get("code");
	// validate state
	if (!storedState || !state || storedState !== state || !code) {
		return new Response(null, {
			status: 400
		});
	}
	try {
		const { getExistingUser, googleUser, createUser } =
			await googleAuth.validateCallback(code);

		const getUser = async () => {
			const existingUser = await getExistingUser();
			if (existingUser) return existingUser;
			const user = await createUser({
				attributes: {
					name: googleUser.name,
					avatar: googleUser.picture,
					balance: 0
				}
			});
			return user;
		};

		const user = await getUser();
		const session = await auth.createSession({
			userId: user.userId,
			attributes: {}
		});
		context.locals.auth.setSession(session);
		return context.redirect("/app", 302); // redirect to app
	} catch (e) {
		console.log(e);
		if (e instanceof OAuthRequestError) {
			// invalid code
			return new Response(null, {
				status: 400
			});
		}
		return new Response(null, {
			status: 500
		});
	}
};
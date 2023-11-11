import { lucia } from "lucia";
import { astro } from "lucia/middleware";
import { postgres as postgresAdapter } from "@lucia-auth/adapter-postgresql";
import postgres from "postgres";

import { google } from "@lucia-auth/oauth/providers";

const sql = postgres("postgres://postgres:postgres@localhost:5432/bitsbids");

export const auth = lucia({
  adapter: postgresAdapter(sql, {
    user: "users",
		key: "user_key",
		session: "user_session"
  }),
	env: import.meta.env.DEV ? "DEV" : "PROD",
  middleware: astro(),
});

export const googleAuth = google(auth, {
  clientId: import.meta.env.GOOGLE_CLIENT_ID,
  clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
  redirectUri: "http://localhost:3000/login/google/callback"
})

export type Auth = typeof auth;
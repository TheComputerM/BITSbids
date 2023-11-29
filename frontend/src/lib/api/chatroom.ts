export async function getChatrooms(session: string) {
  const response = await fetch("http://127.0.0.1:8080/api/chatroom", {
    headers: {
      Authorization: `Bearer ${session}`,
    },
  });
  const data: Chatroom[] = await response.json();
  return data;
}

export async function getChatrooms(roomId: string) {
  const response = await fetch(`http://127.0.0.1:8080/api/chatroom/${roomId}`, {
    headers: {
      Authorization: `Bearer ${roomId}`,
    },
  });
  const data: Chatroom[] = await response.json();
  return data;
}

export async function getMessages(roomId : string){
  const response = await fetch(`http://127.0.0.1:8080/api/chatroom/${roomId}/messages`);
  const data: Message[] = await response.json();
  return data;
}

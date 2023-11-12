export async function getUser(id: string) {
  const response = await fetch(`http://127.0.0.1:8080/api/user/${id}`);
  const data: User = await response.json();
  return data;
}

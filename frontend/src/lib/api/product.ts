export async function getAllProducts() {
  const response = await fetch(`http://127.0.0.1:8080/api/product`);
  const data: Product[] = await response.json();
  return data;
}
export async function getAllProducts() {
  const response = await fetch(`http://127.0.0.1:8080/api/product`);
  const data: Product[] = await response.json();
  return data;
}

export async function getProduct(id: string) {
  const response = await fetch(`http://127.0.0.1:8080/api/product/${id}`);
  const data: Product = await response.json();
  return data;
}

export async function getProductBids(id: string) {
  const response = await fetch(`http://127.0.0.1:8080/api/product/${id}/bids`);
  const data: Bid[] = await response.json();
  return data;
}

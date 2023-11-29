interface User {
  id: string;
  name: string;
  avatar: string;
  balance: number;
}

interface Product {
  id: string;
  name: string;
  description: string;
  attachments: string[];
  basePrice: number;
  autoSellPrice?: number;
  sold: boolean;
  endingAt: string;
  createdAt: string;
  seller: User;
}

interface Bid {
  id: string;
  product: Product;
  bidder: User;
  amount: number;
  createdAt: string;
}

interface Chatroom {
  id: string;
  product: Product;
  buyer: User;
}
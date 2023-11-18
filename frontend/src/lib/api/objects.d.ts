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
  autoSellPrice: number | null;
  sold: boolean;
  endingAt: string;
  createdAt: string;
  seller: User;
}

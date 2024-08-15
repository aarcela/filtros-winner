export interface Product {
  name: string;
  description: string;
  charateristic: string;
  created_at: string;
}

export interface ProductList {
  id: string;
  data: Product;
}

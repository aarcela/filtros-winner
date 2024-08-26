export interface Product {
  name: string;
  description: string;
  charateristic: string;
  image_1?: string;
  image_2?: string;
  image_3?: string;
  created_at: string;
}

export interface ProductList {
  id: string;
  data: Product;
}

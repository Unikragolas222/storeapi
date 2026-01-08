export interface Product {
    id: number;
    created_at?: Date;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
}

export type CreateProductoDTO = Omit<Product, 'id' | 'created_at'>;
export type UpdateProductoDTO = Partial<Product>;

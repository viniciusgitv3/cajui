export type ProductCategory = 'castanha' | 'amendoim' | 'granola';

export interface ProductSpec {
  gramatura: string;
  unidade: string;
  codBarras?: string;
  codDun14?: string;
  validade: string;
}

export interface ProductItem {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  description: string;
  features: string[];
  imageUrl: string;
  specs: ProductSpec[];
  idealFor: string[];
  isHighlighted?: boolean;
  isGourmet?: boolean;
}

export interface BrandValues {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface QuoteItem {
  productId: string;
  productName: string;
  variant: string;
  quantity: number;
}

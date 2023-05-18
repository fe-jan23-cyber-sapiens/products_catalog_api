import { ProductType } from "./ProductType";

interface ProductWithCount extends ProductType {
  count: number,
}

export interface Order {
  orderId: number,
  userId: string,
  fullName: string,
  email: string,
  phone: string,
  products: ProductWithCount[],
}

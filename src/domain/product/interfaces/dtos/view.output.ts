export interface IViewProductOutput {
  id: string;
  name: string;
  customerId: string;
  customer: {
    id: string;
    name: string;
  };
  categoryId: string;
  category: {
    id: string;
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

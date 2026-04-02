export type TransactionType = "Payment" | "Credit";

export interface Transaction {
  id: number;
  name: string;
  description: string;
  authorizedUser?: string;
  type: TransactionType;
  amount: number;
  cashbackPercent?: number;
  date: string; // ISO string
  status: "Approved" | "Pending";
  icon: "apple-dark" | "apple-grad" | "ikea" | "target" | "payment" | "amazon";
  cardType: string;
}

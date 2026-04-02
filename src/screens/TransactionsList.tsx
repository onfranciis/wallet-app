import React from "react";
import { BalanceCard, NoPaymentDueCard } from "../components/CardBalanceBlock";
import TransactionItem from "../components/TransactionItem";
import transactionsData from "../data/transactions.json";
import { Transaction } from "../types";

interface TransactionsListProps {
  onSelectTransaction: (tx: Transaction) => void;
}

const TransactionsList: React.FC<TransactionsListProps> = ({
  onSelectTransaction,
}) => {
  const transactions = (transactionsData as Transaction[]).slice(0, 10);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F2F2F7",
        paddingBottom: 40,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          margin: "16px 16px 0",
        }}
      >
        <BalanceCard />
        <NoPaymentDueCard />
      </div>

      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#1C1C1E",
          padding: "24px 16px 8px",
        }}
      >
        Latest Transactions
      </div>

      <div
        style={{
          background: "white",
          borderRadius: 16,
          margin: "0 16px",
          overflow: "hidden",
        }}
      >
        {transactions.map((tx, index) => (
          <div
            key={tx.id}
            style={{
              borderBottom:
                index < transactions.length - 1
                  ? "0.5px solid #F2F2F7"
                  : "none",
            }}
          >
            <TransactionItem transaction={tx} onClick={onSelectTransaction} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;

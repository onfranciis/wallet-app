import React from "react";
import { Transaction } from "../types";
import TransactionIcon from "./TransactionIcon";
import { formatTransactionDate, formatAmount } from "../utils/dateUtils";

interface TransactionItemProps {
  transaction: Transaction;
  onClick: (tx: Transaction) => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  onClick,
}) => {
  const {
    name,
    description,
    authorizedUser,
    type,
    amount,
    cashbackPercent,
    date,
    status,
  } = transaction;
  const isPending = status === "Pending";
  const amountStr = formatAmount(amount, type);
  const dateStr = formatTransactionDate(date);

  return (
    <div
      onClick={() => onClick(transaction)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        cursor: "pointer",
        borderBottom: "0.5px solid #F2F2F7",
        background: "white",
        transition: "background 0.15s",
        fontWeight: 600,
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "#F9F9F9")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "white")
      }
    >
      <TransactionIcon type={transaction.icon} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#1C1C1E" }}>
          {name}
        </div>

        <div
          style={{
            fontSize: 13,
            color: "#8E8E93",
            marginTop: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {isPending && <span>Pending - </span>}
          {description}
        </div>

        <div style={{ fontSize: 13, color: "#8E8E93" }}>
          {authorizedUser ? `${authorizedUser} – ${dateStr}` : dateStr}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 4,
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#1C1C1E",
            }}
          >
            {amountStr}
          </span>
        </div>

        {cashbackPercent && cashbackPercent > 0 && (
          <span
            style={{
              fontSize: 11,
              color: "#8E8E93",
              background: "#F2F2F7",
              padding: "2px 6px",
              borderRadius: 6,
            }}
          >
            {cashbackPercent}%
          </span>
        )}
      </div>

      <span
        style={{
          color: "#C7C7CC",
          fontSize: 22,
          alignSelf: "start",
          paddingTop: 3,
        }}
      >
        ›
      </span>
    </div>
  );
};

export default TransactionItem;

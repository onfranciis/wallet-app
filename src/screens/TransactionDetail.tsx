import React from "react";
import { Transaction } from "../types";
import { formatDetailDate, formatAmount } from "../utils/dateUtils";

interface TransactionDetailProps {
  transaction: Transaction;
  onBack: () => void;
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({
  transaction,
  onBack,
}) => {
  const { name, amount, type, date, status, cardType } = transaction;
  const amountStr = formatAmount(amount, type);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F2F2F7",
      }}
    >
      {/* Back button */}
      <div
        onClick={onBack}
        style={{
          padding: "16px 20px",
          fontSize: 17,
          color: "#007AFF",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 4,
          userSelect: "none",
        }}
      >
        <i className="fa-solid fa-chevron-left" style={{ fontSize: 14 }} />
        Back
      </div>

      {/* Hero amount */}
      <div
        style={{
          textAlign: "center",
          padding: "24px 24px 32px",
          fontWeight: 500,
        }}
      >
        <div
          style={{
            fontSize: 50,
            fontWeight: 700,
            color: "#1C1C1E",
            letterSpacing: -2,
            marginBottom: 6,
          }}
        >
          {amountStr}
        </div>

        <div style={{ fontSize: 17, color: "#98989c", marginBottom: 4 }}>
          {name}
        </div>

        <div style={{ fontSize: 15, color: "#8E8E93" }}>
          {formatDetailDate(date)}
        </div>
      </div>

      {/* Detail card */}
      <div
        style={{
          background: "white",
          borderRadius: 16,
          margin: "0 16px",
          overflow: "hidden",
        }}
      >
        {/* Status row */}
        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 700, color: "#1C1C1E" }}>
            Status: <span>{status}</span>
          </div>
          <div style={{ fontSize: 14, color: "#98989c", fontWeight: 500 }}>
            {cardType}
          </div>
        </div>

        {/* Division */}
        <div
          style={{
            display: "block",
            height: 2,
            width: "95%",
            background: "#F2F2F7",
            margin: "0 auto",
            borderRadius: 16,
          }}
        ></div>

        {/* Total row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
            fontSize: 17,
            fontWeight: 700,
            color: "#1C1C1E",
          }}
        >
          <div>Total</div>
          <div>{amountStr}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;

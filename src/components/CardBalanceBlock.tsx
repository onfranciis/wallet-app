import React, { useMemo } from "react";
import { getDailyPoints } from "../utils/dateUtils";

const CARD_LIMIT = 1500;

function getRandomBalance(): number {
  return Math.round((Math.random() * 490 + 10) * 100) / 100;
}

export const CardStyle: React.CSSProperties = {
  background: "white",
  borderRadius: 16,
  padding: "14px 16px",
  fontWeight: 600,
};

export const BalanceCard: React.FC = () => {
  const balance = useMemo(() => getRandomBalance(), []);
  const available = CARD_LIMIT - balance;
  const points = getDailyPoints();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <div style={CardStyle}>
        <div style={{ fontSize: 13, color: "#6B6B6B", marginBottom: 2 }}>
          Card Balance
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#1C1C1E",
            lineHeight: 1,
            marginBottom: 4,
          }}
        >
          ${balance.toFixed(2)}
        </div>

        <div style={{ fontSize: 13, color: "#6B6B6B" }}>
          ${available.toLocaleString("en-US", { minimumFractionDigits: 2 })}{" "}
          Available
        </div>
      </div>

      {/* Daily Points */}
      <div style={CardStyle}>
        <div style={{ fontSize: 13, color: "#6B6B6B", marginBottom: 2 }}>
          Daily Points
        </div>

        <div style={{ fontSize: 13, color: "#98989c" }}>{points}</div>
      </div>
    </div>
  );
};

export const NoPaymentDueCard: React.FC = () => (
  <div style={{ ...CardStyle, display: "flex", flexDirection: "column" }}>
    <div
      style={{
        fontSize: 15,
        fontWeight: 600,
        color: "#1C1C1E",
        marginBottom: 4,
      }}
    >
      No Payment Due
    </div>
    <div style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.4 }}>
      You've paid your September balance.
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "",
        justifyContent: "flex-end",
        margin: "auto 0 0",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "1px solid #d0d0d1",
          background: "#E8E8E8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1C1C1E"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  </div>
);

export default function CardBalanceBlock() {
  return (
    <>
      <BalanceCard />
      <NoPaymentDueCard />
    </>
  );
}

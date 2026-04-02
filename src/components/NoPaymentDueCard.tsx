import { CardStyle } from "./CardBalanceBlock";

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

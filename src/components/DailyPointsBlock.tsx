import React from "react";
import { getDailyPoints } from "../utils/dateUtils";

const DailyPointsBlock: React.FC = () => {
  const points = getDailyPoints();

  return (
    <div
      style={{
        background: "white",
        borderRadius: 16,
        margin: "12px 16px 0",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {/* Points cell */}
      <div style={{ padding: "14px 16px", borderRight: "0.5px solid #E5E5EA" }}>
        <div style={{ fontSize: 13, color: "#98989c", marginBottom: 2 }}>
          Daily Points
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#1C1C1E" }}>
          {points}
        </div>
      </div>

      {/* Checkmark cell */}
      <div
        style={{
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
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
};

export default DailyPointsBlock;

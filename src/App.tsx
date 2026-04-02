import React, { useState } from "react";
import TransactionsList from "./screens/TransactionsList";
import TransactionDetail from "./screens/TransactionDetail";
import { Transaction } from "./types";

const App: React.FC = () => {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const handleSelectTransaction = (tx: Transaction) => {
    setSelectedTransaction(tx);
  };

  const handleBack = () => {
    setSelectedTransaction(null);
  };

  return (
    <div style={{ paddingTop: 30 }}>
      {selectedTransaction ? (
        <TransactionDetail
          transaction={selectedTransaction}
          onBack={handleBack}
        />
      ) : (
        <TransactionsList onSelectTransaction={handleSelectTransaction} />
      )}
    </div>
  );
};

export default App;

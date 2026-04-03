import React from 'react';
import { useFinance } from '../context/FinanceContext.jsx';

export const DashboardOverview = () => {
  const { getSummary, transactions } = useFinance();
  const summary = getSummary();

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  return (
    <div className="summary-cards">
      <div className="card">
        <div className="card-label">Total Balance</div>
        <div className={`card-value ${summary.balance >= 0 ? 'positive' : 'negative'}`}>
          {formatAmount(summary.balance)}
        </div>
      </div>

      <div className="card">
        <div className="card-label">Total Income</div>
        <div className="card-value positive">
          +{formatAmount(summary.income)}
        </div>
      </div>

      <div className="card">
        <div className="card-label">Total Expenses</div>
        <div className="card-value negative">
          -{formatAmount(summary.expenses)}
        </div>
      </div>

      <div className="card">
        <div className="card-label">Transactions</div>
        <div className="card-value neutral">
          {transactions.length}
        </div>
      </div>
    </div>
  );
};

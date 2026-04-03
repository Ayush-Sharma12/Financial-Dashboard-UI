import React, { useMemo } from 'react';
import { useFinance } from '../context/FinanceContext.jsx';
import { generateCategoryBreakdown, generateMonthlyData } from '../data/mockData.js';

export const InsightsSection = () => {
  const { transactions, getSummary } = useFinance();
  const summary = getSummary();

  const insights = useMemo(() => {
    const categoryBreakdown = generateCategoryBreakdown(transactions);
    const monthlyData = generateMonthlyData(transactions);

    // Highest spending category
    const highestSpendingCategory = categoryBreakdown[0];

    // Monthly comparison (current vs previous)
    const currentMonth = monthlyData[monthlyData.length - 1];
    const previousMonth = monthlyData[monthlyData.length - 2];
    let monthComparison = 'N/A';
    let monthStatus = 'Same';
    if (previousMonth && currentMonth) {
      const change = currentMonth.expense - previousMonth.expense;
      if (change < 0) {
        monthStatus = 'Down';
        monthComparison = `Down by Rs ${Math.abs(change).toFixed(0)}`;
      } else if (change > 0) {
        monthStatus = 'Up';
        monthComparison = `Up by Rs ${change.toFixed(0)}`;
      } else {
        monthComparison = 'No change';
      }
    }

    // Savings rate
    const savingsRate = summary.income > 0 
      ? Math.round(((summary.income - summary.expenses) / summary.income) * 100)
      : 0;

    // Average transaction
    const avgTransaction = transactions.length > 0
      ? (transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length).toFixed(2)
      : 0;

    return {
      highestSpendingCategory,
      monthComparison,
      monthStatus,
      savingsRate,
      avgTransaction,
    };
  }, [transactions, summary]);

  return (
    <div className="insights-section">
      <h2 className="section-title">Financial Insights</h2>
      <div className="insights-grid">
        <div className="insight-card">
          <div className="insight-title">Highest Spending</div>
          <div className="insight-value">
            {insights.highestSpendingCategory?.category}
          </div>
          <div className="insight-text">
            You spent Rs {insights.highestSpendingCategory?.amount.toFixed(0)} on{' '}
            {insights.highestSpendingCategory?.category.toLowerCase()} this month.
          </div>
        </div>

        <div className="insight-card">
          <div className="insight-title">Monthly Trend</div>
          <div className="insight-value" style={{ fontSize: '1.25rem' }}>
            {insights.monthStatus}
          </div>
          <div className="insight-text">
            {insights.monthComparison}
          </div>
        </div>

        <div className="insight-card">
          <div className="insight-title">Savings Rate</div>
          <div className="insight-value">{insights.savingsRate}%</div>
          <div className="insight-text">
            {insights.savingsRate > 30
              ? 'Great! You are saving well.'
              : insights.savingsRate > 10
              ? 'Good savings rate. Keep it up!'
              : 'Consider increasing your savings.'}
          </div>
        </div>

        <div className="insight-card">
          <div className="insight-title">Average Transaction</div>
          <div className="insight-value">Rs {insights.avgTransaction}</div>
          <div className="insight-text">
            Your typical transaction value across all activities.
          </div>
        </div>
      </div>
    </div>
  );
};

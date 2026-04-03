import React, { useMemo } from 'react';
import { generateCategoryBreakdown, categoryColors } from '../data/mockData.js';
import { useFinance } from '../context/FinanceContext.jsx';

export const SpendingBreakdownChart = () => {
  const { transactions } = useFinance();

  const categoryBreakdown = useMemo(() => {
    return generateCategoryBreakdown(transactions);
  }, [transactions]);

  const totalSpending = categoryBreakdown.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="chart-card">
      <h3 className="chart-title">Spending by Category</h3>
      <div className="pie-chart">
        <div
          className="pie"
          style={{
            background: `conic-gradient(
              ${categoryBreakdown
                .map((item, idx) => {
                  const percentage = (item.amount / totalSpending) * 100;
                  const color = categoryColors[item.category] || '#ccc';
                  const prevPercentage = categoryBreakdown
                    .slice(0, idx)
                    .reduce((sum, i) => sum + (i.amount / totalSpending) * 100, 0);
                  return `${color} ${prevPercentage}% ${prevPercentage + percentage}%`;
                })
                .join(', ')}
            )`,
          }}
        ></div>

        <div className="pie-legend">
          {categoryBreakdown.map((item, idx) => {
            const percentage = Math.round((item.amount / totalSpending) * 100);
            return (
              <div key={idx} className="pie-item">
                <div
                  className="pie-color"
                  style={{ backgroundColor: categoryColors[item.category] || '#ccc' }}
                ></div>
                <span className="pie-category">{item.category}</span>
                <span className="pie-amount">Rs {item.amount.toFixed(0)} ({percentage}%)</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React, { useMemo } from 'react';
import { generateMonthlyData } from '../data/mockData.js';
import { useFinance } from '../context/FinanceContext.jsx';

export const BalanceTrendChart = () => {
  const { transactions } = useFinance();
  
  const monthlyData = useMemo(() => {
    return generateMonthlyData(transactions);
  }, [transactions]);

  const maxValue = Math.max(
    ...monthlyData.map(d => Math.max(d.income, d.expense))
  );

  return (
    <div className="chart-card">
      <h3 className="chart-title">Balance Trend (6 Months)</h3>
      <div className="bar-chart">
        {monthlyData.map((item, idx) => {
          const incomeHeight = (item.income / maxValue) * 100;
          const expenseHeight = (item.expense / maxValue) * 100;
          
          return (
            <div key={idx} className="bar-item">
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', height: '150px' }}>
                <div
                  className="bar"
                  style={{
                    height: `${incomeHeight}%`,
                    background: 'linear-gradient(to top, #10b981, #059669)',
                  }}
                  title={`Income: $${item.income}`}
                ></div>
                <div
                  className="bar"
                  style={{
                    height: `${expenseHeight}%`,
                    background: 'linear-gradient(to top, #ef4444, #dc2626)',
                  }}
                  title={`Expense: $${item.expense}`}
                ></div>
              </div>
              <div className="bar-label">{item.month}</div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '2rem', justifyContent: 'center', fontSize: '0.875rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '2px' }}></div>
          <span>Income</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '12px', height: '12px', background: '#ef4444', borderRadius: '2px' }}></div>
          <span>Expenses</span>
        </div>
      </div>
    </div>
  );
};

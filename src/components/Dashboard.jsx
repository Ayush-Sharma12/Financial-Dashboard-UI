import React from 'react';
import { Header } from './Header.jsx';
import { DashboardOverview } from './DashboardOverview.jsx';
import { BalanceTrendChart } from './BalanceTrendChart.jsx';
import { SpendingBreakdownChart } from './SpendingBreakdownChart.jsx';
import { TransactionsSection } from './TransactionsSection.jsx';
import { InsightsSection } from './InsightsSection.jsx';
import { useFinance } from '../context/FinanceContext.jsx';

export const Dashboard = () => {
  const { darkMode } = useFinance();

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header />

      <div className="container">
        {/* Dashboard Overview - Summary Cards */}
        <DashboardOverview />

        {/* Charts Section - Time-based and Categorical Visualizations */}
        <div className="charts-section">
          <BalanceTrendChart />
          <SpendingBreakdownChart />
        </div>

        {/* Insights Section */}
        <InsightsSection />

        {/* Transactions Section */}
        <TransactionsSection />
      </div>
    </div>
  );
};

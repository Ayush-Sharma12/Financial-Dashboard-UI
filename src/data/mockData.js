// Mock data for the finance dashboard
export const mockTransactions = [
  { id: 1, date: '2026-04-01', amount: 50000, category: 'Salary', type: 'income', description: 'Monthly salary' },
  { id: 2, date: '2026-04-02', amount: 800, category: 'Food', type: 'expense', description: 'Grocery shopping' },
  { id: 3, date: '2026-04-03', amount: 15000, category: 'Rent', type: 'expense', description: 'Monthly rent' },
  { id: 4, date: '2026-04-03', amount: 500, category: 'Entertainment', type: 'expense', description: 'Movie tickets' },
  { id: 5, date: '2026-04-04', amount: 1200, category: 'Utilities', type: 'expense', description: 'Electric bill' },
  { id: 6, date: '2026-04-04', amount: 8000, category: 'Freelance', type: 'income', description: 'Side project payment' },
  { id: 7, date: '2026-04-05', amount: 400, category: 'Transportation', type: 'expense', description: 'Auto fare' },
  { id: 8, date: '2026-04-06', amount: 1500, category: 'Food', type: 'expense', description: 'Restaurant dinner' },
  { id: 9, date: '2026-04-06', amount: 399, category: 'Entertainment', type: 'expense', description: 'Streaming subscription' },
  { id: 10, date: '2026-04-07', amount: 2000, category: 'Healthcare', type: 'expense', description: 'Doctor visit' },
  { id: 11, date: '2026-04-08', amount: 25000, category: 'Bonus', type: 'income', description: 'Performance bonus' },
  { id: 12, date: '2026-04-08', amount: 2500, category: 'Shopping', type: 'expense', description: 'New clothes' },
  { id: 13, date: '2026-04-09', amount: 300, category: 'Food', type: 'expense', description: 'Coffee shop' },
  { id: 14, date: '2026-04-10', amount: 5000, category: 'Investment', type: 'expense', description: 'Stock purchase' },
  { id: 15, date: '2026-04-10', amount: 1000, category: 'Transportation', type: 'expense', description: 'Cab rides' },
];

export const categoryColors = {
  'Salary': '#10b981',
  'Freelance': '#06b6d4',
  'Bonus': '#8b5cf6',
  'Investment': '#f59e0b',
  'Food': '#ec4899',
  'Rent': '#ef4444',
  'Utilities': '#3b82f6',
  'Entertainment': '#f97316',
  'Transportation': '#6366f1',
  'Healthcare': '#14b8a6',
  'Shopping': '#d946ef',
};

export const generateMonthlyData = (transactions) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = months.map(month => ({
    month,
    income: Math.floor(Math.random() * 4000) + 2500,
    expense: Math.floor(Math.random() * 2000) + 1000,
  }));
  return data;
};

export const generateCategoryBreakdown = (transactions) => {
  const breakdown = {};
  
  transactions.forEach(t => {
    if (t.type === 'expense') {
      breakdown[t.category] = (breakdown[t.category] || 0) + t.amount;
    }
  });

  return Object.entries(breakdown)
    .map(([category, amount]) => ({ category, amount }))
    .sort((a, b) => b.amount - a.amount);
};

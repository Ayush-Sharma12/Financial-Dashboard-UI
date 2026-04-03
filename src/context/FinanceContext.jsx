import React, { createContext, useState, useCallback } from 'react';
import { mockTransactions } from '../data/mockData.js';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(mockTransactions);
  const [userRole, setUserRole] = useState('viewer'); // 'viewer' or 'admin'
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date'); // 'date', 'amount', 'category'
  const [sortOrder, setSortOrder] = useState('desc');
  const [darkMode, setDarkMode] = useState(false);

  const addTransaction = useCallback((newTransaction) => {
    if (userRole === 'admin') {
      const transaction = {
        ...newTransaction,
        id: Math.max(...transactions.map(t => t.id), 0) + 1,
      };
      setTransactions([transaction, ...transactions]);
    }
  }, [transactions, userRole]);

  const updateTransaction = useCallback((id, updates) => {
    if (userRole === 'admin') {
      setTransactions(transactions.map(t => (t.id === id ? { ...t, ...updates } : t)));
    }
  }, [transactions, userRole]);

  const deleteTransaction = useCallback((id) => {
    if (userRole === 'admin') {
      setTransactions(transactions.filter(t => t.id !== id));
    }
  }, [transactions, userRole]);

  // Filter and search logic
  const getFilteredTransactions = useCallback(() => {
    let filtered = transactions;

    // Apply category filter
    if (filter !== 'all') {
      filtered = filtered.filter(t => t.category === filter);
    }

    // Apply type filter
    if (filter === 'income') {
      filtered = filtered.filter(t => t.type === 'income');
    } else if (filter === 'expense') {
      filtered = filtered.filter(t => t.type === 'expense');
    }

    // Apply search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(t =>
        t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    const sorted = [...filtered];
    sorted.sort((a, b) => {
      let compareA, compareB;

      switch (sortBy) {
        case 'amount':
          compareA = a.amount;
          compareB = b.amount;
          break;
        case 'category':
          compareA = a.category.toLowerCase();
          compareB = b.category.toLowerCase();
          break;
        case 'date':
        default:
          compareA = new Date(a.date);
          compareB = new Date(b.date);
      }

      if (sortOrder === 'asc') {
        return compareA > compareB ? 1 : compareA < compareB ? -1 : 0;
      } else {
        return compareA < compareB ? 1 : compareA > compareB ? -1 : 0;
      }
    });

    return sorted;
  }, [transactions, filter, searchTerm, sortBy, sortOrder]);

  const getSummary = useCallback(() => {
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    const balance = income - expenses;

    return { income, expenses, balance };
  }, [transactions]);

  const toggleRole = useCallback(() => {
    setUserRole(prev => (prev === 'viewer' ? 'admin' : 'viewer'));
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  const value = {
    transactions,
    userRole,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    darkMode,
    toggleDarkMode,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    getFilteredTransactions,
    getSummary,
    toggleRole,
  };

  return (
    <FinanceContext.Provider value={value}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = React.useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance must be used within FinanceProvider');
  }
  return context;
};

import React, { useState } from 'react';
import { useFinance } from '../context/FinanceContext.jsx';

export const TransactionsSection = () => {
  const {
    getFilteredTransactions,
    searchTerm,
    setSearchTerm,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    userRole,
    addTransaction,
    deleteTransaction,
  } = useFinance();

  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    amount: '',
    category: 'Food',
    type: 'expense',
    description: '',
  });

  const filteredTransactions = getFilteredTransactions();

  const categories = [
    'Salary',
    'Freelance',
    'Bonus',
    'Investment',
    'Food',
    'Rent',
    'Utilities',
    'Entertainment',
    'Transportation',
    'Healthcare',
    'Shopping',
  ];

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.description) {
      alert('Please fill in all fields');
      return;
    }

    addTransaction({
      ...formData,
      amount: parseFloat(formData.amount),
    });

    setFormData({
      date: new Date().toISOString().split('T')[0],
      amount: '',
      category: 'Food',
      type: 'expense',
      description: '',
    });
    setShowAddForm(false);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  const getSortIndicator = (field) => {
    if (sortBy !== field) return '';
    return sortOrder === 'asc' ? ' (asc)' : ' (desc)';
  };

  return (
    <div className="transactions-section">
      <h2 className="section-title">Transactions</h2>

      <div className="transaction-controls">
        <div className="control-group">
          <label className="control-label">Search Transactions</label>
          <input
            type="text"
            placeholder="Search by description or category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="control-group">
          <label className="control-label">Filter by Category</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="income">Income Only</option>
            <option value="expense">Expenses Only</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {userRole === 'admin' && (
          <div className="control-group">
            <label className="control-label">&nbsp;</label>
            <button
              className="btn btn-primary"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? 'Cancel' : 'Add Transaction'}
            </button>
          </div>
        )}
      </div>

      {showAddForm && userRole === 'admin' && (
        <form className="add-transaction-form active" onSubmit={handleAddTransaction}>
          <div className="form-grid">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                placeholder="0.00"
                step="0.01"
                min="0"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                placeholder="Enter description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Add Transaction
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowAddForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {filteredTransactions.length > 0 ? (
        <div className="transaction-list">
          <table className="transaction-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('date')}>
                  Date {getSortIndicator('date')}
                </th>
                <th>Description</th>
                <th onClick={() => handleSort('category')}>
                  Category {getSortIndicator('category')}
                </th>
                <th>Type</th>
                <th onClick={() => handleSort('amount')}>
                  Amount {getSortIndicator('amount')}
                </th>
                {userRole === 'admin' && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{new Date(transaction.date).toLocaleDateString()}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.category}</td>
                  <td>
                    <span className={`transaction-type ${transaction.type}`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`transaction-amount ${
                        transaction.type === 'income' ? 'positive' : 'negative'
                      }`}
                    >
                      {transaction.type === 'income' ? '+' : '-'}
                      {formatAmount(transaction.amount)}
                    </span>
                  </td>
                  {userRole === 'admin' && (
                    <td>
                      <div className="transaction-actions">
                        <button
                          className="action-btn delete"
                          onClick={() => {
                            if (window.confirm('Delete this transaction?')) {
                              deleteTransaction(transaction.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <div className="empty-state-text">No transactions found</div>
        </div>
      )}
    </div>
  );
};

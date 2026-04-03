# Quick Start Guide - Finance Dashboard

## Installation & Setup

### Step 1: Install Dependencies
```bash
npm install
```

This will install all required packages:
- react@^18.2.0
- react-dom@^18.2.0
- react-scripts@5.0.1

### Step 2: Start Development Server
```bash
npm start
```

The app will automatically open at `http://localhost:3000`

### Step 3: Explore the Dashboard
- View summary cards with your financial overview
- Check out the balance trend chart (6-month view)
- See spending breakdown by category
- Browse transactions with filtering and sorting
- Read financial insights
- Try switching roles and toggling dark mode

## Quick Demo Guide

### Viewer Role (Default)
1. View all financial data
2. Use filters and search to find specific transactions
3. Sort transactions by date, amount, or category
4. Toggle dark mode for better viewing experience

### Admin Role
1. Click "Switch Role" to become an admin
2. Click "+ Add Transaction" button
3. Fill in the transaction details:
   - Select a date
   - Enter amount
   - Choose type (Income/Expense)
   - Pick a category
   - Add description
4. Click "Add Transaction" to create it
5. Delete transactions by clicking the "Delete" button

### Available Categories
**Income**: Salary, Freelance, Bonus
**Expenses**: Food, Rent, Utilities, Entertainment, Transportation, Healthcare, Shopping, Investment

## Customization Examples

### Change Dark Mode Colors
Edit `src/styles/App.css` and modify `.app.dark-mode` properties

### Add More Mock Transactions
Edit `src/data/mockData.js` and add to `mockTransactions` array

### Adjust Summary Metrics
Modify `src/components/DashboardOverview.jsx` to show different cards

## Troubleshooting

### Port 3000 already in use
```bash
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Dependencies issue
Try clearing cache and reinstalling:
```bash
rm -rf node_modules
npm cache clean --force
npm install
```

### CSS not loading
Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

## Project Structure Overview

- **components/**: React components for different sections
- **context/**: Global state management
- **data/**: Mock data and utilities
- **styles/**: CSS styling (responsive, dark mode)

## Key Features

✅ Dashboard overview with summary cards
✅ Time-based visualization (balance trend)
✅ Categorical visualization (spending breakdown)
✅ Transaction list with sorting & filtering
✅ Search functionality
✅ Role-based access control
✅ Add/Delete transactions (Admin)
✅ Dark mode toggle
✅ Fully responsive design
✅ Financial insights
✅ Empty state handling

## Development Commands

```bash
# Start development server
npm start

# Build for production
npm build

# Run tests
npm test

# Eject configuration (irreversible)
npm eject
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Transactions are computed dynamically for efficiency
- Sorting and filtering are optimized with memoization
- CSS uses efficient selectors for fast rendering
- Dark mode is toggleable without page reload

Enjoy exploring the Finance Dashboard! 💰

# Finance Dashboard UI

A clean, interactive finance dashboard built with React.js that allows users to track and understand their financial activity. This project demonstrates frontend development fundamentals including component design, state management, responsive UI, and user interactions.

## 🎯 Features

### Core Features
- **Dashboard Overview**: Summary cards showing total balance, income, and expenses
- **Time-Based Visualization**: 6-month balance trend chart displaying income vs expenses over time
- **Categorical Visualization**: Spending breakdown pie chart showing expense distribution by category
- **Transactions Section**: Complete transaction list with filtering, sorting, and search capabilities
- **Financial Insights**: Key metrics including highest spending category, monthly trends, savings rate, and average transaction
- **Role-Based UI**: 
  - **Viewer**: Can only view financial data
  - **Admin**: Can view data and add/delete transactions
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing

### Additional Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Advanced Filtering**: Filter transactions by type (income/expense) or category
- **Smart Sorting**: Sort transactions by date, amount, or category in ascending/descending order
- **Search Functionality**: Search transactions by description or category
- **Add Transactions** (Admin only): Form to add new transactions with full details
- **Delete Transactions** (Admin only): Remove transactions with confirmation
- **Empty State Handling**: Graceful handling when no transactions match filters
- **Intuitive UX**: Hover effects, visual feedback, and smooth transitions

## 🛠️ Tech Stack

- **Framework**: React.js 18.2.0
- **State Management**: React Context API (no external libraries)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Runtime**: Node.js with npm

## 📁 Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx           # Main dashboard layout
│   ├── Header.jsx              # Header with role selector and dark mode toggle
│   ├── DashboardOverview.jsx   # Summary cards component
│   ├── BalanceTrendChart.jsx   # Time-based bar chart visualization
│   ├── SpendingBreakdownChart.jsx # Pie chart for category breakdown
│   ├── TransactionsSection.jsx # Transactions table with controls
│   └── InsightsSection.jsx     # Financial insights cards
├── context/
│   └── FinanceContext.jsx      # Global state management with Context API
├── data/
│   └── mockData.js             # Mock transaction data and utilities
├── styles/
│   └── App.css                 # All styling (responsive, dark mode)
├── App.jsx                     # Main App component
└── index.js                    # Entry point

public/
└── index.html                  # HTML template

package.json                    # Project dependencies and scripts
README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd Frontend\ Test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

### Build for Production
```bash
npm build
```

## 🎮 How to Use

### Viewing Data
1. **Dashboard Overview**: See your financial summary on the main dashboard with total balance, income, and expenses
2. **Charts**: View your spending trends across 6 months and category breakdown
3. **Transactions**: Browse all transactions with details including date, description, category, type, and amount
4. **Insights**: Get automatic insights about your spending patterns

### Filtering & Searching
- **Search**: Type in the search box to find transactions by description or category
- **Category Filter**: Select a category from the dropdown to view specific transactions
- **Type Filter**: Choose "Income Only" or "Expenses Only" to see specific transaction types

### Sorting
- Click on table headers (Date, Category, Amount) to sort transactions
- Click again to reverse sort order
- Visual indicators (↑↓↕️) show current sort state

### Managing Transactions (Admin Only)
1. **Switch Role**: Click "Switch Role" to become an admin
2. **Add Transaction**: Click "+ Add Transaction" button to open the form
3. **Fill Details**: Enter date, amount, type, category, and description
4. **Submit**: Click "Add Transaction" to create it
5. **Delete**: Click "Delete" button on any transaction to remove it

### Customizing Theme
- Click the moon/sun icon in the header to toggle dark mode
- Your preference is maintained during your session

## 🎨 Design Decisions

### Component Architecture
- **Functional Components**: All components are functional with React hooks
- **Single Responsibility**: Each component handles one specific feature
- **Reusable Context**: Global state management using Context API keeps code clean and maintainable
- **Separation of Concerns**: Data logic separated into `mockData.js`, UI in components, styling in `App.css`

### State Management
- **Context API**: Chosen for simplicity without external library dependencies
- **Custom Hook**: `useFinance()` provides easy access to global state throughout the app
- **Computed Values**: Filters, sorting, and summaries are computed dynamically

### Styling Approach
- **Utility-First**: CSS is organized by component and feature
- **CSS Variables Ready**: Structure supports easy theme customization
- **Mobile-First**: Responsive breakpoints at 768px and 480px
- **Accessibility**: Good color contrast, readable fonts, intuitive interactions

### Data Handling
- **Mock Data**: 15 realistic transactions with various categories
- **Dynamic Calculations**: Income, expenses, and insights calculated from transaction data
- **Realistic Values**: Currency formatting, date handling, and percentages

## 📊 Mock Data

The dashboard includes 15 sample transactions across different categories:
- **Income**: Salary, Freelance, Bonus
- **Expenses**: Food, Rent, Utilities, Entertainment, Transportation, Healthcare, Shopping, Investment

Categories are color-coded for easy visual identification in charts.

## 🎯 Approach & Considerations

### Why Context API?
- No external state management library needed
- Perfect for moderate state complexity
- Easy to understand and maintain for interview evaluation
- Sufficient for the feature scope

### Why Custom CSS?
- Shows understanding of CSS fundamentals
- Responsive design without framework dependencies
- Full control over styling and animations
- Demonstrates CSS Grid and Flexbox mastery

### Why This Component Structure?
- Easy to test and modify individually
- Clear separation between concerns
- Follows React best practices
- Scalable for future features

### User Experience Considerations
- **Role-Based Access**: Different UI shown based on user role
- **Visual Feedback**: Hover effects, button states, smooth transitions
- **Error Prevention**: Confirmation dialogs before deletion, form validation
- **Accessibility**: Semantic HTML, good color contrast, readable fonts
- **Performance**: Computed values memoized, efficient re-renders

## 🔧 Customization

### Adding New Categories
Edit `src/data/mockData.js` and add to `categoryColors` object:
```javascript
export const categoryColors = {
  'YourCategory': '#yourColor',
  // ... existing colors
};
```

### Changing Mock Data
Modify `src/data/mockData.js` to add, remove, or adjust sample transactions.

### Styling Customization
All CSS is in `src/styles/App.css`. Color scheme, spacing, and fonts can be easily adjusted.

### Adding Persistence
Wrap transaction state in localStorage to persist data across sessions:
```javascript
// In FinanceContext.jsx
const [transactions, setTransactions] = useState(() => {
  const saved = localStorage.getItem('transactions');
  return saved ? JSON.parse(saved) : mockTransactions;
});

useEffect(() => {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}, [transactions]);
```

## 🚀 Potential Enhancements

- ✅ Data persistence using localStorage
- ✅ Export functionality (CSV/PDF)
- ✅ Advanced filtering and grouping
- ✅ Budget tracking and alerts
- ✅ Recurring transactions
- ✅ Multi-currency support
- ✅ Custom date ranges for analytics
- ✅ Detailed transaction editing (not just delete)
- ✅ Receipt/document attachment
- ✅ Backend API integration

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with 4-column summary grid
- **Tablet** (max-width: 768px): Adjusted grid layouts and reduced font sizes
- **Mobile** (max-width: 480px): Single-column layout, compact headers, simplified spacing

## 🎓 What This Project Demonstrates

1. **React Fundamentals**: Components, hooks, Context API
2. **State Management**: Complex state handling and updates
3. **UI/UX Design**: Intuitive interfaces and visual hierarchy
4. **CSS Skills**: Responsive design, animations, dark mode
5. **Problem Solving**: Filtering, sorting, searching implementations
6. **Code Organization**: Modular structure, clean separation of concerns
7. **Attention to Detail**: Edge cases, loading states, error handling
8. **Documentation**: Clear code comments and comprehensive README

## ⚠️ Note

This is a frontend-only implementation with mock data. For production use, integrate with a backend API:
- Replace mock data with actual API calls
- Implement proper authentication
- Add data validation on both client and server
- Use environment variables for API endpoints
- Add error handling and logging
- Implement real database persistence

## 📝 License

This project is open source and available for educational and evaluation purposes.

---

**Built with ❤️ to demonstrate clean React development practices**

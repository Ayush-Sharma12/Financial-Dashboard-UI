# Finance Dashboard - Feature Walkthrough

## 📺 Visual Feature Overview

### Homepage Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  💰 Finance Dashboard    |  [VIEWER ▼]  [Switch Role]  🌙      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ 💵          │  │ 📈          │  │ 📉          │  │ 📊          │
│ Total Bal.  │  │ Total Inc.  │  │ Total Exp.  │  │ Transac.    │
│ $3,642.99   │  │ +$6,500.00  │  │ -$2,857.01  │  │ 42          │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘

┌────────────────────────────┐  ┌────────────────────────────┐
│ Balance Trend (6 Months)   │  │ Spending by Category       │
│                            │  │                            │
│  📊  |    |  📊  |  📊  |  │  │      ◯ (Pie Chart)        │
│  📊  |📊  |  📊  |  📊  |  │  │  Legend:                   │
│                            │  │  ■ Food: $230 (18%)       │
│ Jan Feb Mar Apr May Jun    │  │  ■ Rent: $1200 (47%)      │
│ Income (Green)             │  │  ■ Utilities: $120 (5%)   │
│ Expense (Red)              │  │  ■ Entertainment: $150 (6%)│
└────────────────────────────┘  └────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ Financial Insights                                             │
├──────────────┬──────────────┬──────────────┬──────────────────┤
│ 🎯 Highest   │ 📊 Monthly   │ 💰 Savings   │ 🔢 Avg Trans.   │
│ Rent         │ Down $50     │ Rate: 56%    │ $184.35          │
│ $1200        │              │              │                  │
└──────────────┴──────────────┴──────────────┴──────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ Transactions                                                   │
├──────────┬──────────────┬────────────┬──────┬──────────┬──────┤
│D ↓ Date  │Desc. ↕       │Cat. ↕      │Type  │Amt ↓    │      │
├──────────┼──────────────┼────────────┼──────┼──────────┼──────┤
│04/10/26  │Stock purch.  │Investment  │Ex   │ -$800.00│      │
│04/10/26  │Uber rides    │Transport   │ Ex   │ -$100.00│      │
│04/09/26  │Coffee        │Food        │ Ex   │  -$45.00│      │
│... (more rows)                                               │
└────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Feature Breakdown

### 1. **Dashboard Overview Cards**
Shows at-a-glance financial summary:
- **💵 Total Balance**: Current balance (green if positive, red if negative)
- **📈 Total Income**: All income transactions (always green)
- **📉 Total Expenses**: All expenses (always red)
- **📊 Transactions**: Count of all transactions

**Calculation**: Balance = Total Income - Total Expenses

---

### 2. **Balance Trend Chart** 📊
Time-based visualization showing last 6 months:
- **Green bars**: Monthly income
- **Red bars**: Monthly expenses
- **Hover**: Shows exact amounts
- **Purpose**: Identify spending trends over time

**What it shows**:
```
Income vs Expense over 6 months
Jan: Inc=$3000, Exp=$1500
Feb: Inc=$2500, Exp=$1200
Mar: Inc=$4000, Exp=$2100
Apr: Inc=$2800, Exp=$1800
May: Inc=$3200, Exp=$1600
Jun: Inc=$2900, Exp=$1400
```

---

### 3. **Spending Breakdown Chart** 🥧
Categorical visualization showing expense distribution:
- **Pie Chart**: Color-coded by category
- **Legend**: Each category with percentage
- **Colors**: Unique color for each expense category
- **Purpose**: Understand which categories consume most money

**Example**:
```
Rent: 42% ($1200) - Purple
Food: 18% ($515) - Pink
Entertainment: 10% ($285) - Orange
Utilities: 8% ($230) - Blue
etc.
```

---

### 4. **Transactions Table** 📋
Comprehensive transaction list with:

| Feature | Description |
|---------|-------------|
| **Date Column** | Transaction date (sortable) |
| **Description** | What the transaction was for |
| **Category** | Expense/income category (sortable) |
| **Type Badge** | Visual indicator (green=income, red=expense) |
| **Amount** | Transaction value (sortable, shows +/- sign) |
| **Actions** | Delete button (admin only) |

**Sorting**: Click headers to sort by date, amount, or category
- First click: Descending order
- Second click: Ascending order
- Visual indicator: ↑ (asc) / ↓ (desc) / ↕️ (unsorted)

---

### 5. **Search & Filter Controls** 🔍
Multiple ways to find transactions:

```
┌─────────────────────┐
│ Search              │
│ [Search text...  ] ← Find by description or category
└─────────────────────┘

┌─────────────────────┐
│ Filter by Category  │
│ [All Categories ▼]  ← View all, income only, expense only, or specific category
└─────────────────────┘

┌─────────────────────┐
│ Add Transaction     │
│ [+ Add Trans. Btn]  ← ADMIN ONLY: Click to show form
└─────────────────────┘
```

**Search Example**: Type "rent" in search → shows all rent-related transactions

**Filter Example**: Select "Food" → shows only food transactions

**Combined**: Search "dinner" + Filter "Food" → shows food transactions with "dinner" in description

---

### 6. **Add Transaction Form** (Admin Only) ✏️

When admin clicks "+ Add Transaction":

```
Date:        [04/11/2026        ]
Amount:      [120.50            ]
Type:        [Expense ▼]
Category:    [Food ▼]
Description: [Grocery shopping   ]

[Add Transaction] [Cancel]
```

**Validation**: Both amount and description are required

**On Submit**: Transaction added to top of list

---

### 7. **Financial Insights Cards** 💡

Four insight cards showing:

1. **🎯 Highest Spending Category**
   - Shows: Which category you spend most on
   - Amount: Total spent in that category
   - Example: "Rent - $1,200 spent"

2. **📊 Monthly Trend**
   - Shows: How expenses changed this month
   - Direction: Up, Down, or No Change
   - Amount: Exact difference from last month
   - Example: "↓ Down by $150"

3. **💰 Savings Rate**
   - Shows: Percentage of income saved
   - Formula: ((Income - Expenses) / Income) × 100
   - Comment: Different feedback based on rate
   - Example: "56% - Great! You are saving well"

4. **🔢 Average Transaction**
   - Shows: Typical transaction value
   - Formula: Total of all amounts / count
   - Example: "$184.35 - Your typical transaction value"

---

### 8. **Role-Based Access Control** 👤

**VIEWER Role** (Default)
- ✅ View all financial data
- ✅ Search and filter transactions
- ✅ Sort transactions
- ✅ View charts and insights
- ❌ Cannot add transactions
- ❌ Cannot delete transactions

**ADMIN Role**
- ✅ Everything viewer can do
- ✅ Add new transactions via form
- ✅ Delete existing transactions
- ✅ Edit transaction amounts and details

**Switching Roles**: Click "Switch Role" button in header
- Visual indicator: Badge showing current role
- ADMIN badge is purple, VIEWER badge is blue

---

### 9. **Dark Mode Toggle** 🌙

Click the sun/moon icon in top right:

**Light Mode** ☀️
- White backgrounds
- Dark text (for clarity)
- Light gray accents
- Good for bright environments

**Dark Mode** 🌙
- Dark backgrounds (#0f172a)
- Light text
- Reduced eye strain
- Good for evening viewing

**Persistence**: Preference maintained during session

---

### 10. **Responsive Design** 📱

**Desktop (> 768px)**
```
┌────────────────────────────────────────────┐
│ Summary Cards (4 columns)                  │
├───────────────────┬───────────────────┐
│ Chart 1           │ Chart 2           │
├───────────────────┴───────────────────┤
│ Insights (4 columns)                  │
├───────────────────────────────────────┤
│ Transactions (Full width)             │
└───────────────────────────────────────┘
```

**Tablet (< 768px)**
```
┌──────────────────────┐
│ Summary Cards (1-2)  │
├─────────┬────────────┤
│ Chart 1 │ Chart 2    │
├────────────────────┤
│ Insights           │
├────────────────────┤
│ Transactions       │
└────────────────────┘
```

**Mobile (< 480px)**
```
┌──────────────┐
│ Summary (1)  │
├──────────────┤
│ Chart 1      │
├──────────────┤
│ Chart 2      │
├──────────────┤
│ Insights     │
├──────────────┤
│ Transactions │
└──────────────┘
```

---

## 🎮 Common Tasks

### Task 1: View my financial summary
1. Open dashboard (homepage)
2. Look at the 4 summary cards at top
3. See: Balance, Income, Expenses, Transaction Count

### Task 2: Find all food expenses
1. Located "Filter by Category" dropdown
2. Select "Food"
3. Table filters to show only food transactions
4. Total automatically recalculates

### Task 3: Add a new transaction (Admin only)
1. Switch to Admin role (click "Switch Role")
2. Click "+ Add Transaction" button
3. Fill in the form:
   - Date: 04/11/2026
   - Amount: 45.99
   - Type: Expense
   - Category: Food
   - Description: Lunch with coworkers
4. Click "Add Transaction"
5. Transaction appears at top of table

### Task 4: Delete a transaction (Admin only)
1. Find the transaction in the table
2. Click "Delete" button in Actions column
3. Confirm deletion when prompted
4. Transaction is removed immediately

### Task 5: Search for specific transaction
1. Go to search box
2. Type "rent" or any description
3. Table filters to matching results
4. Results update in real-time as you type

### Task 6: Toggle between light and dark mode
1. Click moon/sun icon in top-right corner
2. Page theme changes instantly
3. All colors adjust automatically

### Task 7: Sort transactions by amount (highest first)
1. Click "Amount" column header
2. Click again to reverse order
3. Look for visual indicator (↑↓)

---

## 📊 Data Examples

### Sample Transaction Data
```
ID 1  | 04/01  | Salary           | Salary    | Income | $2,500.00
ID 2  | 04/02  | Grocery shoping  | Food      | Expense| -$45.00
ID 3  | 04/03  | Monthly rent     | Rent      | Expense| -$1,200.00
ID 4  | 04/03  | Movie tickets    | Entertainment | Expense | -$89.99
ID 5  | 04/04  | Electric bill    | Utilities | Expense| -$120.00
...and more
```

### All Available Categories
**Income**: Salary, Freelance, Bonus
**Expenses**: Food, Rent, Utilities, Entertainment, Transportation, Healthcare, Shopping, Investment

---

## 🎨 Color Scheme

| Element | Color | Meaning |
|---------|-------|---------|
| Income (Card) | Green (#10b981) | Positive money in |
| Expenses (Card) | Red (#ef4444) | Money out |
| Balance (Positive) | Green | Higher balance |
| Balance (Negative) | Red | Lower balance |
| Admin Badge | Purple | Admin role |
| Viewer Badge | Blue | Viewer role |
| Type: Income Badge | Light Green | Income transaction |
| Type: Expense Badge | Light Red | Expense transaction |

---

## 💾 Technical Details

### State Management
Using React Context API - all state stored in `FinanceContext`:
- `transactions`: Array of transaction objects
- `userRole`: "viewer" or "admin"
- `filter`: Current category filter
- `searchTerm`: Current search text
- `sortBy`: Sort column (date/amount/category)
- `sortOrder`: Sort direction (asc/desc)
- `darkMode`: Boolean for theme

### Performance Features
- **Memoization**: Expensive calculations cached
- **Efficient Updates**: Only affected components re-render
- **Optimized Filters**: Uses JavaScript array methods efficiently

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 🔍 Troubleshooting UI Issues

| Issue | Solution |
|-------|----------|
| Styles not showing | Hard refresh: Ctrl+Shift+R |
| + Add button not showing | Switch to Admin role first |
| Search not working | Check spelling, try partial matches |
| Sorting wrong order | Click header twice to reverse |
| Charts not displaying | Same as styles - hard refresh |
| Dark mode not changing | Check if JavaScript is enabled |

---

This walkthrough covers all features. Start exploring! 🚀

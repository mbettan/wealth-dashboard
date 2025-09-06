# Wealth Dashboard for Google Sheets

A sophisticated financial tracking dashboard that integrates seamlessly with Google Sheets to provide real-time visualization of your wealth metrics, asset allocation, and progress toward financial independence.

**Author:** Michael Bettan

## Overview

This dashboard transforms your financial data from a Google Sheets spreadsheet into an interactive, visually appealing dashboard with key performance indicators, asset allocation charts, and financial independence tracking metrics.

## Features

- **Real-time Data Sync**: Automatically pulls data from your Google Sheets
- **Key Metrics Dashboard**: Track total net worth, invested capital, and FI progress
- **Interactive Asset Allocation**: Visual sunburst chart showing portfolio distribution
- **Risk Analysis**: Monitor concentration risk and liquidity metrics
- **Financial Independence Tracking**: Calculate and track your FI number and progress
- **Responsive Design**: Works seamlessly as a sidebar or standalone web app
- **Professional UI**: Modern, dark-themed interface with smooth animations

## Installation Instructions

### Step 1: Prepare Your Google Sheet

1. Create a new Google Sheet or open an existing one
2. Create a sheet named **"0. Dashboard"** (exact name required)
3. Set up your data in the following format:

| Column A (Metric) | Column B ($ Value) |
|-------------------|-------------------|
| Total net worth with Primary Residence | $425,000 |
| Invested Net Worth | $350,000 |
| Liquid Net Worth | $275,000 |
| | |
| Cash | $25,000 |
| Financial Markets | $275,000 |
| Real Estate | $35,000 |
| Alternatives | $15,000 |
| | |
| Concentrated Google Position | $45,000 |
| Retirement | $125,000 |
| Invested Taxable accounts | $150,000 |
| Taxable Account / Stocks | $100,000 |
| Taxable Account / Bonds | $50,000 |
| | |
| Emergency funds (Idle cash) | $15,000 |
| Real Estate Syndication | $20,000 |
| Primary Residence | $75,000 |
| Liquidity / Runway (months) | 8 |
| Illiquid Assets | $75,000 |

**Optional rows for full functionality:**
- Annual Passive Income (e.g., $12,250)
- Annual Expenses (e.g., $48,000)
- Annual Gross Income (e.g., $95,000)
- Age (e.g., 35)

### Step 2: Install the Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Create two files:
   - `Code.gs` (this should already exist)
   - `Index.html` (click the **+** button → **HTML**)

4. Copy the entire contents of `Code.gs` from this repository into the Apps Script `Code.gs` file
5. Copy the entire contents of `Index.html` from this repository into the Apps Script `Index.html` file

### Step 3: Save and Deploy

1. Click the **Save** button (disk icon) in the Apps Script editor
2. Name your project (e.g., "Wealth Dashboard")
3. Close the Apps Script editor and return to your spreadsheet

### Step 4: Launch the Dashboard

After installation, you have three ways to access the dashboard:

#### Option 1: Sidebar (Recommended)
1. Refresh your Google Sheet
2. You'll see a new menu item: **🚀 Dashboard**
3. Click **🚀 Dashboard** → **Show Dashboard**
4. The dashboard will open in a sidebar on the right

#### Option 2: Modal Dialog
1. In the Apps Script editor, select the `showModal` function
2. Click **Run**
3. The dashboard will open as a modal dialog

#### Option 3: Web App (Advanced)
1. In Apps Script, click **Deploy** → **New Deployment**
2. Choose **Web app** as the type
3. Set execute as **Me** and access to **Anyone** (or as needed)
4. Deploy and copy the web app URL
5. Access the dashboard via the provided URL

## Data Format Requirements

### Currency Values
- Enter values with or without dollar signs
- Commas are optional
- Examples: `$1,234,567` or `1234567`

### Percentage/Numeric Values
- Enter as plain numbers
- Example: For liquidity runway, enter `12` for 12 months

## Customization

### Modifying Metrics
The dashboard looks for specific metric names in Column A. To customize:

1. Open `Index.html` in the Apps Script editor
2. Find the `DATA_CONFIG` object (around line 290)
3. Modify the metric names to match your spreadsheet

Example:
```javascript
const DATA_CONFIG = {
    totalNetWorth: 'Total net worth with Primary Residence',
    investedNetWorth: 'Invested Net Worth',
    // Add or modify as needed
};
```

### Adjusting Benchmarks
You can customize target ranges and thresholds:

1. Find the `BENCHMARKS` object in `Index.html`
2. Adjust values to match your financial goals

Example:
```javascript
const BENCHMARKS = {
    liquidityRunway: { low: 12, high: 24 }, // Months
    savingsRate: { strong: 30, excellent: 50 }, // Percentage
    // Modify as needed
};
```

## Troubleshooting

### Dashboard Not Loading
- Ensure the sheet is named exactly **"0. Dashboard"**
- Check that Column A contains the metric names
- Verify Column B contains the corresponding values
- Try refreshing the spreadsheet

### Permission Issues
- On first run, you'll need to authorize the script
- Click **Review Permissions** and follow the prompts
- Choose your Google account and allow access

### Data Not Updating
- Make sure you're editing the correct sheet
- Values should be in Column B
- Save your spreadsheet changes before opening the dashboard

## Features Explained

### Key Metrics
- **Total Net Worth**: Complete household balance sheet
- **Invested Net Worth**: Capital actively generating returns
- **FI Progress**: Progress toward financial independence
- **Passive Income Coverage**: How much of expenses are covered
- **Liquidity Runway**: Months of expenses covered by liquid assets
- **Savings Rate**: Percentage of income being saved

### Asset Allocation
Visual breakdown of your invested portfolio across:
- Cash reserves
- Financial markets (stocks, bonds, ETFs)
- Real estate investments
- Alternative investments

### Risk Metrics
- **Invested NW Ratio**: Capital efficiency metric
- **Single Stock Concentration**: Risk from individual positions
- **Illiquid Assets %**: Balance sheet flexibility

### FI Journey
- **FI Number**: Target for financial independence (3% SWR)
- **Portfolio Yield**: Annual income from investments
- **Years to FI**: Projected timeline (when data available)

## Security & Privacy

- All data stays within your Google account
- No external servers or databases involved
- Script only accesses the current spreadsheet
- Uses Google's built-in security infrastructure

## Support

For issues or questions about this dashboard, please ensure:
1. Your spreadsheet format matches the requirements
2. All required metrics are present
3. The Apps Script files are properly installed

## License

This project is provided as-is for personal financial tracking use.

## Acknowledgments

Built with Google Apps Script, LLM, HTML5, CSS3, and JavaScript. Uses Font Awesome for icons.

---

*Track your wealth, visualize your progress, achieve financial independence.*

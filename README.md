# Wallet App

A demo modern React-based wallet application for managing and viewing transaction history, built with TypeScript and Vite.

## Features

- **Transaction Management**: View detailed list of transactions with filtering and search capabilities
- **Transaction Details**: Drill down into individual transaction information
- **Card Balance Tracking**: Monitor card balances and payment due dates
- **Daily Points System**: Track daily points accumulation
- **Cashback Tracking**: View cashback percentages on eligible transactions
- **Multi-Card Support**: Support for different card types (Apple, IKEA, Target, Amazon, etc.)
- **Responsive Design**: Optimized for both desktop and mobile experiences

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS modules with modern CSS features
- **Data**: JSON-based transaction data (easily replaceable with API integration)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd wallet-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CardBalanceBlock.tsx
│   ├── DailyPointsBlock.tsx
│   ├── NoPaymentDueCard.tsx
│   ├── TransactionIcon.tsx
│   └── TransactionItem.tsx
├── screens/            # Main application screens
│   ├── TransactionDetail.tsx
│   └── TransactionsList.tsx
├── data/               # Static data files
│   └── transactions.json
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── dateUtils.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Data Structure

The application uses a JSON-based data structure for transactions. Each transaction includes:

- Unique ID and descriptive information
- Transaction type (Payment/Credit)
- Amount and cashback details
- Date and status
- Associated card type and icon
- Authorized user information (when applicable)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Future Enhancements

- API integration for real-time data
- User authentication and account management
- Advanced filtering and search capabilities
- Export functionality for transaction history
- Push notifications for transaction updates
- Multi-currency support

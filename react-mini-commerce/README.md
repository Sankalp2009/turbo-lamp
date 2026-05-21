# 🛒 React Mini Commerce App

A modern, high-performance, and feature-rich E-Commerce Web Application built using **React 19**, **Vite**, and **React Router DOM v7**. The application demonstrates a robust client-side architecture featuring secure authentication, dynamic data fetching from a mock REST API, private routing (route guarding), and a complete global state management system powered by **React Context** and **useReducer** (Flux/Redux-like architecture).

---

## 🌟 Key Features

*   **🔒 Secure User Authentication**:
    *   Integrates with a remote auth server (`https://dummyjson.com/auth/login`) to validate credentials.
    *   Authenticates users, retrieves a secure JWT access token, and updates global authentication status.
    *   Responsive login form UI with seamless validation, load-states, and automatic route redirection.
*   **🛡️ Protected Routing & Route Guarding**:
    *   Client-side routing wrapper (`PrivateRoute`) to protect unauthorized access to crucial sections like the Dashboard and the Cart.
    *   Restricts unauthorized users and automatically redirects them to the login screen.
*   **📦 Dynamic Product Dashboard**:
    *   Queries a local REST database via `json-server` for a realistic mock-backend experience.
    *   Features a responsive, beautiful responsive layout showcasing product grids with cards, price details, and visual assets.
*   **🔍 Detailed Single Product Viewer**:
    *   Dynamic route parsing via `react-router-dom` params (`/single/:id`) to retrieve detailed product information on the fly.
    *   Displays high-resolution product thumbnails, detailed descriptions, and localized currency pricing.
*   **🛒 Interactive Shopping Cart System**:
    *   Add items to the cart directly from the dashboard card.
    *   View added items in a dedicated Cart section with high-quality thumbnails.
    *   Interactive trash component (using `lucide-react`) allowing immediate deletion from cart context.
    *   Global navbar notification badge displaying the live total quantity of items in the cart at any given moment.
*   **🌐 Modular Global State System**:
    *   Clean segregation of concerns with three independent React Context Providers.
    *   Eliminates prop-drilling entirely by allowing components to hook into state dispatchers directly.

---

## 🛠️ Tech Stack & Dependencies

| Tool / Library | Purpose / Role | Version |
| :--- | :--- | :--- |
| **React** | Library for building modular declarative User Interfaces | `^19.2.6` |
| **Vite** | Fast, modern frontend build tool and dev server | `^8.0.12` |
| **React Router DOM** | Declarative client-side navigation and routing | `^7.15.1` |
| **Axios** | Promise-based HTTP client for API requests | `^1.16.1` |
| **JSON Server** | Local full mock REST API engine | `^1.0.0-beta.15` |
| **Lucide React** | Premium quality, clean icons | `^1.16.0` |

---

## 📂 Project Architecture & Directory Structure

The application's directory structure follows standard production-ready patterns, segregating components, state contexts, routers, and helper utilities.

```text
react-mini-commerce/
├── db.json                 # Mock database containing products & metadata
├── index.html              # Entry HTML template
├── package.json            # Configuration and packages manifest
├── vite.config.js          # Vite configurations
└── src/
    ├── main.jsx            # Application bootstrap and Context Provider nesting
    ├── App.jsx             # Root layout including Global Header and Routes
    ├── index.css           # Core styling framework & variables
    ├── App.css             # Page-specific responsive layout styling
    ├── Components/         # Reusable UI Blocks
    │   ├── Header.jsx      # Navigation header with Auth links and live Cart count
    │   ├── ProductCard.jsx # Interactive dashboard card representing a product
    │   ├── ProductData.jsx # Grid wrapper mapping lists of ProductCards
    │   └── CartPage.jsx    # Row-item template for cart screen with delete hook
    ├── Context/            # Core State Context Providers
    │   ├── AuthContext.jsx # Authentication state provider
    │   ├── DataContext.jsx # Products listing and catalog state provider
    │   └── CartContext.jsx # Selected cart items provider
    ├── Pages/              # Full-screen Route Views
    │   ├── Home.jsx        # Landing page featuring navigation entrypoints
    │   ├── About.jsx       # About us metadata view
    │   ├── Login.jsx       # Auth login card with Axios request handle
    │   ├── Dashboard.jsx   # Secured main product listing dashboard
    │   ├── Single.jsx      # Detailed single product explorer
    │   ├── Cart.jsx        # Secured shopping cart view
    │   └── PageNotFound.jsx# Fallback page for unmatched routes (404)
    └── Utils/              # Custom Reducers & Action creators
        ├── ActionCreators.jsx# Unified action-type constant bindings
        ├── Auth_Reducer.jsx# State reducer controlling login requests & status
        ├── Data_Reducer.jsx# State reducer managing products fetch lifecycle
        ├── Cart_Reducer.jsx# State reducer controlling cart adds & deletes
        ├── AllRoutes.jsx   # Core Route configuration setup (Public & Private)
        └── PrivateRoute.jsx# Route wrapper validating AuthContext before render
```

---

## 🧠 Concepts & Practices Learned

### 1. Unified State Reducer Pattern (`useReducer` & `useContext`)
Rather than relying on fragmented `useState` hooks, the app adopts a clean, predictable state machine structure using the **Reducer pattern** (resembling Redux architecture). 
*   **State Reducers**: `AuthReducer`, `DataReducer`, and `CartReducer` handle mutations based on explicit action types.
*   **Predictable Updates**: By utilizing action types (`GET_REQUEST`, `GET_SUCCESS`, `GET_FAILURE`), code readability is enhanced and side effects are easily isolated.

### 2. Multi-Context Provider Nesting
Learned how to design a scalable global state structure by chaining context providers cleanly in `main.jsx` without causing unnecessary renders across unrelated scopes:
```jsx
<BrowserRouter>
  <AppContextProvider> {/* Auth State */}
    <DataContextProvider> {/* Products Catalog State */}
      <CartContextProvider> {/* Active Cart State */}
        <App />
      </CartContextProvider>
    </DataContextProvider>
  </AppContextProvider>
</BrowserRouter>
```

### 3. Route Guarding & Protected Routes in React Router DOM
Built a reusable route protector (`PrivateRoute`) that verifies the user's login state inside `AuthContext`.
```jsx
function PrivateRoute({ children }) {
  const { state } = useContext(AuthContext)
  
  if (!state.isAuth && !state.token)
    return <Navigate to="/login" replace={true} />
    
  return children
}
```
This protects pages like `/dashboard` and `/cart` from unauthenticated users, replacing their history entry with `/login` dynamically.

### 4. API Request Lifecycles & Async Handling
Mastered the integration of asynchronous requests using **Axios** and tracking full load/fail states via the state reducer:
1.  **Request Start**: Dispatch `GET_REQUEST` / `LOGIN_REQUEST` (triggers UI loading spinners).
2.  **Request Success**: Dispatch data payloads to update store state and toggle loading flags.
3.  **Request Error**: Capture errors inside `try/catch` and dispatch `GET_FAILURE` or `LOGIN_FAILURE` blocks to notify the user.

### 5. Mock REST Database Management with JSON-Server
Gained hands-on experience setting up a real local mock database utilizing a JSON file (`db.json`) and spinning up a local REST API endpoint to enable real-world HTTP operations like `GET` product lists or specific product records.

---

## 🚀 Setting Up & Running the Application Locally

Follow these steps to run the complete local environment, including the database and the frontend client.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Step 1: Install Dependencies
Open your terminal in the project directory and install the necessary npm packages:
```bash
npm install
```

### Step 2: Start the Mock Database Server
To serve the products from the local mock API database, run the `json-server` script defined in the project:
```bash
npm run start
```
This starts the local mock database server at `http://localhost:3000`.

### Step 3: Start the Vite Dev Server
In a separate terminal tab or window, spin up the Vite development server for the frontend react application:
```bash
npm run dev
```
This serves the application on a local port (typically `http://localhost:5173`).

---

## 🔐 Credentials for Demo Login
When logging in on the `/login` page, you can use any valid username and password combo from [DummyJSON's Test Accounts](https://dummyjson.com/users) to test successful auth state integration:
*   **Username**: `emilys` (or any valid dummyjson username)
*   **Password**: `emilyspass`

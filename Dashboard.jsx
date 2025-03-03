// // src/Dashboard.jsx
// import React, { useState } from "react";
// import "./Dashboard.css";

// const Dashboard = ({ onNavigate }) => {
//   const [frequency, setFrequency] = useState("Best Week");
//   const [type, setType] = useState("All");

//   const handleLogout = () => {
//     // Handle logout logic here
//     console.log("User logged out");
//     onNavigate("login"); // Navigate back to the login page
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Header with Logout Button */}
//       <header className="dashboard-header">
//         <h1>Expense Management System</h1>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </header>

//       {/* Filters Section */}
//       <div className="filters-section">
//         <div className="filter-group">
//           <label htmlFor="frequency">Select Frequency</label>
//           <select
//             id="frequency"
//             value={frequency}
//             onChange={(e) => setFrequency(e.target.value)}
//           >
//             <option value="Best Week">Best Week</option>
//             <option value="Best Month">Best Month</option>
//             <option value="Best Year">Best Year</option>
//           </select>
//         </div>

//         <div className="filter-group">
//           <label htmlFor="type">Type</label>
//           <select
//             id="type"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//           >
//             <option value="All">All</option>
//             <option value="Income">Income</option>
//             <option value="Expense">Expense</option>
//           </select>
//         </div>

//         <button className="reset-button">Reset Filter</button>
//       </div>

//       {/* Add Transaction Button */}
//       <button
//         className="add-transaction-button"
//         onClick={() => onNavigate("add-transaction")}
//       >
//         Add Transaction
//       </button>

//       {/* Transactions Table */}
//       <table className="transactions-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Title</th>
//             <th>Amount</th>
//             <th>Type</th>
//             <th>Category</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Example Row */}
//           <tr>
//             <td>01-01-2025</td>
//             <td>Groceries</td>
//             <td>$50</td>
//             <td>Expense</td>
//             <td>Food</td>
//             <td>
//               <button className="edit-button">Edit</button>
//               <button className="delete-button">Delete</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;

// src/Dashboard.jsx
// import React from "react";
// import "./Dashboard.css";

// const Dashboard = ({ onNavigate }) => {
//   const handleLogout = () => {
//     // Handle logout logic here
//     console.log("User logged out");
//     onNavigate("login"); // Navigate back to the login page
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-form">
//         <h2>Dashboard</h2>
//         <div className="dashboard-content">
//           <p>Welcome to the Dashboard!</p>
//           <button className="logout-button" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

//src/Dashboard.jsx
// import React, { useState } from "react";
// import "./Dashboard.css";

// const Dashboard = ({ onNavigate }) => {
//   const [frequency, setFrequency] = useState("Last Week");
//   const [type, setType] = useState("All");

//   const handleLogout = () => {
//     // Handle logout logic here
//     console.log("User logged out");
//     onNavigate("login"); // Navigate back to the login page
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Header */}
//       <header className="dashboard-header">
//         <h1>Expense Management System</h1>
//         <button className="logout-button" onClick={handleLogout}>
//           Logout
//         </button>
//       </header>

//       {/* Filters Section */}
//       <div className="filters-section">
//         <div className="filter-group">
//           <label htmlFor="frequency">Select Frequency</label>
//           <select
//             id="frequency"
//             value={frequency}
//             onChange={(e) => setFrequency(e.target.value)}
//           >
//             <option value="Last Week">Last Week</option>
//             <option value="Last Month">Last Month</option>
//             <option value="Last Year">Last Year</option>
//           </select>
//         </div>

//         <div className="filter-group">
//           <label htmlFor="type">Type</label>
//           <select
//             id="type"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//           >
//             <option value="All">All</option>
//             <option value="Income">Income</option>
//             <option value="Expense">Expense</option>
//           </select>
//         </div>

//         <button className="reset-button">Reset Filter</button>
//       </div>

//       {/* Transactions Table */}
//       <table className="transactions-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Title</th>
//             <th>Amount</th>
//             <th>Type</th>
//             <th>Category</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Example Row */}
//           <tr>
//             <td>01-01-2025</td>
//             <td>Groceries</td>
//             <td>$50</td>
//             <td>Expense</td>
//             <td>Food</td>
//             <td>
//               <button className="edit-button">Edit</button>
//               <button className="delete-button">Delete</button>
//             </td>
//           </tr>
//           {/* Add more rows as needed */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;

// src/Dashboard.jsx
// import React, { useState } from "react";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const [transactions, setTransactions] = useState([]); // State to store transactions
//   const [date, setDate] = useState("");
//   const [title, setTitle] = useState("");
//   const [amount, setAmount] = useState("");
//   const [type, setType] = useState("");
//   const [category, setCategory] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a new transaction object
//     const newTransaction = {
//       date,
//       title,
//       amount,
//       type,
//       category,
//     };

//     // Add the new transaction to the list
//     setTransactions([...transactions, newTransaction]);

//     // Clear the form fields
//     setDate("");
//     setTitle("");
//     setAmount("");
//     setType("");
//     setCategory("");
//   };

//   return (
//     <div className="dashboard-container">
//       <h1>Expense Management System</h1>

//       {/* Add Transaction Form */}
//       <form onSubmit={handleSubmit} className="add-transaction-form">
//         <div className="form-group">
//           <label>Date</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Title</label>
//           <input
//             type="text"
//             placeholder="Enter Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Amount</label>
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Type</label>
//           <select
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             required
//           >
//             <option value="">Choose...</option>
//             <option value="Income">Income</option>
//             <option value="Expense">Expense</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Category</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           >
//             <option value="">Choose...</option>
//             <option value="Food">Food</option>
//             <option value="Transport">Transport</option>
//             <option value="Entertainment">Entertainment</option>
//           </select>
//         </div>
//         <button type="submit" className="add-button">
//           Add Transaction
//         </button>
//       </form>

//       {/* Transactions Table */}
//       <table className="transactions-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Title</th>
//             <th>Amount</th>
//             <th>Type</th>
//             <th>Category</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction, index) => (
//             <tr key={index}>
//               <td>{transaction.date}</td>
//               <td>{transaction.title}</td>
//               <td>${transaction.amount}</td>
//               <td>{transaction.type}</td>
//               <td>{transaction.category}</td>
//               <td>
//                 <button
//                   className="delete-button"
//                   onClick={() => {
//                     // Remove the transaction from the list
//                     const updatedTransactions = transactions.filter(
//                       (_, i) => i !== index
//                     );
//                     setTransactions(updatedTransactions);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;

// src/Dashboard.jsx
import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = ({ onNavigate }) => {
  const [transactions, setTransactions] = useState([]); // State to store transactions
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new transaction object
    const newTransaction = {
      date,
      title,
      amount,
      type,
      category,
    };

    // Add the new transaction to the list
    setTransactions([...transactions, newTransaction]);

    // Clear the form fields
    setDate("");
    setTitle("");
    setAmount("");
    setType("");
    setCategory("");
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("User logged out");
    onNavigate("login"); // Navigate back to the login page
  };

  return (
    <div className="dashboard-container">
      {/* Header with Logout Button */}
      <header className="dashboard-header">
        <h1>Expense Management System</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Add Transaction Form */}
      <form onSubmit={handleSubmit} className="add-transaction-form">
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="">Choose...</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Choose...</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit" className="add-button">
          Add Transaction
        </button>
      </form>

      {/* Transactions Table */}
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.title}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.category}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => {
                    // Remove the transaction from the list
                    const updatedTransactions = transactions.filter(
                      (_, i) => i !== index
                    );
                    setTransactions(updatedTransactions);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

// src/AddTransaction.jsx
import React, { useState } from "react";
import "./AddTransaction.css";

const AddTransaction = ({ onNavigate }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Title:", title);
    console.log("Amount:", amount);
    console.log("Category:", category);
    console.log("Description:", description);
    console.log("Type:", type);
    console.log("Date:", date);
    // Navigate back to the dashboard after adding a transaction
    onNavigate("dashboard");
  };

  return (
    <div className="add-transaction-container">
      <h2>Add Transaction Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Transaction Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter your Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
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
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Transaction Type</label>
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
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Add Transaction
        </button>
      </form>
      <button className="back-button" onClick={() => onNavigate("dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default AddTransaction;

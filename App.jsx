// // src/App.jsx
// import React, { useState } from "react";
// import Login from "./Login";
// import Register from "./Register";
// import Dashboard from "./Dashboard";
// import AddTransaction from "./AddTransaction";
// import "./App.css";

// function App() {
//   const [currentPage, setCurrentPage] = useState("login"); // Default to login page

//   // Render the appropriate page based on `currentPage`
//   const renderPage = () => {
//     switch (currentPage) {
//       case "login":
//         return <Login onNavigate={setCurrentPage} />;
//       case "register":
//         return <Register onNavigate={setCurrentPage} />;
//       case "dashboard":
//         return <Dashboard onNavigate={setCurrentPage} />;
//       case "add-transaction":
//         return <AddTransaction onNavigate={setCurrentPage} />;
//       default:
//         return <Login onNavigate={setCurrentPage} />;
//     }
//   };

//   return (
//     <div className="App">
//       {/* Navbar - Only show Dashboard button on Dashboard or Add Transaction pages */}
//       {currentPage === "dashboard" || currentPage === "add-transaction" ? (
//         <nav className="navbar">
//           <div className="navbar-buttons">
//             <button
//               className="dashboard-button"
//               onClick={() => setCurrentPage("dashboard")}
//             >
//               Dashboard
//             </button>
//             <button
//               className="logout-button"
//               onClick={() => setCurrentPage("login")}
//             >
//               Logout
//             </button>
//           </div>
//         </nav>
//       ) : null}

//       {/* Render the current page */}
//       {renderPage()}
//     </div>
//   );
// }

// export default App;
// src/App.jsx
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login"); // Default to login page

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onNavigate={setCurrentPage} />;
      case "register":
        return <Register onNavigate={setCurrentPage} />;
      case "dashboard":
        return <Dashboard onNavigate={setCurrentPage} />;
      default:
        return <Login onNavigate={setCurrentPage} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;

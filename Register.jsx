// // src/Register.jsx
// import React, { useState } from "react";
// import "./Register.css";

// const Register = ({ onNavigate }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [agreeTerms, setAgreeTerms] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("Confirm Password:", confirmPassword);
//     console.log("Agree to Terms:", agreeTerms);

//     // Navigate to the login page after successful registration
//     onNavigate("login");
//   };

//   return (
//     <div className="register-container">
//       <div className="register-form">
//         <h2>CREATE ACCOUNT</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="John Doe"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Repeat your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group terms">
//             <input
//               type="checkbox"
//               id="agreeTerms"
//               checked={agreeTerms}
//               onChange={(e) => setAgreeTerms(e.target.checked)}
//               required
//             />
//             <label htmlFor="agreeTerms">
//               I agree all statements in Terms of service
//             </label>
//           </div>
//           <button type="submit" className="register-button">
//             SIGN UP
//           </button>
//         </form>
//         <p className="login-link">
//           Have already an account?{" "}
//           <button onClick={() => onNavigate("login")}>Login here</button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

// src/Register.jsx
// import React, { useState } from "react";
// import "./Register.css";

// const Register = ({ onNavigate }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [agreeTerms, setAgreeTerms] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("Confirm Password:", confirmPassword);
//     console.log("Agree to Terms:", agreeTerms);

//     // Navigate to the login page after successful registration
//     onNavigate("login");
//   };

//   return (
//     <div className="register-container">
//       <div className="register-form">
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group terms">
//             <input
//               type="checkbox"
//               id="agreeTerms"
//               checked={agreeTerms}
//               onChange={(e) => setAgreeTerms(e.target.checked)}
//               required
//             />
//             <label htmlFor="agreeTerms">
//               I agree all statements in Terms of service
//             </label>
//           </div>
//           <button type="submit" className="register-button">
//             Register
//           </button>
//         </form>
//         <p className="login-link">
//           Have already an account?{" "}
//           <button onClick={() => onNavigate("login")}>Login here</button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

// src/Register.jsx
import React, { useState } from "react";
import "./Register.css";

const Register = ({ onNavigate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Agree to Terms:", agreeTerms);

    // Navigate to the login page after successful registration
    onNavigate("login");
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group terms">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
            />
            <label htmlFor="agreeTerms">
              I agree all statements in Terms of service
            </label>
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p className="login-link">
          Have already an account?{" "}
          <button onClick={() => onNavigate("login")}>Login here</button>
        </p>
      </div>
    </div>
  );
};

export default Register;

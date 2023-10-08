import React, { useState, useEffect } from "react";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import Dashboard from "./pages/dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const toggleForm = (str) => {
    console.log(currentPage, str);
    setCurrentPage(str);
  };

  useEffect(() => {}, [currentPage]);
  return (
    <div>
      {currentPage === "login" ? (
        <LoginForm
          submitCallback={(value) => {
            if (value.success) {
              setCurrentPage("dashboard");
            }
          }}
          toggleForm={() => toggleForm("signup")}
        />
      ) : currentPage === "signup" ? (
        <SignupForm
          submitCallback={(value) => {
            if (value.success) {
              setCurrentPage("dashboard");
            }
          }}
          toggleForm={() => toggleForm("login")}
        />
      ) : currentPage === "dashboard" ? (
        <Dashboard />
      ) : null}
    </div>
  );
}

export default App;

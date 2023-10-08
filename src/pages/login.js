import React, { useState } from "react";

const LoginForm = ({ toggleForm, submitCallback }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    submitCallback({
      formData,
      success:true
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-lg w-96">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <input
            type="text"
            id="login-username"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="login-password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
        >
          Login
        </button>
        <p className="mt-2 text-center">
        Don't have an account?{' '}
        <button
          type="button"
          className="text-blue-500"
          onClick={toggleForm}
        >
          Signup
        </button>
      </p>
      </form>
    </div>
  </div>
  );
};
export default LoginForm;

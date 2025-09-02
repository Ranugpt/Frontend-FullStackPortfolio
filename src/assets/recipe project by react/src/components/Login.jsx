import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login", formData);

      // save token in localStorage
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");

      // redirect to homepage/dashboard after login
      navigate("/");
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg bg-green-400">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Login
        </button>
      </form>

      {/* ✅ Extra options */}
      <div className="mt-4 text-center space-y-2">
        {message && <p className="text-sm text-red-700">{message}</p>}

        <p className="text-sm">
          Don’t have an account?{" "}
          <span
            className="text-white font-semibold cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </span>
        </p>

        <p
          className="text-sm text-red-800 cursor-pointer"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
}

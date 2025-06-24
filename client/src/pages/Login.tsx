import { UserContext } from "@src/contexts/UserContext";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle login and redirect to board page
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (username.length < 3) {
      toast.error("Username must be at least 3 characters long!");
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      setIsLoading(false);
      return;
    }

    if (username.includes(" ")) {
      toast.error("Username cannot contain spaces!");
      setIsLoading(false);
      return;
    }

    const response = await axios
      .post("/api/auth/login", {
        username,
        password,
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setIsLoading(false);
      });

    if (response && response.data) {
      toast.success("Logged in successfully!");
      setUsername("");
      setPassword("");
      updateUser(response.data.data);
      navigate("/board");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to access your Kanban board</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username Input */}
            <div className="relative">
              <input
                type="text"
                value={username}
                required
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                className="peer w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 placeholder-transparent"
                placeholder="Username"
              />
              <label
                htmlFor="username"
                className="absolute left-4 -top-2.5 bg-white/80 px-2 text-sm font-medium text-gray-700 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white/80 rounded"
              >
                Username
              </label>
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                required
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 placeholder-transparent"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-4 -top-2.5 bg-white/80 px-2 text-sm font-medium text-gray-700 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white/80 rounded"
              >
                Password
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transform hover:scale-[1.02] transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

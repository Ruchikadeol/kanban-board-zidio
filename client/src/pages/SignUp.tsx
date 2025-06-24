import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Handle sign up and redirect to login page
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
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
      .post("/api/auth/signup", {
        username,
        password,
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setIsLoading(false);
      });

    if (response && response.data) {
      toast.success("Account created successfully!");
      setUsername("");
      setPassword("");
      navigate("/login");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* SignUp Card */}
      <div className="relative w-full max-w-md">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
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
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Create Account
            </h1>
            <p className="text-gray-600">
              Join us and start organizing your tasks
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignUp} className="space-y-6">
            {/* Username Input */}
            <div className="relative">
              <input
                type="text"
                value={username}
                required
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                className="peer w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-200 placeholder-transparent"
                placeholder="Username"
              />
              <label
                htmlFor="username"
                className="absolute left-4 -top-2.5 bg-white/80 px-2 text-sm font-medium text-gray-700 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 peer-focus:bg-white/80 rounded"
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
                className="peer w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-200 placeholder-transparent"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-4 -top-2.5 bg-white/80 px-2 text-sm font-medium text-gray-700 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 peer-focus:bg-white/80 rounded"
              >
                Password
              </label>
            </div>

            {/* Password Requirements */}
            <div className="text-sm text-gray-600 bg-white/30 backdrop-blur-sm rounded-lg p-3">
              <p className="font-medium mb-1">Password requirements:</p>
              <ul className="space-y-1 text-xs">
                <li
                  className={`flex items-center ${
                    password.length >= 6 ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  <span className="mr-2">
                    {password.length >= 6 ? "✓" : "○"}
                  </span>
                  At least 6 characters
                </li>
                <li
                  className={`flex items-center ${
                    username.length >= 3 ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  <span className="mr-2">
                    {username.length >= 3 ? "✓" : "○"}
                  </span>
                  Username at least 3 characters
                </li>
                <li
                  className={`flex items-center ${
                    !username.includes(" ") && username.length > 0
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  <span className="mr-2">
                    {!username.includes(" ") && username.length > 0 ? "✓" : "○"}
                  </span>
                  No spaces in username
                </li>
              </ul>
            </div>

            {/* SignUp Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-purple-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transform hover:scale-[1.02] transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                  Creating account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-200"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

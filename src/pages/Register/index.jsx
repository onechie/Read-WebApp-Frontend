import { useState } from "react";
import registerImage from "../../assets/images/3289574.jpg";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");

  const register = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/auth/register", {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
      });
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[100vh] w-[100vw] bg-white flex">
      <div className="h-full w-[50%]">
        <img
          src={registerImage}
          alt="Register Image"
          className="h-full object-cover"
        />
      </div>
      <div className="h-full w-[50%]  flex justify-center items-center">
        <div className="bg-white h-[600px] w-[400px]">
          <h1 className="text-5xl font-bold mb-8 text-rose-400 italic">READ</h1>
          <h2 className="text-2xl font-bold pb-2">Create your account</h2>
          <p className="text-gray-500 mb-10">
            Already have an account?
            <a href="/login" className="text-rose-400 font-medium ms-1">
              Login
            </a>
          </p>

          <p className="mb-2 font-medium">Username</p>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="h-[36px] mb-6 border rounded w-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-rose-400/50"
          />
          <p className="mb-2 font-medium">Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="h-[36px] mb-6 border rounded w-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-rose-400/50"
          />
          <p className="mb-2 font-medium">Confirm password</p>
          <input
            type="password"
            onChange={(e) => setConfirm(e.target.value)}
            value={confirmPassword}
            className="h-[36px] mb-6 border rounded w-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-rose-400/50"
          />
          <div className="flex mb-6">
            <input type="checkbox" className="accent-rose-400 me-3" />
            <p>I have read and agree to the Terms and Policies.</p>
          </div>
          <button
            className="h-[36px] w-full bg-rose-400 text-white font-medium py-1 rounded mb-10 hover:bg-rose-400/80"
            onClick={register}
          >
            Sign up
          </button>
          <div className="flex items-center justify-center mb-6">
            <hr className="w-[100px]" />
            <p className="px-5">Or continue with</p>
            <hr className="w-[100px]" />
          </div>
          <div className="flex justify-between mb-6">
            <button className="h-[36px] w-[45%] py-1 text-center bg-blue-700/80 text-white font-medium rounded hover:bg-blue-700/60">
              Facebook
            </button>
            <button className="h-[36px] w-[45%] py-1 text-center bg-red-700/80 text-white font-medium rounded hover:bg-red-700/60">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import Button from '../../utils/Button';
import Input from '../../utils/Input';
import Logo from '../header/Logo';
import Google from '../../images/google.png';
import Github from '../../images/github.png';
import { useContext } from 'react';
import { AuthContext } from '../../store/Context/AuthContext';

export default function Login() {
  const {authDispatch} = useContext(AuthContext)
  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="sm:w-96 lg:w-[450px] px-8 py-12 bg-white shadow-lg rounded-2xl">
        <div className="sm:mx-auto w-fit text-center">
          <Logo imgStyle="w-10 h-10" nameStyle="text-3xl font-bold text-gray-800" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">
            Login to Your Account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5">
            <Input
              type="text"
              labelName="Email"
              id="login-email"
              placeHolder="Enter your email"
            />
            <Input
              type="password"
              labelName="Password"
              id="login-password"
              placeHolder="Enter your password"
              passwordField
            />
            <Button btnStyle="bg-blue-600 hover:bg-blue-700 transition-all duration-300 w-full py-3 rounded-lg text-white text-lg font-semibold">
              Login
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Not a member?{' '}
            <button onClick={()=>authDispatch({type :"register"})} href="#" className="font-medium text-blue-600 hover:underline">
              Sign up to continue
            </button>
          </p>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="px-4 text-sm text-gray-500">OR</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-3 shadow-md px-5 py-3 rounded-lg bg-white hover:bg-gray-100 transition-all duration-300 border border-gray-300">
              <img src={Google} alt="Google" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">Google</span>
            </button>
            <button className="flex items-center gap-3 shadow-md px-5 py-3 rounded-lg bg-white hover:bg-gray-100 transition-all duration-300 border border-gray-300">
              <img src={Github} alt="GitHub" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

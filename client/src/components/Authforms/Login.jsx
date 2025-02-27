import Button from '../../utils/Button'
import Input from '../../utils/Input'
import Logo from '../header/Logo'
import Google from '../../images/google.png'
import Github from '../../images/github.png'
export default function Login() {
    return (
      <>
        <div className="sm:w-96 lg:w-[450px] px-6 py-12 lg:px-8 shadow-2xl shadow-gray-400 rounded-4xl mt-10">
          <div className="sm:mx-auto w-fit">
            <Logo imgStyle = {"w-9 h-8"} nameStyle={"text-4xl font-semibold"}/>
            <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Login to your account
            </h2>
          </div>

          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form  className="space-y-6">
                <Input
                type={"text"}
                labelName={"Email"}
                id={"login-email"}
                placeHolder={"enter a email address"}
                />
                <Input
                type={"password"}
                labelName={"Password"}
                id={"login-password"}
                placeHolder={"enter a password"}
                passwordField ={true}
                />
                <Button btnStyle={"bg-blue-800 w-96  rounded-lg text-white text-xl font-bold"}>Login</Button>
            </form>
  
            <p className="mt-4 text-center text-sm/6 text-gray-500">
              Not a member? {' '} 
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                 Signup to continue
              </a>
            </p>
            <p className='text-center my-3'>Or</p>
            <div className="icons flex justify-evenly mb-6  ">
                <button className="google flex gap-x-3 shadow shadow-gray-600 py-2 px-5 rounded-4xl ring-blue-400 cursor-pointer hover:bg-gray-200">
                    <img src={Google} alt="Google" className='w-8 h-8' />
                    <p className='font-medium text-xl'>google</p>
                </button>
                <button className="github flex gap-x-3 shadow shadow-gray-600 py-2 px-5 rounded-4xl ring-blue-400 cursor-pointer hover:bg-gray-200">
                    <img src={Github} alt="GitHub" className='w-8 h-8' />
                    <p className='font-medium text-xl'>Github</p>
                </button>
            </div>
          </div>
        </div>
      </>
    )
  }
  
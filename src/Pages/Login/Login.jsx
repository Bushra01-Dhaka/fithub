import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { RiGithubFill, RiGoogleFill } from "react-icons/ri";
import img from "../../assets/loginOut/login.jpg"



const Login = () => {

    const handleLogin = () => {

    }
    return (
        <div className="mb-6">
               <div className="flex flex-col md:flex-row justify-center items-center bg-[#F72464]">
          <div className="md:flex-1">
            <img src={img} alt="login image" />
          </div>

          <div className="md:flex-1 bg-[#F72464]">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-4xl text-center text-black font-extrabold">
                Login
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered border-0 shadow-lg"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered border-0 shadow-lg"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>


              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary shadow-lg bg-black text-white border-0 hover:bg-slate-900 hover:text-[#F72464]"
                />
              </div>
            </form>
            <div className="text-center">
              <p className="text-white">
                New here? <Link to="/signup">Create a New Account</Link>
              </p>
              <p className="text-black my-2">Or sign in with</p>
              <div className="flex my-6 justify-center items-center text-black text-3xl gap-4">
                <CiFacebook></CiFacebook>
                <RiGoogleFill></RiGoogleFill>
                <RiGithubFill></RiGithubFill>
              </div>
            </div>
          </div>
        </div> 
        </div>
    );
};

export default Login;
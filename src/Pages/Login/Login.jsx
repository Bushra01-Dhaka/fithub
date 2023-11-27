import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiGoogleFill } from "react-icons/ri";
import img from "../../assets/loginOut/login.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";



const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // const axiosPublic = useAxiosPublic();
  
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    
        signIn(email, password)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            //navigate
            navigate(from, { replace: true });
            //toast
            toast.success("Log in Successful.", {
              position: "top-right",
            });
          })
          .then((error) => {
            console.error(error);
          });
      };

      const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
    
        //   const userInfo = {
        //     name: result.user?.displayName,
        //     email: result.user?.email
        //   }
        //   axiosPublic.post('/users', userInfo)
        //   .then(res => {
        //     console.log(res.data);
        //   })
    
    
          //toast 
          toast.success("Log in Successful.", {
            position: "top-right",
          });
          //navigate
          navigate("/");
    
        })
        .then(error => {
          console.error(error);
           
        })
      }


    return (
        <div  className="my-10 mb-6 md:max-w-screen-xl mx-auto  rounded shadow-xl p-10 bg-black">
            <Helmet>
              <title>FitHub | Login</title>
            </Helmet>

               <div className="flex flex-col md:flex-row justify-center items-center bg-[#F72464]">
          <div className="md:flex-1">
            <img 
            className="border-4 border-[#F72464] rounded"
            src={img} alt="login image" />
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
                  className="input input-bordered border-0 shadow-lg text-rose-500"
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
                  className="input input-bordered border-0 shadow-lg text-rose-500"
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
                New here? <Link to="/signUp">Create a New Account</Link>
              </p>
              <p className="text-black my-2">Or sign in with</p>
              <div className="flex my-6 justify-center items-center text-black text-3xl gap-4">
                <button onClick={handleGoogleLogin} className="btn btn-primary shadow-lg bg-black text-white border-0 hover:bg-slate-900 hover:text-[#F72464]"><RiGoogleFill className="text-[#F72464] text-xl"></RiGoogleFill> Sign in with Google</button>
              </div>
            </div>
          </div>
        </div> 
        </div>
    );
};

export default Login;
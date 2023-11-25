import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { RiGithubFill, RiGoogleFill } from "react-icons/ri";
import img from "../../assets/loginOut/logOut.jpg"
import { useForm } from "react-hook-form";



const SignUp = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

    // const handleSubmit = () => {

    // }
    const onSubmit = (data) => console.log(data)
    return (
        <div
        // style={{ backgroundImage: `url(${img})` }}
        className="my-10 md:max-w-screen-xl mx-auto  rounded shadow-xl p-10 bg-black text-white"
      >
        <div className="flex flex-col md:flex-row-reverse justify-center items-center">
          <div className="md:flex-1">
            <img 
            className="border-4 border-[#F72464] rounded"
            src={img} alt="login image" />
          </div>

          <div className="md:flex-1 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-4xl text-center text-[#F72464] font-extrabold">
                Sign Up
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  name="name"
                  placeholder="user name"
                  className="input input-bordered border-0 shadow-lg"
                  required
                />
                {errors.name && <span>User name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL")}
                  placeholder="photo url"
                  className="input input-bordered border-0 shadow-lg"
                  required
                />
                {errors.photoURL && <span>Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered border-0 shadow-lg"
                  required
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered border-0 shadow-lg"
                  required
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required.</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password must have 6 characters.
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    Password must mot more than 20 characters.
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must have 1 uppercase, 1 lowercase and 1 special
                    character.
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary shadow-lg bg-[#F72464] text-white border-0 hover:bg-slate-900 hover:text-[#F72464]"
                />
              </div>
            </form>
            <div className="text-center">
              <p className="text-white">
                Already registered? <Link to="/login">Go to Log in</Link>
              </p>
              <p className="text-black my-2">Or sign up with</p>
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

export default SignUp;
import img_logo from "../../assets/icons/mail.svg";
import img from "../../assets/newsletter/ropeman.jpg";
const Newsletters = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img})`, backgroundBlendMode: "black" }}
      className="py-20 bg-fixed bg-rose-500 bg-opacity-70 bg-cover bg-center  text-white"
    >
      <div className="w-[120px] h-[120px] rounded-[50%] bg-[#F72464] mx-auto">
        <div className="mx-auto">
          <img
            className="w-[100px] h-[50px] mx-auto mb-4"
            src={img_logo}
            alt=""
          />
          <p className="text-center text-sm font-bold uppercase text-white">
            Newsletter
          </p>
        </div>
      </div>

      <div className="my-4 md:max-w-lg mx-auto bg-base-100 bg-opacity-40 text-black p-12 rounded-md shadow-lg ">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Subscribe to our <span className="text-[#F72464]">Newsletter</span>
        </h1>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#F72464] font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="User Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#F72464] font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
          <input className="btn rounded bg-[#F72464] hover:bg-rose-500 border-0 text-white" type="submit" value="Subscribe" />
        </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletters;

import toast from "react-hot-toast";
import CustomTitle from "../../Hooks/CustomTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const AddBlogs = () => {

    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleBlogAdd = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const role = form.role.value;
        const image = form .image.value;
       
        const blogsData = {
            title,
            description,
            role,
            image
        }
        console.log(blogsData);

        axiosSecure.post("/blogs", blogsData).then((res) => {
            if (res.data.insertedId) {
              console.log("new user added")
              //toast
              toast.success("Added Successfully.", {
                position: "top-right",
              });
              //navigate
              navigate('/community')
            }
          });
    }

  return (
    <div style={{backgroundImage: `url(https://i.ibb.co/mTDN59b/classes3.jpg)`}} className=" bg-fixed bg-black bg-cover bg-center bg-opacity-80 py-8 text-white">
      <CustomTitle subHeader="new blogs" header="Add New Forum"></CustomTitle>

      <div className="md:max-w-4xl mx-auto p-20 bg-black bg-opacity-40 text-white rounded-md">
        <form onSubmit={handleBlogAdd}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-rose-500">Title*</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Add the title"
              className="input input-bordered text-rose-500"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-rose-500">Description*</span>
            </label>
            <textarea
              type="text"
              name="description"
              className="textarea textarea-bordered text-rose-500"
              placeholder="Add description"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-rose-500">Your Role*</span>
            </label>
            <select 
            type="text"
            name="role"
            className="select select-bordered w-full max-w-xs text-rose-500">
              <option>admin</option>
              <option>trainer</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-rose-500">Add Image*</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Add photoURL"
              className="input input-bordered text-rose-500"
              required
            />
          </div>

          <div className="form-control mt-6 py-4">
            <input
              className="btn rounded-md bg-rose-600 hover:bg-rose-500 text-white border-0"
              type="submit"
              value="Add new forum"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;

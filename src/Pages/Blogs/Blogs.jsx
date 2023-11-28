import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs)

  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/9GYw8K6/dark-pink.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold text-white">Community Forum Post</h1>
            <p className="mb-5">
             Stay Tune with Fithub
            </p>
          </div>
        </div>
      </div>
         
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-base-200 gap-6 px-10 my-24">
               {
                blogs.map(blog => <Blog 
                  key={blog._id}
                  blog={blog}
                  ></Blog>)
               }
        </div>

    </div>
  );
};

export default Blogs;

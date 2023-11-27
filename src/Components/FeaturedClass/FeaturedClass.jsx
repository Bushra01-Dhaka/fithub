import { Link } from "react-router-dom";

const FeaturedClass = ({ item }) => {
  const { _id, class_title, class_image, short_description } = item;
  return (
  <Link to={`/classDetails/${_id}`}>
    <div className="card shadow-xl border-b-2 border-red-500 bg-[#F72464]">
      <figure>
        <img
          src={class_image}
          className="h-[300px] w-full object-cover"
          alt="Shoes"
        />
      </figure>
      <div className="p-4 bg-[#F72464] rounded-xl m-2 bg-opacity-40 text-white absolute bottom-0">
        <h1 className="font-bold text-2xl">{class_title}</h1>
        <p className="py-2">{short_description}</p>
      </div>
    </div>
    </Link>
  );
};

export default FeaturedClass;

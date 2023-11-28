import { Helmet } from "react-helmet-async";
import CustomTitle from "../../Hooks/CustomTitle";
import useClasses from "../../Hooks/useClasses";
import FeaturedClass from "../../Components/FeaturedClass/FeaturedClass";

const RecommendedClasses = () => {
  const [classes] = useClasses();
  return (
    <div>
      <Helmet>
        <title>FitHub | Dashboard | RecommendedClasses</title>
      </Helmet>
      <CustomTitle
        subHeader="Best for you"
        header="Recommended Classes"
      ></CustomTitle>

      <div
        id="classes"
        className="grid grid-cols-1 md:grid-cols-2 px-10 gap-6 mt-20 py-8"
      >
        {classes.map((item) => (
          <FeaturedClass key={item._id} item={item}></FeaturedClass>
        ))}
      </div>
    </div>
  );
};

export default RecommendedClasses;

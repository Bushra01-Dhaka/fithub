import { useEffect, useState } from "react";
import CustomTitle from "../../Hooks/CustomTitle";
import FeaturedClass from "./FeaturedClass";


const FeaturedClasses = () => {

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch(`https://fithub-server-brown.vercel.app/classes`)
      .then(res => res.json())
      .then(data => {
       
        setClasses(data);
        setLoading(false);
      })
    }, []);

    console.log(classes);

    return (
        <div className="py-20">
            <CustomTitle
            subHeader="Best classes"
            header="Featured Classes"
            ></CustomTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 px-6 gap-6 mt-20">
                
             {
                classes.map(item => <FeaturedClass 
                    key={item.class_id}
                    item={item}
                
                ></FeaturedClass>)
             }
            </div>

        </div>
    );
};

export default FeaturedClasses;
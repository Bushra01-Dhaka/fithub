import { useLoaderData } from "react-router-dom";
import img from "../../assets/trainers/trainer-cover.jpg";
import TrainerCard from "./TrainerCard";

const TrainerPage = () => {

    const trainer = useLoaderData();
   console.log(trainer);

   const onlyTrainers = trainer.filter(items => items.status !== "user");
   console.log("Only Trainer: ", onlyTrainers);

   
   

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="hero min-h-screen bg-fixed bg-black bg-cover bg-center bg-opacity-80 py-8 text-white"
      >
        <div
          data-aos="zoom-in"
          className="bg-black bg-opacity-40 border-2 border-[#F72464] text-white p-8 text-center"
        >
          <h1 className="text-center text-6xl text-[#F72464]  font-extrabold">
            Meet with trainers
          </h1>
          <p className="py-4">Fithub team is always there for you.</p>
        </div>
      </div>
      
      <div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 pt-10">
        {
            onlyTrainers.map(card => <TrainerCard 
            key={card._id}
            card={card}
            ></TrainerCard>)
        }
      </div>

    </div>
  );
};

export default TrainerPage;

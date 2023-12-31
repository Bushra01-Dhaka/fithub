import img1 from "../../assets/features/trainer-advice.png"
import img2 from "../../assets/features/cycling.png"
import img3 from "../../assets/features/treadmill.png"
import img4 from "../../assets/features/bodyBilding.png"
import img5 from "../../assets/features/yoga.png"
import img6 from "../../assets/features/dumbbells.png"
import CustomTitle from "../../Hooks/CustomTitle"


const Features = () => {
  return (
    <div className="py-10 bg-base-200">
        
        <CustomTitle
        subHeader='Why choose us?'
        header='Features'
        ></CustomTitle>
      

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 pt-8 px-4">

        <div className="card bg-base-100 shadow-xl rounded py-4 border-b-2 border-rose-500  ">
          <figure>
            <img
              src={img1}
              className="w-[100px] h-[80px]"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center ">
            <h1 className="text-[#F72464] font-extrabold uppercase">Trainer-Advice</h1>
            <p className="text-sm">Expert guidance for personalized <br />fitness plans.</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl rounded py-4 border-b-2 border-rose-500  ">
          <figure>
            <img
              src={img2}
              className="w-[100px] h-[80px]"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center ">
          <h1 className="text-[#F72464] font-extrabold uppercase">Musculation</h1>
            <p className="text-sm">Targeted exercises to sculpt <br />and strengthen muscles.</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl rounded py-4 border-b-2 border-rose-500  ">
          <figure>
            <img
              src={img3}
              className="w-[100px] h-[80px]"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center ">
          <h1 className="text-[#F72464] font-extrabold uppercase">Fitness Running</h1>
            <p className="text-sm">Cardio workouts tailored for <br />runners of all levels.</p>
          </div>
        </div>


        <div className="card bg-base-100 shadow-xl rounded py-4  border-b-2 border-rose-500  ">
          <figure>
            <img
              src={img4}
              className="w-[100px] h-[80px]"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center ">
          <h1 className="text-[#F72464] font-extrabold uppercase">Bodybuilding</h1>
            <p className="text-sm">Intense routines for building muscle <br /> mass and definition.</p>
          </div>
        </div>


        <div className="card bg-base-100 shadow-xl rounded py-4  border-b-2 border-rose-500  ">
          <figure>
            <img
              src={img5}
              className="w-[100px] h-[80px]"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center ">
          <h1 className="text-[#F72464] font-extrabold uppercase">Yoga Meditation</h1>
            <p className="text-sm">Mindful practices for holistic <br />well-being and relaxation.</p>
          </div>
        </div>


        <div className="card bg-base-100 shadow-xl rounded py-4 border-b-2 border-rose-500  ">
          <figure>
            <img
              src={img6}
              className="w-[100px] h-[80px]"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center ">
          <h1 className="text-[#F72464] font-extrabold uppercase">Weight Lifting</h1>
            <p className="text-sm">Strength training regimens for <br />power and endurance.</p>
          </div>
        </div>


        


      </div>
    </div>
  );
};

export default Features;

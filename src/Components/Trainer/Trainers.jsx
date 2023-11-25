import CustomTitle from "../../Hooks/CustomTitle";
import img1 from "../../assets/trainers/profile1.jpg"
import img2 from "../../assets/trainers/profile2.jpg"
import img3 from "../../assets/trainers/profile3.jpg"

const Trainers = () => {
  return (
    <div className="py-20 bg-[#FCF5ED]">
        <CustomTitle
        subHeader="Our Trainers"
        header="Meet Our Trainers"
        ></CustomTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto my-10 px-6">
        <div className="card bg-base-100 shadow-xl border-b-2 border-rose-500 py-6">
          <figure>
            <img
              className="w-[200px] h-[200px] rounded-[50%] object-cover shadow-md border-4 border-rose-500"
              src={img1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body mx-auto text-center">
            <h2 className="text-2xl font-bold">Alex Robert</h2>
            <p className="text-[#F72464] font-bold">Trainer</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border-b-2 border-rose-500 py-6">
          <figure>
            <img
              className="w-[200px] h-[200px] rounded-[50%] object-cover shadow-md border-4 border-rose-500"
              src={img2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body mx-auto text-center">
            <h2 className="text-2xl font-bold">Ben Stoke</h2>
            <p className="text-[#F72464] font-bold">Trainer</p>
          </div>
        </div>


        <div className="card bg-base-100 shadow-xl border-b-2 border-rose-500 py-6">
          <figure>
            <img
              className="w-[200px] h-[200px] rounded-[50%] object-cover shadow-md border-4 border-rose-500"
              src={img3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body mx-auto text-center">
            <h2 className="text-2xl font-bold">Ken Williamson</h2>
            <p className="text-[#F72464] font-bold">Trainer</p>
          </div>
        </div>


      </div>


    </div>
  );
};

export default Trainers;

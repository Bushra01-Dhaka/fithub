
import CustomTitle from "../../../Hooks/CustomTitle";
import usePackage from "../../../Hooks/usePackage";
import { Helmet } from "react-helmet-async";

const ActivityLog = () => {
  const [packageData] = usePackage();
  console.log("package", packageData);
  // const [slot, setSlot] = useState(0);

  // const selectedSlot = packageData[0].selected_slot;
  // const slotno = parseInt(selectedSlot);
  // console.log(slotno);

  // const slotTime = ["7-8am", "9-10am", "11-12am", "3-4pm", "7-8pm", "9-10pm"];
  // setSlot(slotTime[slotno]);
  return (
    <div>
      
           <Helmet>
              <title>FitHub | dashboard | ActivityLog</title>
            </Helmet>

      <CustomTitle
        subHeader="My Schedule"
        header="Today's Activities"
      ></CustomTitle>

      <div className="p-10 bg-base-200 rounded-md">
        {packageData.map((data, index) => (
          <div key={index} className="flex justify-center gap-6 px-10 items-center">
            <div className="border-2 border-rose-500 rounded-md p-12">
              <h1 className="text-rose-500 font-bold text-3xl">My Trainer</h1>
              <img
                className="w-[200px] h-[200px] rounded-md my-2 object-cover"
                src={data.trainer_photo}
                alt=""
              />
              <p>
                <span className="text-rose-500 my-2 font-bold">
                  Instruction:
                </span>{" "}
                {data.trainer_name}
              </p>
              <p>
                {" "}
                <span className="text-rose-500 font-bold">
                  Selected Slot Time:{" "}
                </span>
                {/* {slotTime[slotno - 1]} */}
                {data.selected_slot}pm
              </p>
            </div>

            {/* middle */}
            <div className="bg-black text-white rounded-md p-12 text-center">
              <h1 className="text-rose-500 text-3xl font-bold">{`Today's Class`}</h1>
              {/* <p className="text-xl text-white my-4">{slotTime[slotno - 1]}</p> */}
              <p className="text-xl text-white my-4">{data.selected_slot}pm</p>
            </div>

            {/* right */}
            <div className="text-center p-12 my-auto bg-rose-500 text-white rounded-md">
              <h1 className="text-black text-3xl font-extrabold">{`My Package`}</h1>
              <div className="p-4">
                <p className="font-bold text-lg">
                  {data.packageName}
                </p>
                <p>
                  <span className="font-bold ">Price: </span>
                  ${data.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;

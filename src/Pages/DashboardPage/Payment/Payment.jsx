import { Helmet } from "react-helmet-async";
import CustomTitle from "../../../Hooks/CustomTitle";


const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>Fithub | Dashboard | AllTrainer | Payment</title>
            </Helmet>

            <CustomTitle
            subHeader="time to pay"
            header="Payment Page"
            ></CustomTitle>
            
        </div>
    );
};

export default Payment;


const CustomTitle = ({subHeader,header }) => {
    return (
        <div className="py-6 md:max-w-md mx-auto">
            <div className="mx-auto text-center">
                <p className="font-bold text-[#F72464] mb-2">{subHeader}</p>
                <h1 className="text-2xl uppercase rounded-xl bg-[#F72464] text-white py-2 ">{header}</h1>
            </div>
        </div>
    );
};

export default CustomTitle;
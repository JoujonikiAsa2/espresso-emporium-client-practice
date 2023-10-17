import { FiArrowLeft } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    return (
        <div className="max-w-5xl mx-4 md:mx-auto lg:mx-auto my-12">
            <div className="mb-8"><Link to='/' className=" flex  gap-3 items-center"><FiArrowLeft></FiArrowLeft>Back To Home</Link></div>
            <div className="p-6 bg-[#F4F3F0] flex lg:flex-row md:flex-row flex-col justify-center items-center gap-12">
                <img src={coffee.photo} alt="" />
                <div>
                    <h4 className="text-2xl font-bold ital">Niceties</h4>
                    <p><span className="text-lg font-bold">Name:&nbsp;&nbsp;</span> {coffee.name}</p>
                    <p><span className="text-lg font-bold">Chef:&nbsp;&nbsp;</span> {coffee.chef}</p>
                    <p><span className="text-lg font-bold">Supplier:&nbsp;&nbsp;</span> {coffee.supplier}</p>
                    <p><span className="text-lg font-bold">Price:&nbsp;&nbsp;</span> {coffee.price}Tk</p>
                    <p><span className="text-lg font-bold">Category:&nbsp;&nbsp;</span> {coffee.category}</p>
                    <p><span className="text-lg font-bold">Details:&nbsp;&nbsp;</span> {coffee.details}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
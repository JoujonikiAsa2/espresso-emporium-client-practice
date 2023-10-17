import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import cover from "../../assets/images/404/404.gif"
const ErrorPage = () => {
    return (
        <div>
            <div className="md:max-w-4xl lg:max-w-5xl mx-auto my-20 p-6">
                <div className="mb-8">
                    <Link to='/' className=" flex gap-3 justify-center items-center">
                        <FiArrowLeft></FiArrowLeft>Back To Home
                    </Link>
                </div>
                <div>
                    <img src={cover} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
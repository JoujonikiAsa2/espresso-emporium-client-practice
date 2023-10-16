import { Link } from "react-router-dom";

const UpdateCoffee = () => {
    return (
        <div className="max-w-7xl mx-auto p-24 my-20">
            <div className="mb-8"><Link to='/' className=" flex gap-3 items-center"><FiArrowLeft></FiArrowLeft>Back To Home</Link></div>
            <div className=" bg-[#F4F3F0]">
                <div className="text-center py-8 space-y-4 ">
                    <h2 className="text-2xl italic font-bold font-raleway">Update Existing Coffee Details</h2>
                    <p className="text-sm">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form className="space-y-4 font-rancho">
                    <div className="flex gap-4  items-center">
                        <div className="form-control w-1/2">
                            <label className="">
                                <span className="">Name</span>
                            </label>
                            <input type="text" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="">
                                <span className="">Chef</span>
                            </label>
                            <input type="text" name="chef" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="form-control w-1/2">
                            <label className="">
                                <span className="">Supplier</span>
                            </label>
                            <input type="text" name="supplier" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="">
                                <span className="">Taste</span>
                            </label>
                            <input type="text" name="test" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="form-control w-1/2">
                            <label className="">
                                <span className="">Category</span>
                            </label>
                            <input type="text" name="category" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="">
                                <span className="">Details</span>
                            </label>
                            <input type="text" name="details" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex gap-4 items-center flex-col">
                        <div className="form-control w-full">
                            <label className="">
                                <span className="">Photo</span>
                            </label>
                            <input type="text" name="photo" className="input input-bordered " />
                        </div>
                        <div className="form-control w-full">
                            <input type="submit" value="Update Coffee Details" className="input input-bordered font-bold italic bg-[#D2B48C]" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
    const navigate = useNavigate()

    const handleAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        // console.log(name, chef,supplier,test,category,details,photo)
        const coffee = { name, chef, supplier, price, category, details, photo }

        fetch('https://espresso-emporium-server-practice-ckrso2ovw.vercel.app/coffee', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(coffee)
        })
        .then(res=>res.json())
        .then(data=>
            {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfull!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      navigate('/')
                }
            })
    }
    return (

        <div className="md:max-w-4xl lg:max-w-5xl mx-auto my-20 p-6">
            <div className="mb-8"><Link to='/' className=" flex gap-3 items-center"><FiArrowLeft></FiArrowLeft>Back To Home</Link></div>
            <div className=" bg-[#F4F3F0] p-12 md:p-8 lg:p-20">
                <div className="text-center pb-8 space-y-4 px-4">
                    <h2 className="text-2xl italic font-bold font-raleway">Add New Coffee</h2>
                    <p className="text-sm">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form className="space-y-4 font-rancho" onSubmit={handleAddCoffee}>
                    <div className="flex lg:flex-row md:flex-col flex-col  gap-4  items-center">
                        <div className="form-control w-full md:w-1/2 lg:w-1/2">
                            <label className="">
                                <span className="">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control w-full md:w-1/2 lg:w-1/2">
                            <label className="">
                                <span className="">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered" required/>
                        </div>
                    </div>
                    <div className="flex lg:flex-row md:flex-col flex-col gap-4 items-center">
                        <div className="form-control w-full md:w-1/2 lg:w-1/2">
                            <label className="">
                                <span className="">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered" required/>
                        </div>
                        <div className="form-control w-full md:w-1/2 lg:w-1/2">
                            <label className="">
                                <span className="">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Enter coffee price" className="input input-bordered" required/>
                        </div>
                    </div>
                    <div className="flex lg:flex-row md:flex-col flex-col gap-4 items-center">
                        <div className="form-control w-full md:w-1/2 lg:w-1/2">
                            <label className="">
                                <span className="">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered" required/>
                        </div>
                        <div className="form-control w-full md:w-1/2 lg:w-1/2">
                            <label className="">
                                <span className="">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered" required/>
                        </div>
                    </div>
                    <div className="flex  flex-col gap-4 items-center">
                        <div className="form-control w-full md:w-1/2 lg:w-1/2 lg:w-full">
                            <label className="">
                                <span className="">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered " required/>
                        </div>
                        <div className="form-control w-full md:w-1/2 lg:w-1/2 lg:w-full pb-8 lg:pb-10">
                            <input type="submit" value="Add Coffee" className="input input-bordered font-bold italic bg-[#D2B48C]" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
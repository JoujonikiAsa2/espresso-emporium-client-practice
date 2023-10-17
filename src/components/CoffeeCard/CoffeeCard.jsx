import { Link } from "react-router-dom";
import { FiEdit, FiEye } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import PropTypes from 'prop-types'
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    

    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== id);
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div className="flex w-full justify-center items-center gap-4 border-2 shadow rounded pr-8">
            <img src={coffee.photo} alt="" className="w-48 h-60" />
            <div className="font-raleway">
                <p className="text-sm w-36"><span className="text-sm font-bold">Name: </span> {coffee.name}</p>
                <p className="text-sm w-36"><span className="text-sm font-bold">Chef: </span> {coffee.chef}</p>
                <p className="text-sm w-36"><span className="text-sm font-bold">price: </span> {coffee.price}</p>
            </div>
            <div className="flex flex-col text-sm gap-2">
                <Link to='/coffeeDetails' className="flex justify-center items-center w-10 h-12 bg-[#D2B48C] rounded-lg text-white text-lg"><button><FiEye></FiEye></button></Link>
                <Link to={`updateCoffee/${coffee._id}`} className="flex justify-center items-center w-10 h-12 bg-[#3C393B] rounded-lg text-white text-lg"><button><FiEdit></FiEdit></button></Link>
                <Link className="flex justify-center items-center w-10 h-12 bg-[#EA4744] rounded-lg text-white text-lg"><button onClick={() => handleDelete(coffee._id)}><AiFillDelete></AiFillDelete></button></Link>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.object,
    setCoffees: PropTypes.func
}

export default CoffeeCard;
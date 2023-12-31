import bg from '../../assets/images/more/3.png'
import icon1 from '../../assets/images/icons/1.png'
import icon2 from '../../assets/images/icons/2.png'
import icon3 from '../../assets/images/icons/3.png'
import icon4 from '../../assets/images/icons/4.png'
import { FiCoffee } from 'react-icons/fi'
import { Link, useLoaderData } from 'react-router-dom'
import InstaPhoto from '../InstaPhoto/InstaPhoto'
import { useEffect, useState } from 'react'
import CoffeeCard from '../CoffeeCard/CoffeeCard'

const Home = () => {

    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees);
    const [favorites, setFavorite] = useState([])
    useEffect(() => {
        fetch('./favorite.json')
            .then(res => res.json())
            .then(data => setFavorite(data))
    }, [])
    return (
        <div>
            <div>
                <div className="hero min-h-screen relative" style={{ backgroundImage: `url(${bg})` }}>

                </div>
                <div className="hero-content absolute left-[10vw] md:left-[30vw] lg:left-[30vw] top-[35vh] md:bottom-[20vh] lg:bottom-[10vh]">
                    <div className="w-1/2 text-[#FFF]">
                        <h1 className="mb-5 text-2xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 font-raleway text-sm font-thin">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn btn-sm font-raleway capitalize text-[#313131] bg-[#E3B577] hover:bg-transparent">Learn More</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row md:flex-row w-full items-center gap-3 py-8  md:px-28 lg:px-36 bg-[#ECEAE3] text-center'>
                <div className='md:w-1/4 lg:w-1/4 space-y-2 flex flex-col justify-center items-center'>
                    <img src={icon1} alt="" className='w-36 h-36md:w-12 md:h-12 lg:w-12 lg:h-12'/>
                    <h2 className='text-xl font-bold'>Awesome Aroma</h2>
                    <p className='flex-wrap text-sm text-[#313131]'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='md:w-1/4 lg:w-1/4  space-y-2 flex flex-col justify-center items-center'>
                    <img src={icon2} alt="" className='w-36 h-36md:w-12 md:h-12 lg:w-12 lg:h-12'/>
                    <h2 className='text-xl font-bold'>High Quality</h2>
                    <p className='flex-wrap'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='md:w-1/4 lg:w-1/4  space-y-2 flex flex-col justify-center items-center'>
                    <img src={icon3} alt="" className='w-36 h-36md:w-12 md:h-12 lg:w-12 lg:h-12'/>
                    <h2 className='text-xl font-bold'>Pure Grades</h2>
                    <p className='flex-wrap text-sm text-[#313131]'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='md:w-1/4 lg:w-1/4  space-y-2 flex flex-col justify-center items-center'>
                    <img src={icon4} alt="" className='w-36 h-36md:w-12 md:h-12 lg:w-12 lg:h-12'/>
                    <h2 className='text-xl font-bold'>Proper Roasting</h2>
                    <p className='flex-wrap text-sm text-[#313131]'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
            <div className='flex flex-col space-y-3 justify-center items-center py-12 '>
                <p className=' font-raleway text-2xl'>--- Sip & Savor ---</p>
                <h2 className='text-3xl font-bold'>Our Popular Products</h2>
                <Link to="/addCoffee" className='pb-12'><button className='btn btn-sm capitalize font-medium bg-[#E3B577] hover:bg-transparent'>Add Coffee <FiCoffee></FiCoffee></button></Link>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 max-w-5xl mx-6 md:mx-12 lg:mx-auto gap-3 md:gap-6 lg:gap-12'>
                    {
                        coffees.map(coffee => <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}></CoffeeCard>)
                    }
                </div>
            </div>
            <div className='flex flex-col space-y-5 justify-center items-center py-6'>
                <p className=' font-raleway text-sm'>--- Follow Us Now ---</p>
                <h2 className='text-3xl font-bold'>Follow on Instagram</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 px-4 py-12 md:gap-12 lg:gap-12 max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto'>
                    {
                        favorites.map(favorite => <InstaPhoto key={favorite.id} favorite={favorite}></InstaPhoto>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
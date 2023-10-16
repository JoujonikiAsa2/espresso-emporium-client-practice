import logo from '../../assets/images/more/logo1.png'
import bg from '../../assets/images/more/15.jpg'
const Header = () => {
    return (
        <div>
            <div className="flex justify-center items-center py-4" style={{backgroundImage: `url(${bg})`}}>
                <img src={logo} alt="" className='w-12 h-16'/>
                <h2 className=' text-4xl text-[#FFF]'>Espresso Emporium</h2>
            </div>
        </div>
    );
};

export default Header;
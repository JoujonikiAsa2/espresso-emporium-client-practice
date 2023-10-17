import logo from '../../assets/images/more/logo1.png'
import bg from '../../assets/images/more/13.jpg'
import {AiFillFacebook, AiFillHome, AiFillLinkedin, AiFillPhone, AiFillTwitterCircle, AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai'
const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row justify-between  gap-10 items-center py-12 md:px-16 lg:px-36' style={{backgroundImage: `url(${bg})`}}>
            <div className='w-1/2 space-y-4'>
                <img src={logo} alt="" className='w-12 h-16' />
                <h3 className='text-2xl'>Espresso Emporium</h3>
                <p className='w-full text-xs'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className='flex gap-2'>
                    <AiFillFacebook className=' w-8 h-8'></AiFillFacebook>
                    <AiFillTwitterCircle className=' w-8 h-8'></AiFillTwitterCircle>
                    <AiOutlineInstagram className=' w-8 h-8'></AiOutlineInstagram>
                    <AiFillLinkedin className=' w-8 h-8'></AiFillLinkedin>
                </div>
                <h3 className='text-2xl'>Get in Touch</h3>
                <div className='text-sm'>
                    <div className='flex gap-3 items-center'>
                        <AiFillPhone></AiFillPhone>
                        <p>+88 01533 333 333</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <AiOutlineMail></AiOutlineMail>
                        <p>info@gmail.com</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <AiFillHome></AiFillHome>
                        <p>72, Wall street, King Road, Dhaka</p>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <h3 className='text-2xl'>Connect with Us</h3>
                <form className='flex flex-col space-y-3'>
                    <input type="text" className='input input-bordered rounded w-full hover:shadow-lg hover:border-yellow-200' placeholder='Name'/>
                    <input type="text" className='input input-bordered rounded w-full hover:shadow-lg hover:border-yellow-200' placeholder='Email'/>
                    <input type="textarea" className="textarea textarea-bordered textarea-lg w-full hover:shadow-lg hover:border-yellow-200"  placeholder='Message'/>
                    <input type="submit" value="Send Message" className='border-2 border-black rounded-full lg:w-1/5 ' />
                </form>
            </div>
        </div>
    );
};

export default Footer;
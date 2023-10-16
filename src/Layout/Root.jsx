import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function Root() {

  return (
    <div className='font-rancho'>
      <Header></Header>
      <Outlet></Outlet>
      <div className=''>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default Root

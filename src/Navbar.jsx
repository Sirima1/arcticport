import image from './assets/a.jpg'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu,AiOutlineTwitter,AiFillMessage } from 'react-icons/ai'

const Navbar = () => {

  return (
    <div className='lg:mb-4 flex my-1 p-4 xs:gap-2 text-slate-100 mx-auto items-center justify-between  w-full bg-transparent text-lg font-semibold'>
    <img src={image}  alt ='ai' className='w-[70px] hover:scale-125 '/> 
    <h1 className='flex flex-col hover:underline xs:none' >Home</h1>
    <h1 className='hover:underline xs:none' >Projects</h1>
    <NavLink to='/contact' className='hover:underline xs:none' id='skill'> Skills </NavLink>
   
    <h1 className='hover:underline xs:none'>Experience</h1>  
    <div className='flex justify-between  overflow-hidden  items-center gap-2 xs:none'>
    <AiOutlineTwitter className='text-xl hover:text-blue-900' />
    <AiFillMessage className='text-xl '/>
    <AiOutlineMenu  className='text-xl'/>   
    </div>
   
    
    </div>
  )
}

export default Navbar
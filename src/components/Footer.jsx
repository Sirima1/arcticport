import { Link } from 'react-router-dom'
import image from '../../src/assets/a.jpg'
import {   AiFillMessage,  AiOutlineCopyrightCircle, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
    <div className='mt-4 ml-9 mb-4  gap-4 grid lg:grid-cols-2'>
    <div>
    <img src={image} alt="kameme" />

    </div>
    
    <div className=' flex flex-col justify-center gap-4'>
    <h1>Cotact Us</h1>
      <Link to="mailto:amossirima2020@gmail.com"> Email : amossirima2020@gmail.com</Link>
      <Link href="tel:+254111750386" > Call or message : +254111750386</Link>
      
      <div className='flex gap-4'>
      <AiOutlineMail  className='text-white text-3xl'/>
      <AiOutlinePhone  className='text-white text-3xl'/>
      <AiFillMessage  className='text-white text-3xl'/>
      </div>

    </div>
    
    <h3 className='font-semibold lg:ml-[340px] text-base flex justify-center mb-3 align-center'>All rights Reserved, Copyright  <AiOutlineCopyrightCircle className=' text-lg mt-1 mx-1' />2023</h3>

    </div>
    </div>
  ) 
}

export default Footer
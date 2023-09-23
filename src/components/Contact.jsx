import { motion } from 'framer-motion';

const Contact = ({id}) => {

  return (
    <div id='contact' className="bg-transparent rounded-lg  mt-4  lg:p-7 p-4 mx-9 my-2 lg:mx-4 lg:my-2">
    <motion.h1 
    initial ={{y:75}}
    whileInView={{y:0}}
    transition={{
      duration:2.5,
      delay:.1,
      type:'tween'

    }}
    className="align-center justify-center flex text-white text-xl hover:capitalize cursor-pointer"
    
    >Skills</motion.h1>
    <div>
    <motion.p 
    initial={{x:-100}}
    whileInView={{x:0}}
    transition={{
      duration:2.5,
      delay:.45,
      type:'tween',
      ease:'easeInOut'
    }}
    className='leading-4 mt-4 xs:w-full xs:mx-9 mx-9' >I Have 5 years Experience in the field of Information Technology with Expertise in the following technologies;-
    Javascript,Html,Css3 python,Django ,NodeJs,Express Js.Apart from the development technologies, I have learnt several cyber Security  skills to gain expertise in the field of IT
    
    </motion.p>
    <div id="skill" className="lg:flex mt-4 block gap-8 items-center justify-center mx-9 ">
    <h1 className="font-bold">Web Development <span className="flex p-5  font-bold text-xl">90%</span></h1>
    <h1 className="font-bold">Cyber Security  <span className="flex flex-row font-bold text-xl p-5">87%</span> </h1>
    <h1 className="font-bold" >Django  <span className="sm:mx-9  font-bold p-5 flex text-xl">95%</span></h1>
    <h1 className="font-bold" >Python  <span className="font-bold p-5 flex text-xl">95%</span></h1>
    <h1 className="font-bold">Ethical Hacking <span className="font-bold p-5 text-xl flex">89%</span></h1>
    <h1 className="font-bold">Hardware Skills  <span className="flex p-5 text-xl font-bold">81%</span></h1>
    </div>
    </div>
    
    </div>
  )
}

export default Contact
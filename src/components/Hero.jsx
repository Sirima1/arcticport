import { AiOutlineArrowRight } from "react-icons/ai";
import  Image from "../../src/assets/sifa.jpeg";
import { motion } from "framer-motion";

const Hero = ({id}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 ">
      <motion.div 
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ 
        duration: 1,
        type: "tween",
        ease: "easeInOut",
        delay: 0.5
        
      
      }}
      className="flex flex-col justify-center items-start my-4 mx-9 lg:ml-5">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to <span className="text-blue-900">My Portfolio</span></h1>
        <p className="text-slate-900 mt-4 text-lg leading-8">Hi! I AM AMOS SIRIMA , FULL STACK DEVELOPER</p>
        <p className="text-slate-900 mt-4">I am a full stack developer with a passion for building web applications and solving problems. I am a fast learner and I am always looking for new challenges. I am a team player and I am always willing to learn new things from my team members. I am a fast learner and I am always looking for new challenges. I am a team player and I am always willing to learn new things from my team members.</p>
        <p className="mt-4 text-blue-900 flex">Let us Connect <AiOutlineArrowRight className="mt-1 ml-2" /> </p>
        </motion.div>

        <motion.div
      	initial ={{y:100}}
        whileInView={{y:0}} 
        transition={{
          duration:2.5,
          type:'tween',
          delay:.45
        }}      
        className="cols-span-2 mx-4">
        <img src={Image} alt="port" className='rounded-[70%] my-[90px] '  width='400px'  />
        
        </motion.div>

    </div>
  )
}

export default Hero
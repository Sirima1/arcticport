
import  Anime from "../../src/assets/anime.png";

const About = () => {
  return (
    <div className='container'>
    <div className="font-semibold grid lg:grid-cols-2 mb-2 ml-2 mr-2 lg:mx-9 mt-8 gap-6">
    <div className="cols-span-1 ">
    <img src={Anime} alt="Sifa2.png" className="round-md w-[500px] mx-2 md:mx-4" />
    </div>
    <div>
    <h1 className="font-bold m-3 col-span-1">Get In Touch</h1>
    <div className="cols-span-2">
     <form action="" className="bg-transparent flex  p-2 lg:p-4 flex-col gap-3 sm:m-1 lg:mx-2">
    <input type="text" placeholder="Full Name"  className="bg-transparent border-2 rounded-md md:mx-2 mx-1 p-2"/>
    <input type="email" name="" id="" placeholder="Email"  className="bg-transparent border-2  md:mx-2 mx-1 rounded-md p-2" />
    <input type="tel" placeholder="+254700002211"  className="bg-transparent border-2  md:mx-2 mx-1 rounded-md p-2"/>
    <label htmlFor="info"></label>
    <textarea name="info" id="info" cols="30" rows="10" placeholder="message" className="p-2  md:mx-2 mx-1 rounded-lg text-slate-900 bg-transparent border-2"></textarea>
    <button type="submit" className="lg:mx-[200px] mx-[200px] md:mx-[230px] bg-slate-600 rounded-md px-5 lg:py-2">Send</button>
    </form>
    </div>
     
    </div>
    </div>
    <div className="lg:flex  mx-9 align-center justify-between text-blue-900 bg-slate-50 font-semibold border-2 p-9 rounded-xl">
    <h1>Subscribe to Our Newsletter & Never miss our latest Updates!</h1>
    <input type="email" name="" id="" placeholder="Email address" className="text-dark bg-transparent border-2 lg:p-2 p-1/2 rounded-lg" />
    <button type="submit" className="bg-slate-900 sm:px-1 lg:px-3 text-white lg:py-2 sm:py-1/2 rounded-lg">submit</button>
    </div>
    </div>
  )
}

export default About
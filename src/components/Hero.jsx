
import { styles } from "../styles"
import { ComputersCanvas } from './canvas'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
       <div className={`absolute ${styles.paddingX} inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 h-40 md:h-80 rounded-full violet-gradient"></div>
        </div>
        <div >
           <h1 className={`${styles.heroHeadText}`}>HI I&apos;m <span className="text-[#915eff]">Horidas Roy</span></h1>
           <p className={`${styles.heroSubText} mt-2`}>
            I am a frontend developer.
           </p>
        </div>
       </div>
       
       <ComputersCanvas></ComputersCanvas>


       <div className=" xs:bottom-10 bottom-32 flex justify-center items-center w-full">
         <a href="#about">
         <div className="w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start pt-2">
           <motion.div
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
         </div>
         </a>

       </div>
    </section>
  )
}

export default Hero
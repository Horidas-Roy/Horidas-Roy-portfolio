/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt"
import {motion, spring} from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn,textVariant } from '../Utils/motion'
import { SectionWraper } from "../hoc"

const ServiceCard=({service})=>{
  const {title,index,icon}=service
  return(
    <>
      <Tilt className="xs:w-[250px] w-full">
         <motion.div
          variants={fadeIn('right',"spring",0.5*index,0.75)}
          className="w-full green-pink-gradient p-1 rounded-[20px] shadow-card"
         >
          <div 
           options={{
             max:45,
             scale:1,
             speed:450
           }}
           className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
          <img src={icon} alt={title} className="h-16 w-16 object-contain"></img>
          <h2 className="text-white text-[20px] font-bold text-center">{title}</h2>
          </div>

         </motion.div>
      </Tilt>
    </>
  )
}

const About = () => {
  return (
    <>
    <motion.div>
       <p className={styles.sectionSubText}>Introduction</p>
       <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
     variants={fadeIn('','','0.1',1)}
     className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
       I&nbsp;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&nbsp;m a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&nbsp;s work together to bring your ideas to life!
    </motion.p>
    <div className="mt-20 flex flex-row flex-wrap gap-10">
      {services.map((service,index)=><ServiceCard key={service.title}  index={index} service={service}></ServiceCard>)}
    </div>
    </>
  )
}

export default SectionWraper(About, "about")
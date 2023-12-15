/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import {motion} from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWraper } from "../hoc"
import { fadeIn, textVariant } from "../Utils/motion"

const ExperienceCard=({experience})=>{
   return (
     <VerticalTimelineElement
      contentStyle={{background:"#1d1836",color:"#fff" }}
      contentArrowStyle={{borderRight:"7px solid #232631"}}
      date={experience.date}
      iconStyle={{background:experience.iconBg}}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
          src={experience.icon}
          alt={experience.company_name}
          className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
     >
       <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary font-semibold" style={{margin:0}}>{experience.company_name}</p>
       </div>
       <ul className="mt-5 list-disc ml-5 space-y-2">
         {
          experience.points.map((point,index)=>(
            <li key={index}
             className="text-white text-base pl-1 tracking-wider"
            >
             {point}
            </li>
          ))
         }
       </ul>
     </VerticalTimelineElement>
   )
}

const Experience = () => {
  return (
    <>
    <motion.div variants={fadeIn('','',0.1,1)} initial="hidden" whileInView={"show"}>
        <p className={styles.sectionSubText}>What I have done so far</p>
       <h2 className={styles.sectionHeadText}>Work Experience</h2>
    </motion.div>
       <div className="mt-20 flex flex-col">
         <VerticalTimeline>
          {experiences.map((experience,index)=><ExperienceCard key={index} experience={experience}></ExperienceCard>)}
         </VerticalTimeline>
     </div>
    </>
  )
}

export default SectionWraper(Experience,"work")
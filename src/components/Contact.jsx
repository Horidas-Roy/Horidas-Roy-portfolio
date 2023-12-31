/* eslint-disable react-refresh/only-export-components */
import { useState, useRef } from "react"
import {motion} from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWraper } from "../hoc"
import { slideIn } from "../Utils/motion"
import Swal from "sweetalert2"

const Contact = () => {
   const formRef=useRef()
   const [form,setForm]=useState({
      name:'',
      email:'',
      message:''
   })

   const [loading,setLoading]=useState(false)

   const handleChange=(e)=>{
      const {name,value}=e.target
      setForm({...form, [name]:value})
   }

   const handleSubmit=(e)=>{
       e.preventDefault()
       setLoading(true)

       emailjs.send(
        import.meta.env.VITE_serviceID,
        import.meta.env.VITE_templateKey,
        {
          from_name:form.name,
          to_name:"Horidas Roy",
          from_email:form.email,
          to_email:'royhoridas64@gmail.com',
          message:form.message
        },
        import.meta.env.VITE_publicKey
       )
       .then(()=>{
        setLoading(false)
        Swal.fire("Thank you.I will get back to you as soon as possible.");
        setForm({
          name:'',
          email:'',
          message:''
         })
       }),(error)=>{
         setLoading(false)
         console.log(error)
         Swal.fire("Something went wrong")
       }

       
   }

   


  return (
    <div className="xl:mt-12 lg:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
       variants={slideIn('left',"tween",0.2,1)}
       className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
       <p className={`${styles.sectionSubText}`}>Get in touch</p>
       <h2 className={`${styles.sectionHeadText}`}>Contacts</h2>
        <form
         ref={formRef}
         onSubmit={handleSubmit}
         className="mt-12 flex flex-col gap-8"
        > 
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
           <input 
           type="text"
           name="name"
           value={form.name}
           onChange={handleChange}
           placeholder="what's your Name"
           className="bg-tertiary px-6 py-4 placeholder:text-secondary rounded-lg text-white outline-none border-none font-medium"
           />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Email</span>
           <input 
           type="email"
           name="email"
           value={form.email}
           onChange={handleChange}
           placeholder="what's your Email"
           className="bg-tertiary px-6 py-4 placeholder:text-secondary rounded-lg text-white outline-none border-none font-medium"
           />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
           <textarea 
            rows={'7'}
           name="message"
           value={form.message}
           onChange={handleChange}
           placeholder="what's you wnat to say?"
           className="bg-tertiary px-6 py-4 placeholder:text-secondary rounded-lg text-white outline-none border-none font-medium"
           />
        </label>
        <button 
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
         {loading ? "sending..." : "send"}
        </button>

        </form>
      </motion.div>
      <motion.div
       variants={slideIn("right",'tween',0.2,1)}
       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
       <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWraper(Contact,"contact")
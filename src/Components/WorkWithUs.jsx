import React, { useEffect, useState,useRef  } from "react";
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { BsTwitter } from "react-icons/bs";
import axios from "axios";
import { Warning } from "postcss";

const WorkWithUs = ({message1}) => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; 
  const mobileNumberRegex = /^\d{10}$/;
  if ( message.trim().length<5 || name.trim().length < 3 || !mobileNumberRegex.test(whatsapp) || !emailRegex.test(email)) {
      setWarning(true);
    } else {
      emailjs.sendForm('service_0aa48bf', 'template_ychply3', form.current, 'QAm1-pFic6dejz0sh')
      .then((result) => {  
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
      });
      setWarning(false);
    }
   
  };
  useEffect(() => {
    setSuccess(false);
    setWarning(false);
  }, []);

  return (
    <div className=" justify-center p-10 pb-10 lg:pb-20 flex gap-32 lg:flex-row  flex-wrap text-5xl lg:text-6xl pt-8 leading-14 lg:leading-16 tracking-[4px] lg:tracking-[6px]">
      <>
        <div className="flex flex-col justify-center items-center lg:items-end">
          <div className="w-[300px] lg:w-[450px] p-5 lg:pl-10 lg:p-2 text-center">
            {message1?.length>0?message1:"FOR ANY QUERIES LEAVE US A MESSAGE!"}
          </div>
        
        </div>
      </>
      <>
      <form ref={form} onSubmit={handleSubmit} >
        <div className=" flex flex-col gap-4 items-center  lg:pl-16 justify-center  ">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            name="message"
            placeholder="Type your message"
            className=" font2 border-2 border-gray-900 p-4  text-sm h-32 lg:h-64 lg:w-[560px] md:[450px]  w-[300px]"
          />
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 ">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="User_name"
              placeholder="Your name"
              className="font2 border-2 border-gray-900 p-4 text-sm h-16 w-[300px] text-gray-900 lg:w-[260px]"
            />
            <input
              onChange={(e) => setWhatsapp(e.target.value)}
              type="text"
              name="Mobile_number"
              placeholder="Your whatsapp number"
              className="font2 border-2 border-gray-900 p-4 text-sm h-16 w-[300px]  lg:w-[260px]"
            />
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="User_email"
            placeholder="Your Email"
            className=" font2 border-2 p-4  border-gray-900 text-sm h-16 lg:w-[560px] w-[300px]"
          />

          <button type="submit"
            onClick={handleSubmit}
            href="#_"
            class="relative inline-block text-lg group"
          >
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium w-[300px] lg:w-[560px] leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900  group-hover:text-white">
              <span class="absolute inset-0  w-full h-full px-5 py-3  bg-gray-50"></span>
              <span class="absolute left-0 w-[600px] h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
              <span class="relative flex justify-center">Send</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900  group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>

          {warning && (
            <div className="text-red-700 text-sm font2 tracking-normal ">
              *All Fields Are Mandatory
            </div>
          )}
          {success && (
            <div className="text-green-700 text-sm font2 tracking-normal">
               <Popup  
               open={success}
               closeOnEscape={false}
               closeOnDocumentClick={false}
 contentStyle={{
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
 }}
               >
                <div className=" text-2xl text-green-500 p-3 flex flex-col  items-center ">
                <p>"Thank you for submitting your queries</p>
                 <p>Our officials will get back to you soon.."</p>
               <button onClick={()=>setSuccess(false)} className="  mt-2 bg-black text-white p-1 w-10 ">Ok</button>
                </div>
    
  </Popup>

              Thank you for submitting your Queries, Our team will get back to you soon..

            </div>
          )}
        </div>
        </form>
      </>
    </div>
  );
};

export default WorkWithUs;

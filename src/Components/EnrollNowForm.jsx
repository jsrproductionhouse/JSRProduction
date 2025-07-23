import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import courses from "../assets/courses.json";

const EnrollNowForm = ({ selectedCourse = "" }) => {
  const form = useRef();
  const [course, setCourse] = useState(
    selectedCourse != "" ? selectedCourse : courses[0].title
  );
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const mobileNumberRegex = /^\d{10}$/;

    if (
      !course ||
      name.trim().length < 3 ||
      !mobileNumberRegex.test(whatsapp) ||
      !emailRegex.test(email)
    ) {
      setWarning(true);
      return;
    }

    // Create dynamic message for email
    const messageField = form.current.querySelector("[name='message']");
    if (messageField) {
      messageField.value = `I am interested in the "${course}" course.`;
    }

    emailjs
      .sendForm(
        "service_8vwmq6l",
        "template_ychply3",
        form.current,
        "T2W2V104-bNcVWGt7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setWarning(false);
  };

  useEffect(() => {
    setSuccess(false);
    setWarning(false);
    setCourse(selectedCourse || courses[0]?.title || "");
  }, [selectedCourse]);

  return (
    <div className="justify-center p-10 pb-10 lg:pb-20 flex gap-12 lg:flex-row flex-wrap text-5xl lg:text-6xl pt-8 leading-14 lg:leading-16 tracking-[4px] lg:tracking-[6px]">
      {/* Form Section */}
      <form ref={form} onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 items-center lg:pl-16 justify-center">
          {/* Hidden message for email content */}
          <textarea name="message" className="hidden" readOnly />

          {/* Course selection */}
          <select
            name="Selected_Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="font2 border-2 cursor-pointer border-gray-900 p-4 text-sm h-16 lg:w-[560px] w-[300px] text-gray-900"
          >
            <option value="">Select a course</option>
            {courses.map((c, idx) => (
              <option key={idx} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>

          {/* Name and WhatsApp */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
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
              className="font2 border-2 border-gray-900 p-4 text-sm h-16 w-[300px] lg:w-[260px]"
            />
          </div>

          {/* Email */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="User_email"
            placeholder="Your Email"
            className="font2 text-black border-2 p-4 border-gray-900 text-sm h-16 lg:w-[560px] w-[300px]"
          />

          {/* Submit Button */}
          <button type="submit" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium w-[300px] lg:w-[560px] leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 bg-gray-50"></span>
              <span className="absolute left-0 w-[600px] h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
              <span className="relative flex justify-center">Send</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>

          {/* Validation & Success Messages */}
          {warning && (
            <div className="text-red-700 text-sm font2 tracking-normal">
              *All Fields Are Mandatory
            </div>
          )}
          {success && (
            <Popup
              open={success}
              closeOnEscape={false}
              closeOnDocumentClick={false}
              contentStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="text-2xl text-green-500 p-3 flex flex-col items-center">
                <p>Thank you for submitting your query!</p>
                <p>Our officials will get back to you soon.</p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-2 bg-black text-white p-1 w-10"
                >
                  Ok
                </button>
              </div>
            </Popup>
          )}
        </div>
      </form>
    </div>
  );
};

export default EnrollNowForm;

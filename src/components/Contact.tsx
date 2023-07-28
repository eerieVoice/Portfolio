import React from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function Contact() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success('Message Sent!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          HTMLFormElement.prototype.reset.call(e.target);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="border-t-4 border-textnani border-opacity-5 bg-backg py-[2.5em]"
      id="contact"
    >
      <div className="mx-auto my-0 w-[85%] max-w-[1200px]">
        <h1 className="mb-[1.25em] font-header text-xl uppercase text-primarypo">
          Get in Touch with Me
        </h1>
        <form
          onSubmit={sendEmail}
          className="flex max-w-3xl flex-col gap-[1.5em] lg:w-[60%]"
        >
          <div className="flex w-[100%] flex-row justify-between">
            <input
              name="first_name"
              type="text"
              className="w-[48%] rounded-md bg-textnani p-[0.5em] text-backg"
              placeholder="First Name"
              required
            />
            <input
              name="last_name"
              type="text"
              className="w-[48%] rounded-md bg-textnani p-[0.5em] text-backg"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            name="user_email"
            type="email"
            placeholder="Email"
            className="rounded-md bg-textnani p-[0.5em] text-backg"
            required
          />
          <textarea
            name="message"
            style={{ resize: 'none' }}
            rows={5}
            placeholder="Message"
            className="rounded-md bg-textnani p-[0.5em] text-backg"
            required
          />
          <input
            type="submit"
            value="Send"
            className="w-fit rounded border border-accentpo bg-transparent px-[1.5em] py-[0.5em] font-semibold text-textnani duration-200 
            hover:scale-105 hover:cursor-pointer hover:border-transparent hover:bg-accentpo hover:text-textnani active:scale-95"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.current['user_name'].value.trim() === '' || form.current['user_email'].value.trim() === '' || form.current['message'].value.trim() === '') {
      return false;
    }
    setLoading(true);

    emailjs.sendForm('service_9hropw4', 'template_hr9o0yj', form.current, '3jgwrQ0-sliGL9b4G')
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        form.current.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form ref={form} onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 pt-[80px]'>
          <p className='text-4xl font-bold inline border-b-4 border-[#9C6700] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - <a href='mailto:mfayman82@gmail.com'>mfayman82@gmail.com</a></p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='user_name' required />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='user_email' required />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
        <button className='text-white border-2 hover:bg-[#9C6700] hover:border-[#9C6700] px-4 py-3 my-8 mx-auto flex items-center' type='submit'>{!loading ? 'Send Message' : 'Sending...'}</button>
        {isFormSubmitted &&
          <p className="text-green-700 text-center">
            Thank you for getting in touch!
          </p>
        }
      </form>
    </div>
  );
};

export default Contact;
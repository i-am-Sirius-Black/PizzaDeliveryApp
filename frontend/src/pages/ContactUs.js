import React from 'react';

function ContactUs() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">Have questions or feedback? We'd love to hear from you!</p>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-semibold mb-2">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" className="border border-gray-300 rounded-md px-3 py-2 w-full"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;

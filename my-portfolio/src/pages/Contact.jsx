import React from 'react'

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-24 ">
      <div className="max-w-7xl  mx-4 rounded-xl border border-gray-900 my-4 py-6 px-12">

        {/* Heading */}
        <div className="mb-16 py-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get in <span className="text-indigo-400">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-5xl leading-relaxed text-center">
            I’m always open to new opportunities, collaborations, or just a friendly chat about technology and design.  
            Whether you want to discuss a project, share ideas, or simply say hi, feel free to reach out. I make sure to respond to messages as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Email / Message */}
          <div className="border border-gray-800 rounded-2xl p-8 hover:border-indigo-500 transition ">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Email</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You can reach me at my professional email. I check my inbox regularly and will respond promptly to your message.
            </p>
            <p className="text-gray-400 font-medium break-words">awaistanveer210@gmail.com</p>
          </div>

          {/* Phone / Chat */}
          <div className="border border-gray-800 rounded-2xl p-8 hover:border-indigo-500 transition">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Phone / Messaging</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Prefer a quick chat or call? You can reach me via phone or messaging apps. I’m available for professional inquiries during work hours.
            </p>
            <p className="text-gray-400 font-medium">+92 3181556110</p>
          </div>

        </div>

        {/* Optional Social / Additional Info */}
        <div className="mt-16 border border-gray-800 rounded-2xl p-8 hover:border-indigo-500 transition">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Connect on Socials</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I also share my projects, updates, and insights on social platforms.  
            Following me there is a great way to see what I am working on and stay in touch.
          </p>

          <ul className="space-y-3 text-gray-400 break-words">
            <li>• LinkedIn: www.linkedin.com/in/awais-tanveer-17b132389</li>
            <li>• GitHub: https://github.com/AwaisTanveer-21</li>
          
          </ul>
        </div>

        {/* Long About / Message Guidance */}
        <div className="mt-16 border border-gray-800 rounded-2xl p-8 hover:border-indigo-500 transition">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">How to Reach Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you have a project in mind, want to collaborate, or just want to say hi, feel free to send me a detailed message.  
            I appreciate clear and concise communication, which helps me respond faster and more effectively.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            While I’m always excited about new opportunities, please note that I prioritize messages related to professional work or meaningful collaboration.  
            Casual greetings are welcome too, but the response may take a little longer.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I believe every message is important and I try to reply thoughtfully. So don’t hesitate to reach out — I’m looking forward to connecting with you!
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;

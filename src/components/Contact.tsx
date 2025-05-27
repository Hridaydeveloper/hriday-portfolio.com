import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSending(true);

    emailjs.sendForm(
      'service_t0df6eb',
      'template_3ciosq9',
      formRef.current,
      '2CJLDvC3dzTRKprKf'
    ).then(() => {
      toast.success("✅ Message sent!");
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error("EmailJS Error:", error);
      toast.error("❌ Failed to send message. Try again later.");
    }).finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="pt-20">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 md:text-6xl">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  <User size={16} className="inline-block mr-2" />
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200" placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail size={16} className="inline-block mr-2" />
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200" placeholder="your.email@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare size={16} className="inline-block mr-2" />
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200 resize-none" placeholder="Tell me about your project..." />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  isSending ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send size={20} className="inline-block mr-2" />
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-400">dashriday856@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-600 p-3 rounded-lg mr-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-gray-400">+91 9615262753</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-400">Tripura, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>

              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/hriday-das-390a61286" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-600 p-4 rounded-lg text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Hridaydeveloper/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="GitHub">
                  <Github size={24} />
                </a>
                <a href="mailto:dashriday856@gmail.com?subject=Let's%20Connect&body=Hi%20Hriday%2C%20I%20visited%20your%20portfolio..." className="bg-gray-800 hover:bg-blue-500 p-4 rounded-lg text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="Email">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

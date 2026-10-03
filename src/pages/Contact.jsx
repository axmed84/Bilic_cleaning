import React from 'react'

import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Send,
  ShieldCheck,
  Users,
  Gem,
  HeartHandshake
} from 'lucide-react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import contact from '../assets/contact.png'


const Contact = () => {

  return (

    <div>

      <Navbar />


      {/* ================= PAGE Header ================= */}

      <section
        className="bg-center bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${contact})`
        }}
      >

        <div className="bg-blue-900/80">

          <div className="max-w-7xl mx-auto px-6 py-28">

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contact Us
            </h1>

            <p className="text-blue-100 mt-3">
              Home <span className="mx-2">›</span> Contact Us
            </p>

          </div>

        </div>

      </section>



      {/* ================= CONTACT ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">


          {/* Heading */}

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              Contact Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">
              Get in Touch
            </h2>

            <p className="text-slate-600 mt-4 leading-7">
              We are ready to serve you. Contact us today for
              professional cleaning and facility services.
            </p>

          </div>



          {/* Contact Content */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14">


            {/* ================= CONTACT INFORMATION ================= */}

            <div>

              <h3 className="text-2xl font-bold text-blue-950">
                Let's Talk
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                Have questions about our services or need a
                customized cleaning solution? Our team is ready
                to help.
              </p>


              <div className="mt-8 space-y-6">


                {/* Location */}

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">

                    <MapPin size={23} />

                  </div>

                  <div>

                    <h4 className="font-bold text-blue-950">
                      Location
                    </h4>

                    <p className="text-slate-600 mt-1">
                      Mogadishu, Somalia
                    </p>

                  </div>

                </div>



                {/* Phone */}

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">

                    <Phone size={23} />

                  </div>

                  <div>

                    <h4 className="font-bold text-blue-950">
                      Phone
                    </h4>

                    <p className="text-slate-600 mt-1">
                      +252 XX XXX XXXX
                    </p>

                  </div>

                </div>



                {/* WhatsApp */}

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">

                    <MessageCircle size={23} />

                  </div>

                  <div>

                    <h4 className="font-bold text-blue-950">
                      WhatsApp
                    </h4>

                    <p className="text-slate-600 mt-1">
                      +252 XX XXX XXXX
                    </p>

                  </div>

                </div>



                {/* Email */}

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">

                    <Mail size={23} />

                  </div>

                  <div>

                    <h4 className="font-bold text-blue-950">
                      Email
                    </h4>

                    <p className="text-slate-600 mt-1">
                      info@biliccleaning.com
                    </p>

                  </div>

                </div>



                {/* Website */}

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">

                    <Globe size={23} />

                  </div>

                  <div>

                    <h4 className="font-bold text-blue-950">
                      Website
                    </h4>

                    <p className="text-slate-600 mt-1">
                      www.biliccleaning.com
                    </p>

                  </div>

                </div>

              </div>

            </div>



            {/* ================= CONTACT FORM ================= */}

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8">

              <h3 className="text-2xl font-bold text-blue-950">
                Send Us a Message
              </h3>

              <p className="text-slate-600 text-sm mt-2">
                Fill out the form and our team will get back to you.
              </p>


              <form className="mt-7 space-y-5">


                {/* Name */}

                <div>

                  <label className="block text-sm font-semibold text-blue-950 mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />

                </div>



                {/* Email */}

                <div>

                  <label className="block text-sm font-semibold text-blue-950 mb-2">
                    Your Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />

                </div>



                {/* Phone */}

                <div>

                  <label className="block text-sm font-semibold text-blue-950 mb-2">
                    Your Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />

                </div>



                {/* Message */}

                <div>

                  <label className="block text-sm font-semibold text-blue-950 mb-2">
                    Your Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  ></textarea>

                </div>



                {/* Button */}

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
                >

                  <Send size={18} />

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>



      {/* ================= SERVICE VALUES ================= */}

      <section className="bg-blue-50 py-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">


            {/* Reliable Service */}

            <div className="text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-white text-blue-700 flex items-center justify-center shadow-sm">

                <ShieldCheck size={26} />

              </div>

              <h3 className="font-bold text-blue-950 mt-3">
                Reliable Service
              </h3>

            </div>



            {/* Professional Team */}

            <div className="text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-white text-blue-700 flex items-center justify-center shadow-sm">

                <Users size={26} />

              </div>

              <h3 className="font-bold text-blue-950 mt-3">
                Professional Team
              </h3>

            </div>



            {/* Quality Results */}

            <div className="text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-white text-blue-700 flex items-center justify-center shadow-sm">

                <Gem size={26} />

              </div>

              <h3 className="font-bold text-blue-950 mt-3">
                Quality Results
              </h3>

            </div>



            {/* Customer Satisfaction */}

            <div className="text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-white text-blue-700 flex items-center justify-center shadow-sm">

                <HeartHandshake size={26} />

              </div>

              <h3 className="font-bold text-blue-950 mt-3">
                Customer Satisfaction
              </h3>

            </div>

          </div>

        </div>

      </section>



      <Footer />

    </div>

  )

}


export default Contact
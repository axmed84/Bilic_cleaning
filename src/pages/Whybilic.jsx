import React from 'react'

import {
  Users,
  ShieldCheck,
  Gem,
  CalendarCheck,
  Handshake,
  CheckCircle
} from 'lucide-react'

import Navbar from '../components/navbar'
import CTA from '../components/CTA'
import Footer from '../components/footer'

import header from '../assets/header_2.png'


const WhyBilic = () => {

  return (

    <div>

      <Navbar />


      {/* ================= PAGE HEADER ================= */}

      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${header})`
        }}
      >

        <div className="bg-blue-900/80">

          <div className="max-w-7xl mx-auto px-6 py-28">

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Why Bilic
            </h1>

            <p className="text-blue-100 mt-3">
              Home <span className="mx-2">›</span> Why Bilic
            </p>

          </div>

        </div>

      </section>



      {/* ================= WHY CHOOSE BILIC ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">


          {/* Heading */}

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              Why Choose Bilic
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">
              Your Trusted Cleaning Partner
            </h2>

            <p className="text-slate-600 mt-4 leading-7">
              We are committed to delivering the highest standards
              of cleanliness, hygiene and customer care.
            </p>

          </div>



          {/* Benefits */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">


            {/* Professional Service */}

            <div className="text-center bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">

                <Users size={30} />

              </div>


              <h3 className="text-lg font-bold text-blue-950 mt-5">
                Professional Service
              </h3>


              <p className="text-sm text-slate-600 leading-6 mt-3">
                We provide structured and professional cleaning solutions.
              </p>

            </div>



            {/* Reliable Team */}

            <div className="text-center bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">

                <ShieldCheck size={30} />

              </div>


              <h3 className="text-lg font-bold text-blue-950 mt-5">
                Reliable Team
              </h3>


              <p className="text-sm text-slate-600 leading-6 mt-3">
                We value punctuality, responsibility, and consistency
              </p>

            </div>



            {/* Quality Results */}

            <div className="text-center bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">

                <Gem size={30} />

              </div>


              <h3 className="text-lg font-bold text-blue-950 mt-5">
                Quality Results
              </h3>


              <p className="text-sm text-slate-600 leading-6 mt-3">
                We focus on details and customer expectations.
              </p>

            </div>



            {/* Flexible Schedules */}

            <div className="text-center bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">

                <CalendarCheck size={30} />

              </div>


              <h3 className="text-lg font-bold text-blue-950 mt-5">
                Flexible Schedules
              </h3>


              <p className="text-sm text-slate-600 leading-6 mt-3">
                Our services can be arranged according to your requirements.
              </p>

            </div>

            {/* Competitive Pricing */}

            <div className="text-center bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">

                <CalendarCheck size={30} />

              </div>


              <h3 className="text-lg font-bold text-blue-950 mt-5">
                Competitive Pricing
              </h3>


              <p className="text-sm text-slate-600 leading-6 mt-3">
                We aim to provide professional services at fair and competitive prices.
              </p>

            </div>


            {/* Customer Focus */}

            <div className="text-center bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">

                <Handshake size={30} />

              </div>


              <h3 className="text-lg font-bold text-blue-950 mt-5">
                Customer Focus
              </h3>


              <p className="text-sm text-slate-600 leading-6 mt-3">
                Our customers are at the center of everything we do
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= OUR COMMITMENT ================= */}

      <section className="bg-blue-50 py-20">

        <div className="max-w-6xl mx-auto px-6">


          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              Our Commitment
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">
              Clean Spaces. Better Living. Better Business.
            </h2>

            <p className="text-slate-600 mt-5 leading-7">
              At Bilic Cleaning Company, we believe that a clean
              environment creates a healthier, safer and more
              productive space for everyone. Our team is committed
              to providing dependable cleaning solutions while
              maintaining professionalism, quality and customer
              satisfaction.
            </p>

          </div>



          {/* Commitment points */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">


            <div className="bg-white rounded-xl p-6 border border-blue-100">

              <CheckCircle
                className="text-blue-700"
                size={28}
              />

              <h3 className="text-lg font-bold text-blue-950 mt-4">
                High Standards
              </h3>

              <p className="text-slate-600 text-sm leading-6 mt-2">
                We maintain high standards of cleanliness and
                hygiene across every service we provide.
              </p>

            </div>



            <div className="bg-white rounded-xl p-6 border border-blue-100">

              <CheckCircle
                className="text-blue-700"
                size={28}
              />

              <h3 className="text-lg font-bold text-blue-950 mt-4">
                Professional Approach
              </h3>

              <p className="text-slate-600 text-sm leading-6 mt-2">
                Our team works with professionalism, respect
                and attention to detail.
              </p>

            </div>



            <div className="bg-white rounded-xl p-6 border border-blue-100">

              <CheckCircle
                className="text-blue-700"
                size={28}
              />

              <h3 className="text-lg font-bold text-blue-950 mt-4">
                Customer Satisfaction
              </h3>

              <p className="text-slate-600 text-sm leading-6 mt-2">
                We put our customers first and work hard to
                ensure every client is satisfied.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= CTA ================= */}

      <CTA />


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>

  )

}


export default WhyBilic
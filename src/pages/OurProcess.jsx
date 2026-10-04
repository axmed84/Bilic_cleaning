import React from 'react'

import {
  ClipboardList,
  Search,
  CalendarCheck,
  Sparkles,
  CheckCircle
} from 'lucide-react'

import Navbar from '../components/navbar'
import CTA from '../components/CTA'
import Footer from '../components/footer'

import header from '../assets/Header_2.png'


const OurProcess = () => {

  return (

    <div>

      <Navbar />


      {/* ================= PAGE HEADER ================= */}

      <section
        className="bg-cover bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${header})`
        }}
      >

        <div className="bg-blue-900/80">

          <div className="max-w-7xl mx-auto px-6 py-28">

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our Process
            </h1>

            <p className="text-blue-100 mt-3">
              Home <span className="mx-2">›</span> Our Process
            </p>

          </div>

        </div>

      </section>



      {/* ================= PROCESS INTRO ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">


          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              Our Process
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">
              Simple, Professional & Reliable
            </h2>

            <p className="text-slate-600 mt-4 leading-7">
              We follow a simple and organized process to make sure
              every cleaning service is delivered professionally,
              efficiently and according to your needs.
            </p>

          </div>



          {/* ================= PROCESS STEPS ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">


            {/* Step 1 */}

            <div className="relative bg-white border border-slate-200 rounded-xl p-7 text-center shadow-sm hover:shadow-lg transition">

              <div className="absolute top-5 left-5 text-blue-100 text-5xl font-bold">
                01
              </div>


              <div className="relative w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">

                <ClipboardList size={30} />

              </div>


              <h3 className="text-xl font-bold text-blue-950 mt-6">
                Tell Us Your Needs
              </h3>


              <p className="text-slate-600 text-sm leading-6 mt-3">
                Contact us and tell us about your space,
                cleaning requirements and preferred service.
              </p>

            </div>



            {/* Step 2 */}

            <div className="relative bg-white border border-slate-200 rounded-xl p-7 text-center shadow-sm hover:shadow-lg transition">

              <div className="absolute top-5 left-5 text-blue-100 text-5xl font-bold">
                02
              </div>


              <div className="relative w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">

                <Search size={30} />

              </div>


              <h3 className="text-xl font-bold text-blue-950 mt-6">
                Assessment & Quote
              </h3>


              <p className="text-slate-600 text-sm leading-6 mt-3">
                We understand your requirements and provide
                a suitable cleaning plan and quotation.
              </p>

            </div>



            {/* Step 3 */}

            <div className="relative bg-white border border-slate-200 rounded-xl p-7 text-center shadow-sm hover:shadow-lg transition">

              <div className="absolute top-5 left-5 text-blue-100 text-5xl font-bold">
                03
              </div>


              <div className="relative w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">

                <CalendarCheck size={30} />

              </div>


              <h3 className="text-xl font-bold text-blue-950 mt-6">
                Schedule Service
              </h3>


              <p className="text-slate-600 text-sm leading-6 mt-3">
                We arrange a convenient date and time
                based on your schedule and requirements.
              </p>

            </div>



            {/* Step 4 */}

            <div className="relative bg-white border border-slate-200 rounded-xl p-7 text-center shadow-sm hover:shadow-lg transition">

              <div className="absolute top-5 left-5 text-blue-100 text-5xl font-bold">
                04
              </div>


              <div className="relative w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">

                <Sparkles size={30} />

              </div>


              <h3 className="text-xl font-bold text-blue-950 mt-6">
                We Get It Done
              </h3>


              <p className="text-slate-600 text-sm leading-6 mt-3">
                Our professional team completes the job
                with attention to detail and quality.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= WHY OUR PROCESS ================= */}

      <section className="bg-blue-50 py-20">

        <div className="max-w-6xl mx-auto px-6">


          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              Why Our Process
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">
              Designed Around You
            </h2>

            <p className="text-slate-600 mt-4 leading-7">
              Every step is designed to make your experience
              simple, convenient and reliable.
            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">


            {/* Point 1 */}

            <div className="bg-white rounded-xl border border-blue-100 p-7">

              <CheckCircle
                size={28}
                className="text-blue-700"
              />

              <h3 className="text-lg font-bold text-blue-950 mt-4">
                Clear Communication
              </h3>

              <p className="text-slate-600 text-sm leading-6 mt-2">
                We listen carefully to your requirements and
                keep communication clear throughout the service.
              </p>

            </div>



            {/* Point 2 */}

            <div className="bg-white rounded-xl border border-blue-100 p-7">

              <CheckCircle
                size={28}
                className="text-blue-700"
              />

              <h3 className="text-lg font-bold text-blue-950 mt-4">
                Reliable Scheduling
              </h3>

              <p className="text-slate-600 text-sm leading-6 mt-2">
                We respect your time and organize services
                around your preferred schedule.
              </p>

            </div>



            {/* Point 3 */}

            <div className="bg-white rounded-xl border border-blue-100 p-7">

              <CheckCircle
                size={28}
                className="text-blue-700"
              />

              <h3 className="text-lg font-bold text-blue-950 mt-4">
                Quality Results
              </h3>

              <p className="text-slate-600 text-sm leading-6 mt-2">
                Our team pays attention to detail to ensure
                your space is clean, fresh and welcoming.
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


export default OurProcess
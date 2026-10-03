import React from 'react'
import { ShieldCheck } from 'lucide-react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import gadgets from '../assets/gadgets.jpg'
import aboutImage from '../assets/About.png'

const About = () => {

  return (

    <div>

      <Navbar />


      {/* ================= PAGE HEADER ================= */}

      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${gadgets})`
        }}
      >

        <div className="bg-blue-900/80">

          <div className="max-w-7xl mx-auto px-6 py-28">

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About Us
            </h1>

            <p className="text-blue-100 mt-3">
              Home <span className="mx-2">›</span> About Us
            </p>

          </div>

        </div>

      </section>



      {/* ================= ABOUT CONTENT ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


            {/* Text */}

            <div>

              <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                About Us
              </p>


              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2">
                About Bilic Cleaning Company
              </h2>


              <div className="space-y-4 mt-6 text-slate-600 leading-7">

                <p>
                  Bilic Cleaning Company is a professional cleaning and facility services company established
                   to provide reliable, efficient, and high-quality cleaning solutions for residential, 
                   commercial, institutional, and corporate clients
                </p>


                <p>
                  The name Bilic represents cleanliness, beauty, appearance, and excellence. Our objective 
                  is to transform ordinary spaces into clean, hygienic, comfortable, and professional environments.
                  We understand that cleanliness is an essential part of a healthy and productive environment
                </p>


                <p>
                  For homes, a clean environment provides comfort and peace of mind. For businesses and organizations, 
                  professional cleaning contributes to a positive image, employee productivity, customer satisfaction, 
                  and workplace hygiene
                </p>

              </div>

            </div>



            {/* Image */}

            <div>

              <img
                src={aboutImage}
                alt="Bilic Cleaning professional"
                className="w-full h-[420px] object-cover rounded-xl"
              />

            </div>

          </div>

        </div>

      </section>



      {/* ================= OUR PROMISE ================= */}

      <section className="bg-blue-50">

        <div className="max-w-7xl mx-auto px-6 py-8">

          <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-center">

            <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">

              <ShieldCheck size={28} />

            </div>


            <div>

              <h3 className="text-xl font-bold text-blue-950">
                Our Promise
              </h3>

              <p className="text-slate-600 mt-1">
                Professional People. Reliable Service. Quality Results.
              </p>

            </div>

          </div>

        </div>

      </section>



      <Footer />

    </div>

  )

}


export default About
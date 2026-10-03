import React from 'react'

import {
  Sparkles,
  Building2,
  PanelsTopLeft,
  Layers3,
  Armchair,
  Bath,
  BriefcaseBusiness,
  Trash2,
  Settings,
  FileText
} from 'lucide-react'


const AdditionalServices = () => {

  return (

    <section className="bg-blue-50 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 md:p-8">


          {/* Heading */}

          <h2 className="text-xl md:text-2xl font-bold text-blue-950">
            Additional Services Include:
          </h2>


          {/* Services */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">


            {/* Column 1 */}

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Sparkles size={17} />
                </div>

                <span className="text-sm text-slate-700">
                  Deep Cleaning
                </span>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Building2 size={17} />
                </div>

                <span className="text-sm text-slate-700">
                  Post-Construction Cleaning
                </span>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <PanelsTopLeft size={17} />
                </div>

                <span className="text-sm text-slate-700">
                  Window & Glass Cleaning
                </span>

              </div>

            </div>



            {/* Column 2 */}

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Layers3 size={17} />
                </div>

                <span className="text-sm text-slate-700">
                  Floor Cleaning & Maintenance
                </span>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Armchair size={17} />
                </div>

                <span className="text-sm text-slate-700">
                  Carpet & Upholstery Cleaning
                </span>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Bath size={17} />
                </div>

                <span className="text-sm text-slate-700">
                  Restroom & Sanitation
                </span>

              </div>

            </div>



            {/* Column 3 */}

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <BriefcaseBusiness size={17} />
                </div>

                <span className="text-sm text-slate-700">
                  Janitorial Services
                </span>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Trash2 size={17} />
                </div>

                <span className="text-sm text-slate-700">
                  Waste Management
                </span>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Settings size={17} />
                </div>

                <span className="text-sm text-slate-700">
                  Customized Facility Support
                </span>

              </div>

            </div>

          </div>


          {/* Get Quote */}

          <div className="flex justify-end mt-7 pt-5 border-t border-slate-100">

            <button
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-800 transition"
            >

              <FileText size={17} />

              Get a Quote

            </button>

          </div>

        </div>

      </div>

    </section>

  )

}


export default AdditionalServices
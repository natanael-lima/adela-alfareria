import React from 'react'

export default function Contact() {
  return (
    <div className='bg-green-200 h-screen'>
      <section className="text-gray-600 body-font relative">
              <div className="absolute inset-0 bg-gray-300">
                <iframe
                  width="100%"
                  height="600"   
                  frameBorder="0"
                  title="map"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"   

                  style={{}}
                />
              </div>
              <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg   
        p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0   
        shadow-md z-10">
                  <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                    Feedback
                  </h2>
                  <p className="leading-relaxed mb-5 text-gray-600">
                    Post-ironic portland shabby chic echo park, banjo fashion axe
                  </p>
                  <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500   
        focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative   
        mb-4">
                    <label    className="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500   
        focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"   

                    />
                  </div>
                  <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none   
        hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                  <p className="text-xs   
        text-gray-500 mt-3">
                    Chicharrones blog helvetica normcore iceland tousled brook viral
                    artisan.
                  </p>
                </div>
              </div>
            </section>

    </div>
  )
}

"use client"

import React, { useState } from 'react';
import Breadcrumbs from "@/breadcrumbs/Breadcrumbs";
import style from "./Career.module.css"

function Career() {
  const [isVacancancyAvaiable, setIsVacancancyAvaiable] = useState(false);

  return (
    <>
      <Breadcrumbs title={"Career"} desc={"Keep yourself updated and Join our Team in the role that suits you well"} />
      <div className='px-28 py-12  flex flex-col sm:flex-row md:flex-row'>
        <div className='top-container space-y-13'>
          {/* vacancy intro starts why and how with notice */}
          <div className='Why'>
            <h2 className='font-semibold text-xl text-black mb-2'>Why join our fellowship pool?</h2>
            <ol className={`${style.list}`}>
              <li> Express your interest in multiple fellowship areas.</li>
              <li> Secure your CV in our system for better tracking.</li>
              <li> Get opportunities that match your skills sent right to your inbox.</li>
              <li> Stay connected with our Talent Acquisition team.</li>
            </ol>
          </div>
          <div className='how'>
            <h2 className='font-semibold text-xl text-black mb-2'>How it works:</h2>
            <ol className={`${style.list}`}>
              <li>
                <span className='font-semibold text-black'>
                  CV Submission:
                </span>
                Fill out the form, upload your CV, and choose the fellowship area that interests you. And yes, you can choose more than one area.
              </li>
              <li>
                <span className='font-semibold text-black'>
                  Profile Collection:
                </span>
                Your CV goes directly into our system, speeding up the application process.
              </li>
              <li>
                <span className='font-semibold text-black'>
                  Match-Making:
                </span>
                We’ll then use our filtering system to match your profile with upcoming fellowships.
              </li>
              <li>
                <span className='font-semibold text-black'>
                  Get Notified:
                </span>
                If we find a match, you’ll be among the first to know about new fellowships via email.
              </li>
            </ol>
          </div>
          <div className='notice'>
            <p>Please note that certain job may have additional criteria. Review the job descriptions carefully when vacancy open to ensure you meet all qualifications.</p>
          </div>
          {/* Vacancy list starts */}
          <div className='vacancy'>
            <h2 className='font-semibold text-xl text-black mb-2'>Vacancy List</h2>
            {isVacancancyAvaiable ?
              (
                <>
                  {/* vacancy table if exist */}
                </>
              ) : (
                <> <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl
              '>There are currntly no Vacancy Avaiable</h1></>
              )}
          </div>
          {/* vacancy intro ends here */}  
        </div>


        {/* Buttons for apply and more actions */}
        <div className="flex flex-col gap-3 p-5 rounded-lg shadow-sm">
          {/* Apply Button */}
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
            Apply
          </button>

          {/* Apply with Indeed Button */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Apply with linkedin
          </button>

          {/* Share Job Button */}
          <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
            Share job
          </button>
        </div>
      </div>
    </>
  )
}

export default Career

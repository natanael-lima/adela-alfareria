import React from 'react'

export default function Footer() {
  return (
    <footer className="">
        <div className="container px-6 py-2 mx-auto">
            <hr className="my-2 border-gray-300 dark:border-gray-300" />

            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <p className="text-sm text-gray-500">© Copyright 2021. All Rights Reserved.</p>

                <div className="flex mt-3 -mx-2 sm:mt-0">
                    <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                    <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                    <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

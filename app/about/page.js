import React from 'react'
import Head from 'next/head'

const About = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
      <Head>
        <title>About BitLinks</title>
        <meta name="description" content="Learn more about BitLinks - your go-to platform for creating short URLs." />
      </Head>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">About BitLinks</h1>
        <p className="text-lg text-gray-600 mt-2">Simplify your links. Share with ease.</p>
      </header>
      <main className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <p className="text-gray-700 text-lg leading-7 mb-4">
          Welcome to <span className="font-semibold text-blue-600">BitLinks</span>, your go-to platform for creating short, shareable URLs with ease!
        </p>
        <p className="text-gray-700 text-lg leading-7 mb-4">
          At <span className="font-semibold text-blue-600">BitLinks</span>, we understand the need for quick and efficient tools to streamline online sharing.
          Our service provides a no-fuss solution for shortening long, unwieldy links into concise, manageable URLs that are perfect for sharing across social media,
          emails, or anywhere else online.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Why Choose BitLinks?</h2>
        <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
          <li><span className="font-medium">Direct Access:</span> No sign-ups, no logins—just start creating links instantly.</li>
          <li><span className="font-medium">User-Friendly Interface:</span> Simplified design for anyone to shorten URLs in seconds.</li>
          <li><span className="font-medium">Fast and Reliable:</span> Generate short links with top-notch speed and stability.</li>
        </ul>
        <p className="text-gray-700 text-lg leading-7 mt-6">
          Whether you're sharing links for personal use or professional needs, <span className="font-semibold text-blue-600">BitLinks</span> ensures your links
          are accessible, clean, and easy to manage.
        </p>
        <p className="text-lg text-gray-700 font-medium mt-6">
          Let’s make your online sharing simpler and smarter with <span className="font-semibold text-blue-600">BitLinks</span>. Start shortening your links today!
        </p>
      </main>
      <footer className="mt-8 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} BitLinks. All rights reserved.
      </footer>
    </div>
    </div>
  )
}

export default About

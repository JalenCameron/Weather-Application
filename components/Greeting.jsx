import React from 'react'

function Greeting() {
  return (
    <div className="relative flex flex-col justify-center items-center max-w-[950px] w-full m-auto pt-40 text-white z-10">
        <h1 className='text-5xl'>Hello! Welcome to my Weather Application</h1>
        <p className='pt-10 max-w-[800px]'>This site uses OpenWeatherMap&apos;s API Key to fetch short-term forecasts for over 200,000 known cities in the world. All you have to do is input a City you&apos;re interested in viewing and it will return loads of information about it. Have fun!</p>
    </div>
  )
}

export default Greeting
import React from 'react'
import Image from 'next/image'
import { data } from 'autoprefixer'

const Weather = ({weather}) => {
    console.log(weather)
    const description = weather.weather[0].description;
  return (
    <div className='relative flex flex-col justify-evenly max-w-[600px] w-full h-[100vh] m-auto p-4 text-gray-300 z-10'>
        {/* Top */}
        <div className='relative flex justify-between pt-12'>
            <div className='flex flex-col items-center'>
                <Image src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='The current weather' width="100" height="100" />
                <p className='text-2xl'>{weather.weather[0].main}</p>
            </div>
            <p className='text-9xl'>{weather.main.temp.toFixed(0)}&#176;</p>
        </div>
        {/* Bottom */}
        <div className='bg-black/50 relative p-8 rounded-md'>
            <p className='text-2xl text-center pb-6'>Weather in {weather.name}, {weather.sys.country}</p>
            <div className='flex justify-between text-center'>
                <div>
                    <p className='font-bold text-2xl'>{weather.main.feels_like.toFixed(0)}&#176;</p>
                    <p className='text-xl'>Feels Like</p>
                </div>

                <div>
                    <p className='font-bold text-2xl'>{weather.main.humidity}%</p>
                    <p className='text-xl'>Humidity</p>
                </div>

                <div>
                    <p className='font-bold text-2xl'>{weather.wind.speed.toFixed(0)} MPH</p>
                    <p className='text-xl'>Winds</p>
                </div>

                <div>
                    <p className='font-bold text-2xl'>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
                    <p className='text-xl'>Description</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
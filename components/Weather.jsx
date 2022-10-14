import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import { data } from 'autoprefixer'

const Weather = ({weather}) => {
    console.log(weather)
    // A function to fetch the Weather description
    const description = weather.weather[0].description;
    // A function to fetch the sunrise and sunset
    const sunrise = moment.unix(weather.sys.sunrise).format("LT")
    const sunset = moment.unix(weather.sys.sunset).format("LT")

  return (
    <div className='relative flex flex-col justify-evenly max-w-[750px] w-full h-[100vh] m-auto p-4 text-gray-300 z-10'>

        {/* Weather Temperature */}
        <div className='relative flex justify-between pt-12'>
            <div className='flex flex-col items-center'>
                <Image src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Current weather displayed as an Icon' width="100" height="100" />
                <p className='text-2xl'>{weather.weather[0].main}</p>
            </div>
            <p className='text-9xl'>{weather.main.temp.toFixed(0)}&#176;</p>
        </div>

        {/* Miscellaneous Weather Information */}
        <div className='bg-black/50 relative p-8 rounded-md'>
            <p className='text-2xl text-center pb-6'>Weather in {weather.name}, {weather.sys.country}</p>
            <div className='flex justify-between text-center'>
                <div>
                    <p className='text-xl'>Feels Like</p>
                    <p className='font-bold text-2xl'>{weather.main.feels_like.toFixed(0)}&#176;</p>
                </div>

                <div>
                    <p className='text-xl'>Sunrise</p>
                    <p className='font-bold text-2xl'>{sunrise}</p>
                </div>

                <div>
                    <p className='text-xl'>Sunset</p>
                    <p className='font-bold text-2xl'>{sunset}</p>
                </div>

                <div>
                    <p className='text-xl'>Description</p>
                    <p className='font-bold text-2xl' style={{textTransform: 'capitalize'}}>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
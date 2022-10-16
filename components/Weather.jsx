import React from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';
import { data } from 'autoprefixer'

const Weather = ({weather}) => {
    console.log(weather)
    // Capturing the description for the weather
    const description = weather.weather[0].description;

    // const countryArray = moment.tz.zonesForCountry(weather.sys.country, true);
    // console.log(countryArray)

    // const timezone = weather.timezone //needs to be converted in minutes 
    // const timezoneInMinutes = timezone / -60;
    // console.log(timezoneInMinutes)

    // Capturing the Sunrise and Sunset information
    const sunrise = moment.unix(weather.sys.sunrise).format("LT");
    const sunset = moment.unix(weather.sys.sunset).format("LT");
    

  return (
    <div className='relative flex flex-col justify-evenly max-w-[750px] w-full m-auto p-4 text-gray-300 z-10'>

        {/* Weather Temperature */}
        <div className='relative flex justify-between pt-12 items-center'>
            <div className='flex flex-col items-center'>
                <Image src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Current weather displayed as an Icon' width="100" height="100" />
                <p className='text-2xl'>{weather.weather[0].main}</p>
            </div>
            <p className='text-8xl'>{weather.main.temp.toFixed(0)}&#176;</p>
        </div>

        {/* Miscellaneous Weather Information */}
        <div className='bg-black/50 relative p-8 rounded-md mt-20'>
            <p className='text-2xl text-center pb-6'>Weather in {weather.name}, {weather.sys.country}</p>
            <div className='flex justify-between text-center'>
                <div>
                    <p className='text-xl'>Feels Like</p>
                    <p className='font-bold text-2xl'>{weather.main.feels_like.toFixed(0)}&#176;</p>
                </div>

                <div>
                    <p className='text-xl'>Sunrise (PT)</p>
                    <p className='font-bold text-2xl'>{sunrise}</p>
                </div>

                <div>
                    <p className='text-xl'>Sunset (PT)</p>
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
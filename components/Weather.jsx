import React from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';
import { data } from 'autoprefixer'

const Weather = ({weather}) => {
    console.log(weather)
    // Capturing the description for the weather
    const description = weather.weather[0].description;
    // Capturing the Sunrise and Sunset information
    const sunrise = moment.unix(weather.sys.sunrise).format("LT");
    const sunset = moment.unix(weather.sys.sunset).format("LT");

    /* Commenting out this information because I can't figure out how to calculate different timezones at the moment but I'd like to try eventually */
    // const countryArray = moment.tz.zonesForCountry(weather.sys.country, true);
    // console.log(countryArray)

    // const timezone = weather.timezone //needs to be converted in minutes 
    // const timezoneInMinutes = timezone / -60;
    // console.log(timezoneInMinutes)
    

  return (
    <div className='relative flex flex-col justify-evenly max-w-[750px] w-full m-auto p-4 text-gray-300 z-10'>

        {/* Weather Temperature */}
        <div className='relative flex justify-between sm:pt-12 items-center'>
            <div className='flex flex-col items-center'>
                <Image src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Current weather displayed as an Icon' width="100" height="100" />
                <p className='text-xl sm:text-2xl'>{weather.weather[0].main}</p>
            </div>
             <div className='relative flex items-center'>
                <div className='flex flex-col items-center p-4'>
                    <p className='text-5xl sm:text-7xl'>{weather.main.temp_max.toFixed(0)}&#176;</p>
                    <p className='text-2xl'>High</p>
                </div>
                <div className='flex flex-col items-center p-4'>
                    <p className='text-4xl sm:text-5xl'>{weather.main.temp_min.toFixed(0)}&#176;</p>
                    <p className='text-2xl'>Low</p>
                </div>
            </div>
        </div>

        {/* Miscellaneous Weather Information */}
        <div className='mt-8 sm:mt-20'>
            <p className='text-xl font-bold sm:text-2xl text-center pb-6'>Current weather in {weather.name}, {weather.sys.country}</p>
            <div className='flex flex-col sm:flex-row sm:justify-between text-center'>
                <div className='py-2 sm:py-0'>
                    <p className='text-md sm:text-xl'>Feels Like</p>
                    <p className='font-bold text-lg sm:text-2xl'>{weather.main.feels_like.toFixed(0)}&#176;</p>
                </div>

                <div className='py-2 sm:py-0'>
                    <p className='text-md sm:text-xl'>Sunrise (PST)</p>
                    <p className='font-bold text-lg sm:text-2xl'>{sunrise}</p>
                </div>

                <div className='py-2 sm:py-0'>
                    <p className='text-md sm:text-xl'>Sunset (PST)</p>
                    <p className='font-bold text-lg sm:text-2xl'>{sunset}</p>
                </div>

                <div className='py-2 sm:py-0'>
                    <p className='text-md sm:text-xl'>Description</p>
                    <p className='font-bold text-lg sm:text-2xl' style={{textTransform: 'capitalize'}}>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
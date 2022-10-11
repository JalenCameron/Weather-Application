import React from 'react'
import Image from 'next/image'

const Weather = ({weather}) => {
    console.log(weather)
  return (
    <div>
        <div>
            <div>
                <Image src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='The current weather' width="100" height="100" />
            </div>
        </div>
    </div>
  )
}

export default Weather
import React from 'react'
import Image from 'next/image'

const Background = ({weather}) => {

    if (weather.weather[0].id >= 200 && weather.weather[0].id <= 232) {
        // If the weather indicates that it's a thunderstorm:
        return (
            <Image
                src="https://images.unsplash.com/photo-1504123010103-b1f3fe484a32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="A thunderstorm in the clouds"
                layout="fill"
                className="object-cover"
            />
        )
    } else if (weather.weather[0].id >= 300 && weather.weather[0].id <= 321) {
        // If the weather indicates that it's only drizzling:
        return (
            <Image
                src="https://images.unsplash.com/photo-1556485689-33e55ab56127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Grass showing the light drizzle"
                layout="fill"
                className="object-cover"
            />
        )
    } else if (weather.weather[0].id >= 500 && weather.weather[0].id <= 531) {
        // If the weather indicates that it's raining:
        return (
            <Image
                src="https://images.unsplash.com/photo-1527766833261-b09c3163a791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="A rainy puddle"
                layout="fill"
                className="object-cover"
            />
        )
    } else if (weather.weather[0].id >= 600 && weather.weather[0].id <= 622) {
        // If the weather indicates that it's snowing:
        return (
            <Image
                src="https://images.unsplash.com/photo-1507181280972-47966b705fd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                alt="A snowy day with trees in the background"
                layout="fill"
                className="object-cover"
            />
        )
    } else if (weather.weather[0].id >= 701 && weather.weather[0].id <= 781) {
        // If the weather indicates that it's either foggy/misty/hazy/etc.:
        return (
            <Image
                src="https://images.unsplash.com/photo-1486707471592-8e7eb7e36f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1094&q=80"
                alt="An Misty/Hazy forest"
                layout="fill"
                className="object-cover"
            />
        )
    } else if (weather.weather[0].id >= 801 && weather.weather[0].id <= 804) {
        // If the weather indicates that it's cloudy:
        return (
            <Image
                src="https://images.unsplash.com/photo-1580193483760-d0ef2abaa348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt="Sunny sky with clouds"
                layout="fill"
                className="object-cover"
            />
        )
    } else if (weather.weather[0].id == 800) {
        // If the weather indicates that it's a clear day:
        return (
            <Image
                src="https://images.unsplash.com/photo-1529126894674-8dd7cb884766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="A sunny and clear sky"
                layout="fill"
                className="object-cover"
            />
        )
    }

    return (
        <Image
            src="https://images.unsplash.com/photo-1529126894674-8dd7cb884766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="A sunny and clear sky"
            layout="fill"
            className="object-cover"
        />
    )
}

export default Background
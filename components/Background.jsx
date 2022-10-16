import React from 'react';
import Image from 'next/image';

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
                alt="Grass showing the light Drizzle"
                layout="fill"
                className="object-cover"
            />
        )
    } else if (weather.weather[0].id >= 500 && weather.weather[0].id <= 531) {
        // If the weather indicates that it's raining:
        return (
            <Image
                src="https://images.unsplash.com/photo-1527766833261-b09c3163a791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="A Rainy Puddle"
                layout="fill"
                className="object-cover"
            />
        )
    } else if (weather.weather[0].id >= 600 && weather.weather[0].id <= 622) {
        // If the weather indicates that it's snowing:
        return (
            <Image
                src="https://images.unsplash.com/photo-1507181280972-47966b705fd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                alt="A Snowy day with Trees in the background"
                layout="fill"
                className="object-cover"
            />
        )
    } else if (weather.weather[0].id >= 701 && weather.weather[0].id <= 781) {
        // If the weather indicates that it's either foggy/misty/hazy/etc.:
        return (
            <Image
                src="https://images.unsplash.com/photo-1486707471592-8e7eb7e36f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1094&q=80"
                alt="A Misty/Hazy Forest"
                layout="fill"
                className="object-cover"
            />
        )
    } else if (weather.weather[0].id >= 801 && weather.weather[0].id <= 804) {
        // If the weather indicates that it's cloudy:
        return (
            <Image
                src="https://images.unsplash.com/photo-1505533321630-975218a5f66f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Sunny Sky with Clouds"
                layout="fill"
                className="object-cover"
            />
        )
    } else if (weather.weather[0].id == 800) {
        // If the weather indicates that it's a clear sunny day:
        if (weather.weather[0].icon == '01d') {
            return (
                <Image
                    src="https://images.unsplash.com/photo-1529126894674-8dd7cb884766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="A Sunny and Clear Sky"
                    layout="fill"
                    className="object-cover"
                />
            )
        } else {
             // If the weather indicates that it's a clear night:
            return (
                <Image
                    src="https://images.unsplash.com/photo-1651355257889-36ee5f8af2c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    alt="A Clear Sky at Night"
                    layout="fill"
                    className="object-cover"
                />
            )
        };
    }
}

export default Background
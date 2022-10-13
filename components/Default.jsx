import React from 'react'
import Image from 'next/image'

const Default = () => {
  return (
    <Image
        src="https://images.unsplash.com/photo-1580193483760-d0ef2abaa348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt="A Sunny mountainview with clouds"
        layout="fill"
        className="object-cover"
    />
  )
}

export default Default
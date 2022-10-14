import React from 'react';
import Image from 'next/image';

const Default = () => {
  return (
    <Image
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
        alt="A View of the City from Way Up High"
        layout="fill"
        className="object-cover"
    />
  )
}

export default Default
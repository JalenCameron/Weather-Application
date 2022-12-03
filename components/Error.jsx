import React from 'react';
import Link from 'next/link';

function Error() {
    // Creating a function to reset the Page
    const refresh = () => {
        window.location.reload();
    };
  return (
    <div className="errorOverlay text-center bg-[#101010] absolute top-0 left-0 right-0 bottom-0">
        <div className='errorWrapper'>
            <div className='error top-[15rem] absolute bottom-0 left-0 right-0'>
                <p className='text-[snow] max-w-[300px] mx-auto sm:max-w-md'>
                Unfortunately you may have entered the wrong name or incorrectly spelled the city you are looking for. Please return home and try again.
                </p>
                <div className='text-[snow] my-8 font-bold underline max-w-[300px] mx-auto sm:max-w-md'>
                    <button onClick={refresh}>Go Home!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Error
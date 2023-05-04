import React from 'react'
import Card from './Card'
import { useState } from 'react';

const Testimonial = (props) => {
    const review = props.reviews;
    const [index, setIndex] = useState(0)

    function leftShiftHandler(){
        if(index-1 < 0 )
            setIndex(review.length-1);
        else
            setIndex(index-1);
    }

    function rightShiftHandler(){
        if(index+1 >= review.length )
            setIndex(0);
        else
            setIndex(index+1);
    }

    function surpriseHandler(){
        setIndex(Math.floor(Math.random() * review.length));
    }

    return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
                    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <Card review={review[index]}/>
        
        <div className='flex mt-10 justify-center gap-3 text-3xl mt-5 text-violet-400 font-bold'>
                <button onClick={leftShiftHandler}
                        className='cursor-pointer hover:text-violet-500'>&lt;</button>
                <button onClick={rightShiftHandler}
                        className='cursor-pointer hover:text-violet-500'>&gt;</button>
        </div>

        <div className='mt-6'>
            <button onClick={surpriseHandler}
                    className='bg-violet-400 hover:bg-violet-500 transition-all
                                duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-[10px]'>
                    Surprise me
            </button>
        </div>
    </div>
  )
}

export default Testimonial
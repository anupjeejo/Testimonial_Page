import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {

    const info = props.review;

    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img  className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'
                      src={info.image}>
                </img>
                <div className='w-[140px] h-[140px] rounded-full bg-violet-500 absolute top-[-6px] z-[-10] left-[10px]'>
                </div>
            </div>

            <div className='text-center mt-7'>
                <p className='tracking-wider font-bold text-2xl capitalize'>{info.name}</p>
                <p className='text-violet-300 uppercase text-sm'>{info.job}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft/>
            </div>

            <div className='text-center mt-4 text-slate-500'>
                <p>{info.text}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight/>
            </div>
        </div>
    )
    }

export default Card
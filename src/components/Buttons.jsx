import React from 'react'

const Buttons = ({handlingEvent}) => {
  return (
    <div className='grid grid-cols-4 w-full md:w-1/2 bg-gray-500'>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500 col-span-2'>Clear</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500 col-span-2'>AC</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>1</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>2</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>3</button>

        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>+</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>4</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>5</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>6</button>

        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>-</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>7</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>8</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>9</button>

        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>*</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>.</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>0</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>00</button>

        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>&divide;</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>(</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 transition duration:500'>)</button>
        <button onClick={(e) => handlingEvent(e.target.innerText)} className='p-4 hover:bg-gray-700 border text-gray-200 bg-amber-500 transition duration:500 col-span-2'>=</button>

    </div>
  )
}

export default Buttons
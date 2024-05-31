import React from 'react'
import { useState } from 'react'

const Color = () => {
  const [color,setColor]=useState('gray');

 

  const message= () =>{
   
    alert(" here you mention a message");
   }
    return (
        <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
            <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 '>
                <div className='flex flex-wrap justify-center mx-96    px-10 gap-3 shadow-lg bg-light px-2 py-3  rounded-2xl bg-white '> 
                <button className=' outline-none px-4 py-1 rounded-2xl  shadow-lg text-black bg-red-500 ' onClick={()=> setColor('red')}>Red</button>
                <button className=' outline-none px-4 py-1 rounded-2xl  shadow-lg text-black   bg-blue-400 ' onClick={()=> setColor('blue')}>Blue</button>
                <button className=' outline-none px-4 py-1 rounded-2xl  shadow-lg text-black  bg-yellow-300 ' onClick={()=> setColor('yellow')}>Yellow</button>
                <button className=' outline-none px-4 py-1 rounded-2xl  shadow-lg text-black  bg-green-400  ' onClick={()=> setColor('green')}>Green</button>
                <button className=' outline-none px-4 py-1 rounded-2xl  shadow-lg text-black bg-purple-600  ' onClick={message}>This is for you my Dear</button>
                </div>
            </div>
        </div>
    )
}

export default Color

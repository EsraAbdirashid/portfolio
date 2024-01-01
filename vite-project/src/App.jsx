import React from 'react'

const App = () => {
  return (
    <>
      <div className="test">
        <div className="menue pl-14 p-4 pr-14 flex bg-gray-800 text-white justify-between">
         <h1 className='font-bold'> portfolio</h1>
         <nav>
          <ul className='flex gap-7 cursor-pointer'>
            <li className='hover:text-blue-700'>Home</li>
            <li className='hover:text-blue-700'>About</li>
            <li className='hover:text-blue-700'>Service</li>
            <li className='hover:text-blue-700'>Skills</li>
            <li className='hover:text-blue-700'>Project</li>
            <li className='hover:text-blue-700'>Contact</li>
          </ul>
         </nav>
        </div>
        <div className="main bg-gray-600 items-center gap-8  h-screen text-white flex m-auto justify-center">
         <div className="qoraal font-bold font ">
         <h1>Hello it's me</h1>
         <p className='font-extrabold text-4xl mt-4'>Esra Abdirashid <br /></p>
         <h3 className='text-green-400 mt-4'>and i am a <span className='text-green-400'>web designer</span></h3>
         <p className='text-gray-200 mt-4'>I'am a web designer with extensive experience for over few time <br /> expertise is to create and website design, frontEnd design,and <br /> many more...</p>
         </div>
         <div className="img">
          <img src="./public/picture.jfif" className='w-[400px] rounded-full ' alt="" />
         </div>


        </div>
      </div>
      </>
  )
}

export default App
import React from 'react'
function Section({title,children,myID,bg}) {  
  return (
    <div id={myID} className={`${bg}  p-7 pb-24 flex flex-col justify-center items-center`}>
      <h2 className=' text-6xl font-bold text-yellow-50 mt-12 mb-20'>{title}</h2>
      <div>
      {children}
      </div>
    </div>
  )
}

export default Section

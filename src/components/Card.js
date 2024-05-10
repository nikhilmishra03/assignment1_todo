import React from 'react'

const Card = ({todo,onDelete}) => {
  
  return (
      <div className='bg-gray-300 font-semibold py-8 px-20 sm:mx-48 my-3 text-xl rounded-2xl flex justify-between overflow-x-auto'>
        ✔ {todo}
        <button className='p-2 text-red-700 rounded-xl mx-2' onClick={onDelete}>Delete</button>
      </div>
  
  )
}

export default Card
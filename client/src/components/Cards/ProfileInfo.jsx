import React from 'react'

const ProfileInfo = ({onLogout}) => {
  return (
    <div className='flex items-center gap-3 '>
    <div className='w-12 h-12 rounded-full bg-slate-200 flex items-center font-medium justify-center'>DS</div>
    <div>
        <p className='text-sm font-medium'>Dash Shafe</p>
    </div>
    <button onClick={onLogout} className=' text-sm hover:opacity-80 bg-red-500 px-4 py-1 rounded-md text-white'>Logout</button>
    </div>
  )
}

export default ProfileInfo

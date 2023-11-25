import React, { useEffect, useState } from 'react'

function Github() {
    const[data, setData]= useState([])
    useEffect(()=>{
fetch('https://api.github.com/users/harmandhillon7')
.then(response=>response.json()).then(data=>
    { console.log(data)
setData(data)
    })
    },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      Github followers:{data.followers}
      <div className='flex justify-center items-center'><img  src={data.avatar_url} alt="git picture"width={300} /></div>
    
      <h3>{data.location}</h3>
      <h3>{data.bio}</h3>
    </div>
  )
}

export default Github

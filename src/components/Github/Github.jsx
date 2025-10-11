import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
  // const [data, setData] = useState({});
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then((response) => response.json())
  //   .then((data)=>{
  //     console.log(data);
  //     setData(data);
  //   })
  // }, [])
  const data = useLoaderData();
  return (
    <>
      <div className='flex gap-2 m-2'>
        <img src={data.avatar_url} alt="" />
        <h1 className='self-center font-bold text-3xl'>{data.login} : {data.followers}</h1>
      </div>

    </>
  )
}

export default Github

// export const githubData = () => {
//   return fetch('https://api.github.com/users/hiteshchoudhary')
//   .then((response) => response.json())
// }

export const githubData = async () => {
  const response = await  fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json();
}

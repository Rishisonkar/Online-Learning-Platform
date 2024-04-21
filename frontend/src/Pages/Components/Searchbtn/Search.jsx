import React, { useEffect, useState } from 'react'
import './Search.css'

function Search() {
  const [data, setData] = useState('');
  const [course, setCourse] = useState([]);

  let SearchTeacher = async(sub)=>{
    let subject = sub.toLowerCase();
    let Data = await fetch(`/api/course/${subject}`)
    let response = await Data.json();
    if(response.statusCode == 200){
      setCourse(response.data)
      // console.log(response.data.length)
    }
    setData('')
  }
  
  return (
    <>
      <div className="search mb-10">
          <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/6c476f454537d7f27cae2b4d0f31e2b59b3020f5" width={30} alt="" />
          <input type="text" placeholder='Ex: Zoology ...' value={data} onChange={(e)=>setData(e.target.value)}/>
          <button className='w-32' onClick={()=>SearchTeacher(data)}>Find Teacher</button>
      </div>
      { course && (
        course.map((Data)=>(
          <div key={Data._id} className='relative bg-blue-600 p-4 gap-6 mb-3 flex items-center rounded-sm max-w-5xl'>
            <div className='text-white bg-blue-900 p-2 rounded-md'>
              {Data.coursename}  
            </div>
            <div className='text-gray-300'>{Data.enrolledteacher.Firstname}  {Data.enrolledteacher.Lastname}</div>
            <div className='text-gray-900'><span className=' text-black'>Desc :</span> {Data.description}</div>

            <div>{Data.enrolledStudent.length}/20</div>
            <div className='text-white bg-blue-900 py-2 px-3 absolute right-4 cursor-pointer'>Enroll Now</div>
          </div>
        ))
      )}
    </>
  )
}

export default Search
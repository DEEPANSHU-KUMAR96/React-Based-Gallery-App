import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'


const App = () => {
  const [userData, setUseData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=10`
      )
      setUseData(response.data)
    } catch (error) {
      console.error("API Error:", error)
    }
  }

  useEffect(() => {
    getData()
  }, [index])


  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

return (
  <div className='min-h-screen bg-black text-white overflow-auto p-4 relative'>

    {/* Gallery Grid */}
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-2 sm:px-6 md:px-12 py-2'>
      {printUserData}
    </div>

    {/* Pagination */}
    <div className='flex flex-wrap justify-center gap-4 items-center p-4 py-10'>
      <button
        style={{ opacity: index == 1 ? 0.6 : 1 }}
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setUseData([])
          }
        }}
      >
        Prev
      </button>

      <h4 className='text-sm sm:text-base'>Page {index}</h4>

      <button
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        onClick={() => {
          setUseData([])
          setIndex(index + 1)
        }}
      >
        Next
      </button>
    </div>

  </div>
)
}

export default App

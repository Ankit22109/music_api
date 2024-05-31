"use client"
import React, { useEffect, useState } from 'react'
import { Data } from '@/fetchdata'
import Link from 'next/link'
import style from './style.module.css'
import { useRouter } from 'next/navigation'


const Music = (props: any) => {
  
  const [query, setQuery] = useState(props.query)
  const [songs, setSongs] = useState([])
  const [next, setNext] = useState()
  
  useEffect(() => {
    const fetchData = async () => {
      const value = await Data(query, props.indx)
      setSongs(value.data)
      setNext(value.next)
    }

    fetchData()
  }, [query, props.indx])

  const play_preview = (element: any)=>{
    let preview = document.getElementsByClassName
    ('audio_preview')
   
    
  }

  const route = useRouter()

  return (
    <>
    <div className='flex justify-center items-center'>
      <div className="songs m-8" >
        <ul className=' flex flex-wrap items-center justify-center'>
          {songs?.map((value: any) => {
            return (<li key={value.id} className='m-2 flex flex-col justify-center items-center border cursor-pointer box-border flex-wrap'>
              <img src={value.album.cover_medium} alt={value.short_title} className='' />
              <div className='relative bottom-14 flex h-10 justify-start px-5  w-full'>
                <div className={`${style.preview} flex justify-center items-center border h-12 w-12 border-green-400 bg-green-400 rounded-full visible z-10 md:invisible`}  onClick={play_preview}>
                  <div className="h-3.5 w-3.5 bg-white" id={style.play} onClick={play_preview}></div>
                </div>
                <audio src={value.preview} 
                   className='audio_preview hidden'> </audio>
              </div>  
              <p className='relative bottom-5 font-bold text-wrap flex  box-border w-40 justify-center'>
                {/* {value.title} */}
              <Link href={`/artist/${value.artist.name}`} className=''>  {value.title}</Link>
              </p>
            </li>)
          })}
        </ul>
        
      </div>
      
    </div>
    <div className="flex justify-evenly relative bottom-10 my-2">
          <div className='flex '>
            <button className='border bg-blue-500 font-bold py-2 px-5' onClick={() => {
              route.push(`../${query}/${props.indx - 25}`)
            }}>Previous</button>
          </div>
          <div className='flex '>
            <button className='border bg-blue-500 font-bold py-2 px-5' onClick={() => { route.push(`../${query}/${props.indx + 25}`) }}>Next</button>
          </div>

        </div>
  </>    
  )
}

export default Music
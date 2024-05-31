import { Data } from '@/app/fetchdata'
import React,{useEffect} from 'react'

export const Artist = ({params}:{params:{artist_name:String}}) => {

  useEffect(() => {
    const fetchData = async () => {
      const value = await Data(params.artist_name)
      // setSongs(value.data)
      // setNext(value.next)
    }

    fetchData()
  }, [query, props.indx])
  return (
    <div>Artist</div>
  )
}

import React, { Suspense } from 'react'
import { Artist } from './artist'
const page = ({params}:{params:{artist:String}}) => {
  return (
    <Suspense>
        <Artist />
    </Suspense>
  )
}

export default page

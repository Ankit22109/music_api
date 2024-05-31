
import { useState } from "react"
import { useRouter } from "next/navigation"
import React from "react"

const handlekey = (event:any)=>{
  
  if(event.key == 'Enter'){
    const btn = document.getElementById('search')
    btn?.click()
  }
}

const SearchBar = ()=>{
    const route = useRouter()
    const [value, setValue] = useState("")
    // const route = useRouter()
    return(
    <div className='searchBar w-full flex justify-end mx- rounded-s'>
    
    <input type="search" 
    value={value}
    id="searchBox"
    onKeyPress={handlekey}
    onChange={(e)=>setValue(e.target.value)}
    placeholder="Search Here..."
     className="border h-8 px-6" 
    />
    <button type="submit" id='search' className='border
       mr-4 px-4 bg-blue-400' onClick={()=>{
        route.push(`/query/${value}/0`)
       }}>
       Search
       </button>
    
  </div>
)

}

export default SearchBar
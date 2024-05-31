"use client"
import { Suspense } from "react";
import Music from "./music";
import Loading from "@/components/loading";
import React from "react";
import { useRouter } from "next/navigation";


function Main({ params }: { params: { slug: String } }) {
  const query = params.slug[0]
  const indx = Number.parseInt(params.slug[1])
  const route = useRouter()
  const handleKey = (event: any) => {
    if (event.key == 's') {
      const searchBox = document.getElementById('searchBox')
      searchBox?.focus()
    }
    else {
      console.log('keys are pressed')
    }
  }

  return (
    <>
      <div onKeyPress={handleKey}>
        <Suspense fallback={<Loading />}>
          <Music query={query} indx={indx} />
        </Suspense>
        

      </div>
    </>
  )
}

export default Main

import React from 'react'
import About from "@/components/About/index"
import Breadcrumbs from '@/utils/breadcrumbs/Breadcrumbs'

function page() {
  return (
    <>
      <Breadcrumbs title={"About"} desc={"Know about what we stands for and our service"}/>
      <About />
    </>
  )
}

export default page

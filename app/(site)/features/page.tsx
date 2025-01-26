import React from 'react';

//import components
import Breadcrumbs from '@/utils/breadcrumbs/Breadcrumbs';
import Feature from "@/components/Features/index"

function page() {
  return (
    <div>
      <Breadcrumbs title={"Features"} desc={"Know about the best facilites you can get"}/>
      <Feature/>
    </div>
  )
}

export default page

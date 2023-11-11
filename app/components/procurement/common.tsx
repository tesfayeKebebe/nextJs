import React from 'react'
import Image from "next/image";
const Common=()=>{
  return (
    <div className="bg-white mr-4 border">
    <div className="flex-item-center justify-between">
      <div  className="p-3 text-sm font-bold">
      <label>Annual Procurement Plan 20023(Pre-Budget)</label>
      </div>
      <div className="btn-padding">
      Submit
    </div>
    </div>
    <div className="flex-item-center justify-between  mb-3">
      <div >
        <span className="flex-item-center ps-2">
        <Image src="/database.png" alt="" width={16} height={10}  />
        <label className="ps-2 text-xs"> USD 111111</label>
        </span>
      </div>
    
      <div >
        <span className="flex-item-center ps-2 text-xs">
        <Image src="/percent.png" alt="" width={16} height={10}  />
        <label className="ps-2"> 71 % Indigenous</label>
        </span>
      </div>
      <div >
        <span className="flex-item-center ps-2 text-xs">
        <Image src="/activity.png" alt="" width={16} height={10}  />
        <label className="ps-2"> 27 Activities</label>
        </span>
      </div>
      <div >
        <span className="flex-item-center pr-3 ps-2 text-xs">
        <Image src="/draft.png" alt="" width={16} height={10}  />
        <label className="ps-2"> Draft</label>
        </span>
      </div>
      <div >
      
      </div>

    </div>
  </div>
  )

}


export default Common
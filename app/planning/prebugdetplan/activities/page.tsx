"use client";
import React, { useState } from "react";
import Image from "next/image";
import Common from "@/app/components/planning/prebugdetplan/activities/common";
import PlanActivities from "@/app/components/planning/prebugdetplan/activities/activities";
const Activity = () => {
  return (
    <>
      <Common />
      <div className="bg-white mr-4 border mt-3 content-padding-bottom">
        <div className="flex-item-center justify-between border-b-2">
          <div className="p-3 text-sm font-bold">
            <label>Pre-Budget Plan Activities</label>
          </div>
          <div className="btn-padding mr-3">
            <span className="flex-item-center justify-center space-x-1  hover:bg-sky-700">
              <Image src="/add.png" alt="" width={16} height={10} />
              <label className="">Add</label>
            </span>
          </div>
        </div>
        <div className="flex-item-center justify-between ps-2 pt-2">
          <div className="btn-padding">Actions</div>
          <div className="border  border-black   mr-3 ">
            <span className="flex-item-center justify-center ps-1 ">
              <Image src="/search.png" alt="" width={16} height={10} />
              <input type="text" placeholder="Search..." className="ps-1 w-28 border-none" />
            </span>
          </div>
        </div>
       <PlanActivities/>
      </div>
    </>
  );
};

export default Activity;

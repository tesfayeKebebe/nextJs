"use client";
import React, { useState } from "react";
import Image from "next/image";
import Common from "@/app/components/planning/prebugdetplan/activities/common";
import NewActivity from "@/app/components/planning/prebugdetplan/activities/newactivity";
const Activity = () => {
  return (
    <>
      <Common />
      <div className="flex justify-between">
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
          <div className="flex-item-center ps-2 pt-2">
            <div className="border  border-black   mr-3 ">
              <span className="flex-item-center justify-center ps-1 ">
                <Image src="/search.png" alt="" width={16} height={10} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ps-1 text-xs border-none  w-28"
                />
              </span>
            </div>
          </div>
          <NewActivity />
        </div>
        <div className="bg-white mr-4 border mt-3 content-padding-bottom grow">
          <div className="flex-item-center justify-between border-b-2">
            <div className="p-3 text-sm ">
              <span className="flex items-center justify-center space-x-1">
                <Image src="/backarrow.png" alt="" width={16} height={10} />
                <label className="">New</label>
              </span>
            </div>
            <div className="flex gap-1 ">
              <div className="btn-padding ">
                <span className="flex-item-center justify-center space-x-1  hover:bg-sky-700">
                  <Image src="/cart.png" alt="" width={16} height={10} />
                  <label className="">Items</label>
                </span>
              </div>
              <div className="btn-padding mr-3">
                <span className="flex-item-center justify-center space-x-1  hover:bg-sky-700">
                  <label className="">Collapse</label>
                </span>
              </div>
            </div>
          </div>
          <div className="ps-4  pt-1">
            <label className="text-xs">
              Name
              <span className="top-0  ms-2 text-red-500 text-sm font-bold">
                *
              </span>
            </label>
          </div>
          <div className="ps-3 pr-3 pb-1">
            <input
              type="text"
              placeholder="Enter name"
              className="border text-xs w-full border-gray-300 p-1"
            />
          </div>
          <div className="ps-4">
            <label className="text-xs">
              Procurement Reference
              <span className="top-0  ms-2 text-red-500 text-sm font-bold">
                *
              </span>
            </label>
          </div>
          <div className="ps-3 pr-3  pb-1">
            <div className="flex">
              <div className="grow">
                <input
                  type="text"
                  placeholder="Enter procurement reference"
                  className="border text-xs w-full border-gray-300 p-1"
                />
              </div>
              <div className="flex items-center ps-2 border-r-2 border-t-2 space-x-1 border-b-2 w-24 bg-slate-100">
                <Image
                  src="/setting.png"
                  alt=""
                  className=""
                  width={16}
                  height={10}
                />
                <span className="text-xs ">Generate</span>
              </div>
            </div>
          </div>
          <div className="ps-4">
            <label className="text-xs ">
              Description
              <span className="top-0  ms-2 text-red-500 text-sm font-bold">
                *
              </span>
            </label>
          </div>
          <div className="ps-3 pr-3  pb-1">
            <div className="flex">
              <div className="grow">
                <input
                  type="text"
                  placeholder="Enter Description"
                  className="border align-top text-xs w-full border-gray-300 
              pt-1 pb-6 pr-4 pl-4"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="grow">
              <div className="ps-3">
                <span className="flex items-center">
                  <span className="flex border border-black w-3 h-3  ">
                    <Image src="/checked.png" alt="" width={10} height={10} />
                  </span>
                  <span className="ps-1 text-xs">Is Multi Year</span>
                </span>
              </div>
            </div>
            <div  className="grow">
              <div className="ps-3">
                <span className="flex items-center">
                  <span className="flex border border-black w-3 h-3  ">
                    <Image src="/checked.png" alt="" width={10} height={10} />
                  </span>
                  <span className="ps-1 text-xs">Indigenous Preference</span>
                </span>
              </div>
            </div>
            <div>
              <div className="ps-4">
                <label className="text-xs">Doner</label>
              </div>
              <div className="flex items-center  ps-3 pr-3  pb-1">
                    <select
                      placeholder="Select doner"
                      className="border text-xs w-36 border-gray-300 ">
                      <option className="pr-4">Select doner</option>
                      </select>
        
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Activity;

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
        <div className="bg-white mr-4 border mt-3 mb-3">
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
          <div className="flex ps-1 pt-2">
            <div className="border  border-black w-full  mr-3 ">
              <span className="flex-item-center  ps-1 ">
                <Image src="/search.png" alt="" width={16} height={10} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ps-1 text-xs border-none  w-28"
                />
              </span>
            </div>
            <div className="flex-item-center justify-center border border-black rounded-sm  w-6  p-1 mr-2">
                      <Image src="/filter.png" alt="" width={16} height={10} />
            </div>

          </div>
          <NewActivity />
        </div>
        <div className="bg-white mr-4 border mt-3 mb-3  grow">
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
              className="border text-xs w-full border-black p-1"
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
            <div className="flex border text-xs w-full border-black  ">
              <div className="grow ">
                <input
                  type="text"
                  placeholder="Enter procurement reference"
                  className=" text-xs w-full p-1 "
                />
              </div>
              <div className="flex items-center  justify-center  border-l-[1px] space-x-1  w-24 bg-slate-100 border-black">
                <Image
                  src="/setting.png"
                  alt=""
                  className=""
                  width={12}
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
                  className="border align-top text-xs w-full border-black  pt-1 pb-6 pr-4 pl-4"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 ps-5">
          <div className="grow w-full">
                <label className="text-xs">Procurement Method
                <span className="top-0  ms-2 text-red-500 text-sm font-bold">
                *
              </span>
                </label>
              <div className="pb-1">
                    <select
                      className="border text-xs w-full border-black ">
                      <option className="text-xs">Select Procurement Method</option>
                      </select>
              </div>
            </div>
            <div className="grow w-full">
                <label className="text-xs">Procurement Type
                <span className="top-0  ms-2 text-red-500 text-sm font-bold">
                *
              </span>
                </label>
              <div className="pb-1">
                    <select
                      className="border text-xs w-full border-black ">
                      <option className="text-xs">Select Procurement Type</option>
                      </select>
              </div>
            </div>
            <div className="grow w-full">
              <div>
                <label className="text-xs">Funding Source
                <span className="top-0  ms-2 text-red-500 text-sm font-bold">
                *
              </span>
                </label>
              </div>
              <div className="pr-3 pb-1">
                    <select
                      className="border text-xs w-full border-black ">
                      <option className="text-xs">Select Funding Source</option>
                      </select>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 ps-5">
                <div className="grow flex items-center w-full">
                  <div className="border border-black w-3 h-3  ">
                    <Image src="/checked.png" alt="" width={10} height={10} />
                  </div>
                  <div className="ps-1  text-xs">Is Multi Year</div>
                </div>
                <div className="grow flex items-center w-full">
                  <div className=" border border-black w-3 h-3  ">
                    <Image src="/checked.png" alt="" width={10} height={10} />
                  </div>
                  <div className="ps-1 text-xs">Indigenous Preference</div>
                </div>
            <div className="grow w-full">
                <label className="text-xs">Doner</label>
              <div className="pr-3  pb-1">
                    <select
                      className="border  text-xs w-full border-black ">
                      <option className="text-xs">Select doner</option>
                      </select>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 ps-5 border-b-2 pb-1">
          <div className="grow w-full">
                <label className="text-xs">Budget Years
                <span className="top-0  ms-2 text-red-500 text-sm font-bold">
                *
              </span>
                </label>
              <div className="pb-1">
                    <select
                      className="border text-xs w-full border-black ">
                      <option className="text-xs" >Select Budget Years</option>
                      </select>
              </div>
            </div>
            <div className="grow w-full">
                <label className="text-xs">Preference
                <span className="top-0  ms-2 text-red-500 text-sm font-bold">
                *
              </span>
                </label>
              <div className="pb-1">
                    <select
                      className="border text-xs w-full border-black ">
                      <option className="text-xs" >Select Preference</option>
                      </select>
              </div>
            </div>
            <div className="grow w-full">
              <div>
                <label className="text-xs">Framework Contact
                <span className="top-0  ms-2 text-red-500 text-sm font-bold">
                *
              </span>
                </label>
              </div>
              <div className="pr-3 pb-1">
                    <select
                      className="border text-xs w-full border-black ">
                      <option className="text-xs">Framework Contact</option>
                      </select>
              </div>
            </div>
          </div>
              <div className=" btn-padding flex ml-5 mt-2 mb-2 items-center space-x-1 w-16">
                <Image src="/save.png" alt="" width={16} height={10} />
                <label className="">Save</label>
              </div>
             
            
        </div>
      </div>
    </>
  );
};

export default Activity;

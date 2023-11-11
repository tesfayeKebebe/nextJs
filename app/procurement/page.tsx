import React from "react";
import Common from "../components/procurement/common";
import Image from "next/image";
interface planActivity {
  id: number;
  name: String;
  reference: String;
  preference: String;
  procurementType: String;
  procurementMethod: String;
  fundingSource: String;
  totalEstimatedAmount: number;
}

const ProcurementCard = () => {
  const data: planActivity[] = [
    {
      id: 1,
      name: "Alfrieds Futterkiste",
      reference: "REF001",
      preference: "High",
      procurementType: "Type A",
      procurementMethod: "Method X",
      fundingSource: "Source 1",
      totalEstimatedAmount: 1000,
    },
    {
      id: 2,
      name: "Antonio Mareno YTqueria",
      reference: "REF002",
      preference: "Medium",
      procurementType: "Type B",
      procurementMethod: "Method Y",
      fundingSource: "Source 2",
      totalEstimatedAmount: 2000,
    },
    {
      id: 3,
      name: "Around the horn",
      reference: "REF002",
      preference: "Medium",
      procurementType: "Type B",
      procurementMethod: "Method Y",
      fundingSource: "Source 2",
      totalEstimatedAmount: 2000,
    },
    {
      id: 4,
      name: "Test",
      reference: "REF002",
      preference: "Medium",
      procurementType: "Type B",
      procurementMethod: "Method Y",
      fundingSource: "Source 2",
      totalEstimatedAmount: 2000,
    },
  ];

  return (
    <>
      <div className="flex-item-center">
        <div className="border  ms-2  w-20 text-sm text-center bg-white">
          2023
        </div>
        <div className="text-sm text-center border ms-1 w-20 bg-white">
          2024
        </div>
      </div>
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
          <div className="border  border-black   mr-3">
            <span className="flex-item-center justify-center space-x-1 ps-1">
              <Image src="/search.png" alt="" width={18} height={10} />
              <input type="text" placeholder="Search..." className="p-1" />
            </span>
          </div>
        </div>
        <div className="mt-2 mr-5 ">
  <table className="w-full table-auto ms-2">
    <thead>
      <tr className="text-xs  border-t-2  border-r-2 border-b-2">
        <th  className="text-left ps-2">
          <input type="checkbox" name="" id="" />
        </th>
        <th className="text-left align-top ps-1">Name</th>
        <th className="text-left align-top">#Ref</th>
        <th className="text-left align-top px-6">Preference</th>
        <th className="text-left align-top px-6">Procurement Type</th>
        <th className="text-left align-top w-24 ">Procurement Method</th>
        <th className="text-left align-top px-6">Pending Source</th>
        <th className="text-left align-top w-24">Total Estimated Amount</th>
        <th className="text-right  align-top w-24"></th>
      </tr>
    </thead>
    <tbody>
      {data.map((activity) => {
        return (
          <tr className="text-xs  border-r-2 border-b-2" key={activity.id}>
            <td className="text-left ps-2">
          <input type="checkbox" name="" id=""  />
            </td>
            <td className="text-left ps-1 align-bottom">{activity.name}</td>
            <td >{activity.reference}</td>
            <td className="px-6 py-1 text-xs align-bottom">{activity.preference}</td>
            <td className="px-6 align-bottom">{activity.procurementType}</td>
            <td className="w-24 align-bottom">{activity.procurementMethod}</td>
            <td className="px-6 align-bottom">{activity.fundingSource}</td>
            <td className="w-24 align-bottom">USD {activity.totalEstimatedAmount.toLocaleString()}</td>
            <td> 
              <span className="flex gap-1">
              <span className="flex  border w-16 border-black rounded-sm pt-1 pb-1 pr-1
              space-x-1  hover:bg-sky-700 text-right" >
              <Image src="/cart.png" alt="" width={16} height={10} />
              <label className="">Items</label>
            </span> <span className="flex  border w-6 border-black rounded-sm 
            p-1
              space-x-1  hover:bg-sky-700 text-right" >
              <Image src="/forward.png" alt="" width={16} height={10} />
              <label className=""></label>
            </span>
              </span>
           </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
      </div>
    </>
  );
};

export default ProcurementCard;

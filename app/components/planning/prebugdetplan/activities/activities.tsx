import React, { useState } from "react";
import Image from "next/image";
import Pagination from "../../../pagination";
interface planActivity {
  id: number;
  name: String;
  reference: String;
  preference: String;
  procurementType: String;
  procurementMethod: String;
  fundingSource: String;
  totalEstimatedAmount: number;
  isChecked: boolean;
}
const PlanActivities = () => {
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
      isChecked: true,
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
      isChecked: false,
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
      isChecked: false,
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
      isChecked: false,
    },
  ];

  const [dataList, setDataList] = useState(data);
  const [isCheckBoxAll, setCheckBoxAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const updateCheckBox = (id: number) => {
    setDataList((prevDataList) => {
      return prevDataList.map((item) => {
        if (item.id === id) {
          return { ...item, isChecked: !item.isChecked };
        }
        return item;
      });
    });
  };
  const updateAllCheckBox = () => {
    setCheckBoxAll(!isCheckBoxAll);
    setDataList((prevDataList) => {
      return prevDataList.map((item) => {
        return { ...item, isChecked: !item.isChecked };
      });
    });
  };
  return (
    <div className="mt-2 mr-5 ">
      <table className="w-full table-auto ms-2">
        <thead>
          <tr className="text-xs  border-t-2  border-b-2">
            <th className="text-left ps-2">
              <div onClick={updateAllCheckBox}>
                {isCheckBoxAll ? (
                  <>
                    <span className="flex-item-center border border-black rounded-sm w-4">
                      <Image
                        src="/checked.png"
                        alt="Checked Checkbox"
                        width={16}
                        height={10}
                      />
                    </span>
                  </>
                ) : (
                  <span className="flex border border-black w-4 ps-1  pt-1 pb-2 pr-1"></span>
                )}
              </div>
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
          {dataList.map((activity) => {
            return (
              <tr className="text-xs  border-r-2 border-b-2" key={activity.id}>
                <td className="text-left ps-2">
                  <label>
                    <div
                      onClick={() => {
                        updateCheckBox(activity.id);
                      }}
                    >
                      {activity.isChecked ? (
                        <>
                          <span className="flex border border-black w-4">
                            <Image
                              src="/checked.png"
                              alt=""
                              width={10}
                              height={10}
                            />
                          </span>
                        </>
                      ) : (
                        <span className="flex border border-black w-4 ps-1  pt-1 pb-2 pr-1"></span>
                      )}
                    </div>
                  </label>
                </td>
                <td className="text-left ps-1 align-bottom">{activity.name}</td>

                <td>{activity.reference}</td>
                <td className="px-6 py-1 text-xs align-bottom">
                  {activity.preference}
                </td>
                <td className="px-6 align-bottom">
                  {activity.procurementType}
                </td>
                <td className="w-24 align-bottom">
                  {activity.procurementMethod}
                </td>
                <td className="px-6 align-bottom">{activity.fundingSource}</td>
                <td className="w-24 align-bottom">
                  USD {activity.totalEstimatedAmount.toLocaleString()}
                </td>
                <td>
                  <span className="flex gap-1">
                    <span
                      className="flex  border w-16 border-black rounded-sm pt-1 pb-1 pr-1space-x-1  hover:bg-sky-700 text-right"
                    >
                      <Image src="/cart.png" alt="" width={16} height={10} />
                      <label className="">Items</label>
                    </span>
                    <span
                      className="flex  border w-6 border-black rounded-sm 
    p-1
      space-x-1  hover:bg-sky-700 text-right"
                    >
                      <Image src="/forward.png" alt="" width={16} height={10} />
                    </span>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination isAtTheBeginning={false}
        items={20} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
      />
    </div>
  );
};
export default PlanActivities;

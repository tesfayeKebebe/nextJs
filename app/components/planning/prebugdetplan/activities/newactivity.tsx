import React, { useState } from "react";
import Image from "next/image";
import Pagination from "../../../pagination";
interface newActivity {
  id: number;
  name: String;
}
const NewActivity = () => {
  const data: newActivity[] = [
    {
      id: 1,
      name: "Alfrieds Futterkiste",
    },
    {
      id: 2,
      name: "Antonio Mareno YTqueria",
    },
    {
      id: 3,
      name: "Around the horn",
    },
    {
      id: 4,
      name: "Test",
    },
  ];

  const [dataList, setDataList] = useState(data);
  const [isCheckBoxAll, setCheckBoxAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="mt-2 mr-5 ">
      <table className="w-full table-auto ms-2">
        <thead>
          <tr className="text-xs  border-t-2  border-b-2">
            <th className=" text-left ps-2 align-top ">Name</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((activity) => {
            return (
              <tr className="text-xs border-b-2" key={activity.id}>
              <td>
                <div className="flex ">
                  <div className="text-xs p-2 pr-4 grow self-end pb-0">
                    {activity.name}
                  </div>
                  {activity.id === 1 && (
                    <div className="flex border border-black rounded-sm w-4">
                      <Image src="/forward.png" alt="" width={12} height={10} />
                    </div>
                  )}
                </div>
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        items={20} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
      />
    </div>
  );
};
export default NewActivity;

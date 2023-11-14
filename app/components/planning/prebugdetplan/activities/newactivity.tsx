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
              <tr className="text-xs  border-b-2 " key={activity.id}>
                <td >
                  <span className="flex justify-between">
                    <span className="text-left s-2 align-bottom pr-4 grow">
                    {activity.name}
                    </span>
                    <span className="text-right border border-black rounded-sm  w-4 ">
                      <Image src="/forward.png" alt="" width={16} height={10} />
                      </span>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        isAtTheBeginning={true}
        items={20} // 100
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
      />
    </div>
  );
};
export default NewActivity;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderPage = () => {
  return (
    <>
      <div className="flex-item-center space-x-2 
        justify-between bg-white header-border">
        <div className="flex-item-center space-x-2 ">
          <div className="flex flex-col ps-3">
            <Image
              src="/logo.png"
              alt=""
              width={16}
              height={2}
              className="icon-margin"
            />
            <Image src="/logo.png" alt="" width={16} height={2} />
          </div>
          <div className="text-right mr-2  text-xs">Organization Name</div>
        </div>
        <div className="flex-item-center">
          <div>
            <Image src="/user.png" alt="" width={16} height={10} />
          </div>
          <div className="p-3 ps-2 text-xs">Abebe Mengesha</div>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;

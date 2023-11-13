'use client'
import React from 'react'
interface PaginationProps {
    items: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  }

const pagination: React.FC<PaginationProps>  = ({ items, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(items / pageSize); // 100/10

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
   
     return (
      <div>
        <nav aria-label="Pagination" className=" flex flex-row justify-end text-gray-600">
  <a href="#" className="p-2 mr-1 rounded text-blue-400	"> 
  <span>&#8804;</span>
  </a>
  <a href="#" className="px-4 py-2 rounded hover:bg-gray-100"> 1 </a>
  <a href="#" className="px-4 py-2 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100"> 2 </a>
  <a href="#" className="px-4 py-2 rounded hover:bg-gray-100"> 3 </a>
  <a href="#" className="px-4 py-2 rounded hover:bg-gray-100"> ... </a>
  <a href="#" className="px-4 py-2 rounded hover:bg-gray-100"> 9 </a>
  <a href="#" className="p-2 ml-4 rounded text-cyan-300 ">
   <span>&#8805;</span>
  </a>
</nav>
        {/* <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "pageItemActive" : "pageItem"
              }
            >
              <a className={"pageLink"} onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    );
}

export default pagination
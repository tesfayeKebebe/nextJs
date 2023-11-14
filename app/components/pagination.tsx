'use client'
import React from 'react'
interface PaginationProps {
   isAtTheBeginning:boolean
    items: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  }

const pagination: React.FC<PaginationProps>  = ({isAtTheBeginning, items, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(items / pageSize); // 100/10

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
   
     return (
      <div>
      {isAtTheBeginning ?
      ( <nav aria-label="Pagination" className=" flex flex-row  w-40 justify-center text-gray-600 pt-2 mr-1 text-xs">
      <a href="#" className="py-1 underline  text-cyan-300	"> 
      <span>&#60;</span>
      </a>
      <a href="#" className="px-1 py-1 underline  text-cyan-300"> 1 </a>
      <a href="#" className="px-1 py-1 underline text-cyan-300"> 2 </a>
      <a href="#" className="px-1  py-1 underline text-cyan-300"> 3 </a>
      <a href="#" className="px-1  py-1 underline text-cyan-300"> 4 </a>
      <a href="#" className="px-1  py-1  text-cyan-300"> ... </a>
      <a href="#" className="px-1  py-1 underline text-cyan-300"> 9 </a>
      <a href="#" className="px-1  py-1 underline text-cyan-300"> 10 </a>
      <a href="#" className="px-1  py-1 underline text-cyan-300 ">
       <span>&#62;</span>
      </a>
    </nav>):( <nav aria-label="Pagination" className=" flex flex-row justify-end text-gray-600 pt-2 mr-1 text-xs">
  <a href="#" className="py-1 underline  text-cyan-300	"> 
  <span>&#60;</span>
  </a>
  <a href="#" className="px-1 py-1 underline  text-cyan-300"> 1 </a>
  <a href="#" className="px-1 py-1 underline text-cyan-300"> 2 </a>
  <a href="#" className="px-1  py-1 underline text-cyan-300"> 3 </a>
  <a href="#" className="px-1  py-1 underline text-cyan-300"> 4 </a>
  <a href="#" className="px-1  py-1  text-cyan-300"> ... </a>
  <a href="#" className="px-1  py-1 underline text-cyan-300"> 9 </a>
  <a href="#" className="px-1  py-1 underline text-cyan-300"> 10 </a>
  <a href="#" className="px-1  py-1 underline text-cyan-300 ">
   <span>&#62;</span>
  </a>
</nav>)} 
     
      </div>
    );
}

export default pagination
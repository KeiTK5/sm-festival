import React from 'react';
import ReactPaginate from 'react-paginate';
import ListNews from '../List';

export function Items({ currentItems }) {
  console.log(currentItems);
  return (
    <>
      {
        currentItems?.map((item, index) => (
          <ListNews item={item} key={index} />
        ))
      }
    </>
  );
}

function Pagination({ handlePageClick, currentPage, pageCount }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<i className='bx bx-chevrons-right'></i>}
      previousLabel={<i className='bx bx-chevrons-left'></i>}
      onPageChange={handlePageClick}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName="range-pagination"
      pageClassName="item-pagination"
      activeLinkClassName="active-link"
      nextClassName="next-link"
      previousClassName={currentPage === 1 ? "disable-link" : "prev-link"}
    />
  );
}

export default Pagination;
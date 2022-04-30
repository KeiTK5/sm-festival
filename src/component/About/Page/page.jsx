import React, { useEffect, useState } from 'react';
import Button from '../../../common/button/button';
import { PageImage, Filter } from '../../../assets/image'
import Pagination from './Pagination/pagination';
import { Items } from './Pagination/pagination';
import data from './List/data.js';
import LazyLoad from 'react-lazyload'

function Page(props) {

  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 4

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    console.log(currentItems);
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setCurrentPage(event.selected + 1)
    setItemOffset(newOffset);
  };

  return (
    <div className='container-page'>
      <Button content={'View Filter'} icons={<img src={Filter} alt="icons" />} />
      <div className="container-news">
        <div className="page-news">
          <div className="list-news">
            <Items currentItems={currentItems} />
          </div>
        </div>
        <div className="page-image">
          <LazyLoad>
            <img src={PageImage} alt="" />
          </LazyLoad>
        </div>
      </div>
      <Pagination itemsPerPage={4} handlePageClick={handlePageClick} currentPage={currentPage} pageCount={data.length / 4} />
    </div>
  );
}

export default Page;
import React, { useEffect, useState } from 'react';
import { Items } from './Songs/Pagination/pagination';
import Pagination from './Songs/Pagination/pagination';
import dataLocal from './data/data'
import './index.css'
function Albums(props) {

    const [status, setStatus] = useState('New to Old');
    const [active, setActive] = useState(0);
    const [data, setData] = useState(dataLocal);

    const [currentItems, setCurrentItems] = useState(null);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 4

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setCurrentPage(event.selected + 1)
        setItemOffset(newOffset);
        console.log(event.selected + 1);
    };

    const HandleNewSong = () => {
        setStatus('New to Old')
        setActive(0)
        const sortedActivities = data.slice().sort((a, b) => b.date - a.date)
        setData(sortedActivities)
    }

    const HandleOldSong = (e) => {
        setStatus('Old to New')
        setActive(1)
        const sortedActivities = data.slice().sort((a, b) => a.date - b.date)
        setData(sortedActivities)
    }


    return (
        <div className='container-albums'>
            <div className="title-main">
                Albums <span className="albums-year">2020 - 2022</span>
            </div>
            <div className="box-albums">
                <div className="nav-albums">
                    <p className="item-albums" onClick={HandleNewSong}>New Album</p>
                    <p className="item-albums">Best Seller</p>
                    <p className="item-albums">Album Limited</p>
                    <p className="item-albums">Old Album</p>
                </div>
            </div>
            <div className="box-options">
                <div className="item-option show-item">
                    Showing {itemsPerPage} out of <p className="total-song">{data.length}</p>  albums
                </div>
                <div className="item-option">
                    Status: {status}
                    <div className="box-status">
                        <i className={`bx bx-chevron-up ${active === 0 ? "active" : ""}`} onClick={HandleNewSong}></i>
                        <i className={`bx bx-chevron-down ${active === 1 ? "active" : ""}`} onClick={e => HandleOldSong(e)}></i>
                    </div>
                </div>
            </div>
            <div className="container-songs">
                <div className="box-songs">
                    <Items currentItems={currentItems} />
                </div>
            </div>
            <Pagination itemsPerPage={4} handlePageClick={handlePageClick} currentPage={currentPage} pageCount={data.length / 4} />
        </div>
    );
}

export default Albums;
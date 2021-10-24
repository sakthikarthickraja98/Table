import axios from 'axios';
import React,{useEffect, useState} from 'react';
import Table from './table';
import './searchbar.css';


import ReactPaginate from 'react-paginate';

const Homepage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [term, setTerm] = useState("");

    const handlePageClick = (data) => {
        let currentPage = data.selected + 1
        setCurrentPage(currentPage);
    }

    const fetchBlogs = async() => {
            setLoading(true);
            const res = await axios.get(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=10`);
            setData(res.data);
    };

    useEffect(() => {fetchBlogs()},[currentPage]);

    function search(rows) {
        return rows.filter((row) => row.name.toLowerCase().indexOf(term) > -1);
    }

    return (
    <>
    <div className="topnav">
<div class="search-container" style={{padding:"10px"}}>
    <form>
      <input type="text" placeholder="Search.." name="search" onChange={(e)=>setTerm(e.target.value)} value={term}/>
    </form>
  </div>
</div>

    <div className="container" style={{marginTop:"20px"}}>
        <Table data={search(data)} loading={loading}/>
    </div>

    <div style={{display:'flex', alignItems:'center',justifyContent:'center',marginTop:'22px'}}>
            <ReactPaginate
             previousLabel={'previous'}
             nextLable={'next'}
             breakLable={'...'}
             pageCount={33}
             marginPagesDisplayed={3}
             pageRangeDisplayed={2}
             onPageChange={handlePageClick}
             containerClassName={'pagination justify-content-center'}
             pageClassName={'page-item'}
             pageLinkClassName={'page-link'}
             previousClassName={'page-item'}
             previousLinkClassName={'page-link'}
             nextClassName={'page-item'}
             nextLinkClassName={'page-link'}
             breakClassName={'page-item'}
             breakLinkClassName={'page-link'}
             activeClassName={'active'}
            />
    </div>

    </>
    );
}

export default Homepage;

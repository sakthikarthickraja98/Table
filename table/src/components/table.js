import axios from 'axios';
import React,{useEffect, useState} from 'react';
import './table.css';

import ReactPaginate from 'react-paginate';


const Table = () => {

    const [tableDetails, setTableDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    const handlePageClick = (data) => {

        let currentPage = data.selected + 1
        setCurrentPage(currentPage);
    }

    const fetchBlogs = async() => {
            setLoading(true);
            const res = await axios.get(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=10`);
            setTableDetails(res.data);
    };

    useEffect(() => {fetchBlogs()},[currentPage]);
    
    if (!loading){
        return <h4>Loading...</h4>;
    }

    const columns = {tableDetails}[0] && Object.keys({tableDetails}[0]);
    return (
        <div>
        <div className="tableContainer" >
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Tagline</th>
                        <th>First Brewed</th>
                        <th>Ph</th>
                        <th>Description</th>
                        <th>Brewers Tips</th>
                    </tr>
                </thead>
                <tbody>
                        {tableDetails.map(item => 
                        <tr key={item.name}>
                        <td data-label="Name">{item.name}</td>
                        <td data-label="Tagline">{item.tagline}</td>
                        <td data-label="First Brewed">{item.first_brewed}</td>
                        <td data-label="Ph">{item.ph}</td>
                        <td data-label="Description">{item.description}</td>
                        <td data-label="Brewers Tips">{item.brewers_tips}</td>
                        </tr>
                        )}
                </tbody>
            </table>

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
            
        </div>
        </div>
    )
}

export default Table;

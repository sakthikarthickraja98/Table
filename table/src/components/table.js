import axios from 'axios';
import React,{useEffect, useState} from 'react';
import './table.css';

import ReactPaginate from 'react-paginate';


const Table = ({data}) => {
    
    // if (!loading){
    //     return <h4>Loading...</h4>;
    // }
   
    // const columns = data[0] && Object.keys(data[0]);
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
                        {/* {data[0] && columns.map((heading)=><th>{heading}</th>)} */}
                    </tr>
                </thead>
                <tbody>
                        {data.map(item => 
                        <tr key={item.name}>
                        <td data-label="Name">{item.name}</td>
                        <td data-label="Tagline">{item.tagline}</td>
                        <td data-label="First Brewed">{item.first_brewed}</td>
                        <td data-label="Ph">{item.ph}</td>
                        <td data-label="Description">{item.description}</td>
                        <td data-label="Brewers Tips">{item.brewers_tips}</td>
                        </tr>
                        )}
                        {/* {data.map(row => <tr>
                            {
                                columns.map(column => <td>{row[column]}</td>)
                            }
                        </tr>)} */}
                </tbody>
            </table>


            
        </div>
        </div>
    )
}

export default Table;

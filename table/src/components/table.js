import React from 'react';
import './table.css';

const Table = ({data, loading}) => {
    
    if (!loading){
        return <h4>Loading...</h4>;
    }
   
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
                </tbody>
            </table>


            
        </div>
        </div>
    )
}

export default Table;

import React from 'react';
import Table from './table';
import SearchBar from './searchbar';

const Homepage = () => {
    return (
    <>
    <SearchBar/>
    <div className="container" style={{marginTop:"20px"}}>
        <Table/>
    </div>
    </>
    );
}

export default Homepage;

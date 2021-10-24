import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './searchbar.css';


const SearchBar = () => {
  
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');

  console.log(term);

  const fetchBlogs = async() => {
    const res = await axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=10`);
    console.log("search",res.data);
    setData(res.data);
  };

  const onSubmit =(e)=>{
    e.preventDefault()

    setTerm(e.target.value)
  }

useEffect(() => {fetchBlogs()},[]);

return (
        <React.Fragment>
    {/* <div className="container-fluid" style={{backgroundColor:"#ff5050"}}>
        <div className="row" style={{color:"white"}}>
            <div className="col" style={{padding:"10px"}}> */}
            {/* <div class="ui category search">
        <div class="ui icon input">
            <input class="prompt" type="text" placeholder="search name..." onChange={(e)=>setTerm(e.target.value)} value={term}/>
            <i class="search icon"></i>
        </div>
            </div> */}
<div className="topnav">
<div class="search-container" style={{padding:"10px"}}>
    <form>
      <input type="text" placeholder="Search.." name="search" onChange={(e)=>setTerm(e.target.value)} valur={term}/>
      <button onClick={onSubmit}><i class="fa fa-search"></i></button>
    </form>
  </div>
</div>
            {/* </div>
        </div>
    </div> */}
        </React.Fragment>
    
)
}

export default SearchBar;

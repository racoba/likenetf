import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderTable from './headertable'
import Movie from './movieCard'
import { searchAPI } from '../services/API';

const useStyles = makeStyles({

  div1: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },

})

export default ({ moviesList, changeTotalPages }) => {

  const classes = useStyles();

  const [searchNameFilter, setSearchNameFilter] = useState("");
  const [filteredMovies, setFilteredMovies] = useState();

  const createNameFilter = async (filterStr) => {
    setSearchNameFilter(filterStr);
    
  };

  useEffect(async () => {
    await fetch(searchAPI + searchNameFilter)
    .then((res) => res.json())
    .then((data) => { 
      setFilteredMovies(data.results) 
      
    })
  },[searchNameFilter])

  

  return (
    <div >
      <HeaderTable
        searchNameFilter={searchNameFilter}
        setSearchNameFilter={createNameFilter}
      />


    
      <div className={classes.div1}>
        {filteredMovies ? filteredMovies.map((item) => (
          <Movie key={item.id} {...item} />
        )) : moviesList.map((item) => (
          <Movie key={item.id} {...item} />
        ))}
      </div>



    </div>
  );
}

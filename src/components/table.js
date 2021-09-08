import React, { useState } from 'react';
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

export default ({ moviesList }) => {

  const classes = useStyles();

  const [searchNameFilter, setSearchNameFilter] = useState("");
  // const [filteredMovies, setFilteredMovies] = useState();

  const createNameFilter = async (filterStr) => {
    setSearchNameFilter(filterStr);

    
      
    

    // API PARA BUSCAR EM TODAS AS PAGINAS POREM COM DELAY
    // await fetch (searchAPI + searchNameFilter)
    // .then ((res)=> res.json())
    // .then ((data)=> { setFilteredMovies(data.results) })

  };

  const filteredName = moviesList.filter((movie) => {
    
    if (movie.title === searchNameFilter) {
      return movie;
    }
  });


  const gettingTableData = () => {
    if (searchNameFilter !== "" && searchNameFilter !== null && searchNameFilter !== undefined) return filteredName;
    else return moviesList;
  }

  const tableData = gettingTableData();

  return (
    <div >
      <HeaderTable
        searchNameFilter={searchNameFilter}
        setSearchNameFilter={createNameFilter}
      />


      <div className={classes.div1}>
        {tableData.map((item) => (
          <Movie key={item.id} {...item} />
        ))}
      </div>


      {/* <div className={classes.div1}>
        {filteredMovies? filteredMovies.map((item) => (
          <Movie key={item.id} {...item} />
        )): moviesList.map((item) => (
          <Movie key={item.id} {...item} />
        ))}
      </div> */}



    </div>
  );
}

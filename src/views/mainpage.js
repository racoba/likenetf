import React, { useEffect, useState } from 'react'
import Table from '../components/table'
import Pagination from '../components/paginations'
import { MoviesAPI } from '../services/API'
import "./mainpage.css"

export default () => {



    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [quantPages, setQuantPages] = useState(1);

    const getMovies = async () => {
        
        await fetch(MoviesAPI+page)
            .then((res) => res.json())
            .then((data) => {
               
                setQuantPages(data.total_pages)
                setMovies(data.results);
            })
        
    }

    useEffect(async () => {
            await getMovies();
    }, [page]);

    return (
        <div id="mainPage">
            <Pagination changePage={setPage} totalPages={quantPages}/>
            <Table moviesList={movies}  />
            
        </div>
    )
}







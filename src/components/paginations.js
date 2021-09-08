import React from 'react';
import { makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
    div1: {
        marginTop: "3%"
    },
    paginationS: {
        backgroundColor: "black",
        borderRadius: "10px",
    }
})

export default ({ changePage, totalPages }) => {

    const classes = useStyles();

    const handleChange = (p) => {
        changePage(p);
    }

    return (
        <div className={classes.div1}>
            <div>
                <Pagination
                    className={classes.paginationS}
                    count={totalPages}
                    variant="outlined"
                    shape="rounded"
                    onChange={(e) => handleChange(e.target.textContent)} />
            </div>
        </div>
    );
}
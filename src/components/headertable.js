import React, { useState } from 'react'
import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import "./styles.css"


const useStyles = makeStyles({
    input: {
        backgroundColor: "black",
        border: "0.5px solid white",
        color: "white",
        borderRadius: "15px", 
        height: "40px",
        width: "" ,
        
    },
    div1: {
        height: "10%",
        marginTop: "1%",
    },
    div2: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
})

export default ({ setSearchNameFilter }) => {

    const classes = useStyles();

    const [toNameFilter, setToNameFilter] = useState("");

    const doFilter = () => {
        setSearchNameFilter(toNameFilter);
    };

    const handleSubmitFilter = (e) => {
        e.preventDefault();
        var typingTimer;
        clearTimeout(typingTimer)
        typingTimer = setTimeout(doFilter, 2000)

    }


    const changeNameTF = (e) => {
        setToNameFilter(e.target.value);
    };


    return (
        <div className={classes.div1}>
            <div className={classes.div2}>

                <div >
                    <TextField
                        type="text"
                        className={classes.input}
                        size="small"
                        value={toNameFilter}
                        onChange={changeNameTF}
                        onKeyUp={handleSubmitFilter}
                        variant="outlined"
                        placeholder="Ex: Luca"
                    />

                </div>
            </div>

        </div>
    )
}







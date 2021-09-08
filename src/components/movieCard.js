import React, { useState } from 'react';
import { Dialog, DialogContent, DialogContentText, makeStyles, Modal, Portal } from '@material-ui/core';
import { imageAPI } from '../services/API';



const useStyles = makeStyles({
    div1: {
        width: "200px",
        height: "25%", margin: "1%",
        marginTop: "1%"
    },
    div2: {
        height: "10%",
    },
    divModal: {
        height: "20vh",
        width: "10vh",
    }
})



export default ({ title, poster_path, overview, release_date, vote_average }) => {

    const classes = useStyles();

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true)
    }

    return (
        <div className={classes.div1}>
            <div className={classes.div2}>
                <h3>{title}</h3>
            </div>

            <img src={imageAPI + poster_path} style={{ maxWidth: "100%", maxHeight: "100%" }} onClick={() => setModal(true)} />


            <Dialog
                open={modal}
                onClose={() => setModal(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <DialogContent>
                    <DialogContentText>
                        <h1 style={{color:"black"}}>{title}</h1>
                        <img src={imageAPI + poster_path} style={{ maxWidth: "100%", maxHeight: "60%" }} />
                        <h2 style={{color:"black"}}>Overview</h2>
                        <h3>{overview}</h3>


                    </DialogContentText>
                </DialogContent>
            </Dialog>


        </div >
    );
}
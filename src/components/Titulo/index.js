import React from "react";
import Typography from '@mui/material/Typography';



function Titulo() {

    return (

        <Typography variant="h1"
            component="div"
            color={"white"}
            fontStyle={"Italic"}
            fontFamily={"arial"}


            sx={{

                marginLeft: 57,
                marginTop: 10,
                textalign: 10,

            }}>
            Finança Pessoal
        </Typography>
    );


}


export default Titulo;
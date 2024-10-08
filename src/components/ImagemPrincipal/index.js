import { Grid } from "@mui/material";
import React from "react";
import FinancaImagem from "../../assets/images/imagemfinançapessoal.jpg"

function ImagemPrincipal({children}) {
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={12}
                className="='image"
                sx={{
                    backgroundImage: `url(${FinancaImagem})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",
                    backgroundPosition: 'center'
                }}
            >
                {children}
            </Grid>
        </Grid>
    )
}


export default ImagemPrincipal;
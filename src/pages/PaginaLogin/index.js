import React from "react"
import ImagemPrincipal from "../../components/ImagemPrincipal";
import { Box } from "@mui/material";
import BoxLogin from "../../components/BoxLogin";
import Titulo from "../../components/Titulo";



function PaginaLogin() {

  return (




    <ImagemPrincipal>
      <Titulo />


      <Box
        sx={{ display: "flex" }}
      >

        <BoxLogin />



      </Box>






    </ImagemPrincipal>









  );


}


export default PaginaLogin;
import React from "react"
import ImagemPrincipal from "../../components/ImagemPrincipal";
import { Box } from "@mui/material";
import BoxLoginCadastro from "../../components/BoxLoginCadastro";
import Titulo from "../../components/Titulo";



function PaginaLogin() {

  return (




    <ImagemPrincipal>
      <Titulo />


      <Box
        sx={{ display: "flex" }}
      >

        <BoxLoginCadastro />



      </Box>






    </ImagemPrincipal>









  );


}


export default PaginaLogin;
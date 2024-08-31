import React from "react"
import ImagemPrincipal from "../../components/ImagemPrincipal";
import { Box } from "@mui/material";
import BoxLoginCadastro from "../../components/BoxLoginCadastro";


function PaginaLogin() {

  return (

    <div>



      <ImagemPrincipal>

        <Box
          sx={{ display: "flex" }}
        >

          <BoxLoginCadastro />



        </Box>






      </ImagemPrincipal>







    </div>

  );


}


export default PaginaLogin;
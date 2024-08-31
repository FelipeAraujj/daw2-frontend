import React from "react"
import FinancaImagem from "../../assets/images/imagemfinançapessoal.jpg"
import ImagemPrincipal from "../../components/ImagemPrincipal";
import { Box } from "@mui/material";
import BoxLoginCadastro from "../../components/BoxLoginCadastro";


function PaginaCadastro() {

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


export default PaginaCadastro;
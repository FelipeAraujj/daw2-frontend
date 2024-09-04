import React from "react"
import FinancaImagem from "../../assets/images/imagemfinançapessoal.jpg"
import ImagemPrincipal from "../../components/ImagemPrincipal";
import { Box } from "@mui/material";
import BoxLoginCadastro from "../../components/BoxLoginCadastro";
import Typography from '@mui/material/Typography';
import Titulo from "../../components/Titulo";


function PaginaCadastro() {

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


export default PaginaCadastro;
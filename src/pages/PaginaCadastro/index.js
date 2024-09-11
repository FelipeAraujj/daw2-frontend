import React from "react"
import FinancaImagem from "../../assets/images/imagemfinançapessoal.jpg"
import ImagemPrincipal from "../../components/ImagemPrincipal";
import { Box } from "@mui/material";
import BoxLogin from "../../components/BoxLogin";
import Typography from '@mui/material/Typography';
import Titulo from "../../components/Titulo";
import BoxCadastro from "../../components/BoxCadastro";



function PaginaCadastro() {

  return (

    <ImagemPrincipal>
      <Titulo />

      <Box
        sx={{ display: "flex" }}
      >

      <BoxCadastro/>



      </Box>




    </ImagemPrincipal>


  );


}


export default PaginaCadastro;
import React from "react"
import { Box } from "@mui/material";
import BarraNavegacao from "../../components/BarraNavegacao";
import BoxPrincipal1 from "../../components/BoxPrincipal1";
import ImagemPrincipal from "../../components/ImagemPrincipal";
import Typography from '@mui/material/Typography';





function PaginaPrincipal() {

  return (



    <ImagemPrincipal>



      <Typography variant="h2"
        component="div"
        color={"white"}
        fontStyle={"Italic"}
        fontFamily={"arial"}
        sx={{

          marginLeft: 5,
          
          textalign: 10,

        }}>        
      </Typography>

      <Box
        sx={{ display: "flex" }}
      >

        <BoxPrincipal1 />
        <BoxPrincipal1 />

      </Box>

    </ImagemPrincipal>






  );


}


export default PaginaPrincipal;
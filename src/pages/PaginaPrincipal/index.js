import React from "react"
import { Box } from "@mui/material";
import BarraNavegacao from "../../components/BarraNavegacao";
import BoxPrincipal1 from "../../components/BoxPrincipal1";
import ImagemPrincipal from "../../components/ImagemPrincipal";




function PaginaPrincipal() {

  return (
    <div>
      <ImagemPrincipal>
        <BarraNavegacao />
        <Box
          sx={{ display: "flex" }}
        >
          <BoxPrincipal1 />
          <BoxPrincipal1 />
          <BoxPrincipal1 />
          <BoxPrincipal1 />

        </Box>

      </ImagemPrincipal>

    </div>

  );


}


export default PaginaPrincipal;
import React from "react";
import Box from '@mui/material/Box';
import { alpha } from '@mui/material';


function BoxLoginCadastro() {
    return (
        <Box
            height={450}
            width={500}
            my={25}
            display="flex"
            alignItems="center"
            gap={20}
            p={0}
            marginLeft={68}
            marginTop={30}
            sx={{
                backgroundColor: theme => alpha("#34230E", 0.8),
                borderRadius: 2,

            }}
        >
        </Box>

    )

}

export default BoxLoginCadastro;
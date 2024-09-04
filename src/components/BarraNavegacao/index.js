import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';






function BarraNavegacao() {

  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#34230E",

        }}
      >
        <Toolbar>
          <Typography variant="h3"
            component="div"
            fontStyle={"Italic"}
            sx={{ flexGrow: 1 }}>
            Finança Pessoal
          </Typography>
          <Button
            color="inherit"
            onClick={() => { navigate("/login") }}
          >
            Sair</Button>
        </Toolbar>
      </AppBar>
    </Box>

  );


}


export default BarraNavegacao; 
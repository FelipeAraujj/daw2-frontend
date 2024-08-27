import * as React from 'react';
import Box from '@mui/material/Box';

function BoxPrincipal1() {
  return (
    <Box
      height={700}
      width={300}
      my={25}
      display="flex"
      alignItems="center"
      gap={20}
      p={2}
      marginLeft={2}
      sx={{
        border: '2px solid grey',
        backgroundColor: "#34230E"
      }}
    >
      campo para digitalização
    </Box>
  );
}

export default BoxPrincipal1;


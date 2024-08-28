import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material';

function BoxPrincipal1() {
  return (
    <Box
      height={700}
      width={300}
      my={25}
      display="flex"
      alignItems="center"
      gap={20}
      p={0}
      marginLeft={10}
      sx={{
        backgroundColor: theme => alpha("#34230E", 0.8),

      }}
    >
    </Box>
  );
}

export default BoxPrincipal1;


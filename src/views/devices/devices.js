import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

// components
import RequestedDevices from './components/devicesList';
const Devices = () => {
  return (
    <PageContainer title="Devices" description="this is devices">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <RequestedDevices />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Devices;

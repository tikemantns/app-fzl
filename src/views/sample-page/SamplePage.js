import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const SamplePage = () => {
  const [device, setDevice] = React.useState('');

  const handleChange = (event) => {
    setDevice(event.target.value);
  };
  return (
    <PageContainer title="Sell Old Device" description="Sell your old apple devices">
      <DashboardCard title="Sell Old Device">
        <Box sx={{ flexGrow: 1 }} component="form"
          noValidate
          autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Devices</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={device}
                  label="Iphone"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Iphone 6</MenuItem>
                  <MenuItem value={20}>iPad</MenuItem>
                  <MenuItem value={30}>iWatch</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Model</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={device}
                  label="Iphone"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Iphone 6</MenuItem>
                  <MenuItem value={20}>iPad</MenuItem>
                  <MenuItem value={30}>iWatch</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Required"
                defaultValue="Device Color"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Model</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={device}
                  label="Iphone"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Iphone 6</MenuItem>
                  <MenuItem value={20}>iPad</MenuItem>
                  <MenuItem value={30}>iWatch</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Required"
                defaultValue="Serial No/ IMEI NO"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Device Box Included</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Does Device Has Any Issue?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Required"
                defaultValue="Issue with device"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">is Device in the warranty?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Required"
                defaultValue="Warranty Validity"
              />
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={2} direction="row" sx={{ float: 'right', margin: 1 }}>
                <Button variant="contained" color='error'>Cancel</Button>
                <Button variant="contained">Submit</Button>
              </Stack>
            </Grid>

          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

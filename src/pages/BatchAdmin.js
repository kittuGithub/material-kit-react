import React from 'react';
import JobDetails from 'src/components/dashboard/JobDetails';
import {
  Box,
  Button,
  Card,
  Container,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@material-ui/core';

export default function BatchAdmin() {
  const [queue, setQueue] = React.useState('');
  const [usecase, setUsecase] = React.useState('');
  const [option, setOption] = React.useState('');
  const [jobStatus, setJobStatus] = React.useState('');
  const [showSelectionContent, setShowSelectionContent] = React.useState(false);

  const handleQueue = (event) => {
    setQueue(event.target.value);
  };

  const handleUsecase = (event) => {
    setUsecase(event.target.value);
  };

  const handleOption = (event) => {
    setOption(event.target.value);
  };

  const handleJobStatus = (event) => {
    setJobStatus(event.target.value);
  };

  const onSelectionClick = () => {
    setShowSelectionContent(!showSelectionContent);
  };
  return (
    <Box sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      py: 3
    }}
    >
      <Container maxWidth={false}>
        <Box>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h4"
            style={{ marginTop: '20px', float: 'left' }}
          >
            Queue Selection :
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
          >
            <Card
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Grid
                  container
                  spacing={3}
                  sx={{ justifyContent: 'space-between' }}
                >
                  <Grid item>
                    <InputLabel id="demo-simple-select-label">Queue</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={queue}
                      onChange={handleQueue}
                      style={{ width: '100%', color: '#fffff' }}
                    >
                      <MenuItem value="AutoZeroRating">Queue</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item>
                    <InputLabel id="demo-simple-select-label">Use Case</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={usecase}
                      onChange={handleUsecase}
                      style={{ width: '100%', color: '#fffff' }}
                    >
                      <MenuItem value="AutoZeroRating">AutoZeroRating</MenuItem>
                      <MenuItem value="ConfigUpdates">ConfigUpdates</MenuItem>
                      <MenuItem value="Day1">Day1</MenuItem>
                      <MenuItem value="UploadImage">UploadImage</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item>
                    <InputLabel id="demo-simple-select-label">Option</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={option}
                      onChange={handleOption}
                      style={{ width: '100%', color: '#fffff' }}
                    >
                      <MenuItem value="Execute">Execute</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item>
                    <InputLabel id="demo-simple-select-label">Job Status</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={jobStatus}
                      onChange={handleJobStatus}
                      style={{ width: '100%', color: '#fffff' }}
                    >
                      <MenuItem value="Completed">Completed</MenuItem>
                      <MenuItem value="Failed">Failed</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onSelectionClick}
                      style={{ marginTop: '20%' }}
                    >
                      Selection
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* <Box>
          <Card sx={{ height: '100%', marginTop: '10px', width: '30%' }}>
            <CardContent>
              <Box sx={{ marginRight: '3%', textAlign: 'center', display: 'flex' }}>
                <Box>
                  <InputLabel id="demo-simple-select-label">Use Case</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={usecase}
                    onChange={handleUsecase}
                    style={{ width: '100%', color: '#fffff' }}
                  >
                    <MenuItem value="AutoZeroRating">AutoZeroRating</MenuItem>
                    <MenuItem value="ConfigUpdates">ConfigUpdates</MenuItem>
                    <MenuItem value="Day1">Day1</MenuItem>
                    <MenuItem value="UploadImage">UploadImage</MenuItem>
                  </Select>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: '20%' }}
                  onClick={onSelectionClick}
                >
                  Selection
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box> */}
        { showSelectionContent
          ? (
            <div>
              <Card sx={{ marginTop: '20px', width: '20%' }}>
                <Box style={{ margin: '10px' }}>
                  <TextField id="outlined-basic" label="Rate" variant="filled" style={{ marginLeft: '20px', marginTop: '20px' }} value="6" />
                  <TextField id="outlined-basic" label="Delay" variant="filled" style={{ marginLeft: '20px', marginTop: '20px' }} value="1000" />
                  <TextField id="outlined-basic" label="Refresh" variant="filled" style={{ marginLeft: '20px', marginTop: '20px' }} value="5000" />
                </Box>
              </Card>
              <Box>
                <Box>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                    style={{ marginTop: '20px' }}
                  >
                    Queue Details Queue :
                  </Typography>
                </Box>
                <Card style={{ marginTop: '20px' }}>
                  <CardContent>
                    <JobDetails selectedJobCat="Scheduled Jobs" />
                  </CardContent>
                </Card>
              </Box>
            </div>
          ) : null }
      </Container>
    </Box>
  );
}

import React from 'react';
import JobDetails from 'src/components/dashboard/JobDetails';
import {
  Box,
  Button,
  Card,
  Container,
  CardContent,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';

export default function BatchAdmin() {
  const [usecase, setUsecase] = React.useState('');
  const [showSelectionContent, setShowSelectionContent] = React.useState(false);
  const handleUsecase = (event) => {
    setUsecase(event.target.value);
  };
  const onSelectionClick = () => {
    setShowSelectionContent(!showSelectionContent);
  };
  return (
    <div>
      <Container maxWidth={false} textAlign="center">
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
        { showSelectionContent
          ? (
            <div>
              <Card sx={{ marginTop: '20px', width: '50%' }}>
                <CardContent>
                  <Box style={{ margin: '10px' }}>
                    <TextField id="outlined-basic" label="Rate" variant="filled" style={{ marginLeft: '20px' }} value="6" />
                    <TextField id="outlined-basic" label="Delay" variant="filled" style={{ marginLeft: '20px' }} value="1000" />
                    <TextField id="outlined-basic" label="Refresh" variant="filled" style={{ marginLeft: '20px' }} value="5000" />
                  </Box>
                </CardContent>
              </Card>
              <Card style={{ marginTop: '20px' }}>
                <CardContent>
                  <JobDetails selectedJobCat="Scheduled Jobs" />
                </CardContent>
              </Card>
            </div>
          ) : null }
      </Container>
    </div>
  );
}

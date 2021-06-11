import React from 'react';
import {
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';

function BatchSelection(props) {
  const [usecase, setUsecase] = React.useState('');
  const handleUsecase = (event) => {
    setUsecase(event.target.value);
  };

  const [batch, setBatch] = React.useState('');
  const handleBatch = (event) => {
    setBatch(event.target.value);
  };

  const [timeselection, setTimeselection] = React.useState('');
  const handleTimeselection = (event) => {
    setTimeselection(event.target.value);
  };

  const [userid, setUserid] = React.useState('');
  const handleUserid = (event) => {
    setUserid(event.target.value);
  };

  const onSummaryClick = () => {
    props.handlebatchsummary();
  };

  return (
    <Card
      sx={{ height: '100%' }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <InputLabel id="demo-simple-select-label">Use Case</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={usecase}
              onChange={handleUsecase}
            >
              <MenuItem value="AutoZeroRating">AutoZeroRating</MenuItem>
              <MenuItem value="ConfigUpdates">ConfigUpdates</MenuItem>
              <MenuItem value="Day1">Day1</MenuItem>
              <MenuItem value="UploadImage">UploadImage</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="demo-simple-select-label">Batch</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={batch}
              onChange={handleBatch}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="demo-simple-select-label">Time Selection</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={timeselection}
              onChange={handleTimeselection}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <InputLabel id="demo-simple-select-label">User Id</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userid}
              onChange={handleUserid}
            >
              <MenuItem value="gk175b">gk175b</MenuItem>
              <MenuItem value="av1542">av1542</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={onSummaryClick}>
              Summary
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

BatchSelection.propTypes = {
  handlebatchsummary: PropTypes.func
};

export default BatchSelection;

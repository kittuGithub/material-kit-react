import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Button
} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from '@material-ui/pickers';
import PropTypes from 'prop-types';

// const useStyles = makeStyles((theme) => ({
//   isAM: {
//     border: '1px solid red'
//   }
// }));

function BatchSelection(props) {
  const [usecase, setUsecase] = React.useState('');
  const handleUsecase = (event) => {
    setUsecase(event.target.value);
  };

  const [isAM, setIsAM] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsAM(!isAM);
  };

  const [batch, setBatch] = React.useState('');
  const handleBatch = (event) => {
    setBatch(event.target.value);
  };

  // const [timeselection, setTimeselection] = React.useState('');
  // const handleTimeselection = (event) => {
  //   setTimeselection(event.target.value);
  // };

  const [userid, setUserid] = React.useState('');
  const handleUserid = (event) => {
    setUserid(event.target.value);
  };

  const onSummaryClick = () => {
    props.handlebatchsummary({
      usecase, batch, time: selectedDate, userid
    });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                style={{ width: '100%', color: '#fffff' }}
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
                style={{ width: '100%' }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <KeyboardTimePicker
                stlye={{ background: isAM ? 'red' : '' }}
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
            <Grid item>
              <InputLabel id="demo-simple-select-label">User Id</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userid}
                onChange={handleUserid}
                style={{ width: '100%' }}
              >
                <MenuItem value="gk175b">gk175b</MenuItem>
                <MenuItem value="av1542">av1542</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={onSummaryClick}
                style={{ marginTop: '20%' }}
              >
                Summary
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </MuiPickersUtilsProvider>
  );
}

BatchSelection.propTypes = {
  handlebatchsummary: PropTypes.func
};

export default BatchSelection;

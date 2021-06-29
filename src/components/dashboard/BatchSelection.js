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
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Slide from '@material-ui/core/Slide';

/* eslint-disable prefer-arrow-callback */
// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
/* eslint-disable prefer-arrow-callback */

// const useStyles = makeStyles((theme) => ({
//   isAM: {
//     border: '1px solid red'
//   }
// }));

function BatchSelection(props) {
  const [usecase, setUsecase] = React.useState('');
  const [option, setOption] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [batch, setBatch] = React.useState('');
  const [userid, setUserid] = React.useState('');

  const handleUsecase = (event) => {
    setUsecase(event.target.value);
    setSelectedDate(new Date());
    setOption('');
    setBatch('');
    setUserid('');
  };

  const [isAM, setIsAM] = React.useState(true);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsAM(!isAM);
  };

  const handleOption = (event) => {
    setOption(event.target.value);
  };

  const handleBatch = (event) => {
    setBatch(event.target.value);
  };

  // const [timeselection, setTimeselection] = React.useState('');
  // const handleTimeselection = (event) => {
  //   setTimeselection(event.target.value);
  // };

  const handleUserid = (event) => {
    setUserid(event.target.value);
  };

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const onSummaryClick = () => {
    props.handlebatchsummary({
      usecase, batch, time: selectedDate, userid
    });
    // if (usecase !== '' && batch !== '' && userid !== '') {
    //   props.handlebatchsummary({
    //     usecase, batch, time: selectedDate, userid
    //   });
    // } else {
    //   console.log();
    //   handleClickOpen();
    // }
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
              <InputLabel id="demo-simple-select-label">Batch Name</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={batch}
                onChange={handleBatch}
                style={{ width: '100%' }}
              >
                <MenuItem value="Ganesh">Ganesh</MenuItem>
                <MenuItem value="Andrew">Andrew</MenuItem>
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
                Selection
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

// import React from 'react';
import {
  Card,
  // Grid,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
  Button,
  Box
} from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const jobs = [
  {
    id: uuid(),
    category: 'Scheduled Jobs',
    jobCount: '45',
    progress: '45'
  },
  {
    id: uuid(),
    category: 'Running Jobs',
    jobCount: '20',
    progress: '20'
  },
  {
    id: uuid(),
    category: 'Completed Jobs',
    jobCount: '15',
    progress: '15'
  },
  {
    id: uuid(),
    category: 'Waiting for Input Jobs',
    jobCount: '5',
    progress: '5'
  },
  {
    id: uuid(),
    category: 'Error Jobs',
    jobCount: '5',
    progress: '5'
  },
  {
    id: uuid(),
    category: 'Cancel Jobs',
    jobCount: '10',
    progress: '10'
  }
];

const BatchSummary = (props) => {
  const openPare = '(';
  const closePare = ')';
  const onDetailClick = (jobCategory) => {
    props.handlejobdetails(jobCategory);
  };

  return (
    <Card {...props}>
      <List>
        {jobs.map((job) => (
          <ListItem key={job.id} alignItems="flex-start" style={{ height: '80px' }}>
            {/* <Box style={{ float: 'left' }} sx={{ width: '100%' }}> */}
            <ListItemText
              primary={job.category + openPare + job.jobCount + closePare}
              style={{ maxWidth: '100%' }}
            />
            <Box sx={
              {
                width: '65%',
                marginRight: '3%',
                textAlign: 'center',
                marginTop: '-12px'
              }
            }
            >
              <ListItemText>
                {job.progress}
                %
              </ListItemText>
              <LinearProgress
                value={job.progress}
                variant="determinate"
                style={{ marginTop: '0px' }}
              />
            </Box>
            <Button
              color="primary"
              size="small"
              variant="contained"
              onClick={() => onDetailClick(job.category)}
            >
              Details
            </Button>
            {/* <ListItemText
              primary={job.category}
            />
            <ListItemText
              primary={job.category}
            />
            <Box sx={{ width: '65%', marginRight: '3%' }}>
              <LinearProgress
                value={10.5 + (i * 5) + Math.random()}
                variant="determinate"
                style={{ marginTop: '20px' }}
              />
            </Box>
            <h3>{job.progress}</h3>
            <Button
              color="primary"
              size="small"
              variant="contained"
              onClick={onDetailClick}
            >
              Details
            </Button> */}
            {/* </Box> */}
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

BatchSummary.propTypes = {
  handlejobdetails: PropTypes.func
};

export default BatchSummary;

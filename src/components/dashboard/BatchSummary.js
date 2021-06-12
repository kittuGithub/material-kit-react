// import React from 'react';
import {
  Card,
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
    progress: 10
  },
  {
    id: uuid(),
    category: 'Running Jobs',
    progress: 10
  },
  {
    id: uuid(),
    category: 'Completed Jobs',
    progress: 10
  },
  {
    id: uuid(),
    category: 'Waiting for Input Jobs',
    progress: 10
  },
  {
    id: uuid(),
    category: 'Error Jobs',
    progress: 10
  },
  {
    id: uuid(),
    category: 'Cancel Jobs',
    progress: 10
  }
];

const BatchSummary = (props) => {
  const onDetailClick = () => {
    props.handlejobdetails();
  };

  return (
    <Card {...props}>
      <List>
        {jobs.map((job, i) => (
          <ListItem key={job.id} alignItems="flex-start" style={{ height: '80px' }}>
            <ListItemText
              primary={job.category}
            />
            {/* <ListItemText
              primary={job.category}
            /> */}
            <Box sx={{ width: '65%', marginRight: '3%' }}>
              <LinearProgress
                value={10.5 + (i * 5) + Math.random()}
                variant="determinate"
                style={{ marginTop: '20px' }}
              />
            </Box>
            <Button
              color="primary"
              size="small"
              variant="contained"
              onClick={onDetailClick}
            >
              Details
            </Button>
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

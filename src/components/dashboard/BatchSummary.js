// import React from 'react';
import {
  Card,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
  Button
} from '@material-ui/core';
import { v4 as uuid } from 'uuid';

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

const BatchSummary = (props) => (
  <Card {...props}>
    <List>
      {jobs.map((job) => (
        <ListItem key={job.id} alignItems="flex-start">
          <ListItemText
            primary={job.category}
          />
          <ListItemText
            primary={job.category}
          />
          <LinearProgress
            value={75.5}
            variant="determinate"
          />
          <Button
            color="primary"
            size="small"
            variant="contained"
          >
            Details
          </Button>
        </ListItem>
      ))}
    </List>
  </Card>
);

export default BatchSummary;

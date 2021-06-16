import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Checkbox
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// const jobDetails = [
//   {
//     id: uuid(),
//     check: true,
//     jobId: '11111',
//     useCase: 'Day1',
//     workFlow: 'Map',
//     Device: 'zauk54mcucr'
//   },
//   {
//     id: uuid(),
//     check: true,
//     jobId: '2222',
//     useCase: 'Day1',
//     workFlow: 'Map',
//     Device: 'zauk53mcuc'
//   },
//   {
//     id: uuid(),
//     check: true,
//     jobId: '3333',
//     useCase: 'Day1',
//     workFlow: 'Map',
//     Device: 'zauk54mcuci'
//   },
//   {
//     id: uuid(),
//     check: true,
//     jobId: '4444',
//     useCase: 'Day1',
//     workFlow: 'Map',
//     Device: 'zauk53mcuc'
//   }
// ];

class JobDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobDetails: [
        {
          id: uuid(),
          isChecked: false,
          jobId: '11111',
          useCase: 'Day1',
          workFlow: 'Map',
          Device: 'zauk54mcucr'
        },
        {
          id: uuid(),
          isChecked: false,
          jobId: '2222',
          useCase: 'Day1',
          workFlow: 'Map',
          Device: 'zauk53mcuc'
        },
        {
          id: uuid(),
          isChecked: false,
          jobId: '3333',
          useCase: 'Day1',
          workFlow: 'Map',
          Device: 'zauk54mcuci'
        },
        {
          id: uuid(),
          isChecked: false,
          jobId: '4444',
          useCase: 'Day1',
          workFlow: 'Map',
          Device: 'zauk53mcuc'
        }
      ]
    };
  }

  /* eslint-disable no-param-reassign */
  handleAllChecked = (event) => {
    const { jobDetails } = this.state;
    const value = event.target.checked;
    jobDetails.forEach((job) => { job.isChecked = value; });
    this.setState({ jobDetails });
  }

  handleCheckChieldElement = (event) => {
    const { jobDetails } = this.state;
    jobDetails.forEach((job) => {
      if (job.jobId === event.target.value) {
        job.isChecked = event.target.checked;
      }
    });
    this.setState({ jobDetails });
  }

  handleAllDelete = () => {
    const { jobDetails } = this.state;
    let isAllChecked = true;
    jobDetails.forEach((job) => {
      if (!job.isChecked) {
        isAllChecked = false;
      }
    });
    if (isAllChecked) {
      this.setState({ jobDetails: [] });
    }
  }

  handleCheckChildElementDelete = (jobId) => {
    const { jobDetails } = this.state;
    jobDetails.forEach((job, index) => {
      if (job.jobId === jobId) {
        if (job.isChecked) {
          jobDetails.splice(index, 1);
        }
      }
    });
    this.setState({ jobDetails });
  }
  /* eslint-disable no-param-reassign */

  // const [isCheckAll, setIsCheckAll] = React.useState(false);
  // const [isCheck, setIsCheck] = React.useState(false);

  // const handleSelectAll = (event) => {
  //   setIsCheck(event.target.checked);
  //   setIsCheckAll(event.target.checked);
  // };

  // const handleDelete = (event) => {
  //   console.log(event.target.value);
  // };
  // // style={{ marginLeft: '17px' }}

  // const handleEdit = (event) => {
  //   console.log(event.target.value);
  // };

  // const handleDeleteAll = (event) => {
  //   console.log(event.target.value);
  // };
  render() {
    const { jobDetails } = this.state;
    return (
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  onChange={this.handleAllChecked}
                />
                check/UnCheck all
              </TableCell>
              <TableCell>
                Job ID
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    UseCase
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                WorkFlow
              </TableCell>
              <TableCell>
                Device
              </TableCell>
              <TableCell>
                Action
                <IconButton color="secondary" aria-label="Delete" component="span">
                  <DeleteIcon onClick={this.handleAllDelete} />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobDetails.map((detail) => (
              <TableRow hover key={detail.id}>
                <TableCell>
                  <Checkbox
                    value={detail.jobId}
                    checked={detail.isChecked}
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onChange={this.handleCheckChieldElement}
                  />
                </TableCell>
                <TableCell>
                  {detail.jobId}
                </TableCell>
                <TableCell>
                  {detail.useCase}
                </TableCell>
                <TableCell>
                  {detail.workFlow}
                </TableCell>
                <TableCell>
                  {detail.Device}
                </TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="Delete" component="span">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="Delete" component="span">
                    <DeleteIcon value={detail.jobId} onClick={() => this.handleCheckChildElementDelete(detail.jobId)} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }
}

export default JobDetails;

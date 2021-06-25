import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  // TableSortLabel,
  // Tooltip,
  Checkbox,
  Input,
  InputLabel
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
// import { DataGrid } from '@material-ui/data-grid';

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
          Device: 'zauk54mcucr',
          isEditMode: false
        },
        {
          id: uuid(),
          isChecked: false,
          jobId: '2222',
          useCase: 'Day1',
          Device: 'zauk53mcuc',
          isEditMode: false
        },
        {
          id: uuid(),
          isChecked: false,
          jobId: '3333',
          useCase: 'Day1',
          Device: 'zauk54mcuci',
          isEditMode: false
        },
        {
          id: uuid(),
          isChecked: false,
          jobId: '4444',
          useCase: 'Day1',
          Device: 'zauk53mcuc',
          isEditMode: false
        }
      ],
      tempJobDetails: [],
      isIndeterminate: false
    };
  }

  // ,
  //     columns: [
  //       { field: 'isChecked', headerName: 'check/UnCheck all', width: 180, editable: false },
  //       { field: 'JobId', headerName: 'JobId', type: 'string', editable: true },
  //       { field: 'UseCase', headerName: 'UseCase', type: 'String', width: 180, editable: true },
  //       { field: 'lastLogin', headerName: 'Last Login', type: 'dateTime', width: 220, editable: true },
  //     ],
  //     rows: [
  //       {
  //         id: 1,
  //         name: randomTraderName(),
  //         age: 25,
  //         dateCreated: randomCreatedDate(),
  //         lastLogin: randomUpdatedDate(),
  //       },
  //       {
  //         id: 2,
  //         name: randomTraderName(),
  //         age: 36,
  //         dateCreated: randomCreatedDate(),
  //         lastLogin: randomUpdatedDate(),
  //       },
  //       {
  //         id: 3,
  //         name: randomTraderName(),
  //         age: 19,
  //         dateCreated: randomCreatedDate(),
  //         lastLogin: randomUpdatedDate(),
  //       },
  //       {
  //         id: 4,
  //         name: randomTraderName(),
  //         age: 28,
  //         dateCreated: randomCreatedDate(),
  //         lastLogin: randomUpdatedDate(),
  //       },
  //       {
  //         id: 5,
  //         name: randomTraderName(),
  //         age: 23,
  //         dateCreated: randomCreatedDate(),
  //         lastLogin: randomUpdatedDate(),
  //       },
  //     ]

  /* eslint-disable no-param-reassign */
  handleAllChecked = (event) => {
    const { jobDetails } = this.state;
    const value = event.target.checked;
    jobDetails.forEach((job) => { job.isChecked = value; });
    this.setState({ jobDetails });
  }

  handleCheckChieldElement = (event) => {
    const { jobDetails } = this.state;
    let setIntermediate = false;
    jobDetails.forEach((job) => {
      if (job.jobId === event.target.value) {
        job.isChecked = event.target.checked;
      }
    });

    jobDetails.forEach((job) => {
      if (job.isChecked) {
        setIntermediate = true;
      }
    });

    this.setState({ isIndeterminate: setIntermediate });
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
    let setIntermediate = false;
    jobDetails.forEach((job, index) => {
      if (job.jobId === jobId) {
        if (job.isChecked) {
          jobDetails.splice(index, 1);
        }
      }
    });
    jobDetails.forEach((job) => {
      if (job.isChecked) {
        setIntermediate = true;
      }
    });
    this.setState({ isIndeterminate: setIntermediate });
    this.setState({ jobDetails });
  }

  onCellChange = (e, rowIndex, columnName) => {
    console.log(e.target.value, rowIndex);
    const { jobDetails } = this.state;
    jobDetails.forEach((job, index) => {
      if (rowIndex === index) {
        jobDetails[index][columnName] = e.target.value;
      }
    });
    this.setState({ jobDetails });
  }

  onRowEdit = (rowIndex) => {
    console.log(rowIndex);
    const { jobDetails, tempJobDetails } = this.state;
    console.log(tempJobDetails);
    jobDetails.forEach((job, index) => {
      if (rowIndex === index && job.isChecked) {
        jobDetails[index].isEditMode = true;
      }
    });
    const deepCopyJobDetails = JSON.parse(JSON.stringify(jobDetails));
    this.setState({ jobDetails });
    this.setState({ tempJobDetails: deepCopyJobDetails });
  }

  onSave = (rowIndex) => {
    const { jobDetails } = this.state;
    jobDetails.forEach((job, index) => {
      if (rowIndex === index) {
        jobDetails[index].isEditMode = false;
      }
    });
    this.setState({ jobDetails });
  }

  onCancel = (rowIndex) => {
    console.log(rowIndex);
    const { tempJobDetails } = this.state;
    tempJobDetails.forEach((job, index) => {
      if (rowIndex === index) {
        tempJobDetails[index].isEditMode = false;
      }
    });
    this.setState({ jobDetails: tempJobDetails });
  }

  /* eslint-disable no-param-reassign */

  render() {
    const { jobDetails, isIndeterminate } = this.state;
    const { selectedJobCat } = this.props;
    console.log('selectedJobCat:: ', selectedJobCat);
    return (
      <Card>
        {/* <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div> */}

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  indeterminate={isIndeterminate}
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  onChange={this.handleAllChecked}
                />
                check/UnCheck all
              </TableCell>
              <TableCell>
                Job ID
              </TableCell>
              <TableCell>
                UseCase
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
            {jobDetails.map((detail, index) => (
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
                  { detail.isEditMode
                    ? (
                      <Input
                        value={detail.jobId}
                        name={detail.jobId}
                        onChange={(e) => this.onCellChange(e, index, 'jobId')}
                      />
                    )
                    : <InputLabel>{detail.jobId}</InputLabel> }
                </TableCell>
                <TableCell>
                  { detail.isEditMode
                    ? (
                      <Input
                        value={detail.useCase}
                        name={detail.useCase}
                        onChange={(e) => this.onCellChange(e, index, 'useCase')}
                      />
                    )
                    : <InputLabel>{detail.useCase}</InputLabel> }
                </TableCell>
                <TableCell>
                  { detail.isEditMode
                    ? (
                      <Input
                        value={detail.Device}
                        name={detail.Device}
                        onChange={(e) => this.onCellChange(e, index, 'Device')}
                      />
                    )
                    : <InputLabel>{detail.Device}</InputLabel> }
                </TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="Delete" component="span">
                    { selectedJobCat === 'Scheduled Jobs'
                      ? (
                        <div>
                          { detail.isEditMode
                            ? (
                              <div>
                                <SaveIcon onClick={() => this.onSave(index)} />
                                <CancelIcon onClick={() => this.onCancel(index)} />
                              </div>
                            ) : <EditIcon onClick={() => this.onRowEdit(index)} /> }
                        </div>
                      ) : null }
                  </IconButton>
                  <IconButton color="secondary" aria-label="Delete" component="span">
                    <DeleteIcon value={detail.jobId} onClick={() => this.handleCheckChildElementDelete(detail.jobId)} style={{ marginLeft: '17px' }} />
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

JobDetails.propTypes = {
  selectedJobCat: PropTypes.string
};

export default JobDetails;

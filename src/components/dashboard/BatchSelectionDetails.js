import React, { Component } from 'react';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';

class BatchSelectionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [
        {
          id: 1,
          usecase: 'Day1',
          batchId: 12345,
          timeStamp: '11:30 PM',
          userId: 'gk175b'
        },
        {
          id: 2,
          usecase: 'Day1',
          batchId: 12345,
          timeStamp: '11:30 PM',
          userId: 'av1542'
        },
        {
          id: 3,
          usecase: 'Day1',
          batchId: 12345,
          timeStamp: '11:30 PM',
          userId: 'av1542'
        }
      ],
      batchName: 'Ganesh'
    };
  }

  onSelection = () => {
    const { handleBatchSummary1 } = this.props;
    handleBatchSummary1();
  };

  render() {
    const { batchName, details } = this.state;
    return (
      <div>
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  UseCase
                </TableCell>
                <TableCell>
                  BatchName
                </TableCell>
                <TableCell>
                  Batch Id
                </TableCell>
                <TableCell>
                  TimeStamp
                </TableCell>
                <TableCell>
                  User Id
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {details.map((detail) => (
                <TableRow hover key={detail.id}>
                  <TableCell>
                    {detail.usecase}
                  </TableCell>
                  <TableCell>
                    {batchName}
                  </TableCell>
                  <TableCell>
                    {detail.batchId}
                  </TableCell>
                  <TableCell>
                    {detail.timeStamp}
                  </TableCell>
                  <TableCell>
                    {detail.userId}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.onSelection}
                    >
                      Select
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

BatchSelectionDetails.propTypes = {
  handleBatchSummary1: PropTypes.func
};

export default BatchSelectionDetails;

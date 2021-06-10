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

const jobDetails = [
  {
    id: uuid(),
    check: true,
    jobId: '11111',
    useCase: 'Day1',
    workFlow: 'Map',
    Device: 'zauk54mcucr'
  },
  {
    id: uuid(),
    check: true,
    jobId: '2222',
    useCase: 'Day1',
    workFlow: 'Map',
    Device: 'zauk53mcuc'
  },
  {
    id: uuid(),
    check: true,
    jobId: '3333',
    useCase: 'Day1',
    workFlow: 'Map',
    Device: 'zauk54mcuci'
  },
  {
    id: uuid(),
    check: true,
    jobId: '4444',
    useCase: 'Day1',
    workFlow: 'Map',
    Device: 'zauk53mcuc'
  }
];

const JobDetails = (props) => (
  <Card {...props}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Check
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
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {jobDetails.map((detail) => (
          <TableRow hover key={detail.id}>
            <TableCell>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
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
              <EditIcon />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default JobDetails;

import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import BatchSelection from 'src/components/dashboard/BatchSelection';
import BatchSummary from 'src/components/dashboard/BatchSummary';
import JobDetails from 'src/components/dashboard/JobDetails';
// import Budget from 'src/components/dashboard//Budget';
// import LatestOrders from 'src/components/dashboard//LatestOrders';
// import LatestProducts from 'src/components/dashboard//LatestProducts';
// import Sales from 'src/components/dashboard//Sales';
// import TasksProgress from 'src/components/dashboard//TasksProgress';
// import TotalCustomers from 'src/components/dashboard//TotalCustomers';
// import TotalProfit from 'src/components/dashboard//TotalProfit';
import TrafficByDevice from 'src/components/dashboard//TrafficByDevice';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          Batch Selection:
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
          >
            <BatchSelection />
          </Grid>

        </Grid>
        <Divider />

        <Typography
          color="textPrimary"
          gutterBottom
          variant="h4"
          style={{ marginTop: '10px' }}
        >
          Batch Summary:
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            sm={6}
            xl={12}
            xs={12}
          >
            <BatchSummary />

          </Grid>

        </Grid>

        <Typography
          color="textPrimary"
          gutterBottom
          variant="h4"
          style={{ marginTop: '10px' }}
        >
          Job Details:
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            sm={6}
            xl={12}
            xs={12}
          >
            <JobDetails />

          </Grid>

        </Grid>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
        </Grid>

        {/* <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  </>
);

export default Dashboard;

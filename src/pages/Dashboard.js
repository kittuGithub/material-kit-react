import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import BatchSelection from 'src/components/dashboard/BatchSelection';
import BatchSummary from 'src/components/dashboard/BatchSummary';
import JobDetails from 'src/components/dashboard/JobDetails';
import BatchSelectionDetails from 'src/components/dashboard/BatchSelectionDetails';
// import Budget from 'src/components/dashboard//Budget';
// import LatestOrders from 'src/components/dashboard//LatestOrders';
// import LatestProducts from 'src/components/dashboard//LatestProducts';
// import Sales from 'src/components/dashboard//Sales';
// import TasksProgress from 'src/components/dashboard//TasksProgress';
// import TotalCustomers from 'src/components/dashboard//TotalCustomers';
// import TotalProfit from 'src/components/dashboard//TotalProfit';
import TrafficByDevice from 'src/components/dashboard//TrafficByDevice';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBatchSummary: false,
      showBatchSummary1: false,
      showJobDetails: false,
      jobCategory: ''
    };
  }

  handleBatchSummary = (summaryOptions) => {
    this.setState((prevState) => ({ showBatchSummary: !prevState.showBatchSummary }));
    console.log(summaryOptions);
  }

  handleBatchSummary1 = (summaryOptions) => {
    this.setState((prevState) => ({ showBatchSummary1: !prevState.showBatchSummary1 }));
    console.log(summaryOptions);
  }

  handleJobDetails = (jobCategory) => {
    this.setState((prevState) => ({ showJobDetails: !prevState.showJobDetails, jobCategory }));
  }

  render() {
    const {
      showBatchSummary, showBatchSummary1, showJobDetails, jobCategory
    } = this.state;

    return (
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
              Batch Selection :
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
                <BatchSelection handlebatchsummary={this.handleBatchSummary} />
              </Grid>

            </Grid>
            <Divider />
            { showBatchSummary
              ? (
                <div>
                  <Box sx={{
                    width: '100%',
                    marginTop: '10px',
                    textAlign: 'center'
                  }}
                  >
                    <Typography
                      color="textPrimary"
                      gutterBottom
                      variant="h4"
                      style={{ marginTop: '20px', float: 'left' }}
                    >
                      Batch Filter Selection :
                    </Typography>
                    <Button
                      color="primary"
                      variant="contained"
                      style={{ float: 'right', marginTop: '10px', marginRight: '10px' }}
                    >
                      Summary
                    </Button>
                  </Box>
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
                      <BatchSelectionDetails sx={{ height: '100%' }} handleBatchSummary1={this.handleBatchSummary1} />
                    </Grid>
                  </Grid>
                </div>
              ) : null }
            { showBatchSummary1
              ? (
                <div>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                    style={{ marginTop: '20px' }}
                  >
                    Batch Statistics :
                  </Typography>
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      lg={12}
                      sm={6}
                      xl={6}
                      xs={12}
                    >
                      <BatchSummary sx={{ height: '100%' }} handlejobdetails={this.handleJobDetails} />
                    </Grid>
                    <Grid
                      item
                      lg={4}
                      md={6}
                      xl={6}
                      xs={12}
                    >
                      <TrafficByDevice sx={{ height: '100%' }} />
                    </Grid>
                  </Grid>
                </div>
              )
              : null }

            { showJobDetails
              ? (
                <div>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                    style={{ marginTop: '20px' }}
                  >
                    Job Details Queue :
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
                      <JobDetails selectedJobCat={jobCategory} />
                    </Grid>
                  </Grid>
                </div>
              )
              : null }
            {/* <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={4}
                md={6}
                xl={6}
                xs={12}
              >
                <TrafficByDevice sx={{ height: '100%' }} />
              </Grid>
            </Grid> */}

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
  }
}

export default Dashboard;

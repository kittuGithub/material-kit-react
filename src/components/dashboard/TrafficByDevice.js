import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme
} from '@material-ui/core';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import PhoneIcon from '@material-ui/icons/Phone';
// import TabletIcon from '@material-ui/icons/Tablet';

const TrafficByDevice = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [45, 20, 15, 5, 5, 10],
        backgroundColor: [
          colors.indigo[500],
          colors.blue[600],
          colors.blue[600],
          colors.orange[600],
          colors.red[600],
          colors.teal[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Scheduled Jobs', 'Running jobs', 'Completed Jobs', 'Waiting for Input Jobs', 'Error Jobs', 'Cancel Jobs']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Scheduled Jobs',
      value: 45,
      color: colors.indigo[500]
    },
    {
      title: 'Running jobs',
      value: 20,
      color: colors.blue[600]
    },
    {
      title: 'Completed Jobs',
      value: 15,
      color: colors.green[600]
    },
    {
      title: 'Waiting for Input Jobs',
      value: 5,
      color: colors.orange[600]
    },
    {
      title: 'Error Jobs',
      value: 5,
      color: colors.red[600]
    },
    {
      title: 'Cancel Jobs',
      value: 10,
      color: colors.teal[600]
    }
  ];

  return (
    <Card {...props} style={{ width: '100%' }}>
      <CardHeader title="Jobs Chart" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              {/* <Icon color="action" /> */}
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrafficByDevice;

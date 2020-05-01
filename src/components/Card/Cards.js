import React from "react";
import { CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import Moment from "react-moment";
import { Card } from "reactstrap";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading";
  }
  return (
    <div className="container">
      <Grid container spacing={3} justify="space-around">
        <Grid xs="10" md="3">
          <Card style={{ backgroundColor: "rgba(255,255,0,0.5)" }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                <Moment format="D MMM YYYY">{lastUpdate}</Moment>
              </Typography>
              <Typography variant="body2">
                Number of Total cases of COVID-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs="10" md="4">
          <Card style={{ backgroundColor: "rgba(0,255,0,0.5)" }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recoveries
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                <Moment format="D MMM YYYY">{lastUpdate}</Moment>
              </Typography>
              <Typography variant="body2">
                Number of Recovered cases of COVID-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs="10" md="3">
          <Card style={{ backgroundColor: "rgba(255,0,0,0.5)" }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                <Moment format="D MMM YYYY">{lastUpdate}</Moment>
              </Typography>
              <Typography variant="body2">
                Number of Deaths from COVID-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

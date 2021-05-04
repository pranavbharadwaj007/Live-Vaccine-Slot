import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {  deepPurple } from "@material-ui/core/colors";
import CardHeader from "@material-ui/core/CardHeader";
import Slot from "./Slot";
import Link from "@material-ui/core/Link";
const useStyles = makeStyles({
  root: {
    margin: "3px",

    display: "flex",
    flexDirection: "row",
    justifyContent: " center",
    alignItems: "center",
  },
  head: {
    color: deepPurple[600],
  },
  rootcard: {
    minHeight: 460,
    maxWidth: 510,
    
    background:"linear-gradient(159deg, rgba(255,255,255,1) 0%, rgba(242,241,255,1) 74%, rgba(209,207,240,1) 96%)",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  displ: {
    display: "flex",
    flexDirection: "row",
  },
  slot: {
    fontSize: 14,
    margin: "5px",
  },
  linkt: {
    color: "white",
  },
});

export default function Cardma({ item }) {
  const classes = useStyles();

  const sessions = item.sessions;
  console.log(sessions);
  return (
    <div className={classes.root}>
      <Card elevation={3} className={classes.rootcard}>
        <CardHeader
          title={item.name}
          subheader={item.fee_type}
          className={classes.head}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            From {item.from} to {item.to}
          </Typography>
          {sessions.map((session) => {
            return <Slot {...session} key={session.session_id}/>;
          })}
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" color="primary">
            <Link
              href="https://selfregistration.cowin.gov.in/"
              underline="none"
              className={classes.linkt}
            >
              Book Now
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

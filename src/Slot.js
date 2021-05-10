import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  green,  red } from "@material-ui/core/colors";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 1px",
    transform: "scale(0.8)",
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
    background: (cap) => {
      if (cap < 10) {
        return red[300];
      } else {
        return green[200];
      }
    },
    border: (cap) => {
      if (cap < 10) {
        return "1px solid red";
      } else {
        return "1px solid green";
      }
    },
    padding: "5px",
    borderRadius: "7px",
  },
});
export default function Slot({ available_capacity, min_age_limit, date }) {
  const cap = available_capacity;
  const classes = useStyles(cap);

  return (
    <div className={classes.displ}>
      <div className={classes.slot} color="textSecondary">
        Date: {date}
      </div>
      <div className={classes.slot} color="textSecondary">
        Available - {available_capacity}
      </div>
      <div className={classes.slot} color="textSecondary">
        Min age - {min_age_limit}
      </div>
    </div>
  );
}

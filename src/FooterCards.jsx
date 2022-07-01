import React from "react";
import { Grid,Typography } from "@mui/material";

const FooterCards = (props) => {
  const { Head, Description } = props;
  return (
    <div>
      <Grid
        style={{ borderBottom: "1px solid grey", paddingBottom: 60 }}
      >
        <Typography style={{ color: "white", fontSize: 20 }}>{Head}</Typography>
        <Typography style={{ color: "cyan",marginTop:10 }}>{Description}</Typography>
      </Grid>
    </div>
  );
};

export default FooterCards;

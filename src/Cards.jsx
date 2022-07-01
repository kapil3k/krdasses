import React from "react";
import { Grid } from "@mui/material";

const Cards = (props) => {
    const { picture,heading,description} = props
  return (
    <div>
      <Grid>
        <img src={picture} height="30px" /> <br />
        <div style={{ marginTop: 25, fontSize: 18 }}>
          <b>{heading}</b>
        </div>
        <div style={{ color: "#4e4a4a", marginTop: 10 }}>
          {description}
        </div>
      </Grid>
    </div>
  );
};

export default Cards;

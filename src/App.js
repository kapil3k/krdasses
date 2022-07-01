import { Grid, Typography, Select, MenuItem } from "@mui/material";
import React from "react";
import Menu from "./Menu";
import pic from "./assignment/1.png";
import invoice1 from "./assignment/invoice1.svg";
import invoice2 from "./assignment/invoice2.svg";
import invoice3 from "./assignment/invoice3.svg";
import invoice4 from "./assignment/invoice4.svg";
import invoice5 from "./assignment/invoice5.svg";
import invoice6 from "./assignment/invoice6.svg";
import stickyLogo from "./assignment/stickyLogo.svg";
import sapFooterLogo from "./assignment/sapFooterLogo.svg";
import Cards from "./Cards";
import FooterCards from "./FooterCards";

const App = () => {
  return (
    <div>
      <Menu />
      <Grid>
        <Grid>
          <img width="100%" src={pic} />
          <Grid xs={11} container justifyContent="flex-end">
            <Grid
              xs={4}
              style={{
                background: "white",
                height: 600,
                marginTop: -500,
                borderRadius: 10,
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: "40px 20px 30px 20px",
              }}
            >
              <Typography style={{ fontSize: 20 }}>
                <b>lorem Ipsum lorem ispun</b>
              </Typography>
              <Typography style={{ fontSize: 13 }}>
                text of printing and typesetting industry.
              </Typography>
              <Grid
                style={{
                  backgroundColor: "#d3d3d387",
                  padding: "20px 10px",
                  borderRadius: 10,
                  marginTop: 50,
                }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  // label="Age"
                  // onChange={handleChange}
                  style={{
                    background: "white",
                    color: "black",
                    width: "100%",
                    height: 40,
                    borderRadius: 10,
                  }}
                  // renderValue={() => {
                  //   return "Placeholder";
                  // }}
                >
                  <MenuItem value={10}>Industry 1</MenuItem>
                  <MenuItem value={20}>Industry 2</MenuItem>
                  <MenuItem value={30}>Industry 3</MenuItem>
                </Select>
                <Grid
                  container
                  xs={12}
                  justifyContent="space-between"
                  style={{ paddingRight: 20 }}
                >
                  <Grid xs={5}>
                    <input
                      style={{
                        height: 33,
                        width: "110%",
                        marginTop: 10,
                        borderRadius: 10,
                        borderColor: "transparent",
                      }}
                    />
                  </Grid>
                  <Grid xs={5}>
                    <input
                      style={{
                        height: 33,
                        width: "110%",
                        marginTop: 10,
                        borderRadius: 10,
                        borderColor: "transparent",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "end",
                  height: "58%",
                }}
              >
                <Grid
                  style={{
                    borderRadius: 5,
                    border: "1px solid #02a7a7",
                    padding: "15px 40px",
                    color: "#02a7a7",
                    cursor: "pointer",
                  }}
                >
                  NEXT
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid container xs={10}>
          <Typography style={{ fontSize: 30 }}>
            Why <span style={{ color: "cyan" }}>KredX</span> <br /> For Invoice
            Discouting ?
          </Typography>
          <Grid
            container
            justifyContent="space-between"
            style={{ marginTop: 60 }}
          >
            <Grid xs={3}>
              <Cards
                picture={invoice1}
                heading="Quick Verification and Cash Flow."
                description="Verify your business instantly on KredX platform and get funds in 24-72 hours*"
              />
            </Grid>
            <Grid xs={3}>
              <Cards
                picture={invoice2}
                heading="Risk free Assests"
                description="Get cash against your company's unpaid invoice.No need to pledge any assests"
              />
            </Grid>
            <Grid xs={3}>
              <Cards
                picture={invoice3}
                heading="Avoid New Dept"
                description="Grow your business without impacting your business sheet"
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            style={{ marginTop: 60 }}
          >
            <Grid xs={3}>
              <Cards
                picture={invoice4}
                heading="Real Time Updates"
                description="Track your invoice status on the go through KredX self-serve module."
              />
            </Grid>
            <Grid xs={3}>
              <Cards
                picture={invoice5}
                heading="Paperless Process"
                description="Upload your document and invoices easily on the KredX platform."
              />
            </Grid>
            <Grid xs={3}>
              <Cards
                picture={invoice6}
                heading="End-to-end Management"
                description="Smooth and transparent process form invoice listing to funds distribursal."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ background: "black", padding: "50px 0", marginTop: 100 }}>
        <Grid
          container
          justifyContent="center"
          style={{ color: "white", fontSize: 20 }}
        >
          HELPING BUSSINESS OWNER SINCE 2015
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: 50 }}>
          <Grid container justifyContent="space-between" xs={10}>
            <Grid xs={3}>
              <FooterCards Head="1 Million" Description="Invoice Discounted" />
            </Grid>
            <Grid xs={3}>
              <FooterCards
                Head="$4 Billion"
                Description="Transaction Value Proceed"
              />
            </Grid>
            <Grid xs={3}>
              <FooterCards
                Head="2 Million"
                Description="Tansaction Processed Till Date"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: 50 }}>
          <Grid container justifyContent="space-between" xs={10}>
            <Grid xs={3}>
              <FooterCards Head="23,000+" Description="Business Helped" />
            </Grid>
            <Grid xs={3}>
              <FooterCards
                Head="70,000"
                Description="New And Returning Investors"
              />
            </Grid>
            <Grid xs={3}>
              <FooterCards
                Head="225+"
                Description="Corporates on KredX Platforms"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: 100 }}>
        <Grid container justifyContent="center">
          <Grid xs={10}>
            <Typography style={{ fontSize: 28 }}>
              <b>Contact Us</b>
            </Typography>
          </Grid>
          <Grid xs={10} container>
            <Grid xs={3} style={{ marginTop: 30 }}>
              <Typography style={{ color: "grey" }}>INDIA</Typography>
              <Typography style={{ fontSize: 18 }}>1800 419 4919</Typography>
            </Grid>
            <Grid xs={3} style={{ marginTop: 30 }}>
              <Typography style={{ color: "grey" }}>OUTSIDE INDIA</Typography>
              <Typography style={{ fontSize: 18 }}>+91-8061799200</Typography>
            </Grid>
            <Grid xs={3} style={{ marginTop: 30 }}>
              <Typography style={{ color: "grey" }}>GLOBAL EMAIL</Typography>
              <Typography style={{ fontSize: 18 }}>info@kredX.com</Typography>
            </Grid>
            <Grid xs={3} style={{ marginTop: 30 }}>
              <Typography style={{ color: "grey" }}>
                FOR MEDIA ENQUIRES
              </Typography>
              <Typography style={{ fontSize: 18 }}>pr@kredX.com</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        style={{ background: "black", marginTop: 100 }}
        container
        justifyContent="center"
      >
        <Grid
          xs={10}
          style={{ padding: "50px 0" }}
          container
          justifyContent="space-between"
        >
          <img src={sapFooterLogo} height="30px" />
          <Typography style={{ color: "white" }}>
            &copy; 2022 Minions Ventures Pvt Ltd
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;

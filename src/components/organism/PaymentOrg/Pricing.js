import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Stack, Typography } from "@mui/material";
import PricingSwitch from "./PricingSwitch";
import ListValues from "./ListValues";
import axios from "axios";

const PayButton = (price, pricingSwitch) => {
  //Dummy JSON for Klarna Checkout POST request
  const goPayment = (price, pricingSwitch) => {
    const orderData = JSON.stringify({
      purchase_country: "SE",
      purchase_currency: "SEK",
      locale: "sv-se",
      order_amount: 50000,
      order_tax_amount: 4545,
      order_lines: [
        {
          type: "physical",
          reference: "19-402-USA",
          name: "Red T-Shirt",
          quantity: 5,
          quantity_unit: "pcs",
          unit_price: 10000,
          tax_rate: 1000,
          total_amount: 50000,
          total_discount_amount: 0,
          total_tax_amount: 4545,
        },
      ],
      merchant_urls: {
        terms: "https://www.example.com/terms.html",
        checkout: "https://www.example.com/checkout.html",
        confirmation: "http://localhost:3000/payment-confirmation", // We go for localhost url in DEV mode.
        push: "https://www.example.com/api/push",
      },
    });
    const token = localStorage.getItem("token");
    //POST request - Klarna block POST request from, it has to go through a Proxy server. Instructions
    axios
      .post("http://localhost:2000/api/payments/createOrder", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  return (
    <button onClick={() => goPayment(price, pricingSwitch)}>Uppgradera</button>
  );
};

const Pricing = () => {
  const [price, setPrice] = useState(90);
  const [pricingSwitch, setPricingSwitch] = useState(true);

  const switchPricing = (e) => {
    setPricingSwitch(!pricingSwitch);
    setPrice(e.target.checked ? 90 : 540);
  };

  return (
    <Grid //Mother container
      container
      alignItems="center"
      direction="column"
      style={{
        padding: 10,
        borderColor: "black",
        borderRadius: "20px", // add smooth border radius
        backgroundColor: "#FAFAFA", // set background color to white
      }}
    >
      <Grid // Wrapper of each section
        container
        alignItems="center"
        direction="column"
        style={{
          padding: 100,
          border: "1px",
          borderColor: "B5B5B5",
          borderRadius: "20px", // add smooth border radius
          backgroundColor: "white", // set background color to white
        }}
      >
        <Grid // Section CTA1
          container
          justify="flex-end"
          style={{
            marginTop: "-80px",
          }}
        >
          <Grid item>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                style={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: pricingSwitch ? "#B5B5B5" : "#5263EB",
                }}
              >
                Betala direkt
              </Typography>
              <PricingSwitch
                checked={pricingSwitch}
                onChange={(e) => switchPricing(e)}
                inputProps={{ "aria-label": "ant design" }}
              />
              <Typography
                style={{
                  fontWeight: "800",
                  fontSize: "16px",
                  color: pricingSwitch ? "#5263EB" : "#B5B5B5",
                }}
              >
                Delbetala 6 månader
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid // Section Title
          container
          alignItems="center"
          direction="column"
          style={{
            width: "100%",
            borderRadius: "20px", // add smooth border radius
            backgroundColor: "white", // set background color to white
            marginTop: "50px",
          }}
        >
          <Grid item>
            <Typography style={{ fontSize: "38px", textAlign: "center" }}>
              Uppgradera till Premium
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{ fontSize: "16px", width: "420px", textAlign: "center" }}
            >
              Få obegränsad tillgång i ett år till allt du behöver för att
              förbereda dig inför Högskoleprovet.
            </Typography>
          </Grid>
        </Grid>
        <Grid // Section Sales Pitch & Price
          container
          alignItems="center"
          direction="row"
          justify="center"
          style={{
            marginTop: "50px",
          }}
        >
          <Grid item style={{ marginRight: "10rem" }}>
            <ListValues />
          </Grid>
          <Grid item>
            <Typography style={{ fontSize: "40px", color: "#5263EB" }}>
              {price} SEK
            </Typography>
            <Typography style={{ textAlign: "right" }}>
              {pricingSwitch ? "Per månad" : "Betala direkt"}
            </Typography>
          </Grid>
        </Grid>
        <Grid // Section Buy CTA
          container
          alignItems="center"
          direction="column"
          style={{
            marginTop: "50px",
          }}
        >
          <Grid item>
            <PayButton price={price} pricingSwitch={pricingSwitch} />
          </Grid>
          <Grid item>
            Render Klarna Checkout iframe below on this GRID after "Clicking"
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pricing;

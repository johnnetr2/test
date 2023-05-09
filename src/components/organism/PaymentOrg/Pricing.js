import React, { useRef, useState } from "react";
import { Grid } from "@material-ui/core";
import { Stack, Typography } from "@mui/material";
import PricingSwitch from "./PricingSwitch";
import ListValues from "./ListValues";
import { EndPoints, instance2 } from "../../service/Route";
import PayButton from "./PayButton";
import Prices from "../../../assets/Static/Prices";
require("dotenv").config();

const Pricing = () => {
  //set initial with planOne premium
  const [whichPlan, setWhichPlan] = useState(Prices.planOne);
  //set price according to plan and pass to Klarna
  const [price, setPrice] = useState(whichPlan.price);
  const [pricingSwitch, setPricingSwitch] = useState(true);
  const [htmlSnippet, setHtmlSnippet] = useState();
  const checkoutContainer = useRef(null);

  const goPayment = () => {
    //This data goes to Klarna API
    let quantity = 1;
    let unit_price = price * 100;
    let total_amount = quantity * unit_price;
    let tax_rate = 2500;
    let total_tax_amount =
      total_amount - (total_amount * 10000) / (10000 + tax_rate);

    const orderData = JSON.stringify({
      purchase_country: "SE",
      purchase_currency: "SEK",
      locale: "sv-se",
      order_amount: total_amount,
      order_tax_amount: total_tax_amount,
      order_lines: [
        {
          type: "digital",
          name: "Premium length: " + whichPlan.premiumLength + " months",
          quantity: quantity,
          quantity_unit: "pcs",
          unit_price: unit_price,
          tax_rate: tax_rate,
          total_amount: total_amount,
          total_discount_amount: 0,
          total_tax_amount: total_tax_amount,
          merchant_data: "testing this prop to pass parameters",
        },
      ],
      merchant_urls: {
        terms: "https://www.hpappen.se/villkoren",
        checkout: process.env.REACT_APP_BASE_URL + "/checkout",
        confirmation: process.env.REACT_APP_BASE_URL + "/payment-confirmation",
        push: "https://www.example.com/api/push", //We need to respond to Klarna with a 200 status.
      },
      merchant_refefrence1: "testing1thispropstopassparameters",
    });

    const url = EndPoints.createOrder;

    instance2
      .post(url, { orderData })
      .then((res) => {
        setHtmlSnippet(res.data.orderData.html_snippet);
        checkoutContainer.current.innerHTML = res.data.orderData.html_snippet;

        console.log(res.data.orderData.order_id); // Pass this order_id to user - use localStorage or database?
        localStorage.setItem("order_id", res.data.orderData.order_id);

        const scriptsTags =
          checkoutContainer.current.getElementsByTagName("script");
        // This is necessary otherwise the scripts tags are not going to be evaluated
        for (var i = 0; i < scriptsTags.length; i++) {
          const parentNode = scriptsTags[i].parentNode;
          const newScriptTag = document.createElement("script");
          newScriptTag.type = "text/javascript";
          newScriptTag.text = scriptsTags[i].text;
          parentNode.removeChild(scriptsTags[i]);
          parentNode.appendChild(newScriptTag);
        }
      })
      .catch((err) => console.log(err)); // handle error here
  };

  const scrollDown = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 1000);
  };

  return (
    <Grid //Mother container
      container
      alignItems="center"
      direction="column"
      style={{
        padding: 10,
        backgroundColor: "#FAFAFA",
        height: "100%",
      }}
    >
      <Grid // Wrapper of each section
        container
        alignItems="center"
        direction="column"
        style={{
          padding: '10px',
          marginTop: '2vw',
          maxWidth: '1024px',
          minWidth: '390px',
          border: "1px solid",
          borderColor: "rgba(166, 166, 166, 0.5)",
          borderRadius: "20px",
          backgroundColor: "white",
        }}
      >
        <Grid // Section CTA1
          container
          justifyContent="flex-end"
        >
          <Grid item>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: pricingSwitch ? "#B5B5B5" : "#5263EB",
                }}
              >
                Betala direkt
              </Typography>
              <PricingSwitch
                checked={pricingSwitch}
                onChange={(e) => {
                  setPricingSwitch(!pricingSwitch);
                }}
                inputProps={{ "aria-label": "ant design" }}
              />
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
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
            borderRadius: "20px",
            backgroundColor: "white",
            marginTop: "50px",
          }}
        >
          <Grid item>
            <Typography style={{ fontSize: "38px", textAlign: "center", paddingBottom: "20px" }}>
              Uppgradera till Premium
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{ fontSize: "16px", maxWidth: "420px", textAlign: "center" }}
            >
              Få obegränsad tillgång i 6 månader till allt du behöver för att
              förbereda dig inför Högskoleprovet.
            </Typography>
          </Grid>
        </Grid>
        <Grid // Section Sales Pitch & Price
          container
          alignItems="center"
          direction="row"
          justifyContent="center"
          style={{
            marginTop: "50px",
            textAlign: "center",
          }}
        >
          <Grid item sm={12} lg={8} style={{ paddingLeft: "3vw", maxWidth: "600px" }} >
            <ListValues />
          </Grid>
          <Grid item sm={12} lg={4} >
            <Typography style={{ fontSize: "40px", color: "#5263EB", fontWeight: "bold", }}>
              {pricingSwitch ? whichPlan.pricePerMonth : whichPlan.price} SEK
            </Typography>
            <Typography>
              {pricingSwitch ? "Per månad" : "Betala direkt"}
            </Typography>
          </Grid>
        </Grid>
        <Grid // Section Buy CTA
          container
          alignItems="center"
          direction="column"
          style={{
            marginTop: "25px",
            marginBottom: "50px",
          }}
        >
          {htmlSnippet ? (
            scrollDown()
          ) : (
            <Grid item>
              <PayButton
                price={price}
                pricingSwitch={pricingSwitch}
                setHtmlSnippet={setHtmlSnippet}
                checkoutRef={checkoutContainer}
                goPayment={goPayment}
              />
            </Grid>
          )}
          <Grid item>
            <div
              style={{ width: "100%" }}
              ref={checkoutContainer}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pricing;

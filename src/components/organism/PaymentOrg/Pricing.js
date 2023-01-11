import React, { useRef, useState } from "react";
import { Grid } from "@material-ui/core";
import { Stack, Typography } from "@mui/material";
import PricingSwitch from "./PricingSwitch";
import ListValues from "./ListValues";
import { EndPoints, instance2 } from "../../service/Route";
import PayButton from "./PayButton";

const Pricing = () => {
  const [price, setPrice] = useState(75);
  const [pricingSwitch, setPricingSwitch] = useState(true);
  const [htmlSnippet, setHtmlSnippet] = useState();

  const checkoutContainer = useRef(null);

  const goPayment = () => {
    const orderData = JSON.stringify({
      purchase_country: "SE",
      purchase_currency: "SEK",
      locale: "sv-se",
      order_amount: 100,
      order_tax_amount: 20,
      order_lines: [
        {
          type: "digital",
          reference: "Premium",
          name: "Premium",
          quantity: 1,
          quantity_unit: "pcs",
          unit_price: 100,
          tax_rate: 2500,
          total_amount: 100,
          total_discount_amount: 0,
          total_tax_amount: 20,
        },
      ],
      merchant_urls: {
        terms: "https://www.example.com/terms.html", // Johnny edit this later
        checkout: "http://localhost:3000/checkout", // We go for localhost url in DEV mode.
        confirmation: "http://localhost:3000/payment-confirmation", // We go for localhost url in DEV mode.
        push: "https://www.example.com/api/push", //We need to respond to Klarna with a 200 status.
      },
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
        padding: 50,
        backgroundColor: "#FAFAFA",
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
          borderRadius: "20px",
          backgroundColor: "white",
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
                onChange={(e) => {
                  setPricingSwitch(!pricingSwitch);
                  setPrice(e.target.checked ? 90 : 450);
                }}
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
            borderRadius: "20px",
            backgroundColor: "white",
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
              style={{ width: "100%", minWidth: "35rem" }}
              ref={checkoutContainer}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pricing;
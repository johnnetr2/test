import { Typography, useMediaQuery } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Prices from "../../../assets/Static/Prices";

const PremiumCTA = () => {
  const plansArray = Object.values(Prices);
  const lowestPricePlan = plansArray.reduce((lowest, current) => {
    return current.pricePerMonth < lowest.pricePerMonth ? current : lowest;
  });

  const navigate = useNavigate();

  const navigateCheckout = () => {
    navigate("/checkout");
  };

  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  return (
    <div
      onClick={() => navigateCheckout()}
      style={{
        backgroundColor: "#5263EB",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        cursor: "pointer",
        width: "100%",
        color: "white",
      }}
    >
      <Typography
        style={{
          fontSize: "13px",
          margin: "0px 10px 0px 10px",
        }}
      >
        Uppgradera till Premium
      </Typography>
      <Typography
        style={{
          fontSize: "8px",
          margin: "10px",
        }}
      >
        Få tillgång till allt från {lowestPricePlan.pricePerMonth} kr/mån
      </Typography>
      <button
        onClick={() => navigateCheckout()}
        style={{
          borderRadius: "8px",
          border: "0px",
          width: "70%",
          padding: "0.5rem",
          marginTop: "0.25rem",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <Typography
          style={{
            fontSize: isSmallScreen ? "10px" : "14px",
            color: "#5263EB",
          }}
        >
          Uppgradera
        </Typography>
      </button>
    </div>
  );
};

export default PremiumCTA;

import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const PremiumCTA = () => {
  const navigate = useNavigate();

  const navigateCheckout = () => {
    navigate("/checkout");
  };

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
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        Uppgradera till Premium
      </Typography>
      <Typography
        style={{
          fontSize: "8px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        Få tillgång till allt för endast 450 SEK
      </Typography>
      <button
        onClick={() => navigateCheckout()}
        style={{
          borderRadius: "8px",
          border: "0px",
          width: "70%",
          padding: "0.5rem",
          marginTop: "0.25rem",
        }}
      >
        <Typography
          style={{
            fontSize: "12px",
            fontWeight: "bold",
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

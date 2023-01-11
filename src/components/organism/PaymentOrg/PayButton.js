const PayButton = ({ goPayment }) => {
  return (
    <button
      onClick={() => goPayment()}
      style={{
        color: "white",
        backgroundColor: "#5263EB",
        height: "50px",
        border: 0,
        borderRadius: "14px",
        paddingRight: "50px",
        paddingLeft: "50px",
        maxWidth: "100%",
        fontSize: "25px",
      }}
    >
      Uppgradera
    </button>
  );
};

export default PayButton;

import { Box, Typography } from "@material-ui/core";

const KvantitativProvpassInfo = ({ classes }) => {
  return (
    <Box
      mt={3}
      // padding={6}
      paddingLeft={6}
      paddingRight={6}
      paddingBottom={6}
      sx={{
        backgroundColor: "#fff",
        maxWidth: 600,
        overflow: "auto",
        border: "1px solid #e1e1e1",
        top: 0,
      }}
      className={classes.scrollbar}
    >
      <Typography
        variant="h6"
        component="h6"
        style={{
          marginTop: "1rem",
          fontSize: "1.8rem",
          fontWeight: "400",
        }}
      >
        Kvantitativ provpass
      </Typography>
      <br></br>
      <Typography style={{ fontSize: "1.3rem", fontWeight: "400" }}>
        Förberedande information
      </Typography>
      <Typography
        variant="subtitle1"
        style={{
          marginTop: "1rem",
          fontSize: ".875rem",
          fontWeight: "400",
        }}
      >
        Här följer anvisningar till de kvantitativa delproven XYZ, KVA, NOG och
        DTK. Provhäftet innehåller 40 uppgifter och den totala provtiden är 55
        minuter.
      </Typography>
      <br></br>
      <Typography
        // mt={3}
        variant="subtitle1"
        style={{ fontSize: ".9rem", fontWeight: "600" }}
      >
        XYZ - Matematisk problemlösning
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        12 uppgifter. Rekommenderad provtid: 12 minuter
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        Delprovet XYZ handlar om matematisk problemlösning. Varje uppgift består
        av en fråga som följs av fyra svarsalternativ, varav endast ett är rätt.
      </Typography>
      <br></br>
      <Typography
        variant="subtitle1"
        style={{ fontSize: ".9rem", fontWeight: "600" }}
      >
        KVA - Kvantitativa jämförelser
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        10 uppgifter. Rekommenderad provtid: 10 minuter
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        Delprovet KVA innehåller uppgifter med beskrivningar av två kvantiteter,
        I och II. Din uppgift är att jämföra de två kvantiteterna. I vissa fall
        ges inledande information som ska användas vid jämförelsen. Till varje
        uppgift finns fyra svarsalternativ, varav endast ett är rätt. I KVA har
        alla uppgifter samma svarsalternativ.
      </Typography>
      <br></br>
      <Typography
        variant="subtitle1"
        style={{ fontSize: ".9rem", fontWeight: "600" }}
      >
        NOG - Kvantitativa resonemang
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        6 uppgifter. Rekommenderad provtid: 10 minuter
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        Delprovet NOG består av uppgifter med en fråga följd av två påståenden,
        (1) och (2), som innehåller information. Frågan kan ibland föregås av
        viss inledande information. Din uppgift är att avgöra om frågan entydigt
        kan besvaras med hjälp av informationen i påståendena, och i så fall hur
        mycket av denna information som är tillräcklig. Till varje uppgift finns
        fem svarsalternativ, varav endast ett är rätt. I NOG har alla uppgifter
        samma svarsalternativ.
      </Typography>
      <br></br>
      <Typography
        variant="subtitle1"
        style={{ fontSize: ".9rem", fontWeight: "600" }}
      >
        DTK - Diagram, tabeller och kartor
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        12 uppgifter. Rekommenderad provtid: 23 minuter
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        Delprovet DTK innehåller diagram, tabeller, kartor och andra grafiska
        framställningar. Uppgifterna ska lösas med hjälp av den information som
        finns på respektive uppslag. Till varje uppgift finns det fyra
        svarsförslag. Välj det som bäst besvarar frågan.
      </Typography>
    </Box>
  );
};

export default KvantitativProvpassInfo;

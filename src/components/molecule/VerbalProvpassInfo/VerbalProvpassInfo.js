import { Box, Typography } from "@material-ui/core";

const VerbalProvpassInfo = ({ classes }) => {
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
        Verbal provpass
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
        Här följer anvisningar till de verbala delproven ORD, LÄS, MEK och ELF.
        Provhäftet innehåller 40 uppgifter och den totala provtiden är 55
        minuter.
      </Typography>
      <br></br>
      <Typography
        // mt={3}
        variant="subtitle1"
        style={{ fontSize: ".9rem", fontWeight: "600" }}
      >
        Ord - Ordförståelse
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        10 uppgifter. Rekommenderad provtid: 3 minuter
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        I delprovet ORD inleds varje uppgift med ett ord i fetstil. Under detta
        finns fem svarsförslag. Välj det svarsförslag som bäst motsvarar
        innebörden av det feststilta ordet.
      </Typography>
      <br></br>
      <Typography
        variant="subtitle1"
        style={{ fontSize: ".9rem", fontWeight: "600" }}
      >
        LÄS - Svenska läsförståelse
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        10 uppgifter. Rekommenderad provtid: 22 minuter
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        Delprovet LÄS består av svenska texter från olika ämnesområden och av
        varierande längd. Varje uppgift består av en fråga med fyra
        svarsförslag, varav ett är rätt. 
        <br/>
        <br/>
        Ibland kan du klart se att ett av svarsförslagen är rätt och att de andra 
        är fel. Ibland verkar först flera svar mer eller mindre rimliga. Då måste 
        du, genom att jämföra de olika svarsförslagen, välja ut det som bäst 
        besvarar frågan. 
        <br/>
        <br/>
        Observera att du ska lösa uppgifterna med ledning av den information 
        som ges itexten.
      </Typography>
      <br></br>
      <Typography
        variant="subtitle1"
        style={{ fontSize: ".9rem", fontWeight: "600" }}
      >
        MEK - Meningskomplettering
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        10 uppgifter. Rekommenderad provtid: 8 minuter
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        Uppgifterna i delprovet MEK består av korta textstycken där ett eller
        flera ord ersatts av en lucka markerad med _____. En uppgift kan
        innehålla en, två eller tre luckor. Efter varje textstycke följer fyra
        svarsförslag. Välj det svarsförslag som innehållsligt och språkligt
        passar bäst in i textstycket som helhet.
      </Typography>
      <br></br>
      <Typography
        variant="subtitle1"
        style={{ fontSize: ".9rem", fontWeight: "600" }}
      >
        ELF - Engelsk läsförståelse
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        10 uppgifter. Rekommenderad provtid: 22 minuter
      </Typography>
      <Typography
        mt={3}
        variant="subtitle1"
        style={{ fontSize: ".875rem", fontWeight: "400" }}
      >
        Delprovet ELF består av engelska texter från olika ämnesområden och 
        av varierande längd. Varje uppgift består av en fråga med fyra
        svarsförslag, varav ett är rätt. 
        <br/>
        <br/>
        Ibland kan du klart se att ett av svarsförslagen är rätt och att de andra 
        är fel. Ibland verkar först flera svar mer eller mindre rimliga. Då måste 
        du, genom att jämföra de olika svarsförslagen, välja ut det som bäst 
        besvarar frågan. 
        <br/>
        <br/>
        Observera att du ska lösa uppgifterna med ledning av den information 
        som ges i respektive text.
      </Typography>
    </Box>
  );
};

export default VerbalProvpassInfo;

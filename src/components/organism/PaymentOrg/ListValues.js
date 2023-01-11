import React from "react";
import { Grid, List, ListItem, ListItemText } from "@material-ui/core";
import CheckmarkPurple from "../../../assets/Icons/CheckmarkPurple.png";

const ListValues = () => {
  return (
    <Grid>
      <List>
        <Grid style={{ display: "flex", gap: "0px" }}>
          <ListItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "8px" }}>
                <img width={"30px"} src={CheckmarkPurple} alt="" />
              </span>
              <span>+4000 uppgifter på alla 8 delar</span>
            </div>
          </ListItem>
        </Grid>
        <Grid style={{ display: "flex", gap: "0px" }}>
          <ListItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "8px" }}>
                <img width={"30px"} src={CheckmarkPurple} alt="" />
              </span>
              <span>+4000 detaljerade lösningar</span>
            </div>
          </ListItem>
        </Grid>
        <Grid style={{ display: "flex", gap: "0px" }}>
          <ListItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "8px" }}>
                <img width={"30px"} src={CheckmarkPurple} alt="" />
              </span>
              <span>Alla prov mellan 2011-2022</span>
            </div>
          </ListItem>
        </Grid>
        <Grid style={{ display: "flex", gap: "0px" }}>
          <ListItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "8px" }}>
                <img width={"30px"} src={CheckmarkPurple} alt="" />
              </span>
              <span>Personlig poängprognos på alla delar</span>
            </div>
          </ListItem>
        </Grid>
      </List>
    </Grid>
  );
};

export default ListValues;

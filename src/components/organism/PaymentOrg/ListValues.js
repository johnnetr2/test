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
              <span>Plugga på 3500+ övningsuppgifter</span>
            </div>
          </ListItem>
        </Grid>
        <Grid style={{ display: "flex", gap: "0px" }}>
          <ListItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "8px" }}>
                <img width={"30px"} src={CheckmarkPurple} alt="" />
              </span>
              <span>Tillgång till 1300+ smarta lösningar</span>
            </div>
          </ListItem>
        </Grid>
        <Grid style={{ display: "flex", gap: "0px" }}>
          <ListItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "8px" }}>
                <img width={"30px"} src={CheckmarkPurple} alt="" />
              </span>
              <span>Gör gamla prov från 2011 och framåt</span>
            </div>
          </ListItem>
        </Grid>
        <Grid style={{ display: "flex", gap: "0px" }}>
          <ListItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "8px" }}>
                <img width={"30px"} src={CheckmarkPurple} alt="" />
              </span>
              <span>Få personlig normerad poängprognos</span>
            </div>
          </ListItem>
        </Grid>
      </List>
    </Grid>
  );
};

export default ListValues;

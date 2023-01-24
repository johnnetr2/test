import moment from "moment";

export const datesGroupByComponent = (dates, token) => {
    return dates.reduce(function (val, obj) {
        let comp = moment(obj["createdAt"], "YYYY/MM/DD").format(token);
        (val[comp] = val[comp] || []).push(obj);
        return val;
    }, {});
}

export const appColors = {
    blueColor: "#5263EB",
    blackColor: "#000000",
    whiteColor: "#FFFFFF",
    hoverBlue: "#4754f3",
    leftBarHover: "#F2F2F2"
};
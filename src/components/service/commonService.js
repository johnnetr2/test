import moment from "moment";

export const datesGroupByComponent = (dates, token) => {
    return dates.reduce(function (val, obj) {
        let comp = moment(obj["createdAt"], "YYYY/MM/DD").format(token);
        (val[comp] = val[comp] || []).push(obj);
        return val;
    }, {});
}
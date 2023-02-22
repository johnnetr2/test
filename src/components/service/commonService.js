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

export const setInitialUserState = (user) => {
    const verifiedAtDate = user?.verified_date ? user?.verified_date : new Date();
    const trialDate = moment(verifiedAtDate)
        .add(5, "days")
        .format("YYYY-MM-DD");
    const currentDate = moment(new Date()).format("YYYY-MM-DD");
    const isGreaterCurrentData = moment(trialDate).isAfter(currentDate);
    localStorage.setItem("isPremium", user?.isPremium ? true : false);
    localStorage.setItem("isInTrial", isGreaterCurrentData);
};

export const scrollTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, 200);
};

export const optionsCharectors = (index) => {
    switch (index) {
        case 0:
            return "A";
        case 1:
            return "B";
        case 2:
            return "C";
        case 3:
            return "D";
        case 4:
            return "E";
        default:
            return "";
    }
}
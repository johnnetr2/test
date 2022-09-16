import mixpanel from "mixpanel-browser";

export class MixpanelTracking {
  static _instance;
  constructor(_instance) {
    if (MixpanelTracking._instance)
      throw new Error("Error: Instance ceration of Mixpanel is not allowed");
    this._instance = mixpanel.init("b8b92353db27b153a0e23b561331f1bf", {
      debug: true,
    });
  }

  static getInstance() {
    if (MixpanelTracking._instance == null)
      return (MixpanelTracking._instance = new MixpanelTracking());
    return this._instance;
  }

  #track(eventName, eventData) {
    mixpanel.track(eventName, eventData);
  }

  #alias(userId) {
    mixpanel.alias(userId);
  }

  #identify(userId) {
    mixpanel.identify(userId);
  }

  #setPoeple(props) {
    mixpanel.people.set({
      ...props,
    });
    console.log(props);
  }

  visitedPage(pageName) {
    this.#track(pageName + " Visited", {
      "Page name": pageName,
    });
  }

  registration(
    status,
    userId,
    userName,
    userEmail,
    planType = "Free",
    registrationMethod = "Email"
  ) {
    this.#alias(userId || "");
    this.#track("Registration", {
      status: status,
    });
    {
      status === "Success" &&
        this.#setPoeple({
          "User Id": userId,
          // prettier-ignore
          "$name": userName,
          // prettier-ignore
          "$email": userEmail,
          "Plan type": planType,
          "Registration date": new Date().toDateString(),
          "Registration method": registrationMethod,
        });
    }
  }

  login(status, userId) {
    this.#identify(userId || "");
    this.#track("Login", {
      status: status,
    });
  }
}

//Highest order - Change price here. This will affect Checkout and other CTAs.

const planOne = {
  price: 720,
  premiumLength: 7, //special case, need to update again in May
  pricePerMonth: 720 / 6,
};

const planTwo = {
  price: 900,
  premiumLength: 9,
  pricePerMonth: 900 / 6,
};

const planThree = {
  price: 1080,
  premiumLength: 12,
  pricePerMonth: 1080 / 6,
};

const Prices = { planOne: planOne, planTwo: planTwo, planThree: planThree };

export default Prices;

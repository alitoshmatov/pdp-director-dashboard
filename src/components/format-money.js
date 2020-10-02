export default function FormatMoney(money) {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " UZS";
}

function MillionToM(money) {
  while (money > 999 || money < -999) {
    money = Math.floor(money / 1000);
  }

  return money + " M";
}

function FormatMoneyNoUZS(money) {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
export { MillionToM, FormatMoneyNoUZS };

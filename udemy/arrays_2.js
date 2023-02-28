const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    let sum = 0;
    let newArr = data.filter(shop => (shop.amount >= 0));
    newArr.forEach(value => sum += value.amount);
    return sum;
  };


const getTotalIncomeAmount = (data) => {
    let newArr = data.filter(shop => (shop.amount >= 0));
    if (newArr.length === data.length) {
        let sum = 0;
        data.forEach(value => sum += value.amount);
        return sum;
    } else {
        return getPositiveIncomeAmount(data);
    }
};

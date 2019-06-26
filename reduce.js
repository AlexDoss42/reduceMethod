//BASIC EXAMPLE OF REDUCE

const numsArr = [0, 1, 2, 3]

const reducedNumsArr = numsArr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0)

console.log(reducedNumsArr)

// returns 6 

const total = [ 0, 1, 2, 3 ].reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  0
);

console.log(total)

// returns 6



// REAL-LIFE EXAMPLE FINANCIAL TRANSACTIONS

const financialTransactionArray = [
  {
    transactionID: 1,
    company: 'Taco Bell',
    date: 6/23/2019,
    amount: 5.49
  },
  {
    transactionID: 2,
    company: 'Taco Bell',
    date: 6/24/2019,
    amount: 5.49
  },
  {
    transactionID: 3,
    company: 'Chevron',
    date: 6/24/2019,
    amount: 25.49
  },
  {
    transactionID: 4,
    company: 'Taco Bell',
    date: 6/25/2019,
    amount: 5.49
  },
  {
    transactionID: 5,
    company: 'Picadelli',
    date: 6/25/2019,
    amount: 18.49
  }
]

const transactionTotal = financialTransactionArray.reduce( (acc, curr) => {
  return acc + curr.amount
}, 0)

console.log(`total spent: $${transactionTotal}`)


// EXAMPLE OF COUNTING THE NUMBER OF INSTANCES

const financialTransactionArray = [
  {
    transactionID: 1,
    company: 'Taco Bell',
    date: 6/23/2019,
    amount: 5.49
  },
  {
    transactionID: 2,
    company: 'Taco Bell',
    date: 6/24/2019,
    amount: 5.49
  },
  {
    transactionID: 3,
    company: 'Chevron',
    date: 6/24/2019,
    amount: 25.49
  },
  {
    transactionID: 4,
    company: 'Taco Bell',
    date: 6/25/2019,
    amount: 5.49
  },
  {
    transactionID: 5,
    company: 'Picadelli',
    date: 6/25/2019,
    amount: 18.49
  }
]

var countedTransaction = financialTransactionArray.reduce(function (allTransactions, transaction) { 
  if (transaction.company in allTransactions) {
    allTransactions[transaction.company]++;
  }
  else {
    allTransactions[transaction.company] = 1;
  }
  return allTransactions;
}, {});

console.log(countedTransaction)


// GROUPING TRANSACTIONS BY A PROPERTY

const financialTransactionArray = [
  {
    transactionID: 1,
    company: 'Taco Bell',
    date: '6/23/2019',
    amount: 5.49
  },
  {
    transactionID: 2,
    company: 'Taco Bell',
    date: '6/24/2019',
    amount: 5.49
  },
  {
    transactionID: 3,
    company: 'Chevron',
    date: '6/24/2019',
    amount: 25.49
  },
  {
    transactionID: 4,
    company: 'Taco Bell',
    date: '6/25/2019',
    amount: 5.49
  },
  {
    transactionID: 5,
    company: 'Picadelli',
    date: '6/25/2019',
    amount: 18.49
  }
]

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const groupedTransaction = groupBy(financialTransactionArray, 'date');

console.log(groupedTransaction)

// REMOVING DUPLICATES

const financialTransactionArray = [
  {
    transactionID: 1,
    company: 'Taco Bell',
    date: '6/23/2019',
    amount: 5.49
  },
  {
    transactionID: 2,
    company: 'Taco Bell',
    date: '6/24/2019',
    amount: 5.49
  },
  {
    transactionID: 3,
    company: 'Chevron',
    date: '6/24/2019',
    amount: 25.49
  },
  {
    transactionID: 3,
    company: 'Chevron',
    date: '6/24/2019',
    amount: 25.49
  },
  {
    transactionID: 4,
    company: 'Taco Bell',
    date: '6/25/2019',
    amount: 5.49
  },
  {
    transactionID: 5,
    company: 'Picadelli',
    date: '6/25/2019',
    amount: 18.49
  }
]

const financialTransactionArrSansDuplicates = financialTransactionArray.reduce(function (acc, curr) {
  const found = acc.find((el) => {
    return el.transactionID === curr.transactionID
  })
  if (!found) {
    acc.push(curr);
  }
  return acc
}, [])

console.log(financialTransactionArrSansDuplicates);
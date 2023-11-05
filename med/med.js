function sharePizza(totalSlices, totalPeople) {
    const slicesPerPerson = totalSlices / totalPeople;
    return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza; from our ${totalSlices} slice pizza.`;
  }
  
  console.log(sharePizza(8, 2)); // Each person gets 4.00 slices of pizza; from our 8-slice pizza
  console.log(sharePizza(8, 3)); // Each person gets 2.67 slices of pizza; from our 8-slice pizza
  console.log(sharePizza(21, 20)); // Each person gets 1.05 slices of pizza; from our 21-slice pizza
  console.log(sharePizza(10, 3)); // Each person gets 3.33 slices of pizza; from our 10-slice pizza
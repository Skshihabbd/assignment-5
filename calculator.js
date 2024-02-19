function apply() {
  const applyButton = document.getElementById("apply--button");
  // discount calculation
  const totalPriceValues = document.getElementById("total-price-values");
  const totalPriceUpdated = totalPriceValues.innerText;
  const totalPriceDiscountAmountCouple = totalPriceUpdated * 0.2;

  const totalPriceDiscountAmountNew15 = totalPriceUpdated * 0.15;

  // grand-total-value
  const grandTotalValue = document.getElementById("grand-total-values");
  const grandTotalText = grandTotalValue.innerText;
  const grandTotalTextConversion = parseInt(grandTotalText);
  const grandTotalDiscountedValueNew =
    grandTotalTextConversion - totalPriceDiscountAmountNew15;
  const grandTotalDiscountedValueCoup =
    grandTotalTextConversion - totalPriceDiscountAmountCouple;

  // grand-total-value

  // discount calculation

  const grandTotalMother = document.getElementById("grand-total-mother");
  const grandTotalChildDiv = document.createElement("div");
  const grandTotalChildparagraf1 = document.createElement("p");
  const grandTotalChildparagraf2 = document.createElement("p");
  const grandTotalChildparagrafSpan = document.createElement("span");
  grandTotalChildparagraf1.innerText = "discount";
  grandTotalChildparagraf2.innerText = "BDT";
  //  const updateGrandTotalSpan=

  const inputValueGet = document.getElementById("apply-input");
  const inputValueText = inputValueGet.value;

  if (inputValueText === "NEW15") {
    grandTotalChildparagrafSpan.innerText = totalPriceDiscountAmountNew15;
    grandTotalChildDiv.appendChild(grandTotalChildparagraf1);
    grandTotalChildDiv.appendChild(grandTotalChildparagraf2);
    grandTotalChildparagraf2.appendChild(grandTotalChildparagrafSpan);
    grandTotalChildDiv.classList.add("flex", "justify-evenly", "mt-5", "mb-7");
    grandTotalMother.appendChild(grandTotalChildDiv);

    inputValueGet.classList.add("hidden");
    applyButton.classList.add("hidden");
    grandTotalValue.innerText=grandTotalDiscountedValueNew
  }
  else if( inputValueText=== 'Couple 20'){

    grandTotalChildparagrafSpan.innerText = totalPriceDiscountAmountCouple;
    grandTotalChildDiv.appendChild(grandTotalChildparagraf1);
    grandTotalChildDiv.appendChild(grandTotalChildparagraf2);
    grandTotalChildparagraf2.appendChild(grandTotalChildparagrafSpan);
    grandTotalChildDiv.classList.add("flex", "justify-evenly", "mt-5", "mb-7");
    grandTotalMother.appendChild(grandTotalChildDiv);

    inputValueGet.classList.add("hidden");
    applyButton.classList.add("hidden");
    grandTotalValue.innerText=grandTotalDiscountedValueCoup


  }
}

apply();

function completeAlert(){

const alertSection=document.getElementById('alert-section')
alertSection.scrollIntoView({behavior:"smooth"})

}

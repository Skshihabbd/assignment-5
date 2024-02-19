let count = 0;

function buyTicket() {
  const ticketBuyArea = document.getElementById("ticket-buy-area");
  ticketBuyArea.scrollIntoView({ behavior: "smooth", inline: "center" });
}

function allSeatContainer() {
  const allSeatContainer = document.getElementsByClassName("rounded-lg");
  for (const perSeat of allSeatContainer) {
    perSeat.addEventListener("click", function () {
      const perseattext = perSeat.innerText;

      const divMakig = document.createElement("div");

      // seat-price-calculation-showbar
      const perSeatTextSet = document.getElementById("per-seat-text-set");
      const seatNameSet = document.createElement("p");

      seatNameSet.innerText = perseattext;

      const economyTextPara = document.createElement("p");

      economyTextPara.innerText = "Economy";
      const economy = economyTextPara.innerText;

      const perSeatPriceText = document.createElement("p");
      perSeatPriceText.innerText = "550";
      numberConversionFiveHundred = parseInt(perSeatPriceText.innerText);
      const perSeatFives = numberConversionFiveHundred;

      const applyButton = document.getElementById("apply--button");

      count = count + 1;
      if (count >= 5) {
        applyButton.removeAttribute("disabled");
        alert("shihab");
        return;
      }


      // 40-seat-id
      const fourtySeatId = document.getElementById("40-seat-id");
      const inText = fourtySeatId.innerText;
      const convertInText = parseInt(inText);
      const convertInTextdecrease = convertInText - 1;
      fourtySeatId.innerText = convertInTextdecrease;

      // 40-seat-id

      // phone-number-validation
      const phoneNumberGet=document.getElementById('phone-number')
      const phoneNumberValue=phoneNumberGet.value
      console.log(phoneNumberValue)
      const nextButton=document.getElementById('next-buttonid')
      if (  count>=1  || typeof phoneNumberValue ==='number' ) {

      nextButton.removeAttribute('disabled')
      }

      // phone-number-validation

      // phone-number-validation

      divMakig.appendChild(seatNameSet);
      divMakig.appendChild(economyTextPara);
      divMakig.appendChild(perSeatPriceText);

      perSeatTextSet.appendChild(divMakig);
      divMakig.classList.add("flex", "justify-around", "m-6");

      // seat-price-calculation-showbar

      perSeat.style.backgroundColor = "#1DD100";
      const seatIncreaseNumber = document.getElementById(
        "seat-increase-number"
      );
      const seatIncreaseText = seatIncreaseNumber.innerText;
      // const updateSeatNumber = document.createElement("p");
      let convertedNumber = parseInt(seatIncreaseText);
      convertedNumber = convertedNumber + 1;
      seatIncreaseNumber.innerText = convertedNumber;
      perSeat.disabled = true;

      // total-price-update
      const totalPriceValues = document.getElementById("total-price-values");
      const totalPriceValueText = totalPriceValues.innerText;
      const totalPriceValueTextConvert = parseInt(totalPriceValueText);
      const totalPriceValueUpdate = totalPriceValueTextConvert + 550;
      totalPriceValues.innerText = totalPriceValueUpdate;
      // total-price-update

      // grand-total-value-update
      const grandTotalValues = document.getElementById("grand-total-values");
      const grandTotalValueText = grandTotalValues.innerText;
      const grandTotalValuesConvert = parseInt(grandTotalValueText);
      const grandTotalPriceUpdate = grandTotalValuesConvert + 550;
      grandTotalValues.innerText = grandTotalPriceUpdate;

      // grand-total-value-update

      // not more than four button click

      // const jj = document.getElementById("J1");
      // jj.setAttribute(disabled);

      // not more than four button click
    });
    // applybutton-working-function
    //     const phoneNumberGet=document.getElementById('phone-number')

    //     const nextButton=document.getElementById('next-buttonid')
    //     phoneNumberGet.addEventListener('input',function(){
    // const valueGetting = this.value.trim()
    // if ( valueGetting=== 'number'){
    //   nextButton.removeAttribute('disabled')

    // }
    //     })

    //  applybutton-working-function
  }
}

const a = allSeatContainer();

"use strict";

async function fetchQuote() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    console.log(response);
    if (!response.ok) throw new Error("Internet was not ok");
    const data = await response.json();
    const advice = data.slip.advice;
    document.getElementById("thenie").innerHTML = advice;
  } catch (error) {
    console.error("error fetching the quote,");
  }
}
fetchQuote();

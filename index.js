const prices = document.querySelectorAll('.searchResultsPriceValue span')
const prc = Array.from(prices).map(e => parseFloat(e.innerText.replace(' TL','')) )
const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
average(prc)
let calculation = "";
let result = document.getElementById("result");
const res = document.getElementById("reset1");
let del = document.getElementById("btndel1");
const range = document.getElementById("rangeInput");
const body = document.getElementById("body");
const calc = document.getElementById("calc");
const theme = document.querySelector(".theme");
const numbers = document.querySelector(".numbers");
const container = document.querySelector(".container2");
const containerthree = document.querySelector(".container3");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals1");

function calculator(value) {
  calculation += value;
  result.value = calculation;
}

function clearResult() {
  calculation = "";
  result.value = calculation;
}

function calculate() {
  result.value = eval(calculation);
}

function reset() {
  calculation = "";
  result.value = "";
}

function deleteLast() {
  calculation = result.value.slice(0, -1);
  result.value = calculation;
}

range.addEventListener("click", function () {
  if (range.value == 1) {
    range.style.setProperty("--thumb-background-color", "#D03F2F");
    range.style.backgroundColor = "#242D44";
    body.style.backgroundColor = "";
    calc.style.color = "white";
    theme.style.color = "white";
    numbers.style.color = "white";
    result.style.color = "white";
    result.style.backgroundColor = "#181F33";
    container.style.backgroundColor = "#181F33";
    containerthree.style.backgroundColor = "#242D44";
    res.style.backgroundColor = "#647198";
    res.style.boxShadow = " inset 0px -4px 0px #414E73";
    equals.style.backgroundColor = "#D03F2F";
    equals.style.boxShadow = "  inset 0px -4px 0px #93261A";
    del.style.backgroundColor = "#647198";
    del.style.boxShadow = "  inset 0px -4px 0px #414E73";
    buttons.forEach(function (element) {
      element.style.color = "#36362C";
      element.style.backgroundColor = "#E5E4E1";
      element.style.boxShadow = "inset 0px -4px 0px #B3A497";
    });
  } else if (range.value == 2) {
    range.style.setProperty("--thumb-background-color", "#C85402");
    range.style.backgroundColor = "#D2CDCD";
    body.style.backgroundColor = "#E6E6E6";
    calc.style.color = "#36362C";
    theme.style.color = "#36362C";
    numbers.style.color = "#36362C";
    result.style.color = "black";
    result.style.backgroundColor = "#EEEEEE";
    container.style.backgroundColor = "#EEEEEE";
    containerthree.style.backgroundColor = "#D2CDCD";
    res.style.backgroundColor = "#378187";
    res.style.boxShadow = " inset 0px -4px 0px #1B6066";
    equals.style.backgroundColor = "#C85402";
    equals.style.boxShadow = "  inset 0px -4px 0px #873901";
    del.style.backgroundColor = "#378187";
    del.style.boxShadow = " inset 0px -4px 0px #1B6066";
    buttons.forEach(function (element) {
      element.style.color = "#36362C";
      element.style.backgroundColor = "#E5E4E1";
      element.style.boxShadow = "   inset 0px -4px 0px #B3A497";
    });
  } else if (range.value == 3) {
    range.style.setProperty("--thumb-background-color", "#00DED0");
    range.style.backgroundColor = "#1E0936";
    body.style.backgroundColor = "#17062A";
    calc.style.color = "#FFE53D";
    theme.style.color = "#FFE53D";
    numbers.style.color = "#FFE53D";
    result.style.color = "#FFE53D";
    result.style.backgroundColor = "#1E0936";
    container.style.backgroundColor = "#1E0936";
    containerthree.style.backgroundColor = "#1E0936";
    res.style.backgroundColor = "#56077C";
    equals.style.backgroundColor = "#00DED0";
    del.style.backgroundColor = "#56077C";
    equals.style.boxShadow = " inset 0px -4px 0px #6CF9F1";
    res.style.boxShadow = " inset 0px -4px 0px #BE15F4";
    del.style.boxShadow = " inset 0px -4px 0px #BE15F4";
    buttons.forEach(function (element) {
      element.style.color = "#FFE53D";
      element.style.backgroundColor = "#331C4D";
      element.style.boxShadow = " inset 0px -4px 0px #881C9E";
    });
  }
});

del.addEventListener("mouseover", function () {
  if (range.value == 1) {
    del.style.backgroundColor = "#A2B2E1";
  } else if (range.value == 2) {
    del.style.backgroundColor = "#62B5BC";
  } else if (range.value == 3) {
    del.style.backgroundColor = "#8631AF";
  }
});
del.addEventListener("mouseout", function () {
  if (range.value == 1) {
    del.style.backgroundColor = "#647198";
  } else if (range.value == 2) {
    del.style.backgroundColor = "#378187";
  } else if (range.value == 3) {
    del.style.backgroundColor = "#56077C";
  }
});

res.addEventListener("mouseover", function () {
  if (range.value == 1) {
    res.style.backgroundColor = "#A2B2E1";
  } else if (range.value == 2) {
    res.style.backgroundColor = "#62B5BC";
  } else if (range.value == 3) {
    res.style.backgroundColor = "#8631AF";
  }
});
res.addEventListener("mouseout", function () {
  if (range.value == 1) {
    res.style.backgroundColor = "#647198";
  } else if (range.value == 2) {
    res.style.backgroundColor = "#378187";
  } else if (range.value == 3) {
    res.style.backgroundColor = "#56077C";
  }
});

equals.addEventListener("mouseover", function () {
  if (range.value == 1) {
    equals.style.backgroundColor = "#F96B5B";
  } else if (range.value == 2) {
    equals.style.backgroundColor = "#FF8A38";
  } else if (range.value == 3) {
    equals.style.backgroundColor = "#93FFF8";
  }
});
equals.addEventListener("mouseout", function () {
  if (range.value == 1) {
    equals.style.backgroundColor = "#D03F2F";
  } else if (range.value == 2) {
    equals.style.backgroundColor = "#C85402";
  } else if (range.value == 3) {
    equals.style.backgroundColor = "#00DED0";
  }
});

buttons.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    if (range.value == 1) {
      element.style.backgroundColor = "#FFFFFE";
    } else if (range.value == 2) {
      element.style.backgroundColor = "#FFFFFF";
    } else if (range.value == 3) {
      element.style.backgroundColor = "#8631AF";
    }
  });

  element.addEventListener("mouseout", function () {
    if (range.value == 1) {
      element.style.backgroundColor = "#EAE3DC";
    } else if (range.value == 2) {
      element.style.backgroundColor = "#E5E4E1";
    } else if (range.value == 3) {
      element.style.backgroundColor = "#331C4D";
    }
  });
});

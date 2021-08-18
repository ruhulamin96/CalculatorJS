var double = "";
var count = 0;
function dis(value) {
  document.getElementById("display").value += value;
  double += value;
  let myArr = double.split("");
  if (
    (myArr[count - 1] == "+" ||
      myArr[count - 1] == "-" ||
      myArr[count - 1] == "*" ||
      myArr[count - 1] == "/") &&
    (myArr[count] == "+" ||
      myArr[count] == "-" ||
      myArr[count] == "*" ||
      myArr[count] == "/")
  ) {
    del()
  }
  count++;
}
function calculate() {
  document.getElementById("display").value = eval(
    document.getElementById("display").value
  );
}
function del() {
  let str = document.getElementById("display").value;
  document.getElementById("display").value = str.slice(0, str.length - 1);
}

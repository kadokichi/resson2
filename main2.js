function clickButton(btn) {
  let result = document.getElementById("result");
  let btn_value = btn.innerHTML;
  let control_button = document.getElementById("limit-button");
  
  if (btn_value == "AC") {
    result.value = "0"; 
    control_button.disabled = false;
  //同じ演算子を連続で入力できないようにする
  } else if (btn_value == "+" && result.value.slice(-1) == "+") {
  } else if (btn_value == "-" && result.value.slice(-1) == "-") {  
  } else if (btn_value == "*" && result.value.slice(-1) == "*") {
  } else if (btn_value == "/" && result.value.slice(-1) == "/") {
  } else if (btn_value == "." && result.value.slice(-1) == ".") {
  //違う演算子を連続で入力できないようにする
  } else if (btn_value == "+" && result.value.slice(-1) == "-") {
    return;
  } else if (btn_value == "+" && result.value.slice(-1) == "*") {
    return;
  } else if (btn_value == "+" && result.value.slice(-1) == "/") {
    return;
  } else if (btn_value == "+" && result.value.slice(-1) == ".") {
    return;
  } else if (btn_value == "*" && result.value.slice(-1) == "+") {
    return;
  } else if (btn_value == "*" && result.value.slice(-1) == "-") {
    return;
  } else if (btn_value == "*" && result.value.slice(-1) == "/") {
    return;
  } else if (btn_value == "*" && result.value.slice(-1) == ".") {
    return;
  } else if (btn_value == "/" && result.value.slice(-1) == "+") {
    return;
  } else if (btn_value == "/" && result.value.slice(-1) == "-") {
    return;
  } else if (btn_value == "/" && result.value.slice(-1) == "*") {
    return;
  } else if (btn_value == "/" && result.value.slice(-1) == ".") {
    return;
  } else if (btn_value == "-" && result.value.slice(-1) == "+") {
    return;
  } else if (btn_value == "-" && result.value.slice(-1) == "*") {
    return;
  } else if (btn_value == "-" && result.value.slice(-1) == "/") {
    return;
  } else if (btn_value == "-" && result.value.slice(-1) == ".") {
    return;
  } else if (btn_value == "." && result.value.slice(-1) == "+") {
    return; 
  } else if (btn_value == "." && result.value.slice(-1) == "-") {
    return;
  } else if (btn_value == "." && result.value.slice(-1) == "*") {
    return;
  } else if (btn_value == "." && result.value.slice(-1) == "/") {
    return;

  //スタート画面が０の状態で+,*,/,00を入力不可にする
  } else if (result.value == "0" && btn_value == "+") {
    return;
  }  else if (result.value == "0" && btn_value == "*") {
    return;
  }  else if (result.value == "0" && btn_value == "/") {
    return;
  } else if (result.value == "0" && btn_value == "00") {
    return;
  // -00の入力を防止
  } else if (result.value == "-" && btn_value == "00") {
    return;
  //スタート画面から.数字を入力した際に.4ではなく0.4と表示できるようにする 
  } else if (result.value == "0"  && btn_value == ".") {
    result.value = 0 + btn_value;
    control_button.disabled = true;
  //スタート画面で-を入力した際に-を表示する
  } else if (result.value == "0"  && btn_value == "-") {
    result.value = "-";
  //12.3.4などの複数の小数点が使えないようにする 
  } else if (btn_value == "." ) {
    result.value += btn_value;
    control_button.disabled = true;
  } else if (btn_value == "+") {
    result.value += btn_value;
    control_button.disabled = false;
  } else if (btn_value == "-") {
    result.value += btn_value;
    control_button.disabled = false; 
  } else if (btn_value == "*") {
    result.value += btn_value;
    control_button.disabled = false;
  } else if (btn_value == "/") {
    result.value += btn_value;
    control_button.disabled = false;
  
  } else if (btn_value == "=") {
    result.value = eval(result.value);
  }
  
  else {
    if (result.value == "0") {
      result.value = btn_value;
     }else {
       result.value += btn_value;
    }
  }

}
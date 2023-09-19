/* global $*/
$(document).ready(function() {
  let timer;
  let msec = 0;
  let sec = 0;
  let min = 0;
  let hour = 0;

  //スタートボタン
  $('#start').on("click",function() {
    timer = setInterval(countup, 100);
  $("#start").prop("disabled", true);
  });
  
  //ストップボタン
  $('#stop').on("click",function() {
    clearInterval(timer);
  $("#start").prop("disabled", false);
  });
  
  //リセットボタン
  $('#reset').on("click",function() {
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    $('#time').html("0:0:0:0");
    clearInterval(timer);
  $("#start").prop("disabled", false);
  });
  
  //カウント
  function countup() {
    msec += 1;
 
    if (msec > 9) {
        msec = 0;
        sec += 1;
    }
 
    if (sec > 59) {
        sec = 0;
        min += 1;
    }
 
    if (min > 59) {
        min = 0;
        hour += 1;
    }
 
    //出力
    $('#time').html(hour + ":" + min + ":" + sec + ":" + msec);
  }
  

});
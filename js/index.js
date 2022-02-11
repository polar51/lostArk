var oreha = document.getElementsByClassName('oreha_con');
var oreha_hard = document.getElementsByClassName('oreha_hard_con');

var argos = document.getElementsByClassName('argos_con');

var baltan = document.getElementsByClassName('baltan_con');
var baltan_hard = document.getElementsByClassName('baltan_hard_con');

var biakiss = document.getElementsByClassName('biakiss_con');
var biakiss_hard = document.getElementsByClassName('biakiss_hard_con');

var koukusaton = document.getElementsByClassName('koukusaton_con');

var abrelshud = document.getElementsByClassName('abrelshud_con');
var abrelshud_hard = document.getElementsByClassName('abrelshud_hard_con');




// 캐릭터 인포




document.getElementById('button1').addEventListener('click', ()=>{
  var char1_level = document.getElementById('char_level');
  var char1_name = document.getElementById('char_name');

  var char1_info1 = document.createElement('div'); 
  char1_info1.textContent = char1_level.value;

  document.getElementById('char_info').appendChild(char1_info1); 
  char1_level.remove();

  var char1_info2 = document.createElement('div');
  char1_info2.textContent = char1_name.value;

  document.getElementById('char_info').appendChild(char1_info2); 
  char1_name.remove();

  //정보 저장 버튼 삭제?

  var char1_week_raid = char1_level.value;
  var i = 1;
  if(char1_week_raid>=1325){
    oreha.classList.add('show')
  }

},{once:true});






//일일 컨텐츠

// var kaos_chk1 = document.getElementById('kaos_check_box1');
// var kaos_chk2 = document.getElementById('kaos_check_box2');


var kaos_huge = Array.from(document.getElementsByClassName('kaos_huge'));
var kaos_huge_on = Array.from(document.getElementsByClassName("kaos_huge on"));
var kaos_huge_i = kaos_huge_on[kaos_huge_on.length-1];


function kaos_checked(checked){
  var arr = Array.from(document.getElementsByClassName("kaos_huge on"));
  var i = arr[arr.length-1];
  var x = kaos_huge_on[arr.length];
  if(checked.checked==true){
    i.classList.remove('on')
  } else {
    x.classList.add('on')
  }
};



// var guardian_chk1 = document.getElementById('guardian_check_box1');
// var guardian_chk2 = document.getElementById('guardian_check_box2');


var guardian_huge = Array.from(document.getElementsByClassName('guardian_huge'));
var guardian_huge_on = Array.from(document.getElementsByClassName("guardian_huge on"));
var guardian_huge_i = guardian_huge_on[guardian_huge_on.length-1];


function guardian_checked(checked){
  var arr1 = Array.from(document.getElementsByClassName("guardian_huge on"));
  var i1 = arr1[arr1.length-1];
  var x1 = guardian_huge_on[arr1.length];
  if(checked.checked==true){
    i1.classList.remove('on')
  } else {
    x1.classList.add('on')
  }
};

// var quest_chk1 = document.getElementById('quest_check_box1');
// var quest_chk2 = document.getElementById('quest_check_box2');
// var quest_chk2 = document.getElementById('quest_check_box2');


var quest_huge = Array.from(document.getElementsByClassName('quest_huge'));
var quest_huge_on = Array.from(document.getElementsByClassName("quest_huge on"));
var quest_huge_i = quest_huge_on[quest_huge_on.length-1];


function quest_checked(checked){
  var arr2 = Array.from(document.getElementsByClassName("quest_huge on"));
  var i2 = arr2[arr2.length-1];
  var x2 = quest_huge_on[arr2.length];
  if(checked.checked==true){
    i2.classList.remove('on')
  } else {
    x2.classList.add('on')
  }
};



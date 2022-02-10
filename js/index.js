
// 캐릭터 인포

var char1_level = document.getElementById('char_level');
var char1_name = document.getElementById('char_name');


document.getElementById('button1').onclick = function(){

  var char1_info1 = document.createElement('div'); 
  char1_info1.textContent = char1_level.value;

  document.getElementById('char_info').appendChild(char1_info1); 
  char1_level.remove();

  var char1_info2 = document.createElement('div');
  char1_info2.textContent = char1_name.value;

  document.getElementById('char_info').appendChild(char1_info2); 
  char1_name.remove();
}



//일일 컨텐츠

var kaos_chk1 = document.getElementById('kaos_check_box1');
var kaos_chk2 = document.getElementById('kaos_check_box2');


var kaos_huge = Array.from(document.getElementsByClassName('kaos_huge'));

var kaos_huge_on = Array.from(document.getElementsByClassName("kaos_huge on"));

function kaos_checked(){
  마지막 순서의 휴게 게이지의 색을 투명으로 한다 체크 해제시 마지막 순서의 휴게 게이지의 색을 채워준다

}






  // kaos_huge.forEach(function(kaos_huge,index){
  //   if(kaos_huge.classList.contains('on')){
  //     kaos_huge.classList.remove('on');
  //     kaos_huge.classList.add('off');
  //   } else {
  //     kaos_huge.classList.remove('off');
  //     kaos_huge.classList.add('on');
  //   }
  // })


// kaos_huge.forEach(function(kaos_huge,index){

//   document.getElementById('kaos_check_box1').onclick = function(){


//     if(kaos_chk1.checked){
//       kaos_huge.style.backgroundColor = 'transparent'
//     } else{
//       kaos_huge.style.backgroundColor = 'green'
//     }
// }

// })



// kaos_huge.forEach(function(kaos_huge,index){

//   document.getElementById('kaos_check_box2').onclick = function(){

//     if(kaos_chk2.checked){
//       kaos_huge.style.backgroundColor = 'transparent'
//     } else{
//       kaos_huge.style.backgroundColor = 'green'
//     }
//     }

// })


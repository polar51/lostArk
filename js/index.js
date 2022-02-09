
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

var kaos_chk1 = document.getElementById('kaos_check_box1')
var kaos_chk2 = document.getElementById('kaos_check_box2')


var kaos_huge = document.getElementsByClassName('kaos_huge');

document.getElementById('kaos_check_box1').onclick = function(){


    if(kaos_chk1.checked){
      document.kaos_huge.style.backgroundColor = 'transparent'
    } else{
      document.kaos_huge.style.backgroundColor = 'green'
    }
}


document.getElementById('kaos_check_box2').onclick = function(){

  if(kaos_chk2.checked){
    document.kaos_huge.style.backgroundColor = 'transparent'
  } else{
    document.kaos_huge.style.backgroundColor = 'green'
  }
  }
  
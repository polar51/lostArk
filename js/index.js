var raid =
{oreha : Array.from(document.getElementsByClassName('oreha_con')),
oreha_hard : Array.from(document.getElementsByClassName('oreha_hard_con')),

argos : Array.from(document.getElementsByClassName('argos_con')),

baltan : Array.from(document.getElementsByClassName('baltan_con')),
baltan_hard : Array.from(document.getElementsByClassName('baltan_hard_con')),

biakiss : Array.from(document.getElementsByClassName('biakiss_con')),
biakiss_hard : Array.from(document.getElementsByClassName('biakiss_hard_con')),

koukusaton : Array.from(document.getElementsByClassName('koukusaton_con')),

abrelshud : Array.from(document.getElementsByClassName('abrelshud_con')),
abrelshud_hard : Array.from(document.getElementsByClassName('abrelshud_hard_con'))
}




// 캐릭터 인포




var char_info = document.querySelector('#char_info')

char_info.addEventListener("click",function(e){
  if(e.target.value=="캐릭터 정보 저장"){
    var level_arr = Array.from(e.currentTarget.getElementsByClassName("char_level"));
    var char_level_ipt = level_arr[level_arr.length-1];
    var char_level = char_level_ipt.value;
    var name_arr = Array.from(e.currentTarget.getElementsByClassName("char_name"));
    var char_name_ipt = name_arr[name_arr.length-1];
    var char_name = char_name_ipt.value;
    var form_arr = Array.from(e.currentTarget.getElementsByClassName("name_level"));
    var form = form_arr[form_arr.length-1]
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    form.remove();
    p.innerHTML=char_level;
    e.currentTarget.appendChild(p);
    p2.innerHTML=char_name;
    e.currentTarget.appendChild(p2);
    if(1414>char_level>=1325){
      raid['oreha'][form_arr.length-1].classList.add('show');
      raid['oreha_hard'][form_arr.length-1].classList.add('show');
    } else if(1475>char_level>=1370){
      raid['argos'][form_arr.length-1].classList.add('show');
    } else if(1444>char_level>=1415){
      raid['baltan'][form_arr.length-1].classList.add('show');
    } else if(char_level>=1445){
      raid['baltan_hard'][form_arr.length-1].classList.add('show');
    } else if(1459>char_level>=1430){
      raid['biakiss'][form_arr.length-1].classList.add('show');
    } else if(char_level>=1460){
      raid['biakiss_hard'][form_arr.length-1].classList.add('show');
    } else if(char_level>=1475){
      raid['koukusaton'][form_arr.length-1].classList.add('show');
    } else if(1539>char_level>=1490){
      raid['abrelshud'][form_arr.length-1].classList.add('show');
    } else if (char_level>=1540){
      raid['abrelshud_hard'][form_arr.length-1].classList.add('show');
    }
  }
});





//일일 컨텐츠 

var huge = {
  kaos_huge : Array.from(document.getElementsByClassName('kaos_huge on')),
  guardian_huge : Array.from(document.getElementsByClassName('guardian_huge on')),
  quest_huge : Array.from(document.getElementsByClassName('quest_huge on'))
};

var day_box = document.getElementById("day_box");

day_box.addEventListener("change",function(e){
    var fsel = e.target.value;
    var sel = e.target.parentNode.nextElementSibling;
    var sel_arr = Array.from(sel.getElementsByClassName("on"));
    var sel_arr_i = sel_arr[sel_arr.length-1];
  if(e.target.checked){
    sel_arr_i.classList.remove('on')
  } else {
    var sel_arr_i2= huge[fsel][sel_arr.length];
    sel_arr_i2.classList.add('on')
  }
});





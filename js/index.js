

//레이드 객체

// var raid =
// {
// }




// 캐릭터 인포




      //주간 컨텐츠
      // if(1370>char_level&&char_level>=1325){
      //   raid['oreha_hard'][form_arr.length-1].classList.add('show')
      // } else if(1415>char_level&&char_level>=1370){
      //   raid['oreha_hard'][form_arr.length-1].classList.add('show')
      //   raid['argos'][form_arr.length-1].classList.add('show')
      // } else if(1430>char_level&&char_level>=1415){
      //   raid['argos'][form_arr.length-1].classList.add('show')
      //   raid['baltan'][form_arr.length-1].classList.add('show')
      // } else if(1445>char_level&&char_level>=1430){
      //   raid['argos'][form_arr.length-1].classList.add('show')
      //   raid['baltan'][form_arr.length-1].classList.add('show')
      //   raid['biakiss'][form_arr.length-1].classList.add('show')
      // } else if(1460>char_level&&char_level>=1445){
      //   raid['argos'][form_arr.length-1].classList.add('show')
      //   raid['baltan_hard'][form_arr.length-1].classList.add('show')
      //   raid['biakiss'][form_arr.length-1].classList.add('show')
      // } else if(1475>char_level&&char_level>=1460){
      //   raid['argos'][form_arr.length-1].classList.add('show')
      //   raid['baltan_hard'][form_arr.length-1].classList.add('show')
      //   raid['biakiss_hard'][form_arr.length-1].classList.add('show')
      // } else if(1490>char_level&&char_level>=1475){
      //   raid['koukusaton'][form_arr.length-1].classList.add('show')
      //   raid['baltan_hard'][form_arr.length-1].classList.add('show')
      //   raid['biakiss_hard'][form_arr.length-1].classList.add('show')
      // } else if(1500>char_level&&char_level>=1490){
      //   raid['koukusaton'][form_arr.length-1].classList.add('show')
      //   raid['hard'][form_arr.length-1].classList.add('show')
      //   raid['abrelshud12'][form_arr.length-1].classList.add('show')
      // } else if(1520>char_level&&char_level>=1500){
      //   raid['koukusaton'][form_arr.length-1].classList.add('show')
      //   raid['hard'][form_arr.length-1].classList.add('show')
      //   raid['abrelshud14'][form_arr.length-1].classList.add('show')
      // } else if(1540>char_level&&char_level>=1520){
      //   raid['koukusaton'][form_arr.length-1].classList.add('show')
      //   raid['hard'][form_arr.length-1].classList.add('show')
      //   raid['abrelshud16'][form_arr.length-1].classList.add('show')
      // }else if(1540>char_level&&char_level>=1520){
      //   raid['koukusaton'][form_arr.length-1].classList.add('show')
      //   raid['hard'][form_arr.length-1].classList.add('show')
      //   raid['abrelshud16'][form_arr.length-1].classList.add('show')
      // }else if(1550>char_level&&char_level>=1540){
      //   raid['koukusaton'][form_arr.length-1].classList.add('show')
      //   raid['hard'][form_arr.length-1].classList.add('show')
      //   raid['abrelshud_hard12'][form_arr.length-1].classList.add('show')
      // }else if(1560>char_level&&char_level>=1550){
      //   raid['koukusaton'][form_arr.length-1].classList.add('show')
      //   raid['hard'][form_arr.length-1].classList.add('show')
      //   raid['abrelshud_hard14'][form_arr.length-1].classList.add('show')
      // } else{
      //   raid['koukusaton'][form_arr.length-1].classList.add('show')
      //   raid['hard'][form_arr.length-1].classList.add('show')
      //   raid['abrelshud_hard16'][form_arr.length-1].classList.add('show')
      // }






  // let oreha = Array.from(document.getElementsByClassName('oreha_con'))
  // let oreha_hard = Array.from(document.getElementsByClassName('oreha_hard_con'))
  
  // let argos = Array.from(document.getElementsByClassName('argos_con'))
  
  // let baltan = Array.from(document.getElementsByClassName('baltan_con'))
  // let baltan_hard = Array.from(document.getElementsByClassName('baltan_hard_con'))
  
  // let biakiss = Array.from(document.getElementsByClassName('biakiss_con'))
  // let biakiss_hard = Array.from(document.getElementsByClassName('biakiss_hard_con'))
  
  // let hard = Array.from(document.getElementsByClassName('hard_con'))
  
  // let koukusaton = Array.from(document.getElementsByClassName('koukusaton_con'))
  
  // let abrelshud12 = Array.from(document.getElementsByClassName('abrelshud_con12'))
  // let abrelshud_hard12 = Array.from(document.getElementsByClassName('abrelshud_hard_con12'))
  
  // let abrelshud14 = Array.from(document.getElementsByClassName('abrelshud_con14'))
  // let abrelshud_hard14 = Array.from(document.getElementsByClassName('abrelshud_hard_con14'))
  
  // let abrelshud16 = Array.from(document.getElementsByClassName('abrelshud_con16'))
  // let abrelshud_hard16 = Array.from(document.getElementsByClassName('abrelshud_hard_con16'))

var char_info = document.querySelectorAll(".char_info");

var day_con = document.querySelectorAll('.day_con');

var week_con = document.querySelectorAll('.week_con');

var kaosHuge = day_con[day_con.length-1].getElementsByClassName('kaos_huge on');
var guardianHuge = day_con[day_con.length-1].getElementsByClassName('guardian_huge on');
var questHuge = day_con[day_con.length-1].getElementsByClassName('quest_huge on');

var char = [
  {"level" : char_info[char_info.length-1],
  "day" : day_con[day_con.length-1],
  "week": week_con[week_con.length-1],
  "kaos_huge" :Array.from(kaosHuge),
  "guardian_huge" : Array.from(guardianHuge),
  "quest_huge": Array.from(questHuge)
  }];

//일일 컨텐츠 이벤트

  day_con[0].addEventListener("change",dayEvent)

  function dayEvent(e){
    var fsel = e.target.value;
    var sel = e.currentTarget;
    var sel_arr = Array.from(sel.getElementsByClassName(fsel+" on"));
    var sel_arr_i = sel_arr[sel_arr.length-1];
    var sel_arr_i2 = char[char.length-1][fsel][sel_arr.length];
    if(e.target.checked){
      sel_arr_i.classList.remove('on')
    } else {
      sel_arr_i2.classList.add('on')
    }
  }

  char_info[0].addEventListener("click",charEvent);


  function charEvent(e){
    var levelValue=charInfo()
  }
  
  
  //캐릭정보 이벤트
  
  
    function charInfo(e){
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
        return char_level;
      }
    };
    

//주간레이드
function weekRaid() {
  if(1325<=level<1415){

  }
}



//캐릭터 추가 버튼


var add_char = document.getElementById("add_char");

add_char.addEventListener("click",btnClick);


function btnClick(){
  char.push(addRow())

  char[char.length-1]['day'].addEventListener("change",dayEvent);
  char[char.length-1]['level'].addEventListener("click",charInfo);
}


function addRow(){
  var char_table=document.getElementById("char");
  var char_table_tbody = document.querySelector('tbody');
  const tableRow = char_table.insertRow();
  char_table_tbody.appendChild(tableRow)
  tableRow.innerHTML=`
            <td class="char_info">
              <form method="POST" action="index.js" name="name_level" class="name_level">
                <fieldset>
                  <legend>캐릭터정보</legend>
                  <input type="number" min="0" max="1700" class="char_level" name="char_level" value="" placeholder="레벨" autocomplete="off">
                  <br>
                  <input type="text" class="char_name" name="char_name" value="" placeholder="캐릭터명" autocomplete="off">
                  <input type="button" value="캐릭터 정보 저장" class="save_bt">
                </fieldset>
              </form>
            </td>
            <td class="day_con" class="day_box">
              <div class="kaos_con">
                <div class="kaos">
                  <p>카오스 던전</p>
                  <div id="kaos">
                    <form method="POST" action="index.js" class="kaos_form"> 
                      <input type="checkbox" class="kaos_check_box1" name="kaos_check_box1" value="kaos_huge">
                      <input type="checkbox" class="kaos_check_box2" name="kaos_check_box2" value="kaos_huge">
                    </form>
                    <div class="kaos_huge_box">
                      <span class="kaos_huge on"></span>
                      <span class="kaos_huge on"></span>
                      <span class="kaos_huge on"></span>
                      <span class="kaos_huge on"></span>
                      <span class="kaos_huge"></span>
                    </div>
                </div>
              </div>
  
                <div class="guardian_con">
                  <div class="guardian">
                    <p>가디언 토벌</p>
                    <div id="guardian">
                      <form method="POST" action="index.js" id="guardian_form"> 
                        <input type="checkbox" class="guardian_check_box" name="guardian_check_box1" value="guardian_huge">
                        <input type="checkbox" class="guardian_check_box" name="guardian_check_box2" value="guardian_huge">
                      </form>
                      <div class="guardian_huge_box">
                        <span class="guardian_huge on"></span>
                        <span class="guardian_huge on"></span>
                        <span class="guardian_huge on"></span>
                        <span class="guardian_huge"></span>
                        <span class="guardian_huge"></span>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="quest_con">
                  <div class="quest">
                    <p>에포나 퀘스트</p>
                    <div class="quest">
                      <form method="POST" action="index.js" class="quest_form"> 
                        <input type="checkbox" class="quest_check_box" name="quest_check_box1" value="quest_huge">
                        <input type="checkbox" class="quest_check_box" name="quest_check_box2" value="quest_huge">
                        <input type="checkbox" class="quest_check_box" name="quest_check_box3" value="quest_huge">
                      </form>
                      <div class="guest_huge_box">
                        <span class="quest_huge on"></span>
                        <span class="quest_huge on"></span>
                        <span class="quest_huge on"></span>
                        <span class="quest_huge"></span>
                        <span class="quest_huge"></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              
              
            </td>
            <td class="week_con" >
              <span class="char_week">
                <div class="check_box">

                  <div class="oreha_hard_con">
                    <p>오레하의 우물(하드)</p>
                    <form action="index.js" method="post" id="oreha_hard_form">
                      <input type="checkbox" id="oreha_hard_check_box" name="oreha_hard_check_box" value="1300">
                    </form>
                  </div>

                  <div class="argos_con">
                    <p>아르고스</p>
                    <form action="index.js" method="post" id="argos_form">
                      <input type="checkbox" id="argos_check_box" name="argos_check_box" value="1600">
                    </form>
                  </div>

                  <div class="baltan_con">
                    <p>발탄</p>
                    <form action="index.js" method="post" id="baltan_form">
                      <input type="checkbox" id="baltan_check_box" name="baltan_check_box" value="2500">
                    </form>
                  </div>

                  <div class="baltan_hard_con">
                    <p>발탄(하드)</p>
                    <form action="index.js" method="post" id="baltan_hard_form">
                      <input type="checkbox" id="baltan_hard_check_box" name="baltan_hard_check_box" value="4500">
                    </form>
                  </div>

                  <div class="biakiss_con">
                    <p>비아키스</p>
                    <form action="index.js" method="post" id="biakiss_form">
                      <input type="checkbox" id="biakiss_check" name="biakiss_check" value="2500">
                    </form>
                  </div>

                  <div class="biakiss_hard_con">
                    <p>비아키스(하드)</p>
                    <form action="index.js" method="post" id="biakiss_hard_form">
                      <input type="checkbox" id="biakiss_hard_check" name="biakiss_hard_check" value="4500">
                    </form>
                  </div>

                  <div class="hard_con">
                    <p>비아키스(하드) 또는 발탄(하드)</p>
                    <form action="index.js" method="post" id="hard_form">
                      <input type="checkbox" id="hard_check" name="hard_check" value="4500">
                    </form>
                  </div>

                  <div class="koukusaton_con">
                    <p>쿠쿠세이튼</p>
                    <form action="index.js" method="post" id="koukusaton_form">
                      <input type="checkbox" id="koukusaton_check" name="koukusaton_check" value="4500">
                    </form>
                  </div>

                  <div class="abrelshud_con12">
                    <p>아브렐슈드1~2관</p>
                    <form action="index.js" method="post" id="abrelshud_form">
                      <input type="checkbox" id="abrelshud_check" name="abrelshud_check" value="4500">
                    </form>
                  </div>

                  <div class="abrelshud_con14">
                    <p>아브렐슈드1~4관</p>
                    <form action="index.js" method="post" id="abrelshud_form">
                      <input type="checkbox" id="abrelshud_check" name="abrelshud_check" value="6000">
                    </form>
                  </div>

                  <div class="abrelshud_con16">
                    <p>아브렐슈드1~6관</p>
                    <form action="index.js" method="post" id="abrelshud_form">
                      <input type="checkbox" id="abrelshud_check" name="abrelshud_check" value="8500">
                    </form>
                  </div>

                  <div class="abrelshud_hard_con12">
                    <p>아브렐슈드(하드)1~2관</p>
                    <form action="index.js" method="post" id="abrelshud_hard_form">
                      <input type="checkbox" id="abrelshud_hard_check" name="abrelshud_hard_check" value="5500">
                    </form>
                  </div>

                  <div class="abrelshud_hard_con14">
                    <p>아브렐슈드(하드)1~4관</p>
                    <form action="index.js" method="post" id="abrelshud_hard_form">
                      <input type="checkbox" id="abrelshud_hard_check" name="abrelshud_hard_check" value="7500">
                    </form>
                  </div>

                  <div class="abrelshud_hard_con16">
                    <p>아브렐슈드(하드)1~6관</p>
                    <form action="index.js" method="post" id="abrelshud_hard_form">
                      <input type="checkbox" id="abrelshud_hard_check" name="abrelshud_hard_check" value="10500">
                    </form>
                  </div>

                </div>
              </span>
            </td>
  `;
  var char_info = document.querySelectorAll(".char_info");

  var day_con = document.querySelectorAll('.day_con');

  var week_con = document.querySelectorAll('.week_con');

  var kaosHuge = day_con[day_con.length-1].getElementsByClassName('kaos_huge on');
  var guardianHuge = day_con[day_con.length-1].getElementsByClassName('guardian_huge on');
  var questHuge = day_con[day_con.length-1].getElementsByClassName('quest_huge on');
  return {
    "level" : char_info[char_info.length-1],
    "day" : day_con[day_con.length-1],
    "week": week_con[week_con.length-1],
    "kaos_huge" :Array.from(kaosHuge),
    "guardian_huge" : Array.from(guardianHuge),
    "quest_huge": Array.from(questHuge),
  }
}

char[char.length-1]['week'].getElementsByClassName('oreha_hard_con')[1]
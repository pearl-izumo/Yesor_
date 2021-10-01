"use strict";

{ 
  let table = document.getElementById("ansTable");
  let now_open = -1;
  let qcount = 0;
  let ans = Math.floor(Math.random()*135)+1; //attention
  let hard = -1;
  let lie = Math.floor(Math.random()*10)+1;
  let guess_ans = 0;
  let flag_num = 3;

  const for_dsp = document.getElementById("for_dsp");
  const exp1_1 = document.getElementById("exp1_1");
  const exp1_2 = document.getElementById("exp1_2");
  const ask = document.getElementById("ask");
  const back = document.getElementById("back");
  const back2 = document.getElementById("back2");
  const back3 = document.getElementById("back3");
  const btn_year = document.getElementById("btn_year");
  const btn_month = document.getElementById("btn_month");
  const btn_title = document.getElementById("btn_title");
  const btn_track = document.getElementById("btn_track");
  const btn_first = document.getElementById("btn_first");
  const btn_etc = document.getElementById("btn_etc");
  const musiclist = document.getElementById("musiclist");
  const titleview = document.getElementById("titleview");
  const scroll = document.getElementById("scroll");
  const flags = document.getElementById("flags");
  
  const YandN = ["YES","NO"];
  const CD = [1,2,5,8,5,6,4];
  const CD2 = [6,14,25,27,22,25,16];
  const CD3 = [[6],[7,7],[2,6,2,13,2],[2,6,2,3,6,6,1,1],[6,1,1,6,8],[1,7,1,13,2,1],[2,6,7,1]];

  const Title = [["THE STORY BEGINS"],["PAGE TWO","TWICEcoaster:LANE1"],["TWICEcoaster:LANE2","SIGNAL","One More Time","twicetagram","Merry & Happy"],["Candy Pop","What is Love?","Wake Me Up","Summer Nights","BDZ","YES or YES",'The year of "Yes"',"BDZ-Repackage-"],["FANCY YOU","HAPPY HAPPY","Breakthrough","Feel Special","&TWICE"],["&TWICE-Repackage-","MORE & MORE","Fanfare","Eyes wide open","BETTER","CRY FOR ME"],["Kura Kura","Taste of Love","Perfect World", "The Feels"]];

  const DATA = [['id', 'title', 'year', 'country', 'member', 'start', 'word', 'length', 'lead', 'month', 'track', 'album', 'half'],[1, 'Like OOH-AHH', 2015, 1, 0, 1, 2, 10, 1, 10, 1, 1, 0], [2, 'Do it again', 2015, 1, 0, 5, 3, 9, 0, 10, 2, 1, 0], [3, 'Going Crazy', 2015, 1, 0, 4, 2, 10, 0, 10, 3, 1, 0], [4, 'Truth', 2015, 1, 0, 3, 1, 5, 0, 10, 4, 1, 1], [5, 'Candy Boy', 2015, 1, 0, 6, 2, 8, 0, 10, 5, 1, 1], [6, 'Like a Fool', 2015, 1, 0, 6, 3, 9, 0, 10, 6, 1, 1], [7, 'CHEER UP', 2016, 1, 0, 1, 2, 7, 1, 4, 1, 1, 0], [8, 'Precious Love', 2016, 1, 1, 8, 2, 12, 0, 4, 2, 1, 0], [9, 'Touchdown', 2016, 1, 0, 10, 1, 9, 0, 4, 3, 1, 0], [10, 'Tuk Tok', 2016, 1, 0, 10, 2, 6, 0, 4, 4, 1, 0], [11, 'Woohoo', 2016, 1, 0, 4, 1, 6, 0, 4, 5, 1, 1], [12, 'My Headphones on', 2016, 1, 0, 10, 3, 14, 0, 4, 6, 1, 1], [13, "I'm gonna be a star", 2016, 1, 0, 1, 5, 14, 0, 4, 7, 1, 1], [14, 'TT', 2016, 1, 0, 1, 1, 2, 1, 10, 1, 1, 0], [15, '1 to 10', 2016, 1, 0, 5, 3, 5, 0, 10, 2, 1, 0], [16, 'Ponytail', 2016, 1, 0, 9, 1, 8, 0, 10, 3, 1, 0], [17, 'Jelly Jelly', 2016, 1, 0, 1, 2, 10, 0, 10, 4, 1, 0], [18, 'Pit-a-Pat', 2016, 1, 0, 4, 1, 7, 0, 10, 5, 1, 1], [19, 'Next Page', 2016, 1, 0, 8, 2, 8, 0, 10, 6, 1, 1], [20, 'One in a Million', 2016, 1, 0, 8, 4, 13, 0, 10, 7, 1, 1], [21, 'KNOCK KNOCK', 2017, 1, 0, 1, 2, 10, 1, 2, 1, 5, 0], [22, 'Ice Cream', 2017, 1, 0, 6, 2, 8, 0, 2, 2, 5, 0], [23, 'SIGNAL', 2017, 1, 0, 7, 1, 6, 1, 5, 1, 1, 0], [24, 'THREE TIMES A DAY', 2017, 1, 0, 1, 4, 14, 0, 5, 2, 1, 0], [25, 'ONLY YOU', 2017, 1, 0, 10, 2, 7, 0, 5, 3, 1, 0], [26, 'HOLD ME TIGHT', 2017, 1, 0, 4, 3, 11, 0, 5, 4, 1, 1], [27, 'EYE EYE EYES', 2017, 1, 1, 10, 3, 10, 0, 5, 5, 1, 1], [28, 'SOMEONE LIKE ME', 2017, 1, 0, 6, 3, 13, 0, 5, 6, 1, 1], [29, 'One More Time', 2017, 0, 0, 1, 3, 11, 1, 10, 1, 3, 0], [30, 'LUV ME', 2017, 0, 0, 4, 2, 5, 0, 10, 2, 3, 0], [31, 'Likey', 2017, 1, 0, 4, 1, 5, 1, 10, 1, 2, 0], [32, 'Turtle', 2017, 1, 0, 9, 1, 6, 0, 10, 2, 2, 0], [33, 'Missing U', 2017, 1, 1, 4, 2, 8, 0, 10, 3, 2, 0], [34, 'Wow', 2017, 1, 0, 10, 1, 3, 0, 10, 4, 2, 0], [35, 'FFW', 2017, 1, 0, 10, 1, 3, 0, 10, 5, 2, 0], [36, 'Ding Dong', 2017, 1, 0, 8, 2, 8, 0, 10, 6, 2, 0], [37, '24/7', 2017, 1, 1, 6, 1, 3, 0, 10, 7, 2, 0], [38, 'Look at me', 2017, 1, 0, 10, 3, 8, 0, 10, 8, 2, 1], [39, "ROLLIN'", 2017, 1, 0, 2, 1, 6, 0, 10, 9, 2, 1], [40, 'LOVE LINE', 2017, 1, 1, 6, 2, 8, 0, 10, 10, 2, 1], [41, "Don't give up", 2017, 1, 1, 3, 3, 10, 0, 10, 11, 2, 1], [42, 'You in my heart', 2017, 1, 0, 1, 4, 12, 0, 10, 12, 2, 1], [43, 'Jaljayo Good Night', 2017, 1, 0, 8, 3, 16, 0, 10, 13, 2, 1], [44, 'Heart Shaker', 2017, 1, 0, 10, 2, 11, 1, 12, 1, 5, 0], [45, 'Merry & Happy', 2017, 1, 0, 9, 3, 10, 0, 12, 2, 5, 0], [46, 'Candy Pop', 2018, 0, 0, 8, 2, 8, 1, 2, 1, 3, 0], [47, 'BRAND NEW GIRL', 2018, 0, 0, 9, 3, 12, 0, 2, 2, 3, 0], [48, 'What is Love?', 2018, 1, 0, 1, 3, 10, 1, 4, 1, 1, 0], [49, 'SWEET TALKER', 2018, 1, 1, 4, 2, 11, 0, 4, 2, 1, 0], [50, 'HO!', 2018, 1, 1, 8, 1, 2, 0, 4, 3, 1, 0], [51, 'DEJAVU', 2018, 1, 0, 7, 1, 6, 0, 4, 4, 1, 1], [52, 'Say Yes', 2018, 1, 0, 1, 2, 6, 0, 4, 5, 1, 1], [53, 'STUCK', 2018, 1, 0, 10, 1, 5, 0, 4, 6, 1, 1], [54, 'Wake Me Up', 2018, 0, 0, 10, 3, 8, 1, 5, 1, 3, 0], [55, 'Pink Lemonade', 2018, 0, 0, 6, 2, 12, 0, 5, 2, 3, 0], [56, 'Dance the Night Away', 2018, 1, 0, 10, 4, 17, 1, 7, 1, 5, 0], [57, 'CHILLAX', 2018, 1, 0, 1, 1, 7, 0, 7, 2, 5, 0], [58, 'Shot Thru the Heart', 2018, 1, 1, 6, 4, 16, 0, 7, 3, 5, 0], [59, 'BDZ', 2018, 0, 0, 9, 1, 3, 1, 9, 1, 4, 0], [60, 'L.O.V.E', 2018, 0, 0, 8, 1, 4, 0, 9, 4, 4, 0], [61, 'Wishing', 2018, 0, 0, 9, 1, 7, 0, 9, 5, 4, 0], [62, 'Say it again', 2018, 0, 0, 1, 3, 10, 0, 9, 6, 4, 1], [63, 'Be as ONE', 2018, 0, 0, 4, 3, 7, 0, 9, 9, 4, 1], [64, 'I WANT YOU BACK', 2018, 0, 0, 10, 4, 12, 0, 9, 10, 4, 1], [65, 'YES or YES', 2018, 1, 0, 6, 3, 8, 1, 11, 1, 1, 0], [66, 'SAY YOU LOVE ME', 2018, 1, 0, 4, 4, 12, 0, 11, 2, 1, 0], [67, 'LALALA', 2018, 1, 1, 6, 1, 6, 0, 11, 3, 1, 0], [68, 'YOUNG & WILD', 2018, 1, 1, 6, 3, 9, 0, 11, 4, 1, 0], [69, 'SUNSET', 2018, 1, 1, 5, 1, 6, 0, 11, 5, 1, 1], [70, 'AFTER MOON', 2018, 1, 0, 4, 2, 10, 0, 11, 6, 1, 1], [71, 'The Best Thing I Ever Did', 2018, 1, 0, 1, 6, 20, 1, 12, 1, 5, 0], [72, 'STAY BY MY SIDE', 2018, 0, 0, 3, 4, 12, 0, 12, 1, 5, 0], [73, 'FANCY', 2019, 1, 0, 1, 1, 5, 1, 4, 1, 1, 0], [74, 'STUCK IN MY HEAD', 2019, 1, 0, 1, 4, 13, 0, 4, 2, 1, 0], [75, 'GIRLS LIKE US', 2019, 1, 1, 1, 3, 11, 0, 4, 3, 1, 0], [76, 'HOT', 2019, 1, 1, 6, 1, 3, 0, 4, 4, 1, 1], [77, 'TURN IT UP', 2019, 1, 1, 4, 3, 8, 0, 4, 5, 1, 1], [78, 'STRAWBERRY', 2019, 1, 1, 5, 1, 10, 0, 4, 6, 1, 1], [79, 'HAPPY HAPPY', 2019, 0, 0, 10, 2, 10, 1, 7, 1, 3, 0], [80, 'Breakthrough', 2019, 0, 0, 2, 1, 12, 1, 7, 1, 3, 0], [81, 'Feel Special', 2019, 1, 0, 8, 2, 11, 1, 9, 1, 1, 0], [82, 'RAINBOW', 2019, 1, 1, 8, 1, 7, 0, 9, 2, 1, 0], [83, 'GET LOUD', 2019, 1, 1, 10, 2, 7, 0, 9, 3, 1, 0], [84, 'TRICK IT', 2019, 1, 1, 9, 2, 7, 0, 9, 4, 1, 0], [85, 'LOVE FOOLISH', 2019, 1, 1, 1, 2, 11, 0, 9, 5, 1, 1], [86, '21:29', 2019, 1, 1, 10, 1, 4, 0, 9, 6, 1, 1], [87, 'Fake & True', 2019, 0, 0, 4, 3, 8, 1, 11, 1, 4, 0], [88, 'Stronger', 2019, 0, 0, 3, 1, 8, 0, 11, 2, 4, 0], [89, 'Changing!', 2019, 0, 0, 9, 1, 8, 0, 11, 4, 4, 0], [90, 'What You Waiting For', 2019, 0, 0, 1, 4, 17, 0, 11, 6, 4, 1], [91, 'Be OK', 2019, 0, 0, 9, 2, 4, 0, 11, 7, 4, 1], [92, 'Polish', 2019, 0, 0, 4, 1, 6, 0, 11, 8, 4, 1], [93, "How U Doin'", 2019, 0, 1, 6, 3, 8, 0, 11, 9, 4, 1], [94, 'The Reason Why', 2019, 0, 0, 1, 3, 12, 0, 11, 10, 4, 1], [95, 'SWING', 2020, 0, 0, 6, 1, 5, 0, 2, 1, 5, 0], [96, 'MORE & MORE', 2020, 1, 0, 1, 3, 8, 1, 6, 1, 1, 0], [97, 'OXYGEN', 2020, 1, 0, 6, 1, 6, 0, 6, 2, 1, 0], [98, 'FIREWORK', 2020, 1, 0, 8, 1, 8, 0, 6, 3, 1, 0], [99, 'MAKE ME GO', 2020, 1, 1, 1, 3, 8, 0, 6, 4, 1, 0], [100, 'SHADOW', 2020, 1, 0, 1, 1, 6, 0, 6, 5, 1, 1], [101, "DON'T CALL ME AGAIN", 2020, 1, 0, 9, 4, 15, 0, 6, 6, 1, 1], [102, 'SWEET SUMMER DAY', 2020, 1, 1, 8, 3, 14, 0, 6, 7, 1, 1], [103, 'Fanfare', 2020, 0, 0, 8, 1, 7, 1, 7, 1, 3, 0], [104, "I CAN'T STOP ME", 2020, 1, 0, 1, 4, 11, 1, 10, 1, 2, 0], [105, 'HELL IN HEAVEN', 2020, 1, 0, 1, 3, 12, 0, 10, 2, 2, 0], [106, 'UP NO MORE', 2020, 1, 1, 8, 3, 8, 0, 10, 3, 2, 0], [107, 'DO WHAT WE LIKE', 2020, 1, 1, 6, 4, 12, 0, 10, 4, 2, 0], [108, 'BRING IT BACK', 2020, 1, 1, 1, 3, 11, 0, 10, 5, 2, 0], [109, 'BELIEVER', 2020, 1, 0, 7, 1, 8, 0, 10, 6, 2, 0], [110, 'QUEEN', 2020, 1, 1, 6, 1, 5, 0, 10, 7, 2, 0], [111, 'GO HARD', 2020, 1, 0, 2, 2, 6, 0, 10, 8, 2, 1], [112, 'SHOT CLOCK', 2020, 1, 0, 5, 2, 9, 0, 10, 9, 2, 1], [113, 'HANDLE IT', 2020, 1, 1, 6, 2, 8, 0, 10, 10, 2, 1], [114, 'DEPEND ON YOU', 2020, 1, 1, 6, 3, 11, 0, 10, 11, 2, 1], [115, 'SAY SOMETHING', 2020, 1, 0, 6, 2, 12, 0, 10, 12, 2, 1], [116, 'BEHIND THE MASK', 2020, 1, 0, 5, 3, 13, 0, 10, 13, 2, 1], [117, 'BETTER', 2020, 0, 0, 1, 1, 6, 1, 11, 1, 3, 0], [118, 'Scorpion', 2020, 0, 0, 8, 1, 8, 0, 11, 2, 3, 0], [119, 'CRY FOR ME', 2020, 1, 0, 1, 3, 8, 0, 12, 1, 5, 0], [120, 'Kura Kura', 2021, 0, 0, 6, 2, 8, 1, 5, 1, 3, 0], [121, 'Strawberry Moon', 2021, 0, 0, 5, 2, 14, 0, 5, 2, 3, 0], [122, 'Alcohol-Free', 2021, 1, 0, 1, 1, 11, 1, 6, 1, 1, 0], [123, 'First Time', 2021, 1, 1, 6, 2, 9, 0, 6, 2, 1, 0], [124, 'Scandal', 2021, 1, 1, 8, 1, 7, 0, 6, 3, 1, 0], [125, 'Conversation', 2021, 1, 1, 6, 1, 12, 0, 6, 4, 1, 0], [126, 'Baby Blue Love', 2021, 1, 1, 8, 3, 12, 0, 6, 5, 1, 1], [127, 'SOS', 2021, 1, 1, 6, 1, 3, 0, 6, 6, 1, 1], [128, 'Perfect World', 2021, 0, 0, 2, 2, 12, 1, 7, 1, 4, 0], [129, 'Good at Love', 2021, 0, 0, 5, 3, 10, 0, 7, 3, 4, 0], [130, 'Four-leaf Clover', 2021, 0, 0, 7, 2, 14, 0, 7, 6, 4, 1], [131, 'In the summer', 2021, 0, 0, 4, 3, 11, 0, 7, 7, 4, 1], [132, 'PIECES OF LOVE', 2021, 0, 0, 6, 3, 12, 0, 7, 8, 4, 1], [133, 'Thank you, Family', 2021, 0, 0, 4, 3, 14, 0, 7, 9, 4, 1], [134, 'PROMISE', 2021, 0, 0, 7, 1, 7, 0, 7, 10, 4, 1],[135, 'The Feels', 2021, 0, 0, 8, 2, 8, 0, 10, 1, 5, 0]];

  document.getElementById("normal_mode").addEventListener("click", function(){
    hard = 0;
    starting();
  });
  document.getElementById("hard_mode").addEventListener("click", function(){
    hard = 1;
    starting();
  });
  function starting(){
    document.getElementById("start").animate([{opacity: '1'}, {opacity: '0'}],1500);
    window.setTimeout(function(){
      document.getElementById("start").style.display = "none";
      document.getElementById("question").style.display = "block";
      table.style.opacity = 1;
      document.getElementById("musicdice").style.display = "flex";
    },1450);
  };

  document.getElementById("title").addEventListener("click", function(){
    document.getElementById("rule").style.display = "block";
    var status = document.getElementById("status")
    if(hard==-1){
      status.textContent = "Status: Mode Selection";
    }else if(hard==0){
      status.textContent = "Status: Normal (Question: "+qcount+"/10)";
    }else{
      status.textContent = "Status: Hard (Question: "+qcount+"/10)";
    };
  });
  document.getElementById("closer").addEventListener("click", function(){
    document.getElementById("rule").style.display = "none";
  });

  for(let i=2015; i<2022; i++){
    document.getElementById("y"+i).addEventListener("click",function(){
      titleview.style.display = "block";
      document.getElementById("exp2_1").textContent = "Music List "+i;
      document.getElementById("exp2_2").textContent = "["+CD2[i-2015]+" songs]";
      if(qcount==10 && hard==1){
        for(let f=0; f<flag_num; f++){
          var img = document.createElement("img");
          img.src = "img/flag.png";
          img.classList.add("flagsize");
          flags.appendChild(img);};
      };

      for(let j=1; j<CD[i-2015]+1; j++){
        create_page(i,j);
        document.getElementById("title_frame"+j).style.display = "none";
        document.getElementById("CDtitle"+j).addEventListener("click",function(){
          if(document.getElementById("title_frame"+j).style.display=="none"){
            document.getElementById("title_frame"+j).style.display = "block";
          }else{
            document.getElementById("title_frame"+j).style.display = "none";
          };
        });
        if(qcount==10){
          var checkgroup = document.getElementsByName("group"+j);
          checkgroup.forEach(function(e){
            e.addEventListener("click", function(){
              let elements = document.getElementsByName("group"+j);
              let len = elements.length;
              for(let k=0; k<len; k++){
                if(elements.item(k).checked){
                  document.getElementById("CDtitle"+j).textContent = elements.item(k).nextSibling.textContent;
                  guess_ans = +elements.item(k).value.substr(1,elements.item(k).value.length-1);
                };
              };
              document.getElementById("CDtitle"+j).style.backgroundImage = "none";
              document.getElementById("title_frame"+j).style.display = "none";
              document.getElementById("finalbtn"+j).style.opacity = 1;
            });
          });
        };
      };
    });
  };

  function create_page(num,num2){
    var li = document.createElement("li");
    var img = document.createElement("img");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var a_btn = document.createElement("a");
    var span_btn = document.createElement("span");

    li.classList.add("page");
    li.setAttribute("id","page"+num2);

    if(num==2015){li.classList.add("only");};
    img.classList.add("jacket");
    img.src = "img/"+num+"_"+num2+".png";
    div1.classList.add("CDtitle");
    div1.setAttribute("id","CDtitle"+num2);
    div1.textContent = "\u00a0"+Title[num-2015][num2-1];
    div2.classList.add("title_frame");
    div2.setAttribute("id","title_frame"+num2);
    a_btn.classList.add("final_btn");
    span_btn.textContent = "Guess ☞";

    a_btn.appendChild(span_btn);
    a_btn.setAttribute("id","finalbtn"+num2);
    a_btn.addEventListener("click", function(){
      if(document.getElementById("finalbtn"+num2).style.opacity==1){
        Guess(num2);
      };
    });

    create_radio2(div2,num,num2);

    li.appendChild(img);
    li.appendChild(div1);
    li.appendChild(div2);
    li.appendChild(a_btn);

    scroll.appendChild(li);
  };
  
  function create_radio(values,num){
    const rd1 = document.getElementById("rd1");
    const rd2 = document.getElementById("rd2");
    const rd3 = document.getElementById("rd3");
    const rd4 = document.getElementById("rd4");
    function creator(rd){
      var radio = document.createElement("input");
      var label = document.createElement("label");
      var br = document.createElement('br');
      var id = "radio" + i;
      var name = "group";
      var value = "q" + i;
      radio.setAttribute("type", "radio");
      radio.setAttribute("value", value);
      radio.setAttribute("id", id);
      radio.setAttribute("name", name);
      label.setAttribute("for", id);
      label.innerHTML = values[i];
      
      if(value == "q0"){radio.checked = true;}
      rd.appendChild(br);
      rd.appendChild(radio);
      rd.appendChild(label);
    };
    for(var i=0; i < Math.min(values.length,num); i++){creator(rd1)};
    if(values.length>num){
      if(values.length>num*2){
        for(var i=num; i < num*2; i++){creator(rd3)};
        for(var i=num*2; i < values.length; i++){creator(rd4)};
      }else{
        for(var i=num; i < values.length; i++){creator(rd2)};
      };
    };
  };

  function create_radio2(d,num,num2){
    var div3 = document.createElement("div");
    var sum = 0;
    div3.classList.add("scroll2");
    div3.setAttribute("id","sc"+num2);

    for(let j=0; j<num-2015; j++){sum+=CD2[j]};
    for(let j=0; j<num2-1; j++){sum+=CD3[num-2015][j]};

    for(let i=1; i<CD3[num-2015][num2-1]+1; i++){
      var label = document.createElement("label");
      var radio = document.createElement("input");
      var br = document.createElement("br");
      var x = sum+i;

      radio.setAttribute("type","radio");
      radio.setAttribute("value","a"+x);
      radio.setAttribute("id","a"+x);
      radio.setAttribute("name","group"+num2);
      radio.classList.add("cd");
      label.setAttribute("for","a"+x)
      label.classList.add("tracks");
      label.innerHTML = "\u00a0\u00a0"+DATA[x][1];
      br.classList.add("cdbr");

      div3.appendChild(radio);
      div3.appendChild(label);
      div3.appendChild(br);
    };
    d.appendChild(div3);
  };
  function Guess(n){
    if(guess_ans==ans){
      resultMaker(0);
    }else if(hard==1 && flag_num!=1){
      flag_num -= 1;
      flags.removeChild(flags.lastChild);
      document.getElementById("finalbtn"+n).style.opacity = 0.3;
      coinmaker(1);
    }else{
      resultMaker(1);
    };
  };
  function resultMaker(R){
    if(R==0){document.getElementById("result_word").textContent = "CLEAR";
    }else{
      document.getElementById("result_word").textContent = "Failed...";
      document.getElementById("result_word").style.color = "darkblue";
      document.getElementById("tweet").style.opacity = 0.3;
    };

    FindArtwork()
    document.getElementById("ans_title").textContent = "♬ "+DATA[ans][1];

    document.getElementById("retry").addEventListener("click",function(){
      location.reload();
    });
    document.getElementById("tweet").addEventListener("click", function(){
      if(R==0){
        var dataText = '【Yes or...?】';
        if(hard==0){dataText+='Normal';
        }else{dataText+='Hard';};
        dataText+='モードで "'+DATA[ans][1]+'" を言い当てた！'
        window.open("https://twitter.com/share?text="+dataText+"&hashtags=yesor_"+"&url=https://pearl-izumo.github.io/Yesor_"); //リンク変更
      };
    });

    musiclist.style.display = "none";
    document.getElementById("question").style.display = "none";
    table.style.display = "none";
    document.getElementById("musicdice").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").animate([{opacity: '0'}, {opacity: '1'}],2000);
  };
  function FindArtwork(){
    var C = 0;
    for(let i=0; i<ans+1; i++){
      if(DATA[ans-i][2]!=DATA[ans][2]){break;
      }else if(DATA[ans-i][10]==1){C+=1;};
    };
    document.getElementById("ans_img").src = "img/"+DATA[ans][2]+"_"+C+".png";
  };

  btn_year.addEventListener("click", function(){
    var values = ["2015年？","2016年？","2017年？","2018年？","2019年？","2020年？","2021年？","2016年以前？","2017年以前？","2018年以前？","2019年以前？","2020年以前？"];
    for_dsp.style.display = "block";
    exp1_1.innerText = "Year : ";
    exp1_2.innerText = "楽曲がリリースされた年は......";
    create_radio(values,4);
    now_open = 0;
  });
  btn_month.addEventListener("click", function(){
    var values = [" 1月または2月？"," 3月または4月？"," 5月または6月？"," 7月または8月？"," 9月または10月？"," 11月または12月？","上半期？","奇数月？"];
    for_dsp.style.display = "block";
    exp1_1.innerText = "Month : ";
    exp1_2.innerText = "楽曲がリリースされた月は......";
    create_radio(values,4);
    now_open = 1;
  });
  btn_title.addEventListener("click", function(){
    var values = [" 5文字以下？"," 6〜8文字？"," 9〜12文字？"," 13文字以上？"," 1単語？"," 2単語？"," 3単語？"," 4単語以上？"];
    for_dsp.style.display = "block";
    exp1_1.innerText = "Title : ";
    exp1_2.innerText = "楽曲のタイトルは......";
    create_radio(values,4);
    now_open = 2;
  });
  btn_track.addEventListener("click", function(){
    var values = ["韓国のミニアルバム？","韓国のフルアルバム？","日本のシングル？","日本のアルバム？","その他リパケ系？","CDの奇数曲目？","CDの前半？"];
    for_dsp.style.display = "block";
    exp1_1.innerText = "Track : ";
    exp1_2.innerText = "楽曲が収録されているのは......";
    create_radio(values,4);
    now_open = 3;
  });
  btn_first.addEventListener("click", function(){
    var values = ["ナヨン？","ジョンヨン？","モモ？","サナ？","ジヒョ？","ミナ？","ダヒョン？","チェヨン？","ツウィ？","コーラス？"];
    for_dsp.style.display = "block";
    exp1_1.innerText = "First : ";
    exp1_2.innerText = "楽曲の歌い出しは......";
    create_radio(values,4);
    now_open = 4;
  });
  btn_etc.addEventListener("click", function(){
    var values = ["日本でリリースされた？","CDの表題曲になっている？","メンバーが作詞作曲に参加している？"];
    for_dsp.style.display = "block";
    exp1_1.innerText = "Etc. : ";
    exp1_2.innerText = "楽曲の特徴は......";
    create_radio(values,3);
    now_open = 5;
  });


  back.addEventListener("click", function(){
    for_dsp.style.display = "none";
    deleteNode();
  });
  back2.addEventListener("click", function(){
    musiclist.classList.remove("slideopen");
  });
  back3.addEventListener("click", function(){
    titleview.style.display = "none";
    if(scroll.hasChildNodes()){
      while(scroll.childNodes.length>0){
        scroll.removeChild(scroll.lastChild);
      };
    };
    if(flags.hasChildNodes()){
      while(flags.childNodes.length>0){
        flags.removeChild(flags.lastChild);
      };
    }
  });

  ask.addEventListener("click", function(){
    qcount+=1
    addrow(createQandA());
    
    for_dsp.style.display = "none";
    deleteNode();
    if(qcount==10){
      musiclist.classList.add("slideopen");
      back2.style.display = "none";
      document.getElementById("back_h1").style.display = "none";
    };
  });
  function createQandA(){
    var QandA = ["",""];
    let elements = document.getElementsByName("group");
    let len = elements.length;
    let checkvalue = -1;
    let checktext = "";

    for(let i=0; i<len; i++){
      if(elements.item(i).checked){
        checkvalue = +elements.item(i).value.substr(1,elements.item(i).value.length-1);
        checktext = elements.item(i).nextSibling.innerHTML;
      };
    };

    if(now_open==0){
      QandA[0] = "\u00a0"+"リリースされた年は "+checktext;
      let Qyear = checktext.substr(0,4);
      if(checkvalue<7){
        if(Qyear==DATA[ans][2]){QandA[1]=0;
        }else{QandA[1]=1;};
      }else{
        if(Qyear>=DATA[ans][2]){QandA[1]=0;
        }else{QandA[1]=1;};
      };

    }else if(now_open==1){
      QandA[0] = "\u00a0"+"リリースされた月は"+checktext;
      if(checkvalue<6){
        if(checkvalue*2+1==DATA[ans][9] || checkvalue*2+2==DATA[ans][9]){QandA[1]=0;
        }else{QandA[1]=1;};
      }else if(checkvalue==6){
        if(DATA[ans][9]<7){QandA[1]=0;
        }else{QandA[1]=1;};
      }else{
        if(DATA[ans][9]%2==1){QandA[1]=0;
        }else{QandA[1]=1;};
      };

    }else if(now_open==2){
      QandA[0] = "\u00a0"+"タイトルは"+checktext;
      if(checkvalue==0){
        if(DATA[ans][7]<6){QandA[1]=0;
        }else{QandA[1]=1;};
      }else if(checkvalue==1){
        if(DATA[ans][7]>5 && DATA[ans][7]<9){QandA[1]=0;
        }else{QandA[1]=1;};
      }else if(checkvalue==2){
        if(DATA[ans][7]>8 && DATA[ans][7]<13){QandA[1]=0;
        }else{QandA[1]=1;};
      }else if(checkvalue==3){
        if(DATA[ans][7]>12){QandA[1]=0;
        }else{QandA[1]=1;};
      }else if(checkvalue==7){
        if(DATA[ans][6]>3){QandA[1]=0;
        }else{QandA[1]=1;};
      }else{
        if(DATA[ans][6]==checkvalue-3){QandA[1]=0;
        }else{QandA[1]=1;};
      };

    }else if(now_open==3){
      QandA[0] = "\u00a0"+"収録されているのは、"+checktext;
      if(checkvalue<5){
        if(DATA[ans][11]==checkvalue+1){QandA[1]=0;
        }else{QandA[1]=1;};
      }else if(checkvalue==5){
        if(DATA[ans][10]%2==1){QandA[1]=0;
        }else{QandA[1]=1;};
      }else{QandA[1]=DATA[ans][12];
      };
    }else if(now_open==4){
      QandA[0] = "\u00a0"+"歌い出しは"+checktext;
      if(checkvalue==DATA[ans][5]-1){QandA[1]=0;
      }else{QandA[1]=1;
      };

    }else{
      QandA[0] = "\u00a0"+checktext;
      if(checkvalue==0){QandA[1]=DATA[ans][3];
      }else if(checkvalue==1){QandA[1]=1-DATA[ans][8];
      }else{QandA[1]=1-DATA[ans][4];
      };
    };

    if(hard==1 && lie==qcount){QandA[1] = 1-QandA[1];};
    return QandA;
  };
  function addrow(QandA){
    let newrow = table.insertRow();
    let newcell = newrow.insertCell();
    let newtext = document.createTextNode(QandA[0]);
    coinmaker(QandA[1]);
    newcell.appendChild(newtext);
    newcell = newrow.insertCell();
    if(QandA[1]==0){newcell.classList.add("yes");
    }else{newcell.classList.add("no");};
    newtext = document.createTextNode(YandN[QandA[1]]);
    newcell.appendChild(newtext);
  };

  function deleteNode(){
    for(var i=1; i<5; i++){
      var link = document.getElementById("rd"+i);
      if(link.hasChildNodes()){
        while(link.childNodes.length>0){
          link.removeChild(link.lastChild);
        };
      };
    };
  };
  function coinmaker(num){
    document.getElementById("coin").src = "img/"+YandN[num]+".png";
    document.getElementById("coin").style.display = "block";
    document.getElementById("coin").animate([{opacity: '0'}, {opacity: '1'}],500);
    window.setTimeout(function(){
      document.getElementById("coin").animate([{opacity: '1'}, {opacity: '0'}],500);
      window.setTimeout(function(){
        document.getElementById("coin").style.display = "none";
      },400);
    },1000);
  };

  for(var i=1; i<3; i++){
    document.getElementById("come"+i).addEventListener("click", function(){
      musiclist.classList.add("slideopen");
    });
  };

}

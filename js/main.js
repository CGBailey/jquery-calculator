$(function(){
  var run = 0
  var scr = ""
  var num = []
  var op = 0
$(".buttons").children().on("click",function(){
  var but = event.target
    if($(this).is(".operator")){
      if(event.target.textContent==='+'){
        num.push(parseInt(scr));
        op = '+';
        scr = '';
        console.log(num);
        console.log(op);
      }
      if(event.target.textContent==='-'){
        op = '-';
        num.push(parseInt(scr));
        scr = '';
        console.log(num);
        console.log(op);
      }
      if(event.target.textContent==='&divide;'){
        op = '/';
        num.push(parseInt(scr));
        scr = '';
        console.log(num);
        console.log(op);
      }
      if(event.target.textContent==='x'){
        op = '*';
        num.push(parseInt(scr));
        scr = '';
        console.log(num);
        console.log(op);
      }

      if($(this).is("#cancel")){
        op = 0;
        num = [];
        scr = '';
  }
      if($(this).is('#calc')){
          num.push(parseInt(scr));
          function cal(){
            if(op ==='+'){
              return num[0]+num[1];
            }
            if(op ==='-'){
              return num[0]-num[1];
            }
            if(op==='*'){
              return num[0]*num[1];
            }
            if(op==='/'){
              return num[0]/num[1];
            }
          }
        scr = cal()
        function clr(){
          op = 0;
          num = [];
        }
        clr()
  }
  }
  else{
    scr= scr + event.target.textContent
  }
  $('#screen').text(scr);
  })
});


// event.target.innerText

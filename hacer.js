function decripta(){
    var str = document.getElementById("entrada").value;
    var indices = [];
    var frab='';
    
    for (var i = 0; i < str.length; i++){
  
      switch (str[i].toLowerCase()) {
          case 'a':
            i=i+1;
          frab=frab + 'a';
          //frab=frab + 'ai';
      break;
          case 'e':
            i=i+4;
          frab=frab + 'e';
          //frab=frab + 'enter';
      break;
          case 'i':
            i=i+3;
          frab=frab + 'i';
          //frab=frab + 'imes';
      break;
          case 'o':
            i=i+3;
          frab=frab + 'o';
          //frab=frab + 'ober';
      break;
          case 'u':
            i=i+3;
          frab=frab + 'u';
          //frab=frab + 'ufat';
      break;
      default:
      frab=frab + str[i].toLowerCase();
          break;
      }
  
    //  if(str[i].toLowerCase() === caracter) indices.push(i);
    }
    var sal = document.getElementById('myDIV');
    /*       if (sal.style.display === 'none') {
           sal.style.display = 'block';
           } else {*/
           sal.style.display = 'none';
           var sal1 = document.getElementById('myDiv1');
           sal1.style.display = 'block';
           var sal2 = document.getElementById('muneco');
           sal2.style.display = 'none'
          // }
       //  if(str[i].toLowerCase() === caracter) indices.push(i);
    document.getElementById("resultad").innerHTML = frab;

}

function encripta(){
    var str = document.getElementById("entrada").value;
    var indices = [];
    var frab='';
    
    for (var i = 0; i < str.length; i++){
  
      switch (str[i].toLowerCase()) {
          case 'a':
          frab=frab + 'ai';
      break;
          case 'e':
          frab=frab + 'enter';
      break;
          case 'i':
          frab=frab + 'imes';
      break;
          case 'o':
          frab=frab + 'ober';
      break;
          case 'u':
          frab=frab + 'ufat';
      break;
      default:
      frab=frab + str[i].toLowerCase();
          break;
      }

    }
        var sal = document.getElementById('myDIV');
 /*       if (sal.style.display === 'none') {
        sal.style.display = 'block';
        } else {*/
        sal.style.display = 'none';
        var sal1 = document.getElementById('myDiv1');
        sal1.style.display = 'block';
        var sal2 = document.getElementById('muneco');
        sal2.style.display = 'none'
       // }
    //  if(str[i].toLowerCase() === caracter) indices.push(i);
    document.getElementById("resultad").innerHTML = frab;
  }


  function copiado(){
    var content = document.getElementById('resultad');
    content.select();
    document.execCommand('copy');
    alert("Texto Copiado en el portapapeles");
  }
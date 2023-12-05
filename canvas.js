function editorDeImagem(srcimage,colorframe){



var canvas = document.getElementById("qrcodeFINAL");

if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  // codigo de desenho aqui
  console.log("navegador suportado");
  let nave=new Image();
  nave.src=srcimage;
  
  //imagem
        //   ctx.drawImage(nave,25,25);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 250, 250);    
    ctx.fillStyle = colorframe;
    ctx.fillRect(0, 0, 10, 250);
    ctx.fillRect(240, 0, 10, 250);
    ctx.fillRect(0, 0, 250, 10);
    ctx.fillRect(0, 240, 250, 10);

    
        
    ctx.drawImage(nave,0,0,200,200,25,25,200,200);  
    
  


  







} else {
  // codigo para quando o canvas nao for suportado aqui
  console.log("Seu navegador não é suportado. Tente atualizar ou utilizar um navegador mais atualizado!");
}
 
}

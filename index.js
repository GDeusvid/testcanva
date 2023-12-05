

// opções de qrcode
$("#linkoutexto_botao").on( "click", function() {
    $('h3').text('Insira seu link ou texto, gere um QR CODE e faça o download!');
    $('h3').fadeIn();
    $('h4').fadeIn();
    $('.entrada').fadeIn(); 
    $('#wifi_botao').prop("disabled",true); 
    $('body').css('backdrop-filter','blur(15px)');
    $("#linkoutexto_botao").css('border','2px solid white');    
});
$("#wifi_botao").on( "click", function() {
    $('h3').text('Insira os dados WIFI, gere um QR CODE e faça o download!');
    $('h3').fadeIn();
    $('h4').fadeIn();
    $('.entrada2').fadeIn(); 
    $('#linkoutexto_botao').prop("disabled",true); 
    $('body').css('backdrop-filter','blur(15px)'); 
    $("#wifi_botao").css('border','2px solid white');   
});
$(".seta").on( "click", function() {
    $('.colors_frame').slideToggle();
    $(".seta").toggleClass("colors_frameON");
    $(".seta").html('&#9660;');
    $(".colors_frameON").html('&#9650;');

    var teste=$('.seta').attr('class');
    console.log(teste);
});



$('#framepadrao').prop("disabled",true);
$('#qrcode_img').hide();
$('#color-hexID').hide();
$('.secaodownload').hide();
$('#novocodigo_botao').hide();
$('h3').hide();
$('h4').hide();
$('.entrada').hide();
$('.entrada2').hide();
$('.colors_frame').hide();
$("#novocodigo_botao").on( "click", function() {
    location.reload(true);    
});
var colorframe="black";
var contJaGerou=0; 

//cor do frame
function mudarFrame(contJaGerou){
$('.colorframe').on('change', function() {
    // Desmarcar todas as outras caixas de seleção
    if($(this).prop('checked')==false){
        $(this).prop('checked',true);
    };
    $('.colorframe').not(this).prop('checked', false);
    var clicado=$(this).attr('id');
    colorframe= clicado.split('-')[1];
    if (colorframe=="hex"){
        $('#color-hexID').fadeIn();
    } else{
        $('#color-hexID').fadeOut();
    }
    
    if (contJaGerou==1){
        var srcimage= $('#qrcode_img img').attr('src');
        editorDeImagem(srcimage,colorframe);
    };
    
  });

$('#color-hexID').on('input', ()=>{
    var colorframe=$('#color-hexID').val();
    
    if (contJaGerou==1){
        var srcimage= $('#qrcode_img img').attr('src');
        editorDeImagem(srcimage,colorframe);
    };
});
}
mudarFrame(0);


  //Gerar qrcode
$("#gerar_botao").on( "click", function() {
    contJaGerou=1;
    mudarFrame(contJaGerou);
    var user_link=$("#user_link").val();
    $('#gerar_botao').prop("disabled",true);

    const qrcode = new QRCode(document.getElementById('qrcode_img'), {
        text: user_link,
        width: 200,
        height: 200
    });
    $('#qrcode_img img').on('load', function() {
        // Agora, a imagem QR Code foi carregada
        var srcimage= $('#qrcode_img img').attr('src');
        $('.secaodownload').fadeIn();
        $('#novocodigo_botao').fadeIn();
        
    
        // Agora você pode fazer o que quiser com a URL da imagem
       editorDeImagem(srcimage,colorframe); 
    });
    
    
});



//Download botao
      // Adiciona um ouvinte de evento ao botão usando jQuery
$('#download_botao').on('click', function() {
    var canvas = document.getElementById("qrcodeFINAL");
    // Obtém a representação da imagem como um data URL
    var dataURL = canvas.toDataURL('image/png');

    // Cria um elemento de link temporário usando jQuery
    var link = $('<a>');

    // Atribui a representação da imagem como o href do link usando jQuery
    link.attr('href', dataURL);

        // Atribui um nome de arquivo para o download
    link.attr('download', `QRCODE-FRAME-PADRAO-${colorframe.toUpperCase()}.png`);

        // Adiciona o link ao corpo do documento
    $('body').append(link);

    // Simula um clique no link para iniciar o download usando jQuery
    link[0].click();

    // Remove o link temporário do corpo do documento
    link.remove();
});
   
  





// tipo de criptografia
var criptosenha="nopass";
$('.criptosenha').on('change', function() {
    // Desmarcar todas as outras caixas de seleção
    if($(this).prop('checked')==false){
        $(this).prop('checked',true);
    };
    $('.criptosenha').not(this).prop('checked', false);

    criptosenha = $(this).prop('checked') ? $(this).attr('id').split('-')[1] : "nopass";
    
  });


  //clicar em gerar qr code
$("#gerar_botao2").on( "click", function() {
    var user_ssid=$("#user_ssid").val();
    var user_senha=$("#user_senha").val(); 
    mudarFrame(1);

    var wifiConfig = {
        SSID: user_ssid,
        Security: criptosenha, // Ou 'WPA/WPA2', ou 'nopass' para rede aberta
        Password: user_senha, // Opcional, omita se for uma rede aberta
    };

    // Converte a configuração Wi-Fi em uma string no formato WiFi URI Scheme
    function generateWiFiURI(config) {
        var wifiURI = 'WIFI:S:' + config.SSID + ';T:' + config.Security;

        if (config.Security !== 'nopass') {
        wifiURI += ';P:' + config.Password+';';
        }

        return wifiURI;
    }

    // Obtém o elemento onde o QR Code será exibido
    var qrcodeElement = document.getElementById('qrcode_img');

    // Instancia o objeto QRCode usando a biblioteca qrcodejs
    var qrcode = new QRCode(qrcodeElement, {
        text: generateWiFiURI(wifiConfig),
        width: 200,
        height: 200,
    });

    $('#qrcode_img img').on('load', function() {
        // Agora, a imagem QR Code foi carregada
        var srcimage= $('#qrcode_img img').attr('src');
        $('.secaodownload').fadeIn();
        $('#novocodigo_botao').fadeIn();
        console.log(qrcode._htOption.text          );
        
        // Agora você pode fazer o que quiser com a URL da imagem
       editorDeImagem(srcimage,colorframe); 
    });

});




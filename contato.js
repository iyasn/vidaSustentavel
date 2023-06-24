//seu código para enviar a mensagem aqui

//se a mensagem foi enviada com sucesso
if (mensagemEnviada) {
    //selecione a div para exibir a mensagem
    const divMensagem = document.getElementById("mensagem-enviada");
    
    //atualize o conteúdo da div com a mensagem
    divMensagem.textContent = "Sua mensagem foi enviada com sucesso!";
  }
  
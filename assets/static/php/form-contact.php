<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome = strip_tags(trim($_POST["nome"]));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $numero = strip_tags(trim($_POST["telefone"]));
        $msg = strip_tags(trim($_POST["msg"])); 

        // Destinatario
        $para = 'allancrvz@gmail.com';
        $assunto = "Novo contato da Landing Page Lis Virtual";

        // Conteudo E-mail
        $conteudo = "Nome: $nome\n";
        $conteudo .= "Email: $email\n";
        $conteudo .= "Telefone: $telefone\n\n";
        $conteudo .= "Mensagem\n $msg\n";

        // CabMail
        $headers ="From: $nome <$email>";

        //Envia
        mail($para,$assunto,$conteudo,$headers);

        

    }
<?php

    $nome = addslashes($_POST{'nome'});
    $email = addslashes($_POST{'email'});
    $telefone = addslashes($_POST{'telefone'});

    $para = "erivaldosoaresjunior@gmail.com";
    $assunto = "Contato - portifolio";

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$telefone;
    
    $cabeca = "From: erivaldosoaresjunior@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o formulário!");
    }
?>
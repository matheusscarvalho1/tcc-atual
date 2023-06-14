# TCC
Trabalho de Conclusão de Curso apresentado ao Curso de Engenharia de Computação da FAENG/CUVG/UFMT (área de concentração: Engenharia de Computação) como parte dos requisitos para obtenção do título de Bacharel em Engenharia de Computação.

# Resumo

Este trabalho apresenta o desenvolvimento de uma aplicação para registro e conversão de horas de atividades complementares e de extensão utilizando como principal linguagem de programação o JavaScript, além de outras tecnologias como: EJS e CSS.
Este projeto possui as duas stacks de desenvolvimento, o Front-end (Lado do cliente) e o Back-end (Lado do servidor) onde a comunicação entre as stacks é feita através de uma API REST, utilizando métodos do protocolo HTTP, que são fundamentais para o  funcionamento da aplicação. O objetivo do projeto é desenvolver uma aplicação que auxilie o discente a ter maior acompanhamento de sua jornada acadêmica, onde é possível registrar carga horárias comprovadas por certificados sobre atividades de extensão e atividades complementares, as quais são previstas pelo PPC vigente (Projeto Pedagógico do Curso de Engenharia de Computação 2020/2 - 2022/2) da FAENG/UFMT para que seja possível recupará-los baixando o certificado desejado, podendo visualizar esses registros, edita-los, apaga-los através das operações CRUD do banco de dados, com o propósito do aluno conseguir acompanhar e gerenciar o andamento deste processo.


# Tecnologias Utilizadas

<b>• Front-End</b> 

HTML/EJS, CSS, Chart.js, JavaScript


<b>• Back-End</b>

Node.js, Express.js, MongoDB, Mongoose, Bcrypt, Nodemon


# Dependências


Para rodar a aplicação você deve instalar a ferramenta Nodemon através do node package manager, então use um 
'npm install nodemon --save -dev' no console para instalar o nodemon e configure em 'scripts' no package.json
a instrução ilustrada na imagem abaixo: 

![image](https://user-images.githubusercontent.com/73304785/234932018-0f673e17-9fff-42fb-8ba2-4eac913790b5.png)

Para rodar a aplicação no localhost:8080, configurado no código você deve executar 'npm run dev' no console git bash.


# Resultados
A aplicação possui uma página de login, ilustrada na figura abaixo, que possibilita o usuário acessar sua conta através do rga e da senha, caso não tenha um cadastro no site, é possível fazer clicando no botão “Cadastre-se”.

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/9fbdb901-4a59-439b-9dbf-2eda7c1b380e)

<hr>

Após clicar no botão de cadastro na página de login, o usuário será redirecionado para esta página (ilustrada na figura abaixo) para informar seus dados e fazer cadastro na plata- forma armazenando-os no banco de dados.

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/3d7d1d37-c469-4dd8-9bc9-e80fbea65a9b)

<hr>
Após fazer o cadastro e efetuar o login, o usuário será redirecionado para a homepage,
ilustrada nas figuras abaixo, nas seções “HOME”, “SOBRE” e “FALE CONOSCO”, respectivamente.

Na seção “Home”, possui um slider mostrando os cinco cursos ofertados pela FAENG/CUVG: Engenharia de computação, Engenharia de controle e automação, Engenharia de minas, Engenharia de transportes e Engenharia química.


![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/76c9bbb8-1106-4205-8a20-8a919a511377)

<hr>
Logo abaixo da seção “Home”, se encontra a seção “Sobre”, onde possui os dias e horários de atendimento da secretaria da FAENG, o nome do responsável da equipe de atendimento, o endereço do local e o número para contato, também possui um pequeno trecho sobre a história da FAENG junto com dois botões, onde um deles leva para o gerenciador de carga horária e outro botão leva para a página de tira dúvidas em relação ao processo de aproveitamento no SEI.


![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/34f15615-821f-4855-b396-01ed0272be33)

<hr>
Logo abaixo da seção “Sobre” tem a seção “Fale conosco”, nela possui algumas informações no cabeçalho do mapa como localização, telefone, e-mail e horário de atendimento, nessa seção é disponibilizada a localização exata da FAENG.


![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/ba546994-30c2-441b-9cad-94fde42ec3c7)

<hr>
Ao clicar no botão ‘Clique aqui e sane suas dúvidas’ localizadas na seção “Sobre” da aplicação web, como ilustrado na figura abaixo, o usuário será redirecionado para uma página de dúvidas sobre o funcionamento de aproveitamento de horas de extensão e complementares no SEI.



![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/d64555d3-d4bb-4893-af1e-3902b4d6e868)
<hr>
Após clicar, é possivel observar instruções de como fazer o aproveitamento dos certificados sobre atividade complementar e de extensão pelo SEI como ilustrado abaixo nas duas figuras abaixo

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/4585139f-2827-49a0-b563-72d476af7bd5)



![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/fa007f91-4eda-4c99-aad7-162fdc481a60)

<hr>

Ao clicar no botão ‘Clique aqui’ localizado na seção “Sobre”, como ilustrado na figura abaixo, o usuário irá ser redirecionado para a página de armazenamento dos dados referente ao registrador e conversor manual de carga horárias.

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/3714b805-99c5-4ff0-99cd-032489c20fcc)

<hr>
Após clicar no botão, o formulário para registrar as informações do certificado é exibido e para utilizar a ferramenta o usuário precisará preenche-lo informando os dados relacionados ao certificado e de sua matrícula conforme são solicitados no formulário.

Os seguintes campos formam o formulário para o registro: Nome completo do usuário, RGA, E-mail, Curso, Telefone, Tipo da carga horária (horas de extensão ou horas complementares), anexo do certificado somente em .pdf, carga horária registrada no documento, carga horária convertida, campos estes ilustrados nas (2) figuras abaixo: (O formulário foi dividido ao meio para melhor nitidez das imagens)

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/e58b4d6f-5ec8-40bc-b496-28ff4f18b76e)

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/d95753ae-6bcd-4376-bdb1-53fa0d104669)

<hr>

Campo categoria das horas complementares: Este campo, ilustrado na figura abaixo, serve para selecionar em qual grupo e opção a categoria do seu certificado se encaixa, ele só deve ser preenchindo depois de consultar os itens de instruções ilustrado nas (5) figuras abaixo:

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/c842f2e2-6f62-44f6-b644-b0f659c148a7)
<hr>

Os itens de instruções, ilustrado nas figuras abaixo, servem para orientar e indicar em qual grupo e opção o seu certificado se encaixa, para isso, as instruções serão disponibilizadas quando o mouse do usuário for colocado em cima de um dos itens de instruções, como ilustrado nas (4) figuras abaixo:

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/49cd7f8c-ec41-47cf-906f-c5f6487c38d1)

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/3b17d4ce-2a74-4cd7-89d9-cb256b560f78)

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/4c6a164b-f3be-42c6-89fb-1ef8aa3f4ad8)

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/da73f9c0-c841-476a-a6a5-06e60cf85c06)


<hr>
Em relação as horas complementares, diferente das horas de extensão, é preciso realizar uma conversão onde a própria aplicação te auxilia a realizá-la, nesse projeto essa conversão precisa ser feita manualmente, então quando o usuário for preencher a tabela de dados, ao chegar no campo ’Carga horária convertida’ (ilustrado na figura abaixo), o usuário precisa consultar os itens de instruções de aproveitamentos de horas complementares, ilustrados anteriormente, para preencher este campo.

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/b96e01da-86e5-4fb6-a293-9467cdadbddb)


<hr>

Na figura abaixo é possível ver a lógica de como funciona a conversão. No exemplo da figura anterior o certificado consta 32 horas, supondo que ele se encaixe na opção 2 do grupo I, ao consultar as instruções, as horas complementares que irão constar no histórico do aluno serão 8 horas (resultado do cálculo 32/4). Cada uma das opções, de cada grupo, tem a sua própria lógica de conversão, então, basta consultar os itens, fazer o cálculo e inserir o resultado do cálculo no campo ’Carga horária convertida’.

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/499f0446-896b-4a6c-aa87-aebe5dc8bd0e)


<hr>

Após identificar o grupo, a opção que o certificado se encaixa através dos itens (como ilustrado na figura anterior), fazer o cálculo baseado na lógica de conversão e armazenar esse valor no campo ’Carga horária convertida’, é preciso selecionar a opção correta no campo ’Categoria das horas complementares’, baseado nas instruções seguidas para realizar o cálculo anteriormente (como ilustrado na figura abaixo), para registrar a informação no banco de dados e assim acompanhar com mais precisão a sua jornada acadêmica.

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/7670efdd-a50c-484b-a21e-b27d7f934f66)

<hr>
Para finalizar o formulário, existe um campo para adicionar uma mensagem opcional

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/49d60672-b764-4ab7-b19c-dd1dbf6df6b3)

<hr>
Após submeter o formulário para o banco de dados, ao ir para a parte de baixo dessa mesma página, imediatamente será exibido todos os dados que foram preenchidos anterioramente no formulário dentro de uma tabela, para mostrar ao usuário o que já foi registrado. Na própria tabela tem a opção de excluir e editar (necessário realizar ajuste em realizar a edição desses registros) o registro caso tenha algo preenchido de forma incorreta, além de ter o botão para fazer o download do certificado anexado pelo usuário como é ilustrado nas figuras abaixo.

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/95c678c7-3ce2-4ac7-9713-01380308dd7b)

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/03cff4ff-6cd2-4e17-90e9-f55c2ec63af6)



<hr>

Além disso, dois gráficos interativos (um gráfico somente para horas de extensão e outro somente para horas complementares) são exibidos logo abaixo da tabela ilustrando as carga horárias que foram aproveitadas representadas pela cor verde, a quantidade de carga horárias que faltam para completar o total, representadas pela cor vermelha, e também o total de carga horária necessárias, representadas pela cor azul no topo do gráfico, ilustradas nas (4) figuras abaixo.
Observe que é possível ver as horas equivalentes, de acordo com a legenda ou colocando o mouse em cima da área do gráfico, de acordo com a cor da camada que representa, além de ter a relação em porcentagem ao lado direito do gráfico.
Para ilustrar o exemplo da tabela nas figuras acima é possível ver que foram registrados 3 certificados, na primeira linha informa que foi registrado um certificado de atividade de extensão de 60 horas, o da segunda linha é um certificado de atividade complementar de 32 horas que se encaixa na categoria do Grupo 1 - Opção 2 e através disso aproveita somente um quarto (1/4) das 32 horas, ou seja, aproveitam 8 horas dessas 32 horas constadas no documento, na terceira linha é outro certificado de atividade complementar de 64 horas que se encaixa na categoria do Grupo 1 - Opção 1 e por conta disso, coincidentemente, aproveita também um quarto (1/4) das 64 horas, ou seja, aproveitam 16 horas dessas 64 constadas no certificado, totalizando 24 horas de atividades complementares aproveitadas e 60 horas de atividades de extensão aproveitadas, ilustrado nos gráficos plotados na figuras abaixo:

Gráfico com informações sobre horas aproveitadas de extensão

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/173ef6ea-a8b2-4789-ba6e-f653c7d6d0fc)

Gráfico com as informações sobre as horas restantes de extensão

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/fa780e7d-4beb-413b-9132-04e4636839dc)

Gráfico com as informações sobre as horas totais de extensão

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/746476c6-4ca2-4f9d-a66b-ba24fd7d5993)

Gráfico com as informações das horas complementares registradas

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/4dc4fd72-944f-476a-ad33-35665c3b5911)




<hr>
Panorama geral da aplicação 

![image](https://github.com/matheusscarvalho1/tcc/assets/73304785/b515eb22-cabc-4866-994e-4b1a50e91b83)


# Autor

<b>Matheus de Souza Carvalho</b>


Linkedin: 
https://www.linkedin.com/in/matheusscarvalho/


E-mail:
matheusdocarvalho@gmail.com


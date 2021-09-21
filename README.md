## 👨🏽‍💻 Processo de desenvolvimento

O processo de desenvolvimento foi orgânico pois estava bem dividido e quando necessário ajudávamos um ao outro. O [Felipe](https://github.com/Muratawga) junto ao [Vitor](https://github.com/vit0rr) ficaram responsáveis pelo Front-End do site. A divisão ficou com Murata estilizando o site em CSS e Bootstrap, enquanto o Vitor com o JavaScript desenvolvia as funcionalidades de dinamizar as telas e das funções de capturar e tratar os inputs inseridos pelo usuário. No final, tudo é enviado para o Back-End, que foi desenvolvido pelo [Pedro](https://github.com/dgtyPedro) onde é gerado um relatório dos dados do usuário e enviado em seguida para o email do usuário.

![image](https://user-images.githubusercontent.com/54332151/133897807-b90edd86-c589-4725-9f1e-6edab78d8a7a.png)


## 🐱‍🏍 Como funciona tecnicamente o projeto?

O que desenvolvemos para Musa da Mente foi um teste de personalidade. O usuário precisa responder algumas perguntas e selecionar a opção que varia de 0 a 3 com o quanto ele concorda ou não com a questão referente.

***No Front-End, o JavaScript é responsável por:***
 - Modificar o grupo de perguntas;
 - Capturar cada resposta numa variável global;
 - Verificar se todos os inputs estão selecionados antes de continuar;
 - Verificar se a estrutura do email está correta;
 - Direcionamento para URL personalizada por conta do back-end;
 - Tipagem do tipo Number() para as opções inseridas;
 - Soma dos pontos de cada resposta 
 - Caso o e-mail esteja certo, enviar para o back-end a soma e e-mail.

 ***No Back-End, o JavaScript é responsável por:***

 - Coletar os dados e resultados fornecidos pelo Javascript
 - Enviar esses dados a Base de dados MySQL

Por sua vez, essa base de dados armazena o *horário*, *email* e *pontuação* do usuário. Todas essas informações são redirecionadas ao script criado no Apps Script da Google, esse script é o responsável pelo envio dos resultados aos clientes.

## Imagens: 

![image](https://user-images.githubusercontent.com/54332151/134220895-fd5fcf64-5b2b-4478-9142-8544ea40af34.png)

![image](https://user-images.githubusercontent.com/54332151/134221115-3f8a2389-8cc3-4fdb-9427-920c00835e63.png)

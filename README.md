<h1 align="center"> My Mentor</h1>

<div align="center">
<img src="https://user-images.githubusercontent.com/88126644/206928336-645f0cd7-19b9-45f7-bd30-150a87c7e7ac.gif" width="300px" />
</div>

<br>

> Iniciativa para mentoria grátis a nível Brasil

> Projeto Final Reprograma: Turma Todas em Tech On19

> Status: **em construção**

<br>

## **Índice**

- [Proposta](#proposta)
- [Problemática](#problemática)
- [Solução](#solução)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instruções para Instalação](#instruções-para-instalação)
- [Rotas](#rotas)
- [Testes Manuais](#testes-manuais)
- [Melhorias Futuras](#melhorias-futuras)
- [Conclusão](#conclusão)
- [Link Úteis](#links-úteis)
- [Referências](#referências)
- [Agradecimentos](#agradecimentos)
- [Autora](#autora)
<br>


## **Proposta**
Desenvolver uma API funtamentada no CRUD e integrada com banco de dados MongoAtlas, como Projeto Final Reprograma turma Todas em Tech On19.

<br>

## **Problemática**
Atualmente existe uma crescente busca por mentores, tendo em vista a agregação de valor, redução da curva de aprendizado entre outros benefícios conforme [estatísticas](https://eumebanco.com.br/mentoria-preenche-lacuna-de-aprendizado-e-ganha-forca-no-brasil/). 

Realizado uma busca por mentoria grátis, independente da área de atuação, o resultado foi sempre o mesmo: sites ou cursos pagos voltados para área de negócios como prestação de serviços.

<br>

## **Solução**
Como solução desenvolvi a API My Mentor, que permite o cadastro de mentores voluntários para acompanhar mentorados de forma gratuita, contribuindo para sua evolução de estudos ou carreira profissional.

<br>

## **Funcionalidades**
- Cadastrar mentores;
- Listar tods cadastros de mentores;
- Listar mentor por ID;
- Listar mentores por multiplos filtros;
- Editar dados dos mentores;
- Excluir cadastro mentores;

<br>

## **Tecnologias Utilizadas**
<p  align="justify">
<a  href="https://www.javascript.com/"><img  alt="Java Script"  src="https://img.shields.io/badge/JavaScript-green"></a>
<a  href="https://git-scm.com/"><img  alt="Git version"  src="https://img.shields.io/badge/Git/GitHub-green"></a>
<a  href="https://nodejs.org/pt-br/"><img  alt="Node version"  src="https://img.shields.io/badge/NodeJS-green"></a>
<a  href="https://www.mongodb.com/cloud/atlas"><img  alt="Node version"  src="https://img.shields.io/badge/MongoDB%20Atlas-green"></a>
<a  href="https://www.postman.com/"><img  alt="Postman"  src="https://img.shields.io/badge/Postman-green"></a>
<a  href="https://code.visualstudio.com/"><img  alt="VsCode"  src="https://img.shields.io/badge/VSCode-green"></a>
<a  href="https://render.com/"><img  alt="Render"  src="https://img.shields.io/badge/Render-green"></a>
<a  href=""><img  alt="Mit"  src="https://img.shields.io/badge/Licence MIT-green"></a>

<a  href="https://expressjs.com/pt-br/"><img  alt="Express version"  src="https://img.shields.io/badge/express-4.18.2-green"></a>
<a  href="https://www.npmjs.com/package/nodemon"><img  alt="Nodemon version"  src="https://img.shields.io/badge/nodemon-2.0.20-green"></a>
<a  href="https://www.npmjs.com/package/dotenv-safe"><img  alt="Dotenv-safe version"  src="https://img.shields.io/badge/dotenv-8.2.0-green"></a>
<a  href="https://mongoosejs.com/"><img  alt="Mongoose version"  src="https://img.shields.io/badge/mongoose-6.7.4-green"></a>
<a  href="https://www.npmjs.com/package/cors"><img  alt="npm version"  src="https://img.shields.io/badge/cors-2.8.5-green"></a>
<a  href="https://www.npmjs.com/"><img  alt="npm version"  src="https://img.shields.io/badge/npm-6.14.6-green"></a>
<a  href="https://www.npmjs.com/package/save"><img  alt="Save version"  src="https://img.shields.io/badge/save-2.9.0-green"></a>
<a  href="https://www.npmjs.com/package/swagger-autogen"><img  alt="Swagger-Autogen version"  src="https://img.shields.io/badge/swagger_autogen-2.22.0-green"></a>

<a  href="https://www.npmjs.com/package/swagger-ui-express"><img  alt="Swagger-ui-express version"  src="https://img.shields.io/badge/swagger_ui_express-4.6.0-green"></a>


<br>


## **Instruções para Instalação**
#### Requerimentos
* NodeJS v16

### Instalação
1. Clone o repositório;
2. Mude para o diretório do repositório;
3. Instale as dependências executando o seguinte comando:

```   
npm install
``` 

4. Crie um arquivo <kbd>.env</kbd> no diretório raiz seguindo o arquivo <kbd>.env.example</kbd>.

5. A seguir, será apresentada uma breve explicação de cada variável de ambiente.

```
DATABASE_MONGO= <A string de coexção do banco onde sua aplicação será executada>
PORT = <A porta onde sua aplicação será executada>
SECRET= <Onde sua chave privada será executada>
```` 

Rodando o servidor:

```
npm start
```
<br>


## **Rotas**

<div align="center">
<img src="https://user-images.githubusercontent.com/88126644/206932923-14403946-bbc8-4e62-8ea2-bcfce9b1c620.jpg" width="900px" />
</div>

<br>


## **Testes Manuais**

Testes realizados através do Postman:

<img src="https://user-images.githubusercontent.com/88126644/206936951-e5dfb494-b4f0-42be-bef9-59224332e9d9.gif" width="900px" />
</div>


<br>

## **Melhorias Futuras**
- Desenvolver a lógica para o mentorado com CRUD;
- Autenticação de usuários e senha criptografada;
- Implementação de testes unitários;
- Implementação de Front-end;
- Sala de mentoria/estudo online;

<br>

## **Conclusão**

#### **IMPACTO SOCIAL**

Segundo a ABMEN, média de [crescimento dos mentores é de 19,5%](https://eumebanco.com.br/mentoria-preenche-lacuna-de-aprendizado-e-ganha-forca-no-brasil/) ao ano, devido a geração de valor que o mentor promove ao mentorado com conhecimento, inovação e perspectivas que levarão sua carreira ao próximo nível. 

Além de guia, a mentoria é um território seguro onde o mentorado pode expor seus pontos fracos e aprender habilidades que só quem já chegou lá sabe ensinar na prática. 

Sou exemplo disso, pois decidi realizar minha transição de carreira para área de tecnologia, depois de mais de 20 anos sem estudar e me deparei com dificuldades em elaborar perguntas durante meu curso e me sentia travada em meio as demais alunas, algumas mais jovens e com mais conhecimentos.

Após fazer parte de uma mentoria passei a me sentir mais segura, pois contato com um mentor geralmente é mais reservado do que os outras relações organizacionais, o que possibilitou o crescimento e meu avanço de forma individual. 

Acredito que seria muito interessante que mais pessoas tivessem que tenho neste momento, razão pela qual investi nesta temática para este projeto.

<br>

## **Links Úteis**

> <a href="https://my-mentor.onrender.com/mymentor/">My Mentor in Render</p></a>

> <a href="https://www.canva.com/design/DAFUxwWkN1w/0gKuoFo-lhsh4y-ULSBQuQ/edit?utm_content=DAFUxwWkN1w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Apresentação em Power Point</p></a>

<br>


## **Referências**
<h3>

> <a href="https://eumebanco.com.br/mentoria-preenche-lacuna-de-aprendizado-e-ganha-forca-no-brasil/">Mentoria preenche lacuna de aprendizado e ganha força no Brasil</p></a>

 > <a href="https://tamojunto.aliancaempreendedora.org.br/mentoria-gratuita-para-microempreendedores/">5 momentos em que a mentoria pode te ajudar</p></a>

 > <a href="https://www.capterra.com.br/directory/30803/mentoring/pricing/free/software">Capterra: Site de buscar Programas de Mentoria</p></a>
</h3>

<br>


## **Agradecimentos**

<p align="">Em primeiro lugar, agradeço a minha filha e minha família, que pacientemente entenderam a minha ausência em dedicação total a este Bootcamp, sempre me apoiando e incentivando até o fim.

<p align="">Agradeço todas as colegas de classe, professoras, facilitadora e psicóloga que contribuíram de forma extraordinária para meu desenvolvimento e a <a href="https://www.linkedin.com/company/reprogramabr/">{reprograma}</a>, pela oportunidade ímpar.

<p align="">Em especial, agradeço ao meu mentor <a href="https://www.linkedin.com/in/allan-pires/">Allan Pires</a> que com toda sua expertise e seu projeto <strong>"Backend Stuff - Mentoria"</strong>, gentilmente acompanha meus estudos e reduz minha curva de aprendizado e o qual dedico a inspiração deste projeto.

<br>

## **Autora**

<br>

<img style="border-radius: 20%;" src="https://unavatar.now.sh/github/djeisly" width="200px;" alt=""/> </td><br> 

<br>

Criado por **Djeisly Rodrigues**.
<br>



  <div>
    <a href="https://www.linkedin.com/in/djeisly/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>  
  <a href = "https://github.com/djeisly/"><img src="https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
   <a href = "mailto:djeisly@yahoo.com.br"><img src="https://img.shields.io/badge/Yahoo-9400D3?style=for-the-badge&logo=yahoo&logoColor=white" target="_blank"></a>
 </div>
  

<br>

#### [Início](#índice) 


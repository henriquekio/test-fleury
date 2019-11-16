## Desafio de Front end

Este projeto é um desafio de front-end.
O Desafio é implementar um layout pré-determinado e consumir os dados de uma API em graphQL.

Para realizar este desafio eu escolhi utilizar o framework [React.js](https://pt-br.reactjs.org/) por ser rápido, de fácil uso e pelo seu grande uso pela comunidade.

O resultado final desse teste pode ser visualizado neste [link disponibilizado pelo netlify](https://distracted-lewin-75a4ef.netlify.com/).

### Dependências Utilizadas
Foram usadas as seguintes dependências para a realização do desafio: 

- [apollo-boost](https://www.apollographql.com/docs/react/)
- [@apollo/react-hooks](https://www.apollographql.com/docs/react/api/react-hooks/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [SASS](https://sass-lang.com/)
- [Normalize css](https://necolas.github.io/normalize.css/)
- [Skeleton css](http://getskeleton.com/)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [react-styleguidist](https://react-styleguidist.js.org/)

Além disso foi utilizado o [netlify](https://www.netlify.com/) para o deploy do projeto.

#### Apollo-boost/@apollo/react-hooks
Utilizado respectivamente (e a grosso modo =) )  para prover uma conexão com o graphql e integração com o react.

#### Eslint/prettier

Utilizado para manter uma padronização e a qualidade do código conforme as regras pré definidas pelo linter

#### Normalize css

Utilizado para realizar os resets necessários padrões do browser

#### Skeleton css

Pelo complexidade do projeto, não há a necessidade de utilizar um grande framework. Para não aumentar o tamanho do bundle e prejudicar a performance do projeto decidi utilizar o skeleton css, que provê menos recursos que um grande framework, porém, traz o necessário para o desenvolvimento de projetos mais simples.
Por ter menos recursos, o skeleton é mais leve, possui menos linhas de código e porporciona uma boa performance pelo baixo tempo de carregamento.

> O lado negro não é mais poderoso, apenas mais rápido, mais fácil e mais sedutor.
>Mestre Yoda  

#### SASS

Para poupar tempo, e manter um css mais organizado, eu escolhi o SASS como pré processador de css.

#### Prop-Types

Utilizado para validar as props repassadas aos componentes.

#### Styleguidist

Utilizado para fornecer uma documentação dos componentes criados para a aplicação.

### Executando o projeto

- Execute ``npm install`` para instalar os packages do projeto.
- Coloque o titulo do projeto e a URL de acesso a API no arquivo ``.env``
- Para ambiente de desenvolvimento, execute ``npm run start`` ou ``yarn start``
- Para ambiente de produção execute ``npm run build`` ou ``yarn build``

### Observações

- Para o desenvolvimento dos estilos do projeto foi utilizada a metodologia [BEM css](http://getbem.com/introduction/).
- Por o projeto ser pequeno não achei necessário implementar o FLUX, utilizei apenas o estado local dos componentes.
- O header e o footer não faziam parte do desafio, porém, me incomodou não ter um header ali. Então implementei a grosso modo o header do site em produção.
- Para visualizar a documentação dos componentes com o styleguidist, basta executar o comando ``npm run styleguide`` ou ``yarn styleguide``
- Para a criação da janela modal, eu utilizei a [criação de portals do react](https://pt-br.reactjs.org/docs/portals.html).
- O projeto foi feito utilizando react hooks, mas como não era muito complexo, não vi uma boa implementação para utilização do Context API muito menos para um Redux.
- Obrigado pela oportunidade =)
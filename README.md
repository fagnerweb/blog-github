# Projeto Blog Github | Rocketseat

### [Veja online](https://blog-github-rho.vercel.app/)

Este foi um projeto bem interessante onde o desafio era criar um blog usando as issues do github como posts. Para desenvolver este projeto foi necessário:
- Listagem do perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.
- Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela
- Criar uma página para exibir um post (issue) completo

Para desenvolver foi preciso colocar em prática alguns conceitos como:
- Fetch / Axios
- Roteamento e React Router DOM
- Formulários

A aplicação possuia 2 páginas que foram fornecidas pela [Rocketseat](https://www.rocketseat.com.br/). Confira as screenshots

### Página Home
Usei o styled components para poder estilizar. Os dados vieram do meu [repositório no github](https://github.com/fagnerweb/blog-github). Criei issues para usar como posts
e listei elas na página usando `useEffect` para fazer a chamada quando a página carrega, e armazenei os dados com o `useState`. Para o formulário usei a `useForm`. A 
validação esta sendo feita pelo `zod`.

![Blog](https://user-images.githubusercontent.com/42723263/205130753-f1009bc8-7882-4125-b4a2-ef1b4a82c147.jpg)


### Página de post individual
Essa página recebe o parametro slug com `number` que é retornado referente ao número da issue que deve ser carregada. Usando o `useParams` consigo extrair o parâmetro da 
url. Depois com esses dados é apenas necessário chamar a api do github e pesquisar pela issue no repositório desejado. Os dados veem em `markdown`, para poder exibi-los 
adequadamente usei o `react-markdown` que é uma biblioteca que transforma os dados em html. Por fim usei o `styled-components` para estilizar da forma que foi pedida.

Hospedei o blog na Vercel e estou adicionando novos conteúdos por meio de novas issues e essas issues são artigos como este, que descrevem novos projetos e desafios.

![Post](https://user-images.githubusercontent.com/42723263/205130731-e624668e-734a-49f8-a020-38c80751dd74.jpg)

# Instalação

Instale my-project com npm

```bash
  npm install my-project
```

Execute na sua máquina

```bash
  npm run dev
```

O projeto foi desenvolvido com o vite, typescript, react e o eslint.

Fale comigo
- [Instagram](https://www.instagram.com/fagnermar.silva/)
- [Linkedin](https://www.linkedin.com/in/fagner-martins-894b65254/)

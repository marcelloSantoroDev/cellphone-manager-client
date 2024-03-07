## Cellphone Manager - Client Side

Essa é uma aplicação front-end, que usa `react.js` e `axios` para gerar a interface de um gerenciador de Celulares.

A aplicação usa `react-router-dom` para navegar pelas seguintes rotas:

- `/`
- `/login`
- `/signup`
- `/add-product`
- `/edit-product-:id`
- `/products-list`
- `/details-product-:id`
- `/edit-details-product-:id/:index`

As únicas rotas públicas da aplicação são `/`, `login` e `signup`. As demais só são acessadas pelo usuário se ele estiver cadastrado ou ter feito o login, lhe gerando um token no back-end, que será verificado pelo componente `PrivateRoute.js`.

Após a verificação, o usuário entra na parte privada do site, caindo direto em `/products-list`, onde será renderizada a lista de produtos que forem adicionados. Nesta rota, também há botões de log out e de adicionar um produto. Quando há produtos na lista, além dos seus dados renderizados, o usuário pode editar os dados principais, navegando até a rota `/edit-product-:id`, remover todos os dados, ou navegar até a rota`/details-product-:id`, para ver, remover ou editar os detalhes do produto (cor e preço). Se o usuário quiser editar os detalhes, será direcionado para a rota `/edit-details-product-:id/:index`.

## Deploy

Você pode encontrar a aplicação full stack deste repositório no link abaixo:

[Cellphone Manager](https://cellphone-manager-client.vercel.app/)

-------------------------------------------------------------------------------------

## Cellphone Manager - Client Side

This is a front-end application that uses `react.js` and `axios` to generate the interface for a Cellphone Manager.

The application utilizes `react-router-dom` to navigate through the following routes:

- `/`
- `/login`
- `/signup`
- `/add-product`
- `/edit-product-:id`
- `/products-list`
- `/details-product-:id`
- `/edit-details-product-:id/:index`

The only public routes of the application are `/`, `/login`, and `/signup`. The remaining routes are only accessible to the user if they are registered or have logged in, generating a token on the back-end, which is verified by the `PrivateRoute.js` component.

After verification, the user enters the private part of the site, landing directly on `/products-list`, where the list of added products will be rendered. On this route, there are also log out and add product buttons. When there are products in the list, in addition to their rendered data, the user can edit the main data by navigating to the route `/edit-product-:id`, remove all data, or navigate to the route `/details-product-:id` to view, remove, or edit the product details (color and price). If the user wants to edit the details, they will be directed to the route `/edit-details-product-:id/:index.`

## Deploy

Você pode encontrar a aplicação full stack deste repositório no link abaixo:

[Cellphone Manager](https://cellphone-manager-client.vercel.app/)

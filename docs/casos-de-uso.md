# Casos de uso

## CDU 001

Inserir Produtos

Ator: Administrador 

### Fluxo principal 001

> Inserção de produtos consiste em permitir que o administrador faça inserção de produtos nos restaurantes cadastrados e persistencia na base de dados.

### Fluxo alternativo 001

> Só é possivel cadastrar um restaurante se tiver pelo menos um produto do menu.

## CDU 002

> Inserir Restaurantes
> Ator: Administrador

### Fluxo principal 002

> Inserção de restaurantes consiste em permitir ao administrador faça a inserção de novos restaurantes na base para disponibilização de escolha aos clientes da plataforma

## CDU 003

> Criar Cadastro
> Ator: Cliente Final

### Fluxo principal 003

> Permite ao cliente final inserção dos dados pessoais para cadastro e uso da plataforma

## CDU 004

> Criar pedido
> Ator: Cliente Final

### Fluxo principal 004

> Criação de pedidos permite ao usuario final buscar por resturantes e escolher produtos para entrega
> Extends: Finalizar pedido

## CDU 005

> Finalizar Pedido
> Ator: Cliente Final

### Fluxo principal 005

> Ao final do CDU 004 o cliente finaliza pedido para notificação do restaurantes iniciar o processo de entrega (restaurante side)

# Cenário de adicionar Restaurante
> 1- Usuário acessa o sistema com login e senha de administrador.

> 2- Sistema retorna restaurantes já cadastrados e opção de acesso para administrador.

> 3- Usuário seleciona a opção de administrador do sistema.

> 4- Sistema retorna opções de adicionar restaurantes, editar restaurantes e adicionar uma nova categoria.

> 5- Cliente clica em adicionar restaurante.

> 6- Sistema apresenta um formulário para preenchimento dos dados do novo restaurante (nome, categoria, logo etc).

> 7- Cliente clica no botão de adicionar produto para adicionar as opções do menu.

> 8- Sistema retorna formulário para preenchimento dos dados do item.

> 9- Cliente clica em salvar produto.

> 10- Sistema salva o produto.

> 11- Cliente clica em salvar.

> 12- Sistema salva os dados do restaurante e apresenta na lista de opções.


# Cenário de fazer um pedido
> 1-Cliente acessa o site https://projeto-delivery.herokuapp.com/

> 2-Cria o seu usuario de login ou já faz o login (caso tenha um cadastro criado)

> 3-Seleciona o restaurante que deseja

> 4-Adiciona a comida ao carrinho e fecha o pedido

> 5-Informa seus dados

> 6-Informa o endereço de entrega

> 7-Verifica os itens do pedido

> 8-Seleciona a forma de pagamento

> 9-Analisa o valor total da compra + frete de entrega

> 10-Conclui o pedido

> 11-Avalia a experiencia

> 12-Desloga do sistema

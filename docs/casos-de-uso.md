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




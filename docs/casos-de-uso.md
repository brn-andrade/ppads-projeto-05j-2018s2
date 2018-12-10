Universidade Presbiteriana Mackenzie
Faculdade de Computação e Informática

## UC1 – Inserir Restaurantes

Objetivo: Permitir que o administrador cadastre um restaurante para disponibilizar aos clientes do app

Requisitos: Ter os dados do restaurante

Atores: Administrador

Prioridade: Alta

Freqüência de uso: Eventual

Criticalidade: Média

Condição de Entrada: Administrador seleciona opção de inserir Restaurante

Fluxo Principal: 
1. O sistema apresenta formulário para preenchimento dos detalhes
do restaurante a ser cadastrado:
- CNPJ (campo editável)
- Nome (campo editável)
- Estado (lista dos Estados brasileiros)
- CEP (campo editável com validação)
- Descrição (campo editável)
- As opções Cadastrar e Cancelar
- Opção de inserir produtos

2. O ator escolhe a opção Incluir Produtos

3. O sistema apresenta formulário de cadastro de Produtos:
(Informações Gerais)
- Nome (campo editável)
- Descrição (campo editável)
- Preço (campo editável)

------------------

## UC2 – Criar Cadastro
Objetivo: Permitir que pessoas físicas cadastrem uma conta do aplicativo para uso do serviço

Requisitos: Ter CPF e email não antes cadastrado

Atores: Cliente

Prioridade: Alta
Freqüência de uso: Constante
Criticalidade: Alta
Condição de Entrada: O Cliente seleciona a opção Criar conta na tela inicial do APP.

Fluxo Principal:
1. O sistema apresenta formulário solicitando os dados de cadastro:
- CPF (campo editável)
- Nome (campo editável)
- Estado (lista dos Estados brasileiros)
- CEP (campo editável e com validação)
- Endereço (campo editáveis de Rua, número e complemento)
- E-mail (campo editável)
- Senha (campo editável com permissão de até 8 caracteres)
- As opções Cadastrar e Cancelar

Fluxo Alternativo:
1. O sistema apresenta uma opção para atualizar um restaurante
existente:
- Nome (campo editável)
- Estado (lista dos Estados brasileiros)
- CEP (campo editável com validação)
- Descrição (campo editável)
- As opções Atualizar e Cancelar
- Opção de inserir produtos
2. O ator escolhe a opção Incluir Produtos
3. O sistema apresenta formulário de cadastro de Produtos:
(Informações Gerais)
- Nome (campo editável)
- Descrição (campo editável)
- Preço (campo editável)
----------------

## UC3 – Criar Pedido
Objetivo: Permitir que o cliente cadastrado realize um pedido em um restaurante cadastrado

Requisitos: Estar logado na conta com dados verificados

Atores: Cliente
Prioridade: Média

Freqüência de uso: Eventual
Criticalidade: Alta
Condição de Entrada: O Cliente faz a busca do restaurante desejado e seleciona o produto desse restaurante

Fluxo Principal: 
1. O sistema apresenta uma lista com todos os restaurantes disponíveis para aquele cliente
- A opção com campo editável para busca por nome do restaurante
- Opção de Buscar
- Lista de restaurantes com logo, nome e descrição disponível para
clique

2. O ator escolhe o restaurante desejado

3. O sistema disponibiliza a lista de produtos daquele restaurante
com os preço e descrição disponível para clique
- Opção de adicionar a cesta

4. Sistema envia o produto solicitado para cesta

5. Sistema disponibiliza clique para cesta e exibe overview de pedido
- Opção de finalizar pedido

Fluxo Alternativo 1:

1. Sistema disponibiliza uma opção para atualização dados antes de
finalizar o pedido
- Opção de atualizar dados

2. Sistema disponibiliza formulário pré preenchido com os dados
daquele cliente:
- Nome (campo editável)
- Estado (lista dos Estados brasileiros)
- CEP (campo editável e com validação)
- Endereço (campo editáveis de Rua, número e complemento)

Fluxo Alternativo 2:
1. Sistema disponibiliza opção de cancelar o pedido
- Opção de cancelar

2. Sistema esvazia a cesta

----------------

## Cenarios:

 # Adicionar Restaurante
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
 
 # Realizar um pedido
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

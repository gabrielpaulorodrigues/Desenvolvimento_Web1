def lista_compras():
    # Inicializa a lista de compras
    lista_compras = []

    while True:
        # Exibe o menu de opções
        print("\nMenu de Opções:")
        print("1. Adicionar item")
        print("2. Remover item")
        print("3. Mostrar lista de compras")
        print("4. Sair")
        
        # Solicita ao usuário para escolher uma opção
        escolha = input("Escolha uma opção (1/2/3/4): ")
        
        if escolha == '1':
            # Adiciona um item à lista
            item = input("Digite o nome do item para adicionar: ")
            lista_compras.append(item)
            print(f"Item '{item}' adicionado à lista.")
            
        elif escolha == '2':
            # Remove um item da lista
            item = input("Digite o nome do item para remover: ")
            if item in lista_compras:
                lista_compras.remove(item)
                print(f"Item '{item}' removido da lista.")
            else:
                print(f"Item '{item}' não encontrado na lista.")
            
        elif escolha == '3':
            # Mostra a lista de compras
            if lista_compras:
                print("Lista de Compras:")
                for item in lista_compras:
                    print(f"- {item}")
            else:
                print("A lista de compras está vazia.")
            
        elif escolha == '4':
            # Encerra o loop e sai do programa
            print("Saindo do programa...")
            break
            
        else:
            # Opcional: Mensagem para opção inválida
            print("Opção inválida. Por favor, escolha uma opção entre 1 e 4.")

# Chamar a função
lista_compras()

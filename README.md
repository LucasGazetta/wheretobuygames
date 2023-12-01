Manual para utilização do Frontend (Vue + Node.js)

Antes de iniciar, certifique-se de que o Docker está instalado em sua máquina. 
Visite https://www.docker.com/ para instruções de instalação.

1. Construindo a Imagem Docker

    1.1 Navegue até o diretório do projeto frontend no terminal.
    
    1.2 Construa a imagem Docker usando o seguinte comando:
        docker build -t wheretobuygames-frontend .

        Isso criará uma imagem Docker com o nome wheretobuygames-frontend.
    
2. Executando o Contêiner Docker

    2.1 Após a construção da imagem, inicie o contêiner usando:
        docker run -p 8080:8080 wheretobuygames-frontend

    2.2 O frontend agora estará acessível no navegador em http://localhost:8080.

3. Dicas adicionais:
    - Se você modificar o código fonte, precisará reconstruir a imagem Docker para refletir as mudanças.
    - Para verificar os contêineres em execução, use docker ps.
    - Para parar um contêiner, use docker stop [CONTAINER_ID].
FROM node:20-slim

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Manter o container ativo
CMD ["tail", "-f", "/dev/null"]
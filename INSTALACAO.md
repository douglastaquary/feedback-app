# 📋 Instruções de Instalação e Execução

## 🚀 Passo a Passo para Executar o Projeto

### 1. Instalar Dependências
```bash
cd feedback-respostas-app
npm install
```

### 2. Configurar Variáveis de Ambiente
```bash
# Copiar o arquivo de exemplo
cp env.example .env

# Editar o arquivo .env e configurar a URL do Google Apps Script
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SUA_SCRIPT_ID_AQUI/exec
```

### 3. Executar o Projeto
```bash
npm run dev
```

O projeto estará disponível em: `http://localhost:3000`

## 🔧 Configuração do Google Sheets

### 1. Criar Google Apps Script
1. Acesse [Google Apps Script](https://script.google.com/)
2. Clique em "Novo Projeto"
3. Cole o código do arquivo `google-apps-script.js`
4. Salve o projeto

### 2. Configurar Permissões
1. No Google Apps Script, clique em "Executar" > "doPost"
2. Autorize as permissões necessárias
3. Selecione sua conta Google
4. Clique em "Avançado" > "Ir para [nome do projeto] (não seguro)"
5. Clique em "Permitir"

### 3. Publicar como Aplicativo Web
1. No Google Apps Script, clique em "Implantar" > "Nova implantação"
2. Escolha "Tipo" > "Aplicativo da Web"
3. Configure:
   - **Descrição**: Feedback App
   - **Executar como**: Eu mesmo
   - **Quem tem acesso**: Qualquer pessoa
4. Clique em "Implantar"
5. Copie a URL fornecida

### 4. Configurar URL no Projeto
1. Cole a URL copiada no arquivo `.env`:
```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SUA_SCRIPT_ID_AQUI/exec
```

### 5. Criar Planilha do Google Sheets
1. Acesse [Google Sheets](https://sheets.google.com/)
2. Crie uma nova planilha
3. No Google Apps Script, modifique a função `getOrCreateSheet()` se necessário
4. Ou simplesmente deixe o script criar a planilha automaticamente

## 📱 Testando o Aplicativo

### 1. Teste Local
- Acesse `http://localhost:3000`
- Preencha todas as telas
- Verifique se os dados aparecem no Google Sheets

### 2. Teste Mobile
- Use as ferramentas de desenvolvedor do navegador
- Ative o modo responsivo
- Teste em diferentes tamanhos de tela

## 🐛 Solução de Problemas

### Erro de CORS
- Verifique se o Google Apps Script está configurado corretamente
- Certifique-se de que a URL está correta no arquivo `.env`

### Dados não aparecem no Google Sheets
- Verifique as permissões do Google Apps Script
- Teste a função `testConnection()` no Google Apps Script
- Verifique o console do navegador para erros

### Problemas de Responsividade
- Teste em diferentes dispositivos
- Use as ferramentas de desenvolvedor do navegador
- Verifique se o viewport está configurado corretamente

## 📊 Estrutura dos Dados no Google Sheets

A planilha será criada automaticamente com as seguintes colunas:

| Coluna | Descrição |
|--------|-----------|
| Timestamp | Data/hora da avaliação |
| Sexo | Sexo do usuário |
| Idade | Idade do usuário |
| Horário da Visita | Período da visita |
| Prato | Prato consumido |
| Avaliação Atendimento | Nota de 1-5 |
| Comentário Atendimento | Comentário sobre atendimento |
| Avaliação Comida | Nota de 1-5 |
| Comentário Comida | Comentário sobre comida |
| Avaliação Tempo Espera | Nota de 1-5 |
| Comentário Tempo Espera | Comentário sobre tempo |
| Avaliação Conforto | Nota de 1-5 |
| Avaliação Música | Nota de 1-5 |
| Avaliação Ambiente | Nota de 1-5 |
| Comentário Espaço | Comentário sobre espaço |
| Comentário Final | Comentário geral |
| Data/Hora | Data/hora de envio |

## 🎯 Próximos Passos

1. **Personalização**: Modifique as opções de pratos, horários, etc.
2. **Analytics**: Adicione Google Analytics se necessário
3. **Backup**: Configure backup automático do Google Sheets
4. **Deploy**: Publique em um servidor para produção
5. **Domínio**: Configure um domínio personalizado se necessário

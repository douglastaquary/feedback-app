# 📊 Configuração do Google Sheets

## 🚀 Passo a Passo Completo

### 1. Criar Nova Planilha
1. Acesse [Google Sheets](https://sheets.google.com/)
2. Clique em "Em branco" para criar uma nova planilha
3. Renomeie para "Feedback Estabelecimentos"

### 2. Configurar Google Apps Script
1. Acesse [Google Apps Script](https://script.google.com/)
2. Clique em "Novo Projeto"
3. Renomeie o projeto para "Feedback API"
4. Cole o código do arquivo `google-apps-script.js`
5. Salve o projeto (Ctrl+S)

### 3. Configurar Permissões
1. No Google Apps Script, clique em "Executar" > "doPost"
2. Se aparecer uma tela de autorização:
   - Clique em "Revisar permissões"
   - Selecione sua conta Google
   - Clique em "Avançado" > "Ir para Feedback API (não seguro)"
   - Clique em "Permitir"

### 4. Publicar como Aplicativo Web
1. No Google Apps Script, clique em "Implantar" > "Nova implantação"
2. Configure:
   - **Tipo**: Aplicativo da Web
   - **Descrição**: API de Feedback
   - **Executar como**: Eu mesmo
   - **Quem tem acesso**: Qualquer pessoa
3. Clique em "Implantar"
4. **IMPORTANTE**: Copie a URL fornecida

### 5. Configurar URL no Projeto
1. No seu projeto local, edite o arquivo `.env`:
```bash
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SUA_SCRIPT_ID_AQUI/exec
```

### 6. Testar a Integração
1. Execute o projeto: `npm run dev`
2. Acesse `http://localhost:3000`
3. Preencha todas as telas
4. Verifique se os dados aparecem na planilha

## 📋 Estrutura da Planilha

A planilha será criada automaticamente com as seguintes colunas:

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Sexo | Idade | Horário da Visita | Prato | Avaliação Atendimento | Comentário Atendimento | Avaliação Comida | Comentário Comida | Avaliação Tempo Espera | Comentário Tempo Espera | Avaliação Conforto | Avaliação Música | Avaliação Ambiente | Comentário Espaço | Comentário Final | Data/Hora |

## 🔧 Personalização da Planilha

### Adicionar Formatação
1. Selecione a primeira linha (cabeçalhos)
2. Aplique formatação em negrito
3. Adicione cores de fundo para melhor visualização

### Adicionar Filtros
1. Selecione toda a planilha
2. Clique em "Dados" > "Criar um filtro"
3. Agora você pode filtrar por qualquer coluna

### Adicionar Gráficos
1. Selecione os dados de avaliação
2. Clique em "Inserir" > "Gráfico"
3. Escolha o tipo de gráfico desejado

## 📊 Exemplos de Análise

### 1. Média de Avaliações
```excel
=AVERAGE(F:F)  // Média do atendimento
=AVERAGE(H:H)  // Média da comida
=AVERAGE(J:J)  // Média do tempo de espera
```

### 2. Contagem por Período
```excel
=COUNTIF(D:D,"almoço")  // Quantos almoços
=COUNTIF(D:D,"jantar")  // Quantos jantares
```

### 3. Avaliações por Idade
```excel
=COUNTIFS(C:C,">=18",C:C,"<=30")  // Jovens (18-30)
=COUNTIFS(C:C,">=31",C:C,"<=50")  // Adultos (31-50)
=COUNTIFS(C:C,">=51")             // Idosos (51+)
```

## 🚨 Solução de Problemas

### Erro: "Script não autorizado"
- Verifique se você autorizou todas as permissões
- Tente executar a função `testConnection()` no Google Apps Script

### Erro: "Não é possível acessar a planilha"
- Verifique se a planilha está compartilhada com sua conta
- Certifique-se de que o Google Apps Script tem permissão para acessar

### Dados não aparecem
- Verifique se a URL está correta no arquivo `.env`
- Teste a URL diretamente no navegador
- Verifique o console do navegador para erros

### Erro de CORS
- Certifique-se de que o Google Apps Script está configurado como "Qualquer pessoa"
- Verifique se a URL está correta

## 📈 Monitoramento

### Logs do Google Apps Script
1. No Google Apps Script, clique em "Execuções"
2. Veja o histórico de execuções
3. Clique em uma execução para ver detalhes

### Logs do Navegador
1. Abra as ferramentas de desenvolvedor (F12)
2. Vá para a aba "Console"
3. Verifique se há erros de JavaScript

## 🔄 Backup e Segurança

### Backup da Planilha
1. No Google Sheets, clique em "Arquivo" > "Fazer download"
2. Escolha o formato desejado (Excel, PDF, etc.)

### Backup do Script
1. No Google Apps Script, clique em "Arquivo" > "Fazer download"
2. Escolha "Arquivo .json"

### Compartilhamento
1. No Google Sheets, clique em "Compartilhar"
2. Adicione os emails das pessoas que devem ter acesso
3. Defina as permissões (Visualizar, Comentar, Editar)

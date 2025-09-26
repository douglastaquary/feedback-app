# Feedback - Avaliação de Estabelecimentos

Um aplicativo web responsivo para avaliação de estabelecimentos, desenvolvido com React, TypeScript e arquitetura clean code.

## 🚀 Funcionalidades

- **Tela 1**: Informações básicas (sexo, idade, horário, prato)
- **Tela 2**: Avaliação do atendimento
- **Tela 3**: Avaliação da comida
- **Tela 4**: Avaliação do tempo de espera
- **Tela 5**: Avaliação do espaço (conforto, música, ambiente)
- **Tela 6**: Resumo e envio para Google Sheets

## 🛠️ Tecnologias

- React 18
- TypeScript
- Vite
- Styled Components
- React Hook Form
- Context API

## 📱 Responsividade

O aplicativo foi desenvolvido com foco em dispositivos móveis, mas também funciona perfeitamente em desktop.

## 🏗️ Arquitetura

O projeto segue os princípios de Clean Code e Clean Architecture:

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Layout/         # Componentes de layout
│   └── UI/             # Componentes de interface
├── contexts/           # Contextos do React
├── pages/              # Telas da aplicação
├── services/           # Serviços externos
├── types/              # Definições de tipos TypeScript
└── utils/              # Utilitários e constantes
```

## 🚀 Como executar

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
cp env.example .env
```

3. Configure a URL do Google Apps Script no arquivo `.env`:
```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

4. Execute o projeto:
```bash
npm run dev
```

## 📊 Integração com Google Sheets

Para integrar com o Google Sheets, você precisa:

1. Criar um Google Apps Script
2. Configurar a URL no arquivo `.env`
3. O script deve receber os dados via POST e salvar no Google Sheets

### Exemplo de Google Apps Script:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents).data;
    
    const sheet = SpreadsheetApp.getActiveSheet();
    sheet.appendRow([
      data.timestamp,
      data.gender,
      data.age,
      data.visitTime,
      data.dish,
      data.serviceRating,
      data.serviceComment,
      data.foodRating,
      data.foodComment,
      data.waitTimeRating,
      data.waitTimeComment,
      data.comfortRating,
      data.musicRating,
      data.environmentRating,
      data.spaceComment,
      data.finalComment
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 🎨 Design

O aplicativo utiliza um design moderno e intuitivo com:
- Gradientes suaves
- Animações fluidas
- Interface responsiva
- Feedback visual claro
- Emojis para melhor UX

## 📝 Licença

Este projeto está sob a licença MIT.

# 🏗️ Arquitetura do Projeto

## 📁 Estrutura de Pastas

```
feedback-respostas-app/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Layout/         # Componentes de layout (Container, Card)
│   │   └── UI/             # Componentes de interface (Button, Input, etc.)
│   ├── contexts/           # Contextos do React (FeedbackContext)
│   ├── pages/              # Telas da aplicação
│   │   ├── UserInfoScreen.tsx
│   │   ├── ServiceRatingScreen.tsx
│   │   ├── FoodRatingScreen.tsx
│   │   ├── WaitTimeRatingScreen.tsx
│   │   ├── SpaceRatingScreen.tsx
│   │   └── SummaryScreen.tsx
│   ├── services/           # Serviços externos
│   │   └── GoogleSheetsService.ts
│   ├── types/              # Definições de tipos TypeScript
│   │   └── index.ts
│   ├── utils/              # Utilitários e constantes
│   │   └── constants.ts
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Ponto de entrada
│   └── index.css           # Estilos globais
├── public/                 # Arquivos estáticos
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração TypeScript
├── vite.config.ts          # Configuração Vite
├── google-apps-script.js   # Script para Google Sheets
├── README.md               # Documentação principal
├── INSTALACAO.md           # Instruções de instalação
└── ARQUITETURA.md          # Este arquivo
```

## 🔄 Fluxo de Dados

### 1. Context API (Gerenciamento de Estado)
- **FeedbackContext**: Gerencia o estado global da aplicação
- **Estado**: Informações do usuário, avaliações, tela atual, loading, erros
- **Ações**: setScreen, updateData, setLoading, setError, reset

### 2. Navegação entre Telas
```
UserInfoScreen → ServiceRatingScreen → FoodRatingScreen → 
WaitTimeRatingScreen → SpaceRatingScreen → SummaryScreen
```

### 3. Coleta de Dados
- **Tela 1**: Informações básicas (sexo, idade, horário, prato)
- **Tela 2**: Avaliação do atendimento (1-5 + comentário)
- **Tela 3**: Avaliação da comida (1-5 + comentário)
- **Tela 4**: Avaliação do tempo de espera (1-5 + comentário)
- **Tela 5**: Avaliação do espaço (conforto, música, ambiente + comentário)
- **Tela 6**: Resumo e envio (comentário final + envio para Google Sheets)

## 🎨 Padrões de Design

### 1. Clean Architecture
- **Separação de responsabilidades**: Cada pasta tem uma responsabilidade específica
- **Inversão de dependência**: Componentes dependem de abstrações (contextos)
- **Independência de frameworks**: Lógica de negócio separada da UI

### 2. Component Composition
- **Componentes reutilizáveis**: Button, Input, Select, RatingSelector
- **Composição**: Componentes complexos são compostos por componentes simples
- **Props drilling evitado**: Uso do Context API

### 3. TypeScript
- **Tipagem forte**: Todos os dados são tipados
- **Interfaces**: Definições claras de contratos
- **Path mapping**: Imports organizados com aliases

## 🔧 Tecnologias e Ferramentas

### Frontend
- **React 18**: Biblioteca principal
- **TypeScript**: Tipagem estática
- **Vite**: Build tool e dev server
- **Styled Components**: CSS-in-JS
- **Context API**: Gerenciamento de estado

### Backend/Integração
- **Google Apps Script**: Backend serverless
- **Google Sheets**: Armazenamento de dados
- **Fetch API**: Comunicação HTTP

### Desenvolvimento
- **ESLint**: Linting de código
- **Prettier**: Formatação de código
- **Git**: Controle de versão

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

### Estratégias
- **Mobile First**: Design focado em mobile
- **Flexbox/Grid**: Layouts responsivos
- **Viewport Meta**: Configuração adequada
- **Touch Friendly**: Botões e inputs otimizados para touch

## 🔒 Segurança

### Frontend
- **Validação de formulários**: Validação client-side
- **Sanitização**: Inputs sanitizados
- **HTTPS**: Comunicação segura

### Backend (Google Apps Script)
- **Validação de dados**: Verificação de tipos e formatos
- **Error handling**: Tratamento de erros
- **Logs**: Registro de atividades

## 🚀 Performance

### Otimizações
- **Code splitting**: Carregamento sob demanda
- **Lazy loading**: Componentes carregados quando necessário
- **Memoização**: Evita re-renders desnecessários
- **Bundle size**: Dependências otimizadas

### Métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🧪 Testabilidade

### Estratégias
- **Componentes isolados**: Fácil de testar individualmente
- **Context mock**: Contextos podem ser mockados
- **Props testing**: Testes baseados em props
- **User interactions**: Testes de interação do usuário

## 📈 Escalabilidade

### Horizontal
- **Microserviços**: Google Apps Script como microserviço
- **CDN**: Assets podem ser servidos via CDN
- **Load balancing**: Múltiplas instâncias

### Vertical
- **Otimização de código**: Refatoração contínua
- **Caching**: Cache de dados e assets
- **Database**: Google Sheets pode ser migrado para banco de dados

## 🔄 Manutenibilidade

### Código
- **Clean Code**: Código limpo e legível
- **Documentação**: Código bem documentado
- **Padrões**: Padrões consistentes
- **Refatoração**: Refatoração contínua

### Deploy
- **CI/CD**: Pipeline de deploy automatizado
- **Versionamento**: Controle de versões
- **Rollback**: Capacidade de reverter mudanças
- **Monitoring**: Monitoramento de erros e performance

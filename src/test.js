console.log('Teste JavaScript carregado!');

const root = document.getElementById('root');
if (root) {
  root.innerHTML = `
    <div style="
      min-height: 100vh; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    ">
      <div style="
        background: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      ">
        <h1 style="color: #333; margin-bottom: 20px;">
          🎉 JavaScript Funcionando!
        </h1>
        <p style="color: #666; font-size: 18px;">
          Se você está vendo esta mensagem, o JavaScript está funcionando corretamente.
        </p>
        <p style="color: #999; font-size: 14px; margin-top: 20px;">
          Agora vamos testar o React...
        </p>
      </div>
    </div>
  `;
} else {
  console.error('Root element não encontrado!');
}

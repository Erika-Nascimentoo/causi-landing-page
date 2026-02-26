# Objetivo Atual
Ajustar o redirecionamento do botão de Call To Action na página de Obrigado.

# Progresso Atual
- Link do botão "Criar conta gratuita" na página de Obrigado (`HeroObrigado.tsx`) foi alterado.
- Removido o prefixo dinâmico `BASE_URL`, agora apontando para a string literal: `/programa-de-aceleracao-juridica/criar-conta`.
- Isso garante que o redirecionamento respeite a estrutura de roteamento global definida no Vercel/Site principal.
- Commit realizado: `fix(obrigado): ajustar link do botao para rota literal /programa-de-aceleracao-juridica/criar-conta`.

# Próximos Passos
Aguardar nova diretriz do usuário.

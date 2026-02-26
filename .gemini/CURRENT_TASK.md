# Objetivo Atual
Implementar validação de formulário e integração com a API de cadastro da Causi.

# Progresso Atual
- Componente `SignUpHero.tsx` atualizado com novos campos: **Nome** (`user_name`) e **Escritório** (`account_name`).
- Organização visual aprimorada: Nome/Escritório e Senha/Confirmação agora aparecem lado a lado em telas desktop (grid 2 colunas).
- Implementada validação de Front-end (senhas iguais e mínimo de 6 caracteres).
- Integrada chamada via `fetch` (POST) para o endpoint `https://causi.com.br/api/signup`.
- Adicionado tratamento de estados: **Loading** (com spinner Lucide), **Erro** (alerta visual vermelho) e **Sucesso** (tela de confirmação com checkmark verde).
- O botão principal agora limpa o estado de erro e exibe "Criando conta..." durante o processo.
- Commit realizado: `feat(cadastro): implementar validacao, novos campos e integracao com API de signup`.

# Próximos Passos
Aguardar testes de integração ou novos ajustes de design.

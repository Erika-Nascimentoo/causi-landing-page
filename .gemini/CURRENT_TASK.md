# Objetivo Atual
Mudar string de URL da página restrita de compra para contêr o hash do aniversário e evitar invasores ou curiosos de verem conteúdos internos liberados antecipadamente.

# Progresso Atual
- No repositório `causi-landing-page`, renomeada a pasta principal de leitura para o bundler Vite que estava antes em `/obrigado` para `/obrigado-30091986`.
- Atualizado o mapeamento da Rollup options dentro de `vite.config.ts`.
- Atualizado o Script JS inline que fica injetado no Index e refaz forçosamente os roteamentos da Vercel para a nova URL mascarada final.
- No repositório `causi-site`, atualizadas as Headers JSON com o parâmetro `X-Robots-Tag: noindex, nofollow, noarchive` forçando a segurança nesse exato novo link, derrubando o antigo.
- Atualizado estado em commits `feat` no branch com "alterar hash url da pagina de obrigado para -30091986".

# Próximos Passos
Aguardar nova diretriz do usuário.

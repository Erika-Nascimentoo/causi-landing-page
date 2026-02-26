# Objetivo Atual

Remover a gambiarra do UTM forçada nas URLs em todos os projetos do workspace Causi.

# Progresso Atual

- Pesquisado por arquivos com as configurações/hacks relacionados a "AutoUTM" em todos os 6 projetos no workspace (`causi-landing-page`, `causi-site`, `causi-hub`, `causi-form`, `causi-blog`, `causi-treinamentos`).
- Arquivos de hooks/components específicos para "AutoUTM" foram deletados.
- As referências e usos das funções/components foram removidos de dentro dos principais arquivos de rotas e apps (`main.tsx`, `App.tsx`, `layout.tsx`).
- Commits das remoções foram criados em cada projeto usando a mensagem: "chore: remover gambiarra de UTM forçada nas URLs" (exceto em `causi-treinamentos` que não é inicializado como git).

# Arquivos Modificados/Deletados

**causi-landing-page**

- Deletados:
  - `src/programa-de-aceleracao-juridica/hooks/useAutoUTM.ts`
  - `src/estruturacao-estrategica/hooks/useAutoUTM.ts`
- Modificados:
  - `src/programa-de-aceleracao-juridica/main.tsx`
  - `src/estruturacao-estrategica/main.tsx`

**causi-site**

- Deletados:
  - `src/components/AutoUTM.tsx`
- Modificados:
  - `src/app/layout.tsx`

**causi-hub**

- Deletados:
  - `src/hub/hooks/useAutoUTM.ts`
- Modificados:
  - `src/hub/App.tsx`

**causi-form**

- Deletados:
  - `src/hooks/useAutoUTM.ts`
- Modificados:
  - `src/App.tsx`

**causi-blog**

- Deletados:
  - `src/components/Analytics/AutoUTM.tsx`
- Modificados:
  - `src/app/(frontend)/layout.tsx`

**causi-treinamentos**

- Deletados:
  - `src/script-comercial/hooks/useAutoUTM.ts`
- Modificados:
  - `src/main.tsx`

# Próximo Passo

Aguardar novas instruções do usuário ou seguir com eventuais refatorações pendentes.

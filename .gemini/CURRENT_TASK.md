# Objetivo Atual
Criar lógica dinâmica de cálculo da data de imersão ("segunda terça do mês") e re-inserir.

# Progresso Atual
- Criada a função `getNextImersionDate()` no arquivo `SorSystemSection.tsx`.
- Lógica: Encontra a 2ª terça do mês (iterando dias verificando o `.getDay() === 2`).
- Avaliação de Time-To-Live: Se `now` (data e momento atual) for maior que a segunda terça do mês selecionada às 18:00h, roda imediatamente o algoritmo calculando para o mês subsequente.
- Formatada para saída string em formato brasileiro: `DD/MM/YY`.
- Varíavel `nextImersionDate` engatada dentro do placeholder span do UI em `SorSystemSection`.
- Comitado usando `git commit -m "feat(programa): criar data dinamica da imersao para a segunda terca do mes"`.

# Próximo Passo
Aguardar mais orientações do usuário.

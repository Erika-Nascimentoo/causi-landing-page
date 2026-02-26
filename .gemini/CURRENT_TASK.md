# Objetivo Atual
Remover duplicações conflitantes de margins e containers nas seções.

# Progresso Atual
- Analisou-se todas as seções (Hero, FaqFooter, SorSystem, Arsenal... etc) buscando aspas de centralização conflitantes (filho que necessita de mais grid que o pai com `mx-auto`).
- Solucionados:
    1. `SorSystemSection.tsx`: A seção inteira possuía `<div className="max-w-2xl mx-auto...">` que esmagava o título (`max-w-[960px]`). Atualizado o contêiner geral para `max-w-screen-2xl`, consertando aquele distanciamento e layout cortado acima do botão de pagamento.
    2. `FaqFooter.tsx`: A section tinha `max-w-4xl`, e o header interno tinha `max-w-[960px]`. Foi alterado o header para `w-full` com grid dinâmico.
    3. `Hero.tsx`: Havia um `<div className="max-w-4xl mx-auto">` exatamente dentro do contêiner idêntico com `max-w-4xl mx-auto`. Essa redundância de margem foi varrida e definida como responsiva.
- Realizado commit `"style: remover classes redundantes de max-width e mx-auto"`.

# Próximo Passo
Aguardar novo comando.

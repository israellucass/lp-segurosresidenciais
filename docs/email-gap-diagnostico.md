Assunto: Diagnóstico de consumo — como lidar com a diferença entre estimativa e fatura

Olá [nome],

Quero conversar sobre um ponto importante do módulo de eficiência energética: o que mostrar quando a soma dos aparelhos que o usuário cadastra não bate com o consumo da fatura dele.

## O problema

O usuário cadastra os aparelhos da casa e a gente estima quanto ele gasta. Mas às vezes essa estimativa fica bem diferente do que aparece na conta de luz dele. Dois casos comuns:

- **A estimativa fica muito abaixo** → o usuário acha que a empresa está cobrando a mais
- **A estimativa fica muito acima** → o usuário acha que algo está errado

Alguém sugeriu ajustar nossos números para que eles batam com a fatura. Fizemos uma análise e a conclusão foi: **não devemos fazer isso.** Explico por quê.

## Por que não ajustar os números

1. **O usuário vai perceber.** Se a estimativa dá 450 kWh mas mostramos 900 kWh, estamos mentindo. Quando ele descobrir (e vai descobrir), perde a confiança no módulo inteiro.

2. **As dicas de economia ficam erradas.** Se escondemos que falta cadastrar o chuveiro, nunca vamos sugerir que ele cadastre. O módulo para de ajudar.

3. **É risco regulatório.** Uma distribuidora que altera números de consumo para parecer mais precisa pode ter problemas com a ANEEL.

## O que propomos

Em vez de esconder a diferença, mostrar ela de forma clara e útil. A ideia é que o usuário sinta que a empresa está investigando junto com ele, não julgando.

### Passo 1 — Tela simples (2 semanas)

Mostrar os dois números lado a lado com uma barra visual:

```
Sua fatura:       900 kWh
Nossa estimativa: 750 kWh

[████████████░░░░] 83%
Seu cadastro cobre boa parte dos aparelhos
```

Sem termos técnicos. Sem fórmulas. Só o essencial.

### Passo 2 — Aprender com o tempo (1 mês)

Cada mês que passa, a gente compara o que estimamos com o que o usuário realmente gastou. Com esses dados, nosso cálculo fica mais preciso sozinho. Não precisamos mudar nada na tela — a precisão melhora sozinha.

### Passo 3 — Sugerir o que pode estar faltando (3 semanas)

Se a diferença continuar grande, sugerir 2 ou 3 aparelhos comuns que muitas pessoas esquecem de cadastrar: chuveiro, aquecedor, luzes externas. Nunca uma lista gigante — só o mais provável.

### Passo 4 — Mostrar a evolução (1 mês)

Um gráfico simples mostrando a estimativa e a fatura mês a mês. O objetivo é o usuário ver a linha da estimativa se aproximando da fatura conforme ele usa o app. Isso gera satisfação — ele vê que o app melhora com o tempo.

## Antes disso: o verdadeiro problema

Tudo que falei acima depende de o usuário completar o cadastro de aparelhos. E esse é o gargalo real: **muita gente nem começa o cadastro.**

No Brasil, o usuário já chega desconfiado: "por que eu tenho que listar tudo se a empresa deveria saber disso?". Para resolver isso, sugerimos:

- **Começar com o básico pré-preenchido:** geladeira, chuveiro e luzes já vêm marcados. O usuário só confirma ou muda as horas de uso. De 15 perguntas para 5 decisões.

- **Oferecer o caminho inverso:** em vez de pedir pra ele listar aparelhos, pedir o valor da fatura e dizer "com base nisso, acreditamos que sua casa tem estes aparelhos". Ele só valida, não cria do zero.

- **Recompensar o progresso:** depois do primeiro mês, mostrar "sua estimativa ficou mais precisa desde a última vez". Isso motiva a voltar e atualizar.

## Próximos passos

Precisamos combinar com a área comercial essa abordagem antes de começar a desenvolver. Sugiro uma reunião rápida para:

1. Mostrar como ficaria a tela simples
2. Combinar o cronograma das etapas
3. Validar a ideia de começar com aparelhos pré-preenchidos
4. Definir juntos o que vamos medir para saber se está funcionando

Qualquer dúvida ou ajuste, tô à disposição.

Abraço,
[nome]

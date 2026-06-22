# Reduzir tamanho do logo no footer

> Stack (verificado): HTML/CSS/JS vanilla + Tailwind CDN — `index.html:30-51`, `css/style.css`

## Contexto
O `<img class="footer__logo">` no footer não tem regra CSS de dimensionamento. O SVG tem viewBox `567.62 × 159.03`, então renderiza a ~568px de largura — desproporcional para um footer. O logo do Hero (`.hero__logo`) já tem `height: 48px; width: auto;` como padrão a clonar.

## Decisão
Adicionar `.footer__logo { height: 48px; width: auto; }` no CSS, clonando o padrão do `.hero__logo`, e reduzir para 40px no breakpoint ≤480px.

## Dispatch matrix
| # | Marker | Depende de # | Passo | Arquivo(s) | Done quando (comando + observável de runtime) |
|---|--------|--------------|-------|------------|-----------------------------------------------|
| 1 | [SERIAL] | — | Adicionar `.footer__logo { height: 48px; width: auto; }` logo após o bloco `.footer__logo-section` | `css/style.css:1198` | Abrir o arquivo e confirmar a regra existe entre `} /* fim .footer__logo-section */` e `.footer__columns` |
| 2 | [SERIAL] | 1 | Dentro de `@media (max-width: 480px)`, adicionar `.footer__logo { height: 40px; }` após `.footer__logo-section` | `css/style.css:1701-1704` | Abrir o breakpoint 480px e confirmar a regra existe |
| 3 | [VERIFIER] | 2 | Abrir `index.html` no browser e inspecionar o logo do footer | — | DevTools mostra `.footer__logo` com `height: 48px` (desktop) ou `40px` (≤480px); logo não ultrapassa a largura do container |

## Precedent a clonar
| Para o passo | path:linha | Linha-chave (verbatim) | Detalhe a NÃO perder |
|---|---|---|---|
| #1 | `css/style.css:321` | `.hero__logo { height: 48px; width: auto; }` | Usar `height` fixo + `width: auto` para manter proporção — não `width` fixo |

## Riscos e mitigações
| Risco | Sev | Mitigação |
|------|-----|-----------|
| Nenhum — CSS puro, sem side effects | baixa | Regra é específica (`.footer__logo`), não afeta outros elementos |

## Fora de escopo (NÃO fazer agora)
- NÃO alterar o logo do Hero (já está correto)
- NÃO alterar outros elementos do footer (company name, CNPJ, links)
- NÃO adicionar breakpoints novos ou refatorar responsividade existente
- NÃO modificar o SVG ou HTML

## Como validar manualmente
1. Abrir `index.html` no navegador (ou `python3 -m http.server` e abrir `localhost:8000`)
2. Inspecionar o logo no footer → DevTools mostra `.footer__logo` com `height: 48px` e `width: auto`
3. Redimensionar para ≤480px → logo reduz para `height: 40px`
4. Verificar que o logo não está distorcido (proporção preservada)

---
<!-- AUTO-NOTA — TRIVIAL: 1 arquivo, 2 regras CSS, sem decisão de arquitetura -->
<!-- altitude:2 precedent-detalhe:2 dag:2 done-runtime:2 cercas:2 stack:2 contrato:n/a decisão:2 | total:14/14 -->

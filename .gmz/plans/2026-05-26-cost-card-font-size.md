# Cost-card font-size: base 18px → 16px (comparison left)
> Gerado por architect (Qwen3.6-27B dense + thinking) em 2026-05-26

## Context
O `.cost-card__name` e `.cost-card__price` dentro da seção comparison left estão com 18px no base.
O usuário quer 16px em todos os breakpoints exceto no 480px (que já está em 14px e deve permanecer assim).

## Arquitetura
Mudar o font-size base de 18px para 16px. O breakpoint 768px já declara 16px (sem efeito prático),
e o 480px mantém 14px. Duas edições de uma linha, zero risco de colateral.

**Why:** O cascade CSS já faz o trabalho — base 16px propaga para desktop e tablet,
o 480px override mantém 14px.

## Dispatch matrix
| # | Marker | Files | Mudança | Done quando |
|---|--------|-------|---------|-------------|
| 1 | [SERIAL] | `css/style.css:607` | `.cost-card__name` font-size: 18px → 16px | Linha 607 mostra `font-size: 16px` |
| 2 | [SERIAL] | `css/style.css:618` | `.cost-card__price` font-size: 18px → 16px | Linha 618 mostra `font-size: 16px` |
| 3 | [VERIFIER] | `css/style.css` | Confirmar que 768px (16px) e 480px (14px) estão intactos | `grep -n 'cost-card__name\|cost-card__price' css/style.css` mostra 16px no base, 16px no 768px, 14px no 480px |

## Riscos
| Risco | Severidade | Mitigação |
|-------|------------|-----------|
| Nenhum identificado — mudança de 2px no base, breakpoints menores já sobrescrevem | baixa | Verificação visual pós-deploy |

## Verificação E2E
1. `grep -n 'cost-card__name\|cost-card__price' css/style.css` — confirmar valores: base=16px, 768px=16px, 480px=14px
2. Abrir a página em desktop (>768px) e verificar que `.cost-card__name` e `.cost-card__price` renderizam com 16px
3. Abrir a página em ≤480px e verificar que renderizam com 14px

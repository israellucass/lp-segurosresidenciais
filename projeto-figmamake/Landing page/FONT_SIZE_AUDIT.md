# Auditoria de Tamanhos de Fonte

## Situação Atual

### Tamanhos Identificados (15 tamanhos diferentes)

| Tamanho | Uso Atual | Ocorrências | Contexto |
|---------|-----------|-------------|----------|
| `text-[72px]` | Hero principal, Títulos de vídeo | 2x | "Proteja sua casa...", "Sorte que Transforma" |
| `text-8xl` | Footer CTA principal | 1x | "+1 milhão de clientes já utilizam esse benefício" |
| `text-7xl` | Footer CTA secundário | 1x | "+1 milhão de clientes já" |
| `text-6xl` | Título seção preços | 2x | "Escolha sua proteção" |
| `text-5xl` | Preços dos cards | 8x | "R$ 16,90", "R$ 24,90", "R$ 29,90" |
| `text-[48px]` | Texto destaque footer | 1x | "Você pode ser o próximo!" |
| `text-4xl` | Títulos de seção | 9x | Títulos gerais de seções |
| `text-3xl` | Subtítulos, CTAs | 8x | Botões grandes, subtítulos |
| `text-[30px]` | Subheadline hero animado | 1x | "Sem burocracia..." |
| `text-2xl` | Títulos de cards, textos médios | 12x | Nomes dos planos, descrições |
| `text-xl` | Texto médio-grande | 6x | Benefícios, listas |
| `text-lg` | Texto padrão maior | 10x | Parágrafos importantes, mensagens |
| `text-base` | Texto padrão | 8x | Labels de formulário, botões |
| `text-sm` | Texto pequeno | 11x | Mensagens de erro, detalhes, features |
| `text-xs` | Badge | 1x | "RECOMENDADO" |

---

## Problemas Identificados

1. **Excesso de tamanhos personalizados**: `text-[72px]`, `text-[48px]`, `text-[30px]` quebram a escala Tailwind
2. **Sobreposição de hierarquia**: text-5xl, text-6xl e text-[72px] competem pelo mesmo nível
3. **Muitos tamanhos intermediários**: 15 tamanhos para uma landing page é excessivo
4. **Inconsistência responsiva**: Alguns elementos usam escala customizada, outros usam Tailwind padrão

---

## Proposta: Sistema de Escala Tipográfica Simplificada

### Nova Escala (8 tamanhos)

| Novo Tamanho | Uso Proposto | Substituirá | Mobile | Tablet | Desktop |
|--------------|--------------|-------------|---------|---------|---------|
| **Display** `text-6xl` → `text-7xl` → `text-8xl` | Hero principal, títulos gigantes | text-[72px], text-8xl, text-7xl | 4xl | 6xl | 8xl |
| **H1** `text-4xl` → `text-5xl` → `text-6xl` | Títulos de seção principais | text-6xl, text-[48px] | 4xl | 5xl | 6xl |
| **H2** `text-3xl` → `text-4xl` → `text-5xl` | Subtítulos importantes, preços | text-5xl, text-4xl | 3xl | 4xl | 5xl |
| **H3** `text-2xl` → `text-3xl` → `text-4xl` | Títulos de cards, seções | text-3xl, text-[30px] | 2xl | 3xl | 4xl |
| **H4** `text-xl` → `text-2xl` | Títulos menores, nomes de planos | text-2xl | xl | 2xl | 2xl |
| **Body Large** `text-lg` → `text-xl` | Texto de destaque, CTAs | text-xl, text-lg | lg | xl | xl |
| **Body** `text-base` | Texto padrão | text-base | base | base | base |
| **Body Small** `text-sm` | Detalhes, features, labels secundários | text-sm, text-xs | sm | sm | sm |

### Benefícios da Nova Escala

✅ **Redução de 15 para 8 tamanhos** (53% menos)  
✅ **Elimina tamanhos customizados** (melhor para manutenção)  
✅ **Escala consistente** usando progressão Tailwind  
✅ **Mantém hierarquia visual** atual  
✅ **Mais responsivo** com breakpoints claros  

---

## Plano de Implementação

### Fase 1: Hero Section
- `text-[72px]` → `text-4xl md:text-6xl lg:text-8xl`
- `text-[30px]` → `text-2xl md:text-3xl lg:text-4xl`

### Fase 2: Seções de Conteúdo
- `text-6xl` mantém (usado corretamente)
- `text-5xl` para preços (já correto)
- `text-[48px]` → `text-3xl md:text-4xl lg:text-5xl`

### Fase 3: Cards e Elementos
- Título dos planos: `text-2xl` (já correto)
- Features: `text-sm` (já correto)
- Badge: `text-xs` → `text-sm` (melhor legibilidade)

### Fase 4: Footer e CTAs
- `text-8xl` e `text-7xl` → usar escala consistente `text-5xl md:text-6xl lg:text-7xl`

---

## Mapeamento Detalhado de Substituições

```
ANTES                          DEPOIS
────────────────────────────────────────────────────
text-[72px]         →         text-4xl md:text-6xl lg:text-8xl
text-8xl            →         text-5xl md:text-6xl lg:text-7xl  
text-7xl            →         text-4xl md:text-5xl lg:text-6xl
text-6xl            →         MANTER (correto)
text-5xl            →         MANTER (preços)
text-[48px]         →         text-3xl md:text-4xl lg:text-5xl
text-4xl            →         MANTER ou consolidar com 3xl
text-3xl            →         MANTER
text-[30px]         →         text-2xl md:text-3xl lg:text-4xl
text-2xl            →         MANTER
text-xl             →         MANTER (considerar text-lg)
text-lg             →         MANTER
text-base           →         MANTER
text-sm             →         MANTER
text-xs             →         text-sm (badge mais legível)
```

---

## Hierarquia Visual Preservada

### Nível 1 - Máximo Impacto
- Hero title: "Proteja sua casa..."
- Footer CTA: "+1 milhão de clientes"

### Nível 2 - Títulos de Seção
- "Escolha sua proteção"
- "Sorte que Transforma"

### Nível 3 - Preços e Destaque
- R$ 16,90 / R$ 24,90 / R$ 29,90
- Títulos de comparação

### Nível 4 - Subtítulos
- Nomes dos planos
- Benefícios principais

### Nível 5 - Corpo de Texto
- Descrições
- Features
- Labels

### Nível 6 - Detalhes
- Mensagens de erro
- Metadados
- Badges

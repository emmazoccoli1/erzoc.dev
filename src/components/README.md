# Components

Reusable Astro components ([docs](https://docs.astro.build/en/basics/astro-components/)).

| Component | Purpose |
|-----------|--------|
| **Button** | Links styled as buttons. Props: `href`, `variant` ('primary' \| 'secondary'). Use `<Button href="/x">Label</Button>`. |
| **Card** | Content card. Props: `title`, optional `href`. Slot for body. |
| **Header** | Site nav. Data from `src/data/site.json` → `nav.brand`, `nav.links`. Optional slot `after-nav`. |
| **Footer** | Site footer. Data from `src/data/site.json` → `footer.copyright`. Default slot for extra content. |

All use the **component script** (between `---`) for props and the **template** below for HTML; content passed as children goes into `<slot />`.

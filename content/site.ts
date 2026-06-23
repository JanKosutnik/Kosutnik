// ── Block types ──────────────────────────────────────────────

export interface TextBlock      { type: 'text';      content: string }
export interface HeadingBlock   { type: 'heading';   content: string }
export interface StatementBlock { type: 'statement'; content: string }
export interface RowBlock       { type: 'row';       label: string; value: string }
export interface LinkBlock      { type: 'link';      label: string; href: string; external?: boolean }
export interface LinksBlock     { type: 'links';     items: Array<{ label: string; href: string; external?: boolean }> }

export type Block =
  | TextBlock
  | HeadingBlock
  | StatementBlock
  | RowBlock
  | LinkBlock
  | LinksBlock

// ── Section & meta ────────────────────────────────────────────

export interface Section {
  id: string
  title: string
  render(): Block[]
}

export interface SiteMeta {
  name: string
  title: string
  description: string
  location: string
  email: string
}

// ── Data ─────────────────────────────────────────────────────

export const siteMeta: SiteMeta = {
  name: 'Jan Košutnik',
  title: 'Jan Košutnik',
  description: 'Designer and developer interested in user experience, quiet software and what is worth building.',
  location: 'Ljubljana',
  email: 'jan@kosutnik.com',
}

export const about: Section = {
  id: 'about',
  title: 'About',
  render(): Block[] {
    // TODO: populate in Prompt 2
    return []
  },
}

export const sections: Section[] = [about]

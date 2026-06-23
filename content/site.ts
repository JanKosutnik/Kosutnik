// ── Block types ──────────────────────────────────────────────

export interface TextBlock      { type: 'text';      content: string }
export interface HeadingBlock   { type: 'heading';   content: string }
export interface StatementBlock { type: 'statement'; content: string }
export interface RowBlock       { type: 'row';       label: string; value: string; href?: string }
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
    return [
      {
        type: 'statement',
        content:
          'Designer and developer interested in user experience, quiet software and what is worth building.',
      },
      {
        type: 'text',
        content:
          'Summer 2026 - working out what to build next. Making small tools with AI to find out.',
      },
    ]
  },
}

export const work: Section = {
  id: 'work',
  title: 'Work',
  render(): Block[] {
    return [
      // TODO: CONFIRM AVAILABILITY — replace with Jan's current status (available / not available)
      { type: 'text', content: 'Open to conversations about product, design, and engineering.' },
      { type: 'link', label: 'jan@kosutnik.com', href: 'mailto:jan@kosutnik.com' },
    ]
  },
}

export const now: Section = {
  id: 'now',
  title: 'Now',
  render(): Block[] {
    return [
      { type: 'row', label: 'Updated', value: 'June 2026' },
      {
        type: 'text',
        content:
          'Working out what to build next. Making small tools with AI to find out.',
      },
    ]
  },
}

export const principles: Section = {
  id: 'principles',
  title: 'Principles',
  render(): Block[] {
    return [
      { type: 'row', label: '01', value: 'Before you build something, ask whether it needs to exist.' },
      { type: 'row', label: '02', value: 'If you can remove it and nothing breaks, remove it.' },
      { type: 'row', label: '03', value: 'A good tool stays out of your way. The best one, you forget you are using.' },
      { type: 'row', label: '04', value: 'Every feature you add is a promise to keep it working.' },
    ]
  },
}

export const questions: Section = {
  id: 'questions',
  title: 'Open questions',
  render(): Block[] {
    return [
      { type: 'text', content: 'How do you count the time a tool costs you, not only the time it saves?' },
      { type: 'text', content: 'When does removing something improve a product more than adding something?' },
    ]
  },
}

export const writing: Section = {
  id: 'writing',
  title: 'Writing',
  render(): Block[] {
    return [
      {
        type: 'row',
        label: 'On removing things',
        value: '18 May 2026',
        href: '/writing/on-removing-things/',
      },
      {
        type: 'row',
        label: 'Notes toward a calmer interface',
        value: '2 April 2026',
        href: '/writing/notes-toward-a-calmer-interface/',
      },
    ]
  },
}

export const reading: Section = {
  id: 'reading',
  title: 'Reading',
  render(): Block[] {
    // now.md reading list is currently empty
    return [
      { type: 'text', content: 'Nothing listed yet.' },
    ]
  },
}

export const uses: Section = {
  id: 'uses',
  title: 'Uses',
  render(): Block[] {
    // now.md uses list is currently empty
    return [
      { type: 'text', content: 'Nothing listed yet.' },
    ]
  },
}

export const contact: Section = {
  id: 'contact',
  title: 'Contact',
  render(): Block[] {
    return [
      {
        type: 'links',
        items: [
          { label: 'jan@kosutnik.com', href: 'mailto:jan@kosutnik.com' },
          { label: 'X', href: 'https://x.com/JanKosutnik', external: true },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jankosutnik/', external: true },
        ],
      },
    ]
  },
}

export const sections: Section[] = [
  about,
  work,
  now,
  principles,
  questions,
  writing,
  reading,
  uses,
  contact,
]

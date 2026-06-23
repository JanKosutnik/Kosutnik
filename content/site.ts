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
      { type: 'text', content: 'Ljubljana, Slovenia. Previously: UX, frontend and QA.' },
      { type: 'heading', content: 'reading' },
      { type: 'text', content: 'Books I recommend' },
      {
        type: 'links',
        items: [
          { label: 'The Book of Elon - Eric Jorgenson', href: 'https://thebookofelon.com', external: true },
          { label: 'Rework - Fried & DHH', href: 'https://basecamp.com/books/rework', external: true },
          { label: 'Getting Real - 37signals', href: 'https://basecamp.com/books/getting-real', external: true },
          { label: 'Hatching Twitter - Nick Bilton', href: 'https://www.hatchingtwitter.com', external: true },
          { label: 'Bad Blood - John Carreyrou', href: 'https://www.badbloodbook.com', external: true },
        ],
      },
      { type: 'heading', content: 'uses' },
      { type: 'text', content: 'Nothing listed yet.' },
    ]
  },
}

export const work: Section = {
  id: 'work',
  title: 'Work',
  render(): Block[] {
    return [
      { type: 'statement', content: 'I build small systems that stay out of the way.' },
      { type: 'text', content: "Most problems are not technical first - they're decision problems. I start with the decision, not the stack, and build the smallest thing that solves it. Sometimes that means AI. Sometimes it's deleting a tool, changing a process, or talking you out of the impressive version." },
      { type: 'text', content: 'I can follow a decision from the first sketch to the last pixel to the test that keeps it honest.' },
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
  contact,
]

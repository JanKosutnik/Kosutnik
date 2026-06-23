import Terminal from '@/components/terminal/Terminal'
import { sections, siteMeta } from '@/content/site'

export default function Home() {
  return (
    <main>
      {/* SSR fallback: fully readable without JS — TODO: populate in Prompt 2 */}
      <noscript>
        <p>{siteMeta.description}</p>
        <p>{siteMeta.location} &mdash; <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a></p>
      </noscript>

      {/* Terminal client island — receives section list for navigation */}
      <Terminal />

      {/* Hidden SSR content for search engines and no-JS — TODO: render in Prompt 2 */}
      <div aria-hidden="true" data-sections={sections.length} style={{ display: 'none' }} />
    </main>
  )
}

import GardenHeader from '@/components/GardenHeader'

export default function SiteShell({ children }) {
  return (
    <>
      <GardenHeader />
      <div className="max-w-[44rem] px-6 pt-12 pb-24">
        <main>{children}</main>
      </div>
    </>
  )
}

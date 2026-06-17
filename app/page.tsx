import GardenIcons from '@/components/GardenIcons'
import GardenHeader from '@/components/GardenHeader'

export default function Home() {
  return (
    <>
      <GardenIcons />
      <div id="top" className="mx-auto max-w-[44rem] px-6 pt-6 pb-24">
        <GardenHeader />
        {/* sections go here */}
      </div>
    </>
  )
}

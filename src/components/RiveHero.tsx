import { useRive } from '@rive-app/react-canvas'

export function RiveHero() {
  const { RiveComponent } = useRive({
    src: `${import.meta.env.BASE_URL}eddy_interactions.riv`,
    autoplay: true,
    stateMachines: 'Reactive Eddy',
  })

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 sm:p-4 sm:p-5">
      <div className="aspect-[4/3] sm:aspect-video rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden bg-black">
        <RiveComponent className="w-full h-full" />
      </div>
      <div className="pt-4 sm:pt-5 px-1">
        <h3 className="text-lg sm:text-xl font-semibold">Interactive demo</h3>
        <p className="mt-2 text-sm sm:text-base text-white/65 leading-6 sm:leading-7">
          This is a live Rive animation running in real time.
        </p>
      </div>
    </div>
  )
}
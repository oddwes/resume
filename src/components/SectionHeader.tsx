import Line from "./Line"

export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <Line />
    </div>
  )
} 
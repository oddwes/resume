import Line from "./Line"

export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <Line />
    </div>
  )
} 
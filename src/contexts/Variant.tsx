import { createContext } from 'react'

export const VariantContext = createContext<string>('cool')

interface VariantProps {
  setVariant: (variant: string) => void;
}

export const Variant: React.FC<VariantProps> = ({ setVariant }) => {
  return (
    <nav className="flex gap-2 p-2">
      <button
        onClick={() => setVariant('regular')}
        className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
      >
        Regular
      </button>
      <button
        onClick={() => setVariant('blockchain')}
        className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
      >
        Blockchain
      </button>
      <button
        onClick={() => setVariant('cool')}
        className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
      >
        Cool
      </button>
    </nav>
  )
} 
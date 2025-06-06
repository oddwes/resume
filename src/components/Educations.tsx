import Line from './Line'

export const Education = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Education</h3>
      <Line />
      <ul className="px-4 space-y-2">
        <li>
          <b className="text-lg">Learn Solidity & Etherem Dev Bootcamp</b><br />
          <i className="text-gray-600">Alchemy University</i>
        </li>
        <li>
          <b className="text-lg">Bachelor of Engineering (Computer Engineering)</b><br />
          <i className="text-gray-600">Concordia University</i>
        </li>
        <li>
          <b className="text-lg">Bachelor of Science (Pure and Applied Sciences)</b><br />
          <i className="text-gray-600">Marianopolis College</i>
        </li>
      </ul>
    </div>
  )
} 
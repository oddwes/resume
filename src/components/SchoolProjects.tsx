import Line from './Line'

export const SchoolProjects = () => {
  return (
    <div className="px-4">
      <h3 className="text-xl font-bold mb-2">School Projects</h3>
      <Line />
      <ul className="space-y-2">
        <li>
          <b className="text-lg">Orchestr8 - Capstone Project</b><br />
          <span className="text-gray-600">Musical interpreter, music sheet generator and robotic piano player</span>
        </li>
        <li>
          <b className="text-lg">&quot;Sumo&quot; Robot</b><br />
          <span className="text-gray-600">Atmega8 microcontroller, edge detection and opponent tracking</span>
        </li>
      </ul>
    </div>
  )
} 
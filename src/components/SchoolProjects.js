import Line from './Line'

export const SchoolProjects = () => {
  return (
    <div className="main-panel">
      <h3>School Projects</h3>
      <Line />
      <ul>
        <li>
          <b>Orchestr8 - Capstone Project</b><br />
          Musical interpreter, music sheet generator and robotic piano player
        </li>
        <li>
          <b>&quot;Sumo&quot; Robot</b><br />
          Atmega8 microcontroller, edge detection and opponent tracking
        </li>
      </ul>
    </div>
  )
}
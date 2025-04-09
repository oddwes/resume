import Line from './Line'

export const Technologies: React.FC = () => {
  return (
    <div className="main-panel">
      <h3 className="text-xl font-bold mb-2">Technologies</h3>
      <Line />
      <div className="pl-4 text-gray-700">
        Ruby on Rails, React, Typescript, NodeJS, Python, Solidity<br />
        Git, Docker, Kubernetes, AWS, Capistrano<br />
        MySQL, Postgresql<br />
        Mac, Linux, Windows
      </div>
    </div>
  )
} 
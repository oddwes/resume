import { createContext } from 'react'
import { Nav } from 'react-bootstrap'

export const VariantContext = createContext('regular')

export const Variant = ({ setVariant }) => {
  return (
    <Nav
      onSelect={(selectedKey) => setVariant(selectedKey)}
      style={{padding: '5px'}}
    >
      <Nav.Item>
        <Nav.Link eventKey='regular'>
          Regular
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='blockchain'>
          Blockchain
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
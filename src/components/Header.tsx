import React, { useContext } from 'react'
import { VariantContext } from './Variant'

export const Header: React.FC = () => {
  const variant = useContext(VariantContext)

  const name =
    variant === 'regular'
      ? (<h1 className="text-2xl font-bold">Julian Lai</h1>)
      : (<h1 className="text-2xl font-bold">oddwes</h1>)

  const contactInfo =
    variant === 'regular' ?
      (
        <React.Fragment>
          <div className="mt-2">
            <b>Phone</b> (778) 682-4384
          </div>
          <div>
            <b>E-mail</b> julianlai.777@gmail.com
          </div>
        </React.Fragment>
      ) :
      (
        <React.Fragment>
          <div className="mt-2">
            <b>Telegram</b> @oddwes
          </div>
          <div>
            <b>Discord</b> @oddwes
          </div>
          <div>
            <b>E-mail</b> oddwes3.0@gmail.com
          </div>
        </React.Fragment>
      )

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        {name}
        {contactInfo}
      </div>
      <div>
        <h3 className="text-xl text-right">
          Fullstack Developer
        </h3>
      </div>
    </div>
  )
} 
import React, { useContext } from 'react'
import { VariantContext } from './Variant'

export const Header = () => {
  const variant = useContext(VariantContext)

  const name =
		variant === 'regular'
			? (<h1>Julian Lai</h1>)
			: (<h1>oddwes</h1>)

	const contactInfo =
		variant === 'regular' ?
			(
				<React.Fragment>
					<div>
						<b>Phone</b> (778) 682-4384
					</div>
					<div>
						<b>E-mail</b> julianlai.777@gmail.com
					</div>
				</React.Fragment>
			) :
			(
				<React.Fragment>
					<div>
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
    <React.Fragment>
      {name}
      {contactInfo}
    </React.Fragment>
  )
}
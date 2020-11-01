import React from "react"
import { Dimmer, Loader } from "semantic-ui-react"

export const ResultLoader: React.FC = () => {
	return (
		<Dimmer active inverted>
			<Loader>Retrieving GIFs...</Loader>
		</Dimmer>
	)
}

import React from "react"
import { Card, Header, Image, Button } from "semantic-ui-react"

interface ResultProps {
	result: Result
	addToFavorites: (gif: Result) => void
}

export const Result: React.FC<ResultProps> = ({ result, addToFavorites }) => {
	const { title, images } = result

	return (
		<Card>
			<Card.Content>
				<Image src={images.preview_gif.url} fluid />
				<Header as="h5">{title}</Header>
			</Card.Content>
			<Button color="violet" onClick={() => addToFavorites(result)}>
				Add to Faves
			</Button>
		</Card>
	)
}

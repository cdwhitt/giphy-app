import React from "react"
import { Header, Image, Message } from "semantic-ui-react"
import { Favorite } from "./Favorite"

interface FavoritesProps {
	favorites: Array<Favorite>
}

export const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
	const favoritesList = favorites.map((favorite: Favorite) => (
		<Favorite favorite={favorite} key={favorite.id} />
	))
	return (
		<>
			<Header as="h3" textAlign="center">
				My Favorite GIFs
			</Header>
			<Image.Group size="tiny">{favoritesList}</Image.Group>
			{favorites.length === 0 && (
				<Message info size="tiny">
					You haven't added any GIFs to your favorites yet!
				</Message>
			)}
		</>
	)
}

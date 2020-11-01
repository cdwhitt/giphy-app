import React from "react"

import { Modal, Image, Header } from "semantic-ui-react"

interface FavoriteProps {
	favorite: Favorite
}

export const Favorite: React.FC<FavoriteProps> = ({ favorite }) => {
	const { id, images, title, bitly_gif_url } = favorite
	return (
		<Modal
			closeIcon
			key={id}
			trigger={
				<Image
					verticalAlign="top"
					bordered
					src={images.preview_webp.url}
					style={{ cursor: "pointer" }}
					rounded
				/>
			}
		>
			<Modal.Header>{title}</Modal.Header>
			<Modal.Content>
				<Header as="h2">
					<a href={bitly_gif_url} target="blank">
						{bitly_gif_url}
					</a>
				</Header>

				<Image fluid src={images.original.url} />
			</Modal.Content>
		</Modal>
	)
}

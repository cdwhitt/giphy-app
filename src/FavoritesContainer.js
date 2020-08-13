import React from "react";
import { Card, Header, Image, Message, Modal } from "semantic-ui-react";

export const FavoritesContainer = ({ favorites, alreadyAddedError }) => {
  const favoritesList = favorites.map((favorite) => (
    <Modal
      closeIcon
      key={favorite.id}
      trigger={
        <Card>
          <Image src={favorite.images.preview_webp.url} />
        </Card>
      }
    >
      <Modal.Header>{favorite.title}</Modal.Header>
      <Modal.Content>
        <Header as="h2">
          Source:
          <a href={favorite.bitly_gif_url} target="blank">
            {favorite.bitly_gif_url}
          </a>
        </Header>

        <Image fluid src={favorite.images.original.url} />
      </Modal.Content>
    </Modal>
  ));
  return (
    <>
      <Header as="h2">My Favorite GIFs</Header>
      {alreadyAddedError && (
        <Message color="red">
          Whoops! Looks like you've already added that GIF to your faves, kiddo.
        </Message>
      )}
      <Card.Group>{favorites && favoritesList}</Card.Group>
    </>
  );
};

import React from "react";
import { Button, Card, Divider, Header, Image } from "semantic-ui-react";

export const GiphyResultsContainer = ({
  results,
  addToFavorites,
  searchString,
  setSearchString,
  setResults,
  setAlreadyAddedError,
}) => {
  const resultImages = results.map((result) => (
    <Card key={result.id}>
      <Card.Content>
        <Header as="h5">{result.title}</Header>
        <Image src={result.images.preview_gif.url} />
      </Card.Content>
      <Button color="violet" onClick={() => addToFavorites(result)}>
        Add to Faves
      </Button>
    </Card>
  ));

  return (
    <>
      {resultImages.length > 0 && (
        <>
          <Header as="h2">Results for '{searchString}':</Header>
          {results.length > 0 && (
            <Button
              color="red"
              inverted
              circular
              onClick={() => {
                setResults([]);
                setSearchString("");
                setAlreadyAddedError(false);
              }}
            >
              Clear Results
            </Button>
          )}
          <Divider hidden />
          <Card.Group itemsPerRow="4">{resultImages}</Card.Group>
        </>
      )}
    </>
  );
};

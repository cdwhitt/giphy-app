import axios from "axios";
import React, { useState } from "react";
import { Container, Grid, Header, Icon } from "semantic-ui-react";

import { FavoritesContainer } from "./FavoritesContainer";
import { GiphyResultsContainer } from "./GiphyResultsContainer";
import { SearchInputContainer } from "./SearchInputContainer";

export const GiphyContainer = () => {
  const [searchString, setSearchString] = useState("");
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [alreadyAddedError, setAlreadyAddedError] = useState(false);

  const handleSearchChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    const results = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "neuJaSgcHylJBQ7sbp04I4zzMpdI7ITl",
        q: searchString,
        limit: 100,
      },
    });

    setResults(results.data.data);
  };

  const addToFavorites = (gif) => {
    if (favorites.find((favorite) => favorite.id === gif.id)) {
      setAlreadyAddedError(true);
    } else {
      setFavorites([...favorites].concat(gif));
      setAlreadyAddedError(false);
    }
  };

  return (
    <Container>
      <Header as="h1" textAlign="center" icon>
        <Icon name="image outline" />
        Giphy Search Engine
      </Header>

      <Grid>
        <Grid.Row>
          <Grid.Column width="6">
            <FavoritesContainer
              favorites={favorites}
              alreadyAddedError={alreadyAddedError}
            />
          </Grid.Column>
          <Grid.Column width="10">
            <SearchInputContainer
              searchString={searchString}
              handleSearchSubmit={handleSearchSubmit}
              handleSearchChange={handleSearchChange}
            />

            <GiphyResultsContainer
              results={results}
              addToFavorites={addToFavorites}
              searchString={searchString}
              setSearchString={setSearchString}
              setResults={setResults}
              setAlreadyAddedError={setAlreadyAddedError}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

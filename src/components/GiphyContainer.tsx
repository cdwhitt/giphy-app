import axios from "axios"
import React, { useState } from "react"
import { toast } from "react-toastify"
import {
	Container,
	Grid,
	Header,
	Icon,
	Image,
	Divider,
} from "semantic-ui-react"
import { Favorites } from "./Favorites"
import { SearchResults } from "./SearchResults"
import { SearchInput } from "./SearchInput"

export const GiphyContainer: React.FC = () => {
	const [searchString, setSearchString] = useState("")
	const [resultString, setResultString] = useState("")
	const [results, setResults] = useState<Result[]>([])
	const [loading, setLoading] = useState(false)
	const [favorites, setFavorites] = useState<Favorite[]>([])
	const [searchError, setSearchError] = useState("")

	const handleSearchChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setSearchString(event.target.value)
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
		if (event.key === "Enter") {
			handleSearchSubmit(event)
		}
	}

	const handleSearchSubmit = async (
		event: React.KeyboardEvent<HTMLDivElement>
	) => {
		event.preventDefault()
		setLoading(true)
		try {
			const results = await axios("https://api.giphy.com/v1/gifs/search", {
				params: {
					api_key: "neuJaSgcHylJBQ7sbp04I4zzMpdI7ITl",
					q: searchString,
					limit: 100,
				},
			})
			setResultString(searchString)
			setResults(results.data.data)
			setLoading(false)
			if (!results.data.data.length) {
				throw new Error("Sorry, there are no good matches for that search")
			}
		} catch (error) {
			setSearchError(error)
			setLoading(false)
		}
	}

	const handleClearClick = () => {
		setResults([])
		setSearchString("")
		setSearchError("")
	}

	const addToFavorites = (gif: Result) => {
		if (favorites.find((favorite) => favorite.id === gif.id)) {
			toast.error(
				"Sorry, but you've already added that GIF to your favorites.",
				{
					hideProgressBar: true,
				}
			)
		} else {
			toast.success(`Successfully added ${gif.title} to favorites!`, {
				hideProgressBar: true,
			})
			setFavorites([...favorites].concat(gif))
		}
	}

	return (
		<Container>
			<Header as="h1" textAlign="center" icon>
				<Icon name="image outline" />
				Giphy Search Engine
				<Header.Subheader>
					Powered by <Image size="tiny" spaced src="giphylogo.png" />
				</Header.Subheader>
			</Header>

			<Grid stackable>
				<Grid.Row>
					<Divider hidden />

					<Grid.Column width="4">
						<Favorites favorites={favorites} />
					</Grid.Column>

					<Grid.Column width="12">
						<SearchInput
							searchString={searchString}
							handleSearchChange={handleSearchChange}
							handleKeyPress={handleKeyPress}
							handleSearchSubmit={handleSearchSubmit}
						/>

						<SearchResults
							loading={loading}
							results={results}
							addToFavorites={addToFavorites}
							resultString={resultString}
							handleClearClick={handleClearClick}
							searchError={searchError}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	)
}

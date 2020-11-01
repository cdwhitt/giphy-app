import React from "react"
import { Result } from "./Result"
import { ResultLoader } from "./ResultLoader"
import { Button, Card, Divider, Header } from "semantic-ui-react"

interface SearchResultsProps {
	results: Array<Result>
	loading: boolean
	addToFavorites: (gif: Result) => void
	handleClearClick: () => void
	resultString: string
	searchError: string
}

export const SearchResults: React.FC<SearchResultsProps> = ({
	results,
	loading,
	addToFavorites,
	handleClearClick,
	resultString,
	searchError,
}) => {
	const resultImages = results.map((result) => (
		<Result key={result.id} result={result} addToFavorites={addToFavorites} />
	))

	if (loading) {
		return <ResultLoader />
	}

	let clearButton
	if (results.length) {
		clearButton = (
			<Button color="red" inverted circular onClick={handleClearClick}>
				Clear Results
			</Button>
		)
	}
	if (searchError) {
		clearButton = (
			<Button color="red" inverted circular onClick={handleClearClick}>
				Clear Search
			</Button>
		)
	}

	return (
		<>
			<Header as="h2" textAlign="center">
				{results.length ? `Results for '${resultString}':` : `${searchError}`}
				<Header.Subheader>
					{results.length > 0 &&
						"Click 'Add to Faves' to add a GIF to your list of favorites"}
					{searchError && "Please try again"}
				</Header.Subheader>
			</Header>
			<div style={{ textAlign: "center" }}>{clearButton}</div>

			<Divider hidden />
			<Card.Group centered itemsPerRow="3">
				{resultImages}
			</Card.Group>
		</>
	)
}

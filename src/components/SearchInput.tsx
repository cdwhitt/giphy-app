import React from "react"
import { Icon, Form } from "semantic-ui-react"

interface SearchInputProps {
	searchString: string
	handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void
	handleSearchSubmit: (event: React.KeyboardEvent<HTMLDivElement>) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({
	searchString,
	handleSearchChange,
	handleKeyPress,
	handleSearchSubmit,
}) => {
	return (
		<Form>
			<Form.Input
				value={searchString}
				onChange={handleSearchChange}
				onKeyPress={handleKeyPress}
				fluid
				icon={
					<Icon
						name="search"
						color="green"
						type="submit"
						inverted
						circular
						link
						onClick={handleSearchSubmit}
					/>
				}
				placeholder="Search for your favorite GIFs!"
			/>
		</Form>
	)
}

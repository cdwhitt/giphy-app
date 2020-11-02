interface Result {
	id: string
	title: string
	images: {
		preview_gif: { url: string }
		original: { url: string }
	}
	bitly_gif_url: string
}

type Favorite = Result

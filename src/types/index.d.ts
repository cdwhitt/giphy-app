interface Result {
	id: string
	title: string
	images: {
		preview_gif: { url: string }
		// preview_webp: { url: string }
		original: { url: string }
	}
	bitly_gif_url: string
}

type Favorite = Result

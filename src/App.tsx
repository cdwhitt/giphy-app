import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { GiphyContainer } from "./components/GiphyContainer"

function App() {
	return (
		<>
			<GiphyContainer />
			<ToastContainer position="top-left" autoClose={2000} />
		</>
	)
}

export default App

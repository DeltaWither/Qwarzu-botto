import "./styles/reset.css"
import "./styles/globals.css"
import Header from "../components/Header.jsx"

function MyApp({ Component, pageProps }) {
    return <>
             <Header/>
             <Component {...pageProps} />
           </>
}

export default MyApp

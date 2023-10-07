
import  "../styles/styles.css";
import Header from "../components/header";

export default function App({ Component, pageProps }) {
    
    return <>
     <Header/>
     <Component {...pageProps} />
       </> ;

}

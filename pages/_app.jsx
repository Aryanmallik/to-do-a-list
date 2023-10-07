
import  "../styles/styles.css";
import Header from "../components/header";

export default function App({ Component, pageProps }) {
    
    return <div style={{backgroundColor:"lightblue"}}>
     <Header/>
     <Component {...pageProps} />
       </div> ;

}

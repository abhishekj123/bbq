import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/banner.css'
import '../styles/special.css'
import '../styles/subcard.css'
import '../styles/embla.css'
import '../styles/imageslide.css'
import '../styles/location.css'
import '../styles/bbq.css'
import '../styles/menu.css'
import '../styles/gallery.css'
import '../styles/dateelement.css'
import '../styles/menuSubPanel.css'
import "../styles/react-datepicker.css";
import '../styles/styles.module.css'
import type { AppProps } from 'next/app'
import "@material-tailwind/react/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

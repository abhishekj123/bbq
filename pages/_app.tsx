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
import '../styles/Item.css'
import "../styles/react-datepicker.css";
import "../styles/orderPanel.css";
import "../styles/card.css";
import "../styles/home.css";
import "../styles/sidebar.css";
import "../styles/Menuitemcard.css";
import "../styles/Mainmenu.css";
import "../styles/cart.css";
import "../styles/Mainmenudropdown.css";
import '../styles/styles.module.css'
import type { AppProps } from 'next/app'
import "@material-tailwind/react/tailwind.css";
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import myStore from '../reducers/store'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return ( 
    <SessionProvider session={session}>
      <Provider store={myStore}>
      <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp

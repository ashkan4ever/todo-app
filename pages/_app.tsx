import 'antd/dist/antd.css'
import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper, store } from "../src/store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default wrapper.withRedux(MyApp);

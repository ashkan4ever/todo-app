import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Global } from "@emotion/react";
import { wrapper, store } from "../src/store/store";
import globalStyles from "../src/utils/global.style";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <div className="main-container">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);

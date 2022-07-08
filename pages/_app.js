import "scss/index.scss";
import { IKContext } from "imagekitio-react";

function MyApp({ Component, pageProps }) {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/l4k8brcjb/">
      <Component {...pageProps} />
    </IKContext>
  );
}

export default MyApp;

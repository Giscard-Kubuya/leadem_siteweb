import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import ClientContext from "../contexts/ClientContext";
import Service from "../Service";

function Content() {
  const {api,base_url_api} = useContext(ClientContext);

  const model = new Service(api);

  return (
    <>
      <Outlet context={[model,base_url_api]}/>
      <Helmet>
        <script defer src="/assets/assets_front/fontawesome/js/all.js"></script>
        <script src="/assets/assets_front/plugins/popper.min.js"></script>
        <script src="/assets/assets_front/plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="/assets/assets_front/plugins/vanilla-back-to-top.min.js"></script>
        <script src="/assets/assets_front/js/main.js"></script>
        <script src="/assets/assets_front/plugins/tiny-slider/min/tiny-slider.js"></script>
        <script src="/assets/assets_front/js/tinyslider-custom.js"></script>
        <script src="/assets/assets_front/plugins/imagesloaded.pkgd.min.js"></script>
      </Helmet>
    </>
  );
}

export default Content;

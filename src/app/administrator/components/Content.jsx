import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import BottomSide from "../shared/bottomside";
import TopSide from "../shared/topside";
import LeftSide from "../shared/leftside";

function Content() {
  let segmentIsAdmin = window.location.pathname.split("/");
  let isLoginPage = segmentIsAdmin.some((el) => el === "login");

  return (
    <div className="container-scroller">
      {isLoginPage ? (
        <>
          <div className="container-fluid page-body-wrapper full-page-wrapper">
                <Outlet />
          </div>
        </>
      ) : (
        <>
          <TopSide />
          <div className="container-fluid page-body-wrapper">
            <LeftSide />
            <div className="main-panel">
              <div className="content-wrapper">
                <Outlet />
              </div>
              <BottomSide />
            </div>
          </div>
        </>
      )}
      <Helmet>
        <script
          crossorigin="anonymous"
          async
          src="/assets/assets_back/vendors/base/vendor.bundle.base.js"
        ></script>
        <script
          crossorigin="anonymous"
          async
          src="/assets/assets_back/vendors/chart.js/Chart.min.js"
        ></script>
        <script
          crossorigin="anonymous"
          async
          src="/assets/assets_back/js/jquery.cookie.js"
          type="text/javascript"
        ></script>
        <script
          crossorigin="anonymous"
          async
          src="/assets/assets_back/js/off-canvas.js"
        ></script>
        <script
          crossorigin="anonymous"
          async
          src="/assets/assets_back/js/hoverable-collapse.js"
        ></script>
        <script
          crossorigin="anonymous"
          async
          src="/assets/assets_back/js/template.js"
        ></script>
        <script
          crossorigin="anonymous"
          async
          src="/assets/assets_back/js/todolist.js"
        ></script>
        <script
          crossorigin="anonymous"
          async
          src="/assets/assets_back/js/dashboard.js"
        ></script>
      </Helmet>
    </div>
  );
}

export default Content;

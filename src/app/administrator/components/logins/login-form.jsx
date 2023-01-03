function LoginForm(props) {
  return (
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo text-center">
              <img src={`${window.location.origin}/logo192.png`} alt="logo" />
            </div>
            <h4>Bienvenu</h4>
            <h6 className="font-weight-light">
              Connectez-vous pour continuer.
            </h6>
            <p className="card-description text-center text-danger">
              {props.message}
            </p>
            <form className="pt-3">
              <div className="form-group">
                <input
                  ref={props.usernameRef}
                  onChange={(e) => props.onChangeUser(e)}
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  ref={props.passwordRef}
                  onChange={(e) => props.onChangePwd(e)}
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="mt-3">
                <a
                  className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                  href="../../index.html"
                  onClick={props.onHandleForm}
                >
                  CONNEXION
                </a>
              </div>
              {/* <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" />
                    Keep me signed in
                  </label>
                </div>
                <a href="#" className="auth-link text-black">
                  Forgot password?
                </a>
              </div>
              <div className="mb-2">
                <button
                  type="button"
                  className="btn btn-block btn-facebook auth-form-btn"
                >
                  <i className="ti-facebook me-2" />
                  Connect using facebook
                </button>
              </div> */}
              {/* <div className="text-center mt-4 font-weight-light">
                Don't have an account?{" "}
                <a href="register.html" className="text-primary">
                  Create
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

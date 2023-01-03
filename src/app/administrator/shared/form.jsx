function Form(props) {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">
                  {props.target_text} 
                </h2>
                <p className="card-description text-center text-danger">
                {props.message}
                </p>
                <form onSubmit={props.action} className="forms-sample"  >
                  {props.children}
                  <button type="submit" className="btn btn-primary me-2">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

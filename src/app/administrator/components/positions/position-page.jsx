import {useState, useEffect } from "react";
import { useOutletContext,Link } from "react-router-dom";

function PositionPage() {
  const [items, setItems] = useState([]);
  const [base_url,api,model]  = useOutletContext();

  useEffect(() => {
    getAll();
  },[]);

  const getAll = async () => {
    const response = await model.getAll();
    if (response.status === 200) {
      const data = await response.json();
      setItems(data.data);
    }
  };

  const deleteItem =async (itm) =>{
    const confirm = window.confirm('Voulez-vous vraiment supprimer?');
    if(confirm===false){
      return;
    }
    const response = await model.delete(itm.id_position);
    if (response.status === 200) {
      // setItems([...items.map(el=>el.id_position!==itm.id_position)]);
      getAll();
    }
  }

  return (
    <div>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <span className="card-title " style={{ float: "right" }}>
              <Link to={`/administrator/positions/add`} type="button" className="btn btn-outline-primary btn-xs">
              <i className="ti-plus" />
              
              </Link>
              
            </span>
            <h4 className="card-title">List position</h4>
            <p className="card-description">
              <code className="bg-warning">{items.length} items</code>
            </p>
            <div className="table-responsive">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nom position</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name_position}</td>
                      <td>{item.description}</td>
                      <td>{item.created_at_position}</td>
                      <td>
                        <div>
                          <button
                          style={{marginRight:'2px'}}
                          onClick={()=>{deleteItem(item)}}
                            type="button"
                            className="btn btn-outline-secondary btn-xs"
                          >
                            <i className="ti-close" />
                          </button>
                          <Link
                          to={`/administrator/positions/edit/${item.id_position}`}
                            type="button"
                            className="btn btn-outline-secondary btn-xs"
                          >
                            <i className="ti-pencil" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PositionPage;
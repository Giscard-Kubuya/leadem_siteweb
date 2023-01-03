import {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function FormationPage() {
  const [items, setItems] = useState([]);
  const [base_url_api,api,model]  = useOutletContext();

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
    const response = await model.delete(itm.id_formation);
    if (response.status === 200) {
      // setItems([...items.map(el=>el.id_formation!==itm.id_formation)]);
      getAll();
    }
  }

  return (
    <div>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <span className="card-title " style={{ float: "right" }}>
              <Link to={`/administrator/formations/add`} type="button" className="btn btn-outline-primary btn-xs">
              <i className="ti-plus" />
              
              </Link>
              
            </span>
            <h4 className="card-title">List des formations</h4>
            <p className="card-description">
              <code className="bg-warning">{items.length} items</code>
            </p>
            <div className="table-responsive">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Titre</th>
                    <th>Photo de couv.</th>
                    <th>Formateur</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Debut</th>
                    <th>Fin</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name_formation}</td>
                      <td class="py-1">
                        <img src={`${base_url_api}/${item.image_formation}`} alt={item.name_formation} />
                      </td>
                      <td>{item.name_team}</td>
                      <td>{item.description_formation}</td>
                      <td>{item.start_formation}</td>
                      <td>{item.end_formation}</td>
                      <td>{item.created_at_formation}</td>
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
                          to={`/administrator/formations/edit/${item.id_formation}`}
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

export default FormationPage;

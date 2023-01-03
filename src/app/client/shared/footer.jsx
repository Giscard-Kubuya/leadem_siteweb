import { useOutletContext, Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Footer() {
  const [model, base_url_api] = useOutletContext();
  const [addresses, setAddresses] = useState([]);
  const getAddresses = async () => {
    let response = await model.getAllAddresses();

    if (response.status === 200) {
      let data = await response.json();
      setAddresses(data.data);
    } else {
      setAddresses([]);
    }
  };

  useEffect(() => {
    getAddresses();
  }, []);
  return (
    <footer className="footer">
      
      <div className="bottom-bar">
        <div className="container center">
          <ul className="social-icons list-inline">
            {addresses.map((item)=>(
              <li className="list-inline-item">
                <Link to={item.link_address} target="_blank">
                  <i className={`fab fa-${item.icon_address}`} />
                </Link>
              </li>


            ))} 
            
          </ul>
          <small className="copyright text-center">
            LeadEm Copyright @{" "}
            <a href="#" target="_blank">
              2022
            </a>
          </small>
        </div>
        {/*//container*/}
      </div>
      {/*//bottom-bar*/}
    </footer>
  );
}

export default Footer;

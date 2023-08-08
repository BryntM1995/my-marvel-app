import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Store/Reducers/MarvelSlice";
import "./ViewStyle/Characters.css";
import { Link } from "react-router-dom";



const Characters = () => {
  //in addition to use (data) you can also use (pending and error) to render depending of the status.
  const {  data } = useSelector((state) => state.data);
  const [localData, setLocalData] = useState(null);
  const cachedData = localStorage.getItem('cachedData');

  const dispatch = useDispatch();
  useEffect(() => {
    
    if (cachedData !== null) {
      setLocalData(JSON.parse(cachedData));
    
    } else {
      dispatch(fetchData());
      setLocalData(data);
      localStorage.setItem('cachedData', JSON.stringify(data));
    }
  }, [dispatch]);

 
  if (localData === null) {
    return (
      <div className="bg-dark text-light text-center">La data esta null </div>
    );
  }
  if (localData !== null) {
    return (
        <div className="container text-center">
          <div className="row row-cols-4">
            {localData.data.results.map((element) => (
              <div className="col mb-2 md-2">
                <div>
                  <div className="card">
                    <img
                      src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                      className="card-img-top"
                      alt="pic.jpg"
                    />
                    <div className="card-body">
                      <h5 className="card-title" title={element.name}>
                        {element.name}
                      </h5>
                      <p className="card-text">Modified: {element.modified}</p>
                      <Link
                        to={`/Character/${element.id}`}
                        className="btn btn-primary"
                      >
                        Read his {element.comics.available} comics available!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
  }
};

export default Characters;

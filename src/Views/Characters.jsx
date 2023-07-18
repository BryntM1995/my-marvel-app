import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Store/Reducers/MarvelSlice";
import "./ViewStyle/Characters.css";
import { Link } from "react-router-dom";
const Characters = () => {
  const { loading, error, data } = useSelector((state) => state.data);
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <h1 className="text-center text-light bg-dark">Loading data....</h1>;
  }

  if (error) {
    return (
      <div className="bg-dark text-light text-center">
        {" "}
        Unsuccessful operation: {error}
      </div>
    );
  }

  if (data === null) {
    return (
      <div className="bg-dark text-light text-center">La data esta null </div>
    );
  }
  if (data !== null) {
    return (
        <div className="container-fluid text-center">
          <div className="row row-cols-4">
            {data.data.results.map((element) => (
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

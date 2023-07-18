import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Store/Reducers/MarvelSlice";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useEffect } from "react";
import "./ViewStyle/Character.css";

function Character() {
  const { id } = useParams();
  const { loading, error, data } = useSelector((state) => state.data);
  const character = data.data.results.find((element) => (element.id === id));
  console.log(character);
  console.log(id);
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
      <div className="container-fluid">
        <div className="container-fluid d-grid mainPictureContainer">
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} class="img-fluid" alt="Avatar"/>
        </div>
        <div className="container-fluid d-grid "></div>
      </div>
    );
  }
}
export default Character;

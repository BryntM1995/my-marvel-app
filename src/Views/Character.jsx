import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./ViewStyle/Character.css";
import axios from "axios";
import md5 from "md5";

function Character() {
  const publicKey = "14d857fe5dbd1014e13b86a5650aaa0a";
  const privateKey = "2a987b72619d211eab4a46e662c4f074b3720a22";
  const timestamp = new Date().getTime().toString();

  const { id } = useParams();
  const cachedCharacter = localStorage.getItem(id);
  const [character, setCharacter] = useState({});
  const getHash = (timestamp) => {
    const hash = md5(`${timestamp}${privateKey}${publicKey}`);
    return hash;
  };
  const baseURL = "https://gateway.marvel.com/v1/public/";
  const fetchCharacter = async () => {
    const hash = getHash(timestamp);
    try {
      const response = await axios.get(`${baseURL}/characters`, {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
          id: id,
        },
      });
      setCharacter(response.data.data.results);
      localStorage.setItem(id, JSON.stringify(response.data.data.results));
      alert(" request has been made!");
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  useEffect(() => {
    if (cachedCharacter !== null) {
      setCharacter(JSON.parse(cachedCharacter));
    } else {
      fetchCharacter();
    }
  }, [cachedCharacter]);
  if (character[0] === undefined || character[0] === null) {
    return <h1 className="text-center text-light bg-dark"> Loading data...</h1>;
  }
  if (character[0] !== undefined || character[0] !== null) {
    return (
      <div>
        .
        <div className=" d-grid mainPictureContainer">
          <img
            src={`${character[0].thumbnail.path}.${character[0].thumbnail.extension}`}
            className="img-thumbnail mainAvatar"
            alt="..."
          />
          <div className="container d-flex mainPictureContaine">
            <h1 className="characterName bg-dark p-4 border border-light">
              {character[0].name}
            </h1>
          </div>
        </div>
        <div className="container-fluid comicContainer mb-3 bg-dark d-grid ">
          <div className=" row row-cols-2">
            {character[0].comics.items.map((element) => (
              <div className="col" key={element.id}>
                <div className="card bground m-5">
                  <div className="card-body">
                    <h5 className="card-title bg-dark p-2">{element.name}</h5>
                    <h6 className="card-subtitle bg-light mb-2 text-body-secondary">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href={element.resourceURI} className="card-link">
                      Card link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Character;

import React, { useEffect, useContext, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";
import { PokemonContext } from "../App";
import DetailsModal from "../components/DetailsModal";
import Button from "react-bootstrap/Button";

const Home = () => {
  let [pokiData, setPokiData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectModalData, setSelectModalData] = useState("");
  let { offset } = useContext(PokemonContext);
  let uri = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
  let fectchPoke = async () => {
    let PokeData = await fetch(uri);
    let jsonData = await PokeData.json();
    setPokiData(jsonData);
  };
  useEffect(() => {
    fectchPoke();
  }, [offset]);

  const ModalPressData = (data) => {
    fectchCard(data);

    console.log("modal data", data);
  };
  let fectchCard = async (data) => {
    let CardData = await fetch(data.url);
    let jsonData = await CardData.json();
    console.log("cardData", jsonData);
    jsonData && setSelectModalData(jsonData);
    jsonData && setModalShow(true);
  };
  return (
    <div style={{ border: "1px solid black" }}>
      <div className="w-75 mx-auto">
        <h3 className="text-center m-4">Pokémon Data</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {pokiData?.results &&
            pokiData.results.map((item, indx) => {
              return (
                <PokemonCard
                  cardData={item}
                  key={indx}
                  onPressModal={ModalPressData}
                />
              );
            })}
        </div>
        <Pagination PaginationData={pokiData} />

        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <DetailsModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={selectModalData}
        />
      </div>
    </div>
  );
};

export default Home;

import "react-overlay-loader/styles.css";
import React from "react";
import Grid from "react-css-grid";
import { createResource } from "simple-cache-provider";
import { cache } from "./cache";
import { Link } from "@reach/router";
import { Img } from "react-async-elements";
import { LoadingOverlay, Loader } from "react-overlay-loader";

import Api, { getImagePath } from "./Api";

const pokemonsResource = createResource(() => Api.getPokemons(1500));

function renderContent(p, onClick) {
  return (
    <Link key={p.name} to={p.name} onClick={onClick(p.name)}>
      <React.Placeholder delayMs={300} fallback={<div>Loading...</div>}>
        <Img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={getImagePath(p.name)}
        />
      </React.Placeholder>
    </Link>
  );
}

const Pokemons = ({ loadingId, onClick }) => {
  const pokemons = pokemonsResource.read(cache);
  return (
    <Grid width={200} gap={10}>
      {pokemons.results.map(p => (
        <React.Fragment key={p.name}>
          {loadingId === p.name ? (
            <LoadingOverlay>
              {renderContent(p, onClick)}
              <Loader text={null} loading={true} />
            </LoadingOverlay>
          ) : (
            <React.Fragment>{renderContent(p, onClick)}</React.Fragment>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Pokemons;

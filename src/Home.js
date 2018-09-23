import React from "react";

import Pokemons from "./Pokemons";

class Home extends React.Component {
  state = { loadingId: null };

  handleOnClick = loadingId => () => this.setState({ loadingId });

  render() {
    const { loadingId } = this.state;

    return (
      <React.Fragment>
        <h1>React Suspense Pokédex</h1>
        <React.Placeholder delayMs={500} fallback={<div>🌀 'Loading....'</div>}>
          <Pokemons loadingId={loadingId} onClick={this.handleOnClick} />
        </React.Placeholder>
      </React.Fragment>
    );
  }
}

export default Home;

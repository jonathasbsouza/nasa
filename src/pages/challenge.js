import React from "react"
import { Link } from "gatsby"

const Challenge = () => (
  <div class="challenge">
     <section id="header">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-6 col-xs-12">
            <img
              src="https://via.placeholder.com/400x400"
              alt=""
              class="logo"
            />
            <img
              src="https://via.placeholder.com/600x400"
              alt=""
              class="challenge-img"
            />
            <span class="call">O desafio de hoje é</span>
            <h1>Pegada de Carbono</h1>
          </div>
        </div>
      </div>
    </section>
    <section id="main">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-6 col-xs-12">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque iaculis at sit et tellus cursus praesent feugiat non. Odio nunc magna vitae leo. Aliquam at diam aliquam aenean. Nec et turpis amet condimentum nullam sit massa. Sociis egestas amet vestibulum, nulla congue.
                Vivamus quam facilisi ac leo lacus. Risus, ac eu urna, pulvinar dignissim sed.
            </p>
            <Link to="/questions/"><button name="submit" type="submit" class="button primary">Começar</button></Link>
          </div>
        </div>
      </div>
    </section>
    </div>
)

export default Challenge
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Questions = () => (
  <Layout>
    <section id="header" class="question">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-6 col-xs-12">
            <span class="call">Pergunta 1</span>
            <img
              src="https://via.placeholder.com/600x400"
              alt=""
              class="challenge-img"
            />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque iaculis at sit et tellus cursus praesent feugiat non.
              Odio nunc magna vitae leo. Aliquam at diam aliquam aenean. Nec et
              turpis amet condimentum nullam sit massa. Sociis egestas amet
              vestibulum, nulla congue. Vivamus quam facilisi ac leo lacus.
              Risus, ac eu urna, pulvinar dignissim sed.
            </p>

            <div class="form-check form-check-inline answer-option">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                <img
                  src="https://via.placeholder.com/200x200"
                  alt=""
                  srcset=""
                />
                <h4>Carro de Boi</h4>
              </label>
            </div>
            <div class="form-check form-check-inline answer-option">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                <img
                  src="https://via.placeholder.com/200x200"
                  alt=""
                  srcset=""
                />
                <h4>Carro de Boi</h4>
              </label>
            </div>
            <Link to="/questions/"><button name="submit" type="submit" class="button primary mt-5">Próximo</button></Link>
          </div>
        </div>
      </div>
      

    </section>
  </Layout>
)

export default Questions

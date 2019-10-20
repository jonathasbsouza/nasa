import React from "react"
import { Link } from "gatsby"


const Results = () => (
   <div className="results">
      <section id="header">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6 col-xs-12">
              <span className="call">Seu Resultado</span>
            <img
              src="https://via.placeholder.com/600x400"
              alt=""
              className="challenge-img"
            />
            
            <h1>Pegada de Carbono</h1>
          </div>
        </div>
      </div>
    </section>
    <section id="main">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6 col-xs-12">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque iaculis at sit et tellus cursus praesent feugiat non. Odio nunc magna vitae leo. Aliquam at diam aliquam aenean. Nec et turpis amet condimentum nullam sit massa. Sociis egestas amet vestibulum, nulla congue.
                Vivamus quam facilisi ac leo lacus. Risus, ac eu urna, pulvinar dignissim sed.
            </p>
            <h3>Respostas</h3>
            <div className="result">
              <div className="name">O que você usa para se deslocar durante a semana?</div>
            <div className="d-flex justify-content-between">
              <div className="answer">Carro de boi</div>
              <div className="grade">+3t </div>
            </div>
    
            </div>
            <div className="result">
              <div className="name">O que você usa para se deslocar durante a semana?</div>
            <div className="d-flex justify-content-between">
              <div className="answer">Carro de boi</div>
              <div className="grade">+3t </div>
            </div>
    
            </div>
            
          </div>
        </div>
      </div>
    </section>
    </div>
)

export default Results
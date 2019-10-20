import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div>
      <div id="home-header"></div>
    
    <section id="main">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-6 col-xs-12 home-content">
            <img src="https://via.placeholder.com/400x400" alt="" class="logo-home" />
            <h1>O Desafio vai começar!</h1>
            <p class="center">Insira seu nome e o código compartilhado pela pessoa facilitadora.</p>
            <form id="sendEmail" class="form broker">
                <div class="row">
                    <div class="form-group col-md-12">
                        <label for="name">Seu nome</label>
                        <input id="name" name="name" type="text" class="form-control" required="required" />
                    </div>
                    <div class="form-group col-md-12">
                        <label for="code">Código do desafio</label>
                        <input id="code" name="challenge-code" type="number" class="form-control" maxlength="15" required="required" />
                    </div>
                </div>
                <div class="form-group">
                    <Link to="/challenge/"><button name="submit" type="submit" class="button primary">Começar</button></Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  </section>
  </div>
  </Layout>
  
)

export default IndexPage

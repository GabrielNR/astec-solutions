import LogoAstec from "../../../assets/logo_astec.png"
// import Setas from "../../../assets/CaretDoubleDown.svg"

// import './header.css'


export function Home() {
  return (
    <>
      <div>
      <header /*loading="lazy"*/ id="info" className="container">
        <header className="flex flex-col items-center ">
          <div className="relative w-[200px] h-[200px]">
            <img loading="lazy"
              src={LogoAstec}
              alt="homem em um fundo urbano"
            />
          </div>


          <h1 className="text-5xl mb-8 font-bold" >Astec Solutions</h1>

          <p className="text-xl text-muted-foreground">
            Transformo necessidades em aplicações reais, evolventes e funcionais.
            Desenvolvo sistemas através da minha paixão pela tecnologia,
            contribuindo com soluções inovadoras e eficazes para desafios
            complexos.
          </p>
        </header>

      

        {/* <button id="scroll">
          <img loading="lazy" id="arrow" src={Setas} alt="duas setas" />
        </button> */}
      </header>

      {/* <main>
        <section id="jobs">
          <header>
            <h4><span>Meu Trabalho</span></h4>
            <h2>Veja os projetos em destaque</h2>
          </header>

          <div className="projects">
            <div className="cards">
              <img loading="lazy"
                src="./assets/images/ThumbnailProject01.png"
                alt="Travelgram"
              />

              <div className="description flex-col-8">
                <h3>Travelgram</h3>

                <p>
                  Rede social onde as pessoas mostram os registros de suas viagens
                  pelo mundo
                </p>
              </div>
            </div>

            <div className="cards">
              <img loading="lazy"
                src="./assets/images/ThumbnailProject02.png"
                alt="Tech News"
              />

              <div className="description flex-col-8">
                <h3>Tech News</h3>
                <p>
                  Homepage de um portal de notícias sobre a área de tecnologia
                </p>
              </div>
            </div>

            <div className="cards">
              <img loading="lazy" src="./assets/images/ThumbnailProject03.png" alt="Recipes" />

              <div className="description flex-col-8">
                <h3>Página de Receita</h3>
                <p>Página com o passo a passo de uma receita para cupcakes</p>
              </div>
            </div>

            <div className="cards">
              <img loading="lazy" src="./assets/images/ThumbnailProject04.png" alt="Zingen" />

              <div className="description flex-col-8">
                <h3>Zingen</h3>
                <p>
                  Landing Page completa e responsiva de um aplicativo de Karaokê
                </p>
              </div>
            </div>

            <div className="cards">
              <img loading="lazy" src="./assets/images/ThumbnailProject05.png" alt="Refund" />

              <div className="description flex-col-8">
                <h3>Refund</h3>
                <p>Um sistema para pedido e acompanhamento de reembolso</p>
              </div>
            </div>

            <div className="cards">
              <img loading="lazy" src="./assets/images/ThumbnailProject06.png" alt="Travels" />

              <div className="description flex-col-8">
                <h3>Página de turismo</h3>
                <p>
                  Página com as principais informações para quem quer viajar para
                  Busan
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services">
          <header className="flex-col-8">
            <h4><span>Meus serviços</span></h4>
            <h2>Como posso ajudar o seu negócio</h2>
          </header>

          <div className="cards flex gap-24">
            <div className="card flex-col-20">
              <div>
                <img loading="lazy" src="./assets/logos/Devices.svg" alt="Devices" />
              </div>

              <div className="description flex-col-8">
                <h3>Websites e Aplicativos</h3>
                <p className="tx-sm">Desenvolvimento de interfaces</p>
              </div>
            </div>

            <div className="card flex-col-20">
              <div>
                <img loading="lazy" src="./assets/logos/HardDrives.svg" alt="HardDrives" />
              </div>

              <div className="description flex-col-8">
                <h3>API e banco de dados</h3>
                <p className="tx-sm">Criação de serviços do sistema</p>
              </div>
            </div>

            <div className="card flex-col-20">
              <div>
                <img loading="lazy" src="./assets/logos/Infinity.svg" alt="simbolo do infinito" />
              </div>

              <div className="description flex-col-8">
                <h3>DevOps</h3>
                <p className="tx-sm">Gestão e infraestrutura da aplicação</p>
              </div>
            </div>
          </div>
        </section>

        <section loading="lazy" className="contact">
          <header className="flex-col-8">
            <h4>Contato</h4>
            <h2>Gostou do meu trabalho?</h2>
            <p className="tx-md">
              Entre em contato ou acompanhe as minhas redes sociais!
            </p>
          </header>

          <div className="links grid gap-16">
            <a href="#lkd" className="inherit">
              <div className="social-links" id="lkd">
                <img loading="lazy" src="./assets/logos/LinkedinLogo.svg" alt="Linkedin Logo" />

                <p className="tx-md">Linkedin</p>

                <img loading="lazy"
                  src="./assets/logos/ArrowUpRight.svg"
                  alt="seta diagonal azul"
                />
              </div>
            </a>

            <a href="#insta" className="inherit">
              <div className="social-links" id="insta">
                <img loading="lazy" src="./assets/logos/InstagramLogo.svg" alt="Instagram Logo" />

                <p className="tx-md">Instagram</p>

                <img
                  src="./assets/logos/ArrowUpRight.svg"
                  alt="seta diagonal azul"
                />
              </div>
            </a>

            <a href="#git" className="inherit">
              <div className="social-links" id="git">
                <img loading="lazy" src="./assets/logos/LinkedinLogo.svg" alt="Linkedin Logo" />

                <p className="tx-md">GitHub</p>

                <img loading="lazy"
                  src="./assets/logos/ArrowUpRight.svg"
                  alt="seta diagonal azul"
                />
              </div>
            </a>

            <a href="#e-mail" className="inherit">
              <div className="social-links" id="e-mail">
                <img loading="lazy" src="./assets/logos/EnvelopeSimple.svg" alt="E-mail Logo" />

                <p className="tx-md">E-mail</p>

                <img loading="lazy"
                  src="./assets/logos/ArrowUpRight.svg"
                  alt="seta diagonal azul"
                />
              </div>
            </a>
          </div>
        </section>
      </main> */}

     

      <script src="./script.js">
      </script>
    </div>
    </>
  )
}
  
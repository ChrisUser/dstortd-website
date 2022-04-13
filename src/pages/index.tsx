// If you don't want to use TypeScript you can delete this file!
import React, { useEffect, useState } from "react"
import { PageProps, graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

import Loader from "../components/loader"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CustomImage from "../components/customImage"

type DataProps = {
  site: {
    buildTime: string
  }
}

const HomePage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 2000)
    setTimeout(() => {
      document
        .getElementById("blackCurtain")
        .classList.add("unroll-black-curtain")
      setTimeout(() => makeTextVisible(), 2000)
    }, 3000)
    window.addEventListener("scroll", handlePageScroll)
  }, [])

  const handlePageScroll = () => {
    contactsAnimations()
    hideLateralText()
    showServicesPanels()
  }

  const hideLateralText = () => {
    const introContainer = document.getElementById("introContainer")
    const lateralText = document.getElementById("lateralText")
    if (introContainer.getBoundingClientRect().top <= -400) {
      lateralText.classList.add("hide-on-left")
    } else lateralText.classList.remove("hide-on-left")
  }

  const contactsAnimations = () => {
    const contacts = document.getElementById("contactsContainer")
    const mailLine = document.getElementById("mailAddressContainer")
    const contactsElements = document.getElementsByClassName(
      "contacts-hidden-text"
    )
    if (contacts.getBoundingClientRect().top <= 200) {
      mailLine.classList.add("unroll-grey-paper")
      Array.from(contactsElements).forEach((element, index) => {
        setTimeout(() => element.classList.add("visible-text"), index * 300)
      })
    }
  }

  const showServicesPanels = () => {
    const services = document.getElementsByClassName("service-panel")
    Array.from(services).forEach((service, index) => {
      if (service.getBoundingClientRect().top <= 800)
        setTimeout(() => service.classList.add("float-up"), index * 300)
    })
  }

  const makeTextVisible = () => {
    const elements = document.getElementsByClassName("hidden-text")
    Array.from(elements).forEach((element, index) => {
      setTimeout(() => element.classList.add("visible-text"), index * 300)
    })
  }

  if (showLoader) return <Loader />

  return (
    <Layout>
      <SEO title="Home" />
      <div id="introContainer" className="intro-container">
        <div className="gradient-fluid-container" />
        <div id="blackCurtain" />
        <div className="intro-text-container">
          <h1 className="hidden-text">
            Soluzioni digitali per far crescere il tuo business
          </h1>
        </div>
        <div className="intro-subtitle">
          <p className="hidden-text">ENTRA IN UN MONDO SEMPRE PIÙ VELOCE</p>
        </div>
        <div id="lateralText" className="lateral-text">
          <div className="vertical-line hidden-text" />
          <h5
            onClick={() => scrollTo("#servicesContainer")}
            data-text="SCOPRI DI PIÙ"
            className="vertical-text hidden-text"
          >
            SCOPRI DI PIÙ
          </h5>
        </div>
      </div>
      <div id="servicesContainer" className="services-details-container">
        <div className="service-panel">
          <div className="service-upper-section">
            <div className="service-icon">
              <CustomImage fileName={"copywriting.png"} />
            </div>
            <h1>Copywriting</h1>
            <div className="horizontal-line" />
          </div>
          <div className="service-lower-section">
            <p>
              Comunicare qualcosa è l'obiettivo di tutte le aziende che vogliono
              interfacciarsi con un pubblico più ampio per raggiungere nuovi
              clienti o utenti. Per questo sfruttiamo il copywriting : la scelta
              delle parole giuste è fondamentale per attrarre il maggior pubblico
              possibile, aumentare la client conversion e apparire più in alto
              nei motori di ricerca. Selezioniamo le parole con la
              massima cura e le disponiamo all'interno dei paragrafi come
              tessere di un puzzle.
            </p>
          </div>
        </div>
        <div className="service-panel">
          <div className="service-upper-section">
            <div className="service-icon">
              <CustomImage fileName={"content_creation.png"} />
            </div>
            <h1>Content Creation</h1>
            <div className="horizontal-line" />
          </div>
          <div className="service-lower-section">
            <p>
              I contenuti grafici sono degli ottimi strumenti per
              trasmettere un concetto o un'emozione, sono il punto di partenza
              per dare una buona impressione di sè o della propria azienda.
              Un'immagine vale più di mille parole. Studiamo una grafica su misura e 
              la realizziamo tenendo conto di ottimizzazione e perfezionamento anche in 
              corso d'opera. Che siano composizioni vettoriali, mockup oppure
              manipolazioni digitali vi potrete affidare alla nostra esperienza.
            </p>
          </div>
        </div>
        <div className="service-panel">
          <div className="service-upper-section">
            <div className="service-icon">
              <CustomImage fileName={"social_management.png"} />
            </div>
            <h1>Social Management</h1>
            <div className="horizontal-line" />
          </div>
          <div className="service-lower-section">
            <p>
              Mantenere un buon profilo sui social è complesso e comporta
              un'enorme spesa di tempo. Il social media management non è mai
              stato importante come oggi. Gestiamo i tuoi profili social e la tua
              immagine digitale. Ci occupiamo dell'acquisizione di nuovi
              followers, della pianificazione dei post e delle possibili
              collaborazioni all'interno delle varie piattaforme. Con noi sei
              coperto sotto ogni punto di vista.
            </p>
          </div>
        </div>
      </div>
      <div id="contactsContainer" className="contacts-container">
        <div id="gradientPillsContainer" className="gradient-pills-container" />
        <div className="contacts-text-container">
          <h1 className="contacts-hidden-text">Parlaci del tuo progetto</h1>
          <p className="contacts-hidden-text subtitle">SCRIVI A QUESTA MAIL</p>
          <div id="mailAddressContainer" className="address-line">
            <a className="anchor-link" href="mailto:dstortdstudio@gmail.com">
              <span
                data-content="dstortdstudio@gmail.com"
                className="gradient-text"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`

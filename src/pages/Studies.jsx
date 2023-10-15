import { Carousel } from "../components/Carousel"
import { Modal } from "../components/Modal"

export const Studies = () => {

  // const desUnsaac = 'Bachiller en <a href="">Ingenieria Informatica y de Sistemas</a> y certificaciones realizados en la <a href="">Universidad Nacional San Antonio Abad del Cusco</a> en Peru.'
  const desUnsaac = 'Bachiller en Ingenieria Informatica y certificaciones en la Universidad Nacional San Antonio Abad del Cusco, Peru.'
  // const desPlatzi = 'Cursos de desarrollo Web Frontend y Backend en la plataforma educativa <a href="/">Platzi</a>.'
  const desPlatzi = 'Cursos de desarrollo Web Frontend y Backend en la plataforma educativa Platzi.'

  return (
    <section id='studies' className="mb-4 pb-4">
      <div className="d-flex mb-3">
        <h1 className="article-title">Estudios</h1>
      </div>

      <div>
        <Modal id='unsaac' logo='unsaac-logo.png' title='UNSAAC' description={desUnsaac} link='https://www.unsaac.edu.pe/'/>

        <Modal id='platzi' logo='platzi.png' title='PLATZI' description={desPlatzi} link='https://platzi.com/'/>

      </div>
    </section>

  )
}

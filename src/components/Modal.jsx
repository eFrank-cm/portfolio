import { Carousel } from "./Carousel"

export const Modal = ({ id, logo, title, description, link }) => {
  return (
    <>
      <div className="study-card" data-bs-toggle="modal" data-bs-target={`#${id}`}>
        <div className="div-school-logo">
          <img src={logo} />
        </div>
        <div className="name">
          <h4 className="title">{title}</h4>
          <p className="parrafo">
            {description}
          </p>
        </div>
      </div>

      <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-grayb p-3 border border-grayb rounded-4">

            <div className="header-modal mb-2">
              <a className="div-name bg-graya rounded-3" target="_blank" href={link} >
                <img src={logo} className="logo" />
                <div className="title">
                  <h3>{title}</h3>
                </div>
              </a>
              <div className="div-close">
                <i role="button" className="bi bi-x-lg close-btn p-2 rounded-3 bg-graya" data-bs-dismiss="modal"></i>
              </div>
            </div>

            <div className="body-modal m-2">
              <Carousel content={id} />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

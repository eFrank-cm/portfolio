import { HtmlIcon, CssIcon, JsIcon, ReactIcon, SassIcon, MySQLIcon, GitIcon } from "../assets/icons"

export const About = () => {
    return (
        <section id='about' className="mb-5 pb-4">
            <div className='d-flex flex-row mb-4'>
                <h1 className="article-title py-2">Sobre mi</h1>
            </div>
            <div className="div-text-about">
                <div className="perfil">
                    <img src="perfil.png" width={150} height={150} />
                    {/* <div className="d-inline">
                        <button type="button" className="btn btn-primary">
                            <i className="bi bi-file-earmark-pdf"></i>
                            Ver CV
                        </button>
                    </div> */}
                    <div className="div-tags mt-2">
                        <span className="badge rounded-pill">Proactivo</span>
                        <span className="badge rounded-pill">Responsable</span>
                        <span className="badge rounded-pill">Creativo</span>
                        <span className="badge rounded-pill">Dedicado</span>
                        <span className="badge rounded-pill">Trabajo en equipo</span>
                    </div>
                </div>
                {/* <img src="perfil.png" width={150} height={150} /> */}
                <p className="parrafo part-one mb-3">
                    Con una sólida experiencia en el <span className="enfasis">Desarrollo Web</span> e
                    investigación en <span className="enfasis">Inteligencia Artificial</span> me dedico
                    a crear soluciones eficientes e innovadoras.
                </p>
                <p className="parrafo part-two mb-3">
                    Mi trayectoria incluye el desarrollo de sistemas <span className="enfasis">Frontend</span>, <span className="enfasis">Backend</span> y
                    diseño de <span className="enfasis">Bases de Datos</span>. Como <span className="enfasis">Ingeniero informático</span> estoy
                    compromedito a resolver las necesidades de software de acuerdo con las ultimas tecnologias
                </p>
                {/* <p className="parrafo" hidden>
                    Cuando no estoy frente a la computadora, normalmente estoy tocando algunos de los
                    intrumentos musicales que tengo en casa o salgo ha hacer un poco de deporte.
                </p> */}
            </div>
        </section>
    )
}

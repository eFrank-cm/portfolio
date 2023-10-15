
export const Proyects = () => {
    return (
        <section id='proyects' className="mb-3 pb-4">
            <div className="d-flex mb-3">
                <h1 className="article-title">Proyectos</h1>
            </div>
            <div>
                <div className="card-proyect" href="/">
                    <div className="div-img">
                        <img src="model-IA.png" />
                    </div>
                    <div className="div-text flex-fill px-2">
                        <h5>Prediccion de tiempos de viaje Multivariable-unistep</h5>
                        <p className="parrafo-sm">
                            Machine Learning · Modelo de IA desarrollado con redes neuronales LSTM y ConvLSTM
                            para predecir el tiempo de llegada de autobuses de transporte publico. Analiza el tiempo 
                            de viaje de un paradero a atro, de varios instantes anteriores para predecir un instante 
                            en el futuro con un error de 19.55 seg.  
                        </p>
                        <div className="links">
                            <a className="code" href="https://github.com/eFrank-cm/travel-time-prediction" target="_blank">
                                <i className="bi bi-github"></i>
                                <p>Github</p>
                            </a>
                            <a className="view" href="https://drive.google.com/file/d/1dMFXTXg93gUcNCzgH0ew5W_lXitR0kE6/view?usp=drive_link" target="_blank">
                                <i className="bi bi-file-earmark-pdf"></i>
                                <p>Articulo</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card-proyect">
                    <div className="div-img">
                        <img src="carrito.png" />
                    </div>
                    <div className="div-text flex-fill px-2">
                        <h5>Carrito de Compras React</h5>
                        <p className="parrafo-sm">
                            Desarrollo frontend · El proyecto es una prueba tecnica para practicar mis habilidades con
                            React, esta desarrollado con Vite, Javascript SWC y Bootstrap.
                        </p>
                        <div className="links">
                            <a className="code" href="https://github.com/eFrank-cm/app-carrito-compras-react" target="_blank">
                                <i className="bi bi-github"></i>
                                <p>Github</p>
                            </a>
                            <a className="view" href="/" target="_blank">
                                <i className="bi bi-link"></i>
                                <p>Link</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card-proyect" href="/">
                    <div className="div-img">
                        <img src="sysboletas.png" />
                    </div>
                    <div className="div-text flex-fill px-2">
                        <h5>Sistema de Boletas</h5>
                        <p className="parrafo-sm">
                            Desarrollo Full Stack · Aplicacion web para el control del boletas, con sistema de login y
                            control de usuario para gestionar la accesibilidad funcionalidades.  
                        </p>
                        <div className="links">
                            <a className="code" href="https://github.com/eFrank-cm/ProjectsUGEL" target="_blank">
                                <i className="bi bi-github"></i>
                                <p>Github</p>
                            </a>
                            <a className="view" href="/" target="_blank">
                                <i className="bi bi-link"></i>
                                <p>Link</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

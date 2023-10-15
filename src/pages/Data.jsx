import { NavBar } from "../components/NavBar"

export const Data = () => {
    return (
        <div id="data" className="p-3">
            <div className="">
                <div className="presentation">
                    <h1>
                        <a className="text-decoration-none text-white" href="/">Elizon Frank </a>
                    </h1>
                </div>
                <p className="parrafo fs-4">Web Developer & AI Engineer</p>
                <div className="w-75 mt-4">
                    <p className='parrafo'>
                        Construyo productos y experiencias digitales accesibles ofreciendo soluciones
                        innovadoras mediante plataformas web.
                    </p>
                </div>
            </div>

            <NavBar />

            <div className="mx-2 my-5 grid gap-3">
                <a href="https://github.com/eFrank-cm" className="fs-2 text-white p-2 g-col-6" target="_blank">
                    <i className="bi bi-github"></i>
                </a>
                <a href="mailto:efrankcm@gmail.com?body=Hola Frank%2C" className="fs-2 text-white p-2 g-col-6" target="_blank">
                    <i className="bi bi-google"></i>
                </a>
                <a href="https://api.whatsapp.com/send?phone=925588005&text=Hola Frank" className="fs-2 text-white p-2 g-col-6" target="_blank">
                    <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://www.linkedin.com/in/frank-carcausto/" className="fs-2 text-white p-2 g-col-6" target="_blank">
                    <i className="bi bi-linkedin"></i>
                </a>
                {/* <a href="https://www.instagram.com/efrank_cm/" className="fs-2 text-white p-2 g-col-6" hidden target="_blank">
                    <i className="bi bi-instagram"></i>
                </a> */}
            </div>
        </div>
    )
}

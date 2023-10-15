import './styles/app.scss'
import { Proyects } from './pages/Proyects'
import { Data } from './pages/Data'
import { Experience } from './pages/Experience'
import { Studies } from './pages/studies'
import { About } from './pages/About'

export const App = () => {
    return (
        <>
            <div className='container pt-5 px-0 d-flex'>
                <div className='col-6 p-2'>
                    <Data />
                </div>
                <div className='col-6 p-2'>
                    <About />
                    <Experience />
                    <Proyects />
                    <Studies />
                    <hr />
                    <div className="footer">
                        <p className='parrafo mb-5'>
                            ¡Estoy aquí para ayudarte con tus proyectos! Puedes <a target='_blank' href="https://drive.google.com/file/d/1_EZCrW2bJL067latfi6YGZ4v5Art-SSD/view?usp=sharing">ver mi CV</a> y contactarme en mis redes
                            sociales para colaborar juntos en nuevas oportunidades. ¡Hablemos pronto!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
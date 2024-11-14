import { Link } from 'react-router-dom'
import '/css/Projects.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
function Projects() {
    Aos.init()
    return (
        <div id='projects' className='projects'>
            <div className="container">
                <h2>Projects</h2>
                <div className="cards">
                    <div data-aos="flip-left" className="card">
                        <h3>Countries-react</h3>
                        <Link target='_blank' to={'https://ok-countries-react.netlify.app/'}>Read more</Link>
                        <Link target='_blank' to={'https://github.com/KamronbekOlimov/Countries-react'}><i className="fa-solid fa-code"></i></Link>
                    </div>
                    <div data-aos="flip-left" className="card">
                        <h3>Countries-JS</h3>
                        <Link target='_blank' to={'https://okcountries.netlify.app/'}>Read more</Link>
                        <Link target='_blank' to={'https://github.com/KamronbekOlimov/Countries'}><i className="fa-solid fa-code"></i></Link>
                    </div>
                    <div data-aos="flip-left" className="card">
                        <h3>Christmas-react</h3>
                        <Link target='_blank' to={'https://okchristmas.netlify.app/'}>Read more</Link>
                        <Link target='_blank' to={'https://github.com/KamronbekOlimov/Christmas'}><i className="fa-solid fa-code"></i></Link>
                    </div>
                    <div data-aos="flip-left" className="card">
                        <h3>Invisible-JS</h3>
                        <Link target='_blank' to={'https://okinvisible.netlify.app/'}>Read more</Link>
                        <Link target='_blank' to={'https://github.com/KamronbekOlimov/Invisible'}><i className="fa-solid fa-code"></i></Link>
                    </div>
                    <div data-aos="flip-left" className="card">
                        <h3>Weather-JS</h3>
                        <Link target='_blank' to={'https://oksearchweather.netlify.app/'}>Read more</Link>
                        <Link target='_blank' to={'https://github.com/KamronbekOlimov/Weather'}><i className="fa-solid fa-code"></i></Link>
                    </div>
                    <div data-aos="flip-left" className="card">
                        <h3>Clock-JS</h3>
                        <Link target='_blank' to={'https://okclock.netlify.app/'}>Read more</Link>
                        <Link target='_blank' to={'https://github.com/KamronbekOlimov/Clock'}><i className="fa-solid fa-code"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects
import { Link } from 'react-router-dom'
import '/css/About.css'
import 'aos/dist/aos.css';
import Aos from 'aos';
function About(){
    Aos.init()
    return (
        <div id='about' className="about">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-details">
                    <img data-aos="zoom-in" loading='lazy' src="/frontend-about.webp" alt="fronend theme img" />
                    <div data-aos="fade-up" className="about-info">
                        <h3>Frontend web developer</h3>
                        <p>I want to my skills in a real project and develop with professionals.</p>
                        <p>May 16, 2004</p>
                        <Link target='_blank' to='https://maps.app.goo.gl/oJbuCgukp4qCHKT69'>Uzbekistan, Fergana</Link>
                        <p>Uzbek, English (basic)</p>
                        <Link target='_blank' to='mailto:kamronbekqobiljonovich@gmail.com'>kamronbekqobiljonovich@gmail.com</Link>
                        <Link target='_blank' to='/resume.pdf' className='goto-resume' >Go to resume</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
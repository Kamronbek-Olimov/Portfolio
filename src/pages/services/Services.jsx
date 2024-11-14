import Aos from 'aos'
import '/css/Services.css'
import 'aos/dist/aos.css'
function Services() {
    Aos.init()
    return (
        <div id='services' className="services">
            <div className="container">
                <h2>Services</h2>
                <p data-aos="fade-up">As a Frontend React Developer, I use my skills in JavaScript, React, Tailwind CSS, Firebase, Bootstrap, SCSS, HTML, CSS, and Git to build responsive, user-friendly web applications. I specialize in creating dynamic single-page applications (SPAs) with modular, reusable components for scalability. By integrating backend services with Firebase, I enable real-time data interactions and seamless user authentication. My focus is on delivering optimized, intuitive, and visually appealing web solutions that perform smoothly across all devices.</p>
                <h3>Skills</h3>
                <div className="box-skills">
                    <div data-aos="zoom-in" className="skills">
                        <img loading='lazy' src="/html.webp" alt="skill img" />
                        <p>HTML5</p>
                    </div>
                    <div data-aos="zoom-in" className="skills">
                        <img loading='lazy' src="/css.webp" alt="skill img" />
                        <p>CSS3</p>
                    </div>
                    <div data-aos="zoom-in" className="skills">
                        <img loading='lazy' src="/sass.webp" alt="skill img" />
                        <p>SASS</p>
                    </div>
                    <div data-aos="zoom-in" className="skills">
                        <img loading='lazy' src="/tailwind.webp" alt="skill img" />
                        <p>TAILWIND</p>
                    </div>
                    <div data-aos="zoom-in" className="skills">
                        <img loading='lazy' src="/bootstrap.webp" alt="skill img" />
                        <p>BOOTSTRAP</p>
                    </div>
                    <div data-aos="zoom-in" className="skills">
                        <img loading='lazy' src="/js.webp" alt="skill img" />
                        <p>JavaScript</p>
                    </div>
                    <div data-aos="zoom-in" className="skills">
                        <img loading='lazy' src="/react.webp" alt="skill img" />
                        <p>REACT</p>
                    </div>
                    <div data-aos="zoom-in" className="skills">
                        <img loading='lazy' src="/firebase.webp" alt="skill img" />
                        <p>FIREBASE</p>
                    </div>
                    <div data-aos="zoom-in" className="skills">
                        <img loading='lazy' src="/git.webp" alt="skill img" />
                        <p>GIT</p>
                    </div>
                    <div data-aos="zoom-in" className="skills">
                        <img loading='lazy' src="/github.webp" alt="skill img" />
                        <p>GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import Aos from 'aos';
import '/css/Home.css';
function Home() {
    Aos.init();
    return (
        <div id='home' className="home">
            <div className="container">
                <div data-aos="fade-right" className="home-info">
                    <h1>Hi, I am Kamronbek Olimov</h1>
                    <div className="text-anime">
                        <h3>Frontend web developer</h3>
                    </div>
                    <p>With experience in JavaScript, React, and CSS frameworks, I create dynamic and user-friendly interfaces. I am passionate about coding and constantly improving my skills. Let's work together to bring your ideas to life!</p>
                    <div className="box-btn">
                        <Link target='_blank' to="/resume.pdf">Read more</Link>
                        <a href='#contact'>Let's talk</a>
                    </div>
                    <div className="home-scl">
                        <Link target='_blank' to='https://Github.com/KamronbekOlimov'><i className="fa-brands fa-github"></i></Link>
                        <Link target='_blank' to='https://Instagram.com/kamronbek_olimov'><i className="fa-brands fa-instagram"></i></Link>
                        <Link target='_blank' to='https://t.me/Olimov_dev'><i className="fa-brands fa-telegram"></i></Link>
                        <Link target='_blank' to='https://Threads.net/@kamronbek_olimov'><i className="fa-brands fa-threads"></i></Link>
                    </div>
                </div>
                <img loading='lazy' src="/frontend.webp" alt="" />
            </div>
        </div>
    );
}
export default Home;
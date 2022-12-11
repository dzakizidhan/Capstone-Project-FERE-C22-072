import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
import himsha from '../img/Himsha.jpg'
import okta from '../img/okta.jpeg'
import amruli from '../img/amruli.jpeg'
import Zidan from '../img/Zidan.jpeg'
import logo1 from '../img/logo1.png'
import logo2 from '../img/logo2.png'
import logo3 from '../img/logo3.png'
import logo4 from '../img/logo4.png'
import logo5 from '../img/logo5.png'
import logo6 from '../img/logo6.png'
import "../../Styles/main.css"
import { FaFacebook, FaInstagram, FaGooglePlusG, FaLinkedin } from "react-icons/fa";

function Home() {
  const [index, setIndex] = useState(0) ;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <main>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img class="d-block w-100" src= {pic1} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="d-block w-100" src={pic2} alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic3} alt="Third slide"/>
        </Carousel.Item>
      </Carousel>

            <div class="deskripsi_container">
              <div class="deskripsi deskripsi-1"></div>
              <div class="deskripsi deskripsi-2"><h1 class="judul_deskripsi">Kami adalah Pelopor Sehat Mental di Indonesia</h1></div>
              <div class="deskripsi deskripsi-3"><p class="teks_deskripsi">Sebagai one-stop aplikasi kesehatan mental pertama di Indonesia, Riliv mempunyai misi untuk memberikan kemudahan kepada semua orang dalam mengakses layanan kesehatan mental yang terintegratif.</p></div>
            </div>
            <div class="iframe">
                <h1 class="teks_judul">Berikut Pemaparan Video Kami</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/c06dTj0v0sM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DxIDKZHW3-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="grid_container">
              <div class="cell cell-1"></div>
              <div class="cell cell-2"><h2 class="grid_teks">Baca Blog MindHealth Di sini!</h2></div>
              <div class="cell cell-3">
                <button>Klik Disini!!</button>
              </div>
            </div>

            <div class="container">
            <h1 class="teks_judul">Para Team MindHealth</h1>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">
                    <div class="picture">
                    <img class="img-fluid" src={himsha}/>
                    </div>
                    <div class="team-content">
                    <h3 class="name">Ahimsha Satya Graha</h3>
                    <h4 class="title">R007X0019</h4>
                    </div>
                    <ul class="social">
                    <li><a href='https://www.facebook.com/ahimsha.satya/'><FaFacebook class="fa fa-twitter" aria-hidden="true"/></a></li>
                    <li><a href='https://www.instagram.com/ahimshasatyag/'><FaInstagram class="fa fa-instagram" aria-hidden="true"/></a></li>
                    <li><a href='ahimshasatyag@gmail.com'><FaGooglePlusG class="fa fa-googleplusg" aria-hidden="true"/></a></li>
                    <li><a href='https://www.facebook.com/ahimsha.satya/'><FaLinkedin class="fa fa-linkedin" aria-hidden="true"/></a></li>
                    </ul>
                </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">
                    <div class="picture">
                    <img class="img-fluid" src={amruli}/>
                    </div>
                    <div class="team-content">
                    <h3 class="name">Amruli Hafidzias Syarif</h3>
                    <h4 class="title">R007X0022</h4>
                    </div>
                    <ul class="social">
                    <li><a href='https://www.facebook.com/#/'><FaFacebook class="fa fa-twitter" aria-hidden="true"/></a></li>
                    <li><a href='https://www.instagram.com/rifqiamruli/'><FaInstagram class="fa fa-twitter" aria-hidden="true"/></a></li>
                    <li><a href='https://www.facebook.com/ahimsha.satya/'><FaGooglePlusG class="fa fa-twitter" aria-hidden="true"/></a></li>
                    <li><a href='http://www.linkedin.com/in/amruli-hafidzias-syarif-488702256'><FaLinkedin class="fa fa-twitter" aria-hidden="true"/></a></li>
                    </ul>
                </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">
                    <div class="picture">
                    <img class="img-fluid" src={okta}/>
                    </div>
                    <div class="team-content">
                    <h3 class="name">Oktavianti Nora Dewi</h3>
                    <h4 class="title">R283Y0673</h4>
                    </div>
                    <ul class="social">
                    <li><a href='https://www.facebook.com/Okta Nora/'><FaFacebook class="fa fa-twitter" aria-hidden="true"/></a></li>
                    <li><a href='https://www.instagram.com/okt_nora/'><FaInstagram class="fa fa-twitter" aria-hidden="true"/></a></li>
                    <li><a href='https://www.linkedin.com/in/oktavianti-nora-dewi-45b185243/'><FaGooglePlusG class="fa fa-twitter" aria-hidden="true"/></a></li>
                    <li><a href='https://www.linkedin.com/in/oktavianti-nora-dewi-45b185243/'><FaLinkedin class="fa fa-twitter" aria-hidden="true"/></a></li>
                     </ul>
                </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">
                    <div class="picture">
                    <img class="img-fluid" src={Zidan}/>
                    </div>
                    <div class="team-content">
                    <h3 class="name">Zidhan Dzaki Arrosyid</h3>
                    <h4 class="title">R283X0679</h4>
                    </div>
                    <ul class="social">
                    <li><a href='https://www.instagram.com/zidhandzz/'><FaFacebook class="fa fa-twitter" aria-hidden="true"/></a></li>
                    <li><a href='https://www.instagram.com/zidhandzz/'><FaInstagram class="fa fa-twitter" aria-hidden="true"/></a></li>
                    <li><a href='www.linkedin.com/in/zidhan-dzaki-arrosyid-a45150184'><FaGooglePlusG class="fa fa-twitter" aria-hidden="true"/></a></li>
                    <li><a href='www.linkedin.com/in/zidhan-dzaki-arrosyid-a45150184'><FaLinkedin class="fa fa-twitter" aria-hidden="true"/></a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className='halaman_logo'>
                <h1 class="teks_judul">Mereka Yang Telah Terbantu oleh MindHealth</h1>
                <img src={logo1} alt='logo google' class="logos" />
                <img src={logo2} alt='logo google' class="logos" />
                <img src={logo3} alt='logo google' class="logos" />
                <img src={logo4} alt='logo google' class="logos" />
                <img src={logo5} alt='logo google' class="logos" />
                <img src={logo6} alt='logo google' class="logos" />
            </div>

        </main>
        
    )
}
    

export default Home;
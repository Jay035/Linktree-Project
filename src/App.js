import "./App.css";
import AOS from "aos";
import Button from "./components/Button";
import ProfilePic from "./profile-pics.png";
import shareBtn from "./assets/_Avatar-share-button.png";
import shareBtnDesktop from "./assets/_Avatar share button-desktop.svg";
import slackIcon from "./assets/slack.svg";
import githubIcon from "./assets/github-icon.svg";
import Footer from "./components/Footer";

function App() {
  // initialise AOS library
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
  });

  return (
    <div className="App">
      <img
        data-aos="fade-up"
        className="cursor-pointer share-btn"
        id="share-btn-mobile"
        src={shareBtn}
        alt="share button"
      />
      <img
        data-aos="fade-up"
        className="cursor-pointer share-btn"
        id="share-btn-desktop"
        src={shareBtnDesktop}
        alt="share button"
      />
      <div data-aos="fade-up" data-aos-delay="50" className="profile">
        <img id="profile__img" src={ProfilePic} alt="profile pic" />
        <p id="slack" className="hidden">
          CodexJay
        </p>
        <p id="name">CodexJay</p>
      </div>
      {/* LINKS */}
      <Button />
      {/* social media links */}
      <div className="social-media-links">
        <img src={slackIcon} alt="slack icon" />
        <a href="https://github.com/Jay035"><img src={githubIcon} alt="github icon" /></a>
      </div>
      <Footer />
    </div>
  );
}

export default App;

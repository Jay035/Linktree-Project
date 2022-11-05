import ProfilePic from "../assets/profile-pics.png";
import shareBtn from "../assets/_Avatar-share-button.png";
import shareBtnDesktop from "../assets/_Avatar share button-desktop.svg";
import slackIcon from "../assets/slack.svg";
import githubIcon from "../assets/github-icon.svg";
import Button from "../components/Button";

export default function Main() {
  return (
    <div>
      <img
        data-aos="fade-in"
        // data-aos-duration="3000"
        className="cursor-pointer share-btn"
        id="share-btn-mobile"
        src={shareBtn}
        alt="share button"
      />
      <img
        data-aos="fade-in"
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
        <a href="https://github.com/Jay035">
          <img src={githubIcon} alt="github icon" />
        </a>
      </div>
    </div>
  );
}

import "./App.css";
import Button from "./components/Button";
import ProfilePic from "./profile-pics.png";
import shareBtn from './_Avatar-share-button.png';

function App() {
  return (
    <div className="App">
      <img className="cursor-pointer" id="share-btn" src={shareBtn} alt="share button" />
      <div className="profile">
        <img id="profile__img" src={ProfilePic} alt="profile pic" />
        <p id='slack' className="hidden">CodexJay</p>
        <p id="name">CodexJay</p>
      </div>
      {/* LINKS */}
      <Button />
    </div>
  )
}

export default App;
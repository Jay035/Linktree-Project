import zuriIcon from '../assets/Zuri.Internship_Logo.svg';
import I4GIcon from '../assets/I4G.svg';

export default function Footer() {
  return (
    <footer data-aos="fade-up">
        <img className='zuri-logo' src={zuriIcon} alt="zuri internship logo" />
        <span className='footer-text'>HNG Internship 9 Frontend Task</span>
        <img className='I4G-Logo' src={I4GIcon} alt="Ingressive for good logo" />
    </footer>
  )
}

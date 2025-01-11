import steamIcon from '../assets/steamIcon.png'
import twitterIcon from '../assets/twitterIcon.png'
import emailIcon from '../assets/emailIcon.png'
import ContactUsButton from './ContactUsButton.jsx'
import './Footer.css'

const contactUsItems = [
  {name: 'Steam', img: steamIcon, url: 'steam.com'},
  {name: 'Twitter', img: twitterIcon, url: 'twitter.com'},
  {name: 'Email', img: emailIcon, url: 'mailto:koutsopoulosw@gmail.com'}
]

export default function Footer() {

  const contactUsList = contactUsItems.map(details => 
    <li key={details.name}>
      <ContactUsButton className='contact-us-button' details={details} />
    </li>
  )

  return (
    <div className='footer'>
        <h1 className='header'>
          Contact Us!
        </h1>
      <div className='contact-us'>
        <ul className='contact-us-icon-list'>
          {contactUsList}
        </ul>
      </div>
    </div>
  )
}
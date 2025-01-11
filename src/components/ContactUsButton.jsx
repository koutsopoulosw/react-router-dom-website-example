import './ContactUsButton.css'


export default function ContactUsButton({details, className}) {

  function clickButton() {
    window.location.href = details.url;
  }
  
  return (
    <button className={className} onClick={clickButton}>
      <img 
        src={details.img}
        className='contact-us-icon icon'
      />
      {details.name}
    </button>
  )
}
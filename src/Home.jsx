import './Home.css'
import Carousel from './components/Carousel'

export default function Home() {
  return (
    <div className='home'>
      <h1>
        Barista Battler - the Game, the Legend
      </h1>
      
      Barista Battlers is an auto-battler game where you hire, buff, and equip Baristas to run your shop and, of course, go to battle against Barista teams from other cafes.
      <br />
      
      <h1>
        Such Marketing, Wow
      </h1>
      <Carousel />

      <h1>
        Graphic design is my Passion
      </h1>

    </div>
  )
}

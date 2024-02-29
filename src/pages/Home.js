import './Home.css'
import beach from '../images/beach-1867271.jpg'

export default function Home(){
    return(
        <div className='homeContainer'>
            <h1 className='title'>Välkommen till min hemsida</h1>
            <h2 className='subtitle'>Lite formaterat test</h2>
            <p className='content'>Detta är en enkel react sida med react router dom</p>
            <img src={beach} alt='strand' style={{width: '300px', hight:'auto'}}/>
            <p className='content'>På detta vis kan vi bygga en fullständig webbsida</p>
        </div>

        
    );
}

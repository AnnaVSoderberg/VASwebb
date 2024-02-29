import './Contact.css'
import EmailForm from '../components/EmailForm'
export default function About(){
    return(
        <>
            {/* <h1 className='title'>Mina kontaktuppgifter:</h1>
                <h3 className='subtitle'>Mobil:</h3>
                    <p>0703 88 37 80</p>
                <h3 className='subtitle'>mail:</h3>
                    <p>soderbrganna@outlook.com</p>
                <h3 className='subtitle'>Adress:
                    <p>Skattagårdsvägen 30</p>
                    <p>311 60 Ullared</p>
                </h3> */}

<h1 style={{textAlign: 'center'}} >Send me a massage:</h1>
        <p style={{textAlign: 'center'}} >I will replay as soon as possible:</p>
            <EmailForm/>
        </>
    )

}
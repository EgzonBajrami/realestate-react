import './AboutUs.css'
import logoEB from '../../Assets/logoEB.jpg'
const AboutUs = () =>{
    return <>
    <div className="aboutus-wrapper">
    
        <div className="second-wrapper">
            <div className="rreth-nesh-title">
                <p>Rreth Nesh</p>
            </div>
            <div className="logo-container">
            <img src={logoEB} alt="logoEb" />
        </div>

  
        <div className="first-text">
            <p>EB Real Estate është themeluar në vitin 2018.
Qëllimi jonë është të sigurojmë nivelin më të lartë profesional të shërbimeve tona për shitësit dhe blerësit njësoj. Të fokusuar në tregun e Prishtinës me rrethinë, ne ofrojmë mbulim të plotë të të gjitha pronave në faqet e internetit që kryesojnë tek ne, gjithashtu në faqen tone personale të internetit.</p>
        </div>
        <div className="first-text">
            <p>Ne e dimë se kur është fjala për zgjedhjen e një kompanie për Patundshmëri, duhet të jeni të sigurt se ju keni zgjedhur një ekip profesionale për ju. Ne sigurohemi që të gjitha shërbimet e patundshmërisë si shitja, blerja apo qiradhënia e pronës të trajtohet me kujdes, maturi dhe profesionalizëm nga ana jonë.</p>
        </div>
        <div className="first-text">
            <p>Ne gjejmë kohë për të iu dëgjuar ju dhe për të diskutuar së bashku strategjinë më të mirë të marketingut për pronën tuaj që të arrijmë çmimin optimal. Çdo pronë tek ne trajtohet individualisht, jo vetëm si një statistikë më shumë e tregut të pronës.</p>
        </div>
        <div className="first-text">
            <p>
Ne monitorojmë shitjen e pronës tuaj nga fillimi në fund për të siguruar një transaksion pa stres për të gjithë të interesuarit pasi që edhe jemi me përvojë në çështje të ndryshme lidhur me prona dhe situatat.</p>
        </div>
        <div className="first-text">
            <p>
Çdo gjë që bëjmë është qëllim drejt ofrimit të shërbimit më të mirë e duke respektuar nevojat e ndryshme dhe unike të kërkuara nga klientët tanë.</p>
        </div>

    </div>
    </div>
    </>
}
export default AboutUs;
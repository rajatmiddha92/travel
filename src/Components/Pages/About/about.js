import support from '../../../assets/support.png'
import '../About/styles/about.css'
import p1 from '../../../assets/p1.png'
import p2 from '../../../assets/p2.png'
import p3 from '../../../assets/p3.png'
import p4 from '../../../assets/p4.png'
import p5 from '../../../assets/p5.png'
import pb1 from '../../../assets/pb1.png'
import p6 from '../../../assets/p6.png'
import facebook from '../../../assets/facebook.png'
import twitter from '../../../assets/twitter.png'
import instagram from '../../../assets/instagram.png'
import Rectangle35 from '../../../assets/Rectangle35.png'
import Rectangle32 from '../../../assets/Rectangle32.png'
import Rectangle33 from '../../../assets/Rectangle33.png'
import Rectangle34 from '../../../assets/Rectangle34.png'
import video from '../../../assets/video.png'
import dots from '../../../assets/dots.png'

const About=()=>{
    return (<>
    <div className='con something'>
        <div className='about'>
            <img src={support} alt="support" className='about'/>
        </div>
        <div className='ourteam something'>
            <div className='something our-team'>
            <h1 id='h1'>Our Team</h1>
            <p id='p' className='some'>Quidam officiis similique sea ei, vel tollit indoctum 
efficiendi ei, at nihil tantas platonem eos. </p>
            </div>
        </div>
        <div className='peoplecon grind'>
            <div className='people some'>
                <div className='something peo'>
                    <img src={p1} alt=""/>
                    <img src={p2} alt=""/>
                    <img src={p3} alt=""/>
                    <img src={p4} alt=""/>
                    <img src={p5} alt=""/>
                  
                </div>  
                <div>
                    <img className='pep1' src={pb1} alt=""/>
                    </div>
                    
                
             <div className='pep'>
                <div className='pepul'>
                    <h1 className='pep-h1'>Sebastian Bennett</h1>
                    <h3 className='pep-h3'>Founder, LEad Photographer, CEO</h3>
                    <p className='pep-p'>Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera integre suavitate per an, alienum phaedrum te sea. Ex sea causae dolores, nam et doming dicunt feugait. Ea mel scripta aperiri postulant. Ut sed affert audire.</p>
                </div>
                <div className='social'>
                    <img className='logo' src={facebook} alt=""/>
                    <img className='logo' src={twitter} alt=""/>
                    <img className='logo' src={instagram} alt=""/>
                </div>
            </div>
            </div>
           
        </div>
        <div className='con3'>
            <div className='con3-1'>
                <h1 className='con3-h1'>What customer’s are saying?</h1>
                <p className='con3-p'>Take a look at what our customer’s are saying. At Nature we not only provide you with services but also we provide you with valuable experiences for your valuable time.</p>
            </div>
            <div>
                <img className='rec1 rec' src={Rectangle35} alt=""/>
                <img className='rec2 rec' src={Rectangle34} alt=""/>
                <img className='rec3 rec' src={Rectangle33} alt=""/>
                <img className='rec4 rec' src={Rectangle32} alt=""/>
                <div className='quote'>
                    <img src={p6} alt=""/>
                    <p className='q-p'>“ Great place to spend your vacation while exploring different experiences. “</p>
                </div>
            </div>
        </div>
        <div className='con4'>
            <div className='cert something'>
                <h1 className='con4-h1'>Certificate</h1>
                <p className='con4-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id turpis sodales,
 facilisis massa at, rutrum eros.</p>
            </div>
            <div className='vidcon something'>
                <img className='dots dot1' src={dots} alt=""/>
                <div className='proper'>
                    <img className='vid' src={video} alt=""/>
                    <img className='vid' src={video} alt=""/>
               
                    <img className='vid' src={video} alt=""/>
                    <img className='vid' src={video} alt=""/>    
                </div>
                <img className='dots dot2' src={dots} alt=""/>
            </div>
        </div>
    </div>

    </>)
}

export default About
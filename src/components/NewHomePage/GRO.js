import React from 'react';
import './GRO.css'; // Import your CSS file
import groimg from "../NewHomePage/NewHomePageImages/groimg.png";
import NavBar from './NavBar';
import NewCityFooter from './newCityFooter';
import NewHomePageFooter from './NewHomePageFooter';

const gro = () => {
    return (
        <>
            <div className="gro-page">
                <NavBar/>
            
                <div className="gro-container">
                <div className="text-content-gro"  style={{marginTop:"50px"}}>
                    <h1 style={{fontWeight:"normal"}}>Grievance redressal process of <span style={{ color: "#3e2780" }}>CreditHaat</span></h1>
                </div>
                <div className="image-section-gro">
                    <img src={groimg} alt="gro Image" />
                </div>
            </div>
            <div className='text-part-gro' style={{ padding: "20px" }}>
                <div className="content-of-gro" >
                    
                    <p>We aim to delight our customers and work hard to make sure that we help our customers avail the best credit solutions from our vast network of lending partners. However we understand that even with our best efforts we may get it wrong some times. If you have a complaint or would like us to address any concerns please reach out to us at <span
            onClick={() => window.open('mailto:support@credithaat.com', '_blank')} style={{ color: "#3e2780", cursor: "pointer" }}>support@credithaat.com</span> or send a letter to -</p>
                    </div>

                <div className="content-of-gro">
                    <h2 style={{fontWeight:"normal"}}>Vibhuprada services private limited</h2>
                    <p>Office No.  7 to 12, 7th Floor, Building-B,<br></br>Downtown City Vista, Kharadi,<br></br>Kharadi Pune, Pincode - 411014.</p>
                </div>
                <div className="content-of-gro">
                    <h2 style={{fontWeight:"normal"}}>Escalation process:</h2>
                    <p>If your query/complaint has not been addressed within 7 working days; please reach out to our Grievance Redressal Officer as provided below -</p>
                </div>
                <div className="content-of-gro">
                <h2 style={{fontWeight:"normal"}}>Grievance redressal officer : <span className="additional-info"> Monika Kaushik</span></h2>
                    <h2 style={{fontWeight:"normal"}}>Tel : <span className="additional-info" onClick={() => window.open(`tel:+912047304552`, "_blank")}>+91 02047304552</span></h2>
                    <h2 style={{fontWeight:"normal"}} onClick={() => window.open(`mailto:grievance@credithaat.com`, '_blank')}>Mail : <span className="additional-info">  grievance@credithaat.com</span></h2>

                    <h2 style={{fontWeight:"normal"}}>Designation : <span className="additional-info">  GRO</span></h2>
                    <h2 style={{fontWeight:"normal"}}>Office address : <span className="additional-info"> Office No. 7 to 12, Buildinng-B, Downtown City Vista, Kharadi, Pune, Pincode - 411014</span></h2>
                </div>
                
                
                   
                
                    
                    

         </div>
         
                   
                
                    <NewHomePageFooter/>
                    <NewCityFooter/>
                    </div>
                   
                </>
    );
}

export default gro;
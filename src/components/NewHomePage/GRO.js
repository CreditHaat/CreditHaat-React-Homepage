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
                    <img src={groimg} alt="gro by CreditHaat" />
                </div>
            </div>
      
    <div className='text-part-gro' style={{ padding: "20px" }}>
                <div className="content-of-gro" >
                    
                    <p>We aim to delight our customers and work hard to make sure that we help our customers avail the best credit solutions from our vast network of lending partners. However we understand that even with our best efforts we may get it wrong some times. If you have a complaint or would like us to address any concerns please reach out to us at <span
            onClick={() => window.open('mailto:support@credithaat.com', '_blank')} style={{ color: "#3e2780", cursor: "pointer" }}>support@credithaat.com</span> or send a letter to -</p>
              </div>      

        {/* LEVEL 1 TABLE */}
      <div className="content-of-gro" >

        <table className="gro-table">
          <tbody>
            <tr>
              <td colSpan="1" >Level 1</td>
            </tr>
            <tr>
              <td> <div className="content-of-gro">
                    <h2 style={{fontWeight:"normal"}}>Vibhuprada services private limited</h2>
                    <p>Office No.  7 to 12, 7th Floor, Building-B,<br></br>Downtown City Vista, Kharadi,<br></br>Kharadi Pune, Pincode - 411014.</p>
                </div>
                </td>
              {/* <td>
                <a href="mailto:support@credithaat.com">
                  support@credithaat.com
                </a>
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                Vibhuprada Services Private Limited <br />
                Office No. 7 to 12, 7th Floor, Building-B, <br />
                Downtown City Vista, Kharadi, <br />
                Kharadi Pune, Pincode – 411014
              </td> */}
            </tr>
          </tbody>
        </table>
        </div>

        {/* ESCALATION TEXT */}
               <div className="content-of-gro">
                    <h2 style={{fontWeight:"normal"}}>Escalation process:</h2>
                    <p>If your query/complaint has not been addressed within 7 working days; please reach out to our Grievance Redressal Officer as provided below -</p>
                </div>
        


        {/* LEVEL 2 TABLE */}
    <div className='text-part-gro' style={{ padding: "20px" }}>
        <table className="gro-table">
          <tbody>
            <tr>
              <td colSpan="2">Level 2 – Grievance Redressal Officer</td>
            </tr>
            <tr>
        <td>                
            <div className="content-of-gro">
                <h2 style={{fontWeight:"normal"}}>Grievance redressal officer : <span className="additional-info"> Monika Kaushik</span></h2>
                    <h2 style={{fontWeight:"normal"}}>Tel : <span className="additional-info" onClick={() => window.open(`tel:+912047304552`, "_blank")}>+91 02047304552</span></h2>
                    <h2 style={{fontWeight:"normal"}} onClick={() => window.open(`mailto:grievance@credithaat.com`, '_blank')}>Mail : <span className="additional-info">  grievance@credithaat.com</span></h2>

                    <h2 style={{fontWeight:"normal"}}>Designation : <span className="additional-info">  GRO</span></h2>
                    <h2 style={{fontWeight:"normal"}}>Office address : <span className="additional-info"> Office No. 7 to 12, Buildinng-B, Downtown City Vista, Kharadi, Pune, Pincode - 411014</span></h2>
                </div>
            </td>
            </tr>
          </tbody>
        </table>
        </div>

               {/* <div className="content-of-gro">
                      <p>If the concern remains unaddressed from the date of sending your email to Level 1 personnel in case of grievance or notification of breach</p>
                </div> */}

        <div className="content-of-gro" >

        <table className="gro-table">
          <tbody>
            <tr>
              <td colSpan="3" >Level 3</td>
            </tr>
            <tr>
              <td> <div className="content-of-gro">
                    <h2 style={{fontWeight:"normal"}} onClick={() => window.open(`mailto:management@credithaat.com`, '_blank')}>Mail : <span className="additional-info">management@credithaat.com</span></h2>
                </div>
                </td>
              {/* <td>
                <a href="mailto:support@credithaat.com">
                  support@credithaat.com
                </a>
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                Vibhuprada Services Private Limited <br />
                Office No. 7 to 12, 7th Floor, Building-B, <br />
                Downtown City Vista, Kharadi, <br />
                Kharadi Pune, Pincode – 411014
              </td> */}
            </tr>
          </tbody>
        </table>
        </div>

      </div>

            {/* <div className='text-part-gro' style={{ padding: "20px" }}>
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
                
                
                   
                
                    
                    

         </div> */}
         
                   
                
                    <NewHomePageFooter/>
                    <NewCityFooter/>
                    </div>
                   
                </>
    );
}

export default gro;


// import React from "react";
// import "./GRO.css";
// import NavBar from "./NavBar";
// import NewCityFooter from "./newCityFooter";
// import NewHomePageFooter from "./NewHomePageFooter";

// const gro = () => {
//   return (
//     <>
//       <NavBar />

//       <div className="gro-wrapper">
//         <h1>Grievance Redressal Process</h1>

//         <p className="gro-intro">
//           We aim to delight our customers and work hard to make sure that we help
//           our customers avail the best credit solutions from our vast network of
//           lending partners. However, we understand that even with our best
//           efforts we may get it wrong sometimes. If you have a complaint or would
//           like us to address any concerns please reach out to us on below contact
//           points.
//         </p>

//         {/* LEVEL 1 TABLE */}
//         <table className="gro-table">
//           <tbody>
//             <tr>
//               <th colSpan="2">Level 1</th>
//             </tr>
//             <tr>
//               <td>Email</td>
//               <td>
//                 <a href="mailto:support@credithaat.com">
//                   support@credithaat.com
//                 </a>
//               </td>
//             </tr>
//             <tr>
//               <td>Address</td>
//               <td>
//                 Vibhuprada Services Private Limited <br />
//                 Office No. 7 to 12, 7th Floor, Building-B, <br />
//                 Downtown City Vista, Kharadi, <br />
//                 Kharadi Pune, Pincode – 411014
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         {/* ESCALATION TEXT */}
//         <p className="gro-escalation-title">Escalation process:</p>
//         <p className="gro-escalation-text">
//           If your query/complaint has not been addressed within 7 working days;
//           please reach out to our Grievance Redressal Officer as provided below –
//         </p>

//         {/* LEVEL 2 TABLE */}
//         <table className="gro-table">
//           <tbody>
//             <tr>
//               <th colSpan="2">Level 2 – Grievance Redressal Officer</th>
//             </tr>
//             <tr>
//               <td>Grievance Redressal Officer</td>
//               <td>Monika Kaushik</td>
//             </tr>
//             <tr>
//               <td>Tel</td>
//               <td>
//                 <a href="tel:+912047304552">+91 02047304552</a>
//               </td>
//             </tr>
//             <tr>
//               <td>Email</td>
//               <td>
//                 <a href="mailto:grievance@credithaat.com">
//                   grievance@credithaat.com
//                 </a>
//               </td>
//             </tr>
//             <tr>
//               <td>Address</td>
//               <td>
//                 Vibhuprada Services Private Limited <br />
//                 Office No. 7 to 12, 7th Floor, Building-B, <br />
//                 Downtown City Vista, Kharadi, <br />
//                 Kharadi Pune, Pincode – 411014
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         {/* LEVEL 3 (OPTIONAL BUT RECOMMENDED FOR EXPERIAN) */}
//         <table className="gro-table">
//           <tbody>
//             <tr>
//               <th colSpan="2">Level 3 – Credit Bureau Escalation</th>
//             </tr>
//             <tr>
//               <td>Details</td>
//               <td>
//                 If the complaint is not resolved satisfactorily at Level 2, the
//                 customer may approach Experian India.
//                 <br />
//                 Website:{" "}
//                 <a
//                   href="https://consumer.experian.in"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   https://consumer.experian.in
//                 </a>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <NewHomePageFooter />
//       <NewCityFooter />
//     </>
//   );
// };

// export default gro;

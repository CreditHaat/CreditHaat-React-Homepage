import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './NewAllPartners.css'; // Ensure this file is correctly imported and styled
import pimage from "../NewHomePage/NewHomePageImages/allpartnerimage.png";
// import creditimage from "../NewHomePage/NewHomePageImages/creditimage.png";
import abflimage from "../NewHomePage/NewHomePageImages/abfl.png";
import bhaniximage from "../NewHomePage/NewHomePageImages/bhaniximage.png";
import fibeimage from "../NewHomePage/NewHomePageImages/fibeimage.png";
import finnableimage from "../NewHomePage/NewHomePageImages/finnableimage.png";
import finzyimage from "../NewHomePage/NewHomePageImages/finzyimage.png";
import flexiloansimage from "../NewHomePage/NewHomePageImages/flexiloansimage.png";
// import fullertonimage from "../NewHomePage/NewHomePageImages/fullertonimage.png";
import homecreditimage from "../NewHomePage/NewHomePageImages/homecreditimage.png";
import iiflblimage from "../NewHomePage/NewHomePageImages/iiflblimage.png";
import iiflplimage from "../NewHomePage/NewHomePageImages/iiflplimage.png";
import incredimage from "../NewHomePage/NewHomePageImages/incredimage.png";
// import indifiimage from "../NewHomePage/NewHomePageImages/indifiimage.png";
import kreditbeeimage from "../NewHomePage/NewHomePageImages/kreditbeeimage.png";
import moneytapimage from "../NewHomePage/NewHomePageImages/moneytapimage.png";
import moneyviewimage from "../NewHomePage/NewHomePageImages/moneyviewimage.png";
import mpokketimage from "../NewHomePage/NewHomePageImages/mpokketimage.png";
import niraimage from "../NewHomePage/NewHomePageImages/niraimage.png";
import naviimage from "../NewHomePage/NewHomePageImages/naviimage.png";
import prefrimage from "../NewHomePage/NewHomePageImages/prefrimage.png";
import privoimage from "../NewHomePage/NewHomePageImages/privoimage.png";
import stashfinimage from "../NewHomePage/NewHomePageImages/stashfinimage.png";
import tatacapitalimage from "../NewHomePage/NewHomePageImages/tatacapitalimage.png";
import rupeeimage from "../NewHomePage/NewHomePageImages/rupeeimage.png";
import upwardsimage from "../NewHomePage/NewHomePageImages/upwardsimage.png";
import kisshtimage from "../NewHomePage/NewHomePageImages/kisshtimage.png";
import anq from "../NewHomePage/NewHomePageImages/ANQ.png";
import tatapl from "../NewHomePage/lendingpartimages/tcpl.png";
import smcoin from "../NewHomePage/NewHomePageImages/smart_coin_logo.png";
import landt from "../NewHomePage/NewHomePageImages/lt.png";
import rupicard from "../NewHomePage/NewHomePageImages/Rupicard.png";
import branch from "../NewHomePage/lendingpartimages/branch1.png";
import kinara from "../NewHomePage/lendingpartimages/kinara1.png";
import slice from "../NewHomePage/lendingpartimages/slice1.svg";
import trustpaisa from "../NewHomePage/lendingpartimages/trustpaisa.png";
import rupeek from "../NewHomePage/lendingpartimages/Rupeek.png";
import rupeek112 from  "../NewHomePage/lendingpartimages/Rupee112.png";
import ramfincorp from "../NewHomePage/lendingpartimages/ramfincorp.png";
import poonawalla from "../NewHomePage/lendingpartimages/Poonawalla.png";
import unity from "../NewHomePage/lendingpartimages/unity.jpeg";
import zype from "../NewHomePage/lendingpartimages/zype.jpg";
import tataneu from "../NewHomePage/lendingpartimages/tata.png";
import hdfc from "../NewHomePage/lendingpartimages/hdfc.png";
import indiagold from "../NewHomePage/lendingpartimages/indiagold.png";
import lplate from "../NewHomePage/lendingpartimages/lplate.webp";
import kredit from "../NewHomePage/lendingpartimages/kredito.png";
import ayushpay from "../NewHomePage/lendingpartimages/ayushpay.png";
import adit from "../NewHomePage/lendingpartimages/abimg.png";
import iiflgold from "../NewHomePage/lendingpartimages/iiflgold.jpg";

import rapidrupeeimage from "../NewHomePage/lendingpartimages/RapidRupee.png";
import aryseimage from "../NewHomePage/lendingpartimages/Arysefin_logo.png";
import herofinimage from "../NewHomePage/lendingpartimages/HeroFinCorpPartner.png";
import fatakpayimage from "../NewHomePage/lendingpartimages/Fatakpaylogo.png";
import flexsalaryimage from "../NewHomePage/lendingpartimages/FlexSalaryLogo.png";
import anytimerupeimage from "../NewHomePage/lendingpartimages/AnytimeRupeelogo.png";
import Abhicashimage from "../NewHomePage/lendingpartimages/Abhicashlogo.png";
import mobikwikimage from "../NewHomePage/lendingpartimages/MobiKwikLogo.png";
import instamoneyimage from "../NewHomePage/lendingpartimages/InstaMoneyLogo.png";
import aspireblimage from "../NewHomePage/lendingpartimages/AspireBL.png";
import ringimage from "../NewHomePage/lendingpartimages/Ring_Logo.jpg";
import bfslimage from "../NewHomePage/lendingpartimages/BFSL.jpg";
import paisabazarimage from "../NewHomePage/lendingpartimages/paisabazarlogo.png";
import loan24image from "../NewHomePage/lendingpartimages/loan24.png";
import cashtoyouimage from "../NewHomePage/lendingpartimages/cashtoyou.png";
import brightloansimage from "../NewHomePage/lendingpartimages/BrightLoans_Logo.png";
import rapidmoneyimage from "../NewHomePage/lendingpartimages/RapidMoney.jpeg";
import rupeeontimeimage from "../NewHomePage/lendingpartimages/RupeeonTime_logo.png";
import loan112image from "../NewHomePage/lendingpartimages/Loan112.png";
import bharatloansimage from "../NewHomePage/lendingpartimages/BharatLoan_Logo.png";
import digicreditimage from "../NewHomePage/lendingpartimages/DigiCredit_logo.png";
import zestmoneyimage from "../NewHomePage/lendingpartimages/ZestMoney.png";
import idfcimage from "../NewHomePage/lendingpartimages/IDFC_Logo.png";


import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import NavBar from '../NewHomePage/NavBar';
import NewCityFooter from '../NewHomePage/newCityFooter';
import NewHomePageFooter from '../NewHomePage/NewHomePageFooter';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));


function NewAllPartners({ companies }) {

    const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open33, setOpen33] = useState(false);
  const [open35, setOpen35] = useState(false);
  const [open36, setOpen36] = useState(false);

  const [open37, setOpen37] = React.useState(false);
  const [open38, setOpen38] = React.useState(false);
  const [open39, setOpen39] = React.useState(false);
  const [open40, setOpen40] = useState(false);
  const [open41, setOpen41] = useState(false);
  const [open42, setOpen42] = useState(false);
  const [open43, setOpen43] = useState(false);
  const [open44, setOpen44] = useState(false);
  const [open45, setOpen45] = useState(false);
  const [open46, setOpen46] = useState(false);
  const [open47, setOpen47] = useState(false);
  const [open48, setOpen48] = useState(false);
  const [open49, setOpen49] = useState(false);
  const [open50, setOpen50] = useState(false);
  const [open51, setOpen51] = useState(false);
  const [open52, setOpen52] = useState(false);
  const [open53, setOpen53] = useState(false);
  const [open54, setOpen54] = useState(false);
  const [open55, setOpen55] = useState(false);
  const [open56, setOpen56] = useState(false);
  const [open57, setOpen57] = useState(false);
  const [open58, setOpen58] = useState(false);
  const [open59, setOpen59] = useState(false);
  const [open60, setOpen60] = useState(false);
  const [open61, setOpen61] = useState(false);
  const [open62, setOpen62] = useState(false);
  const [open63, setOpen63] = useState(false);
  const [open64, setOpen64] = useState(false);
  const [open65, setOpen65] = useState(false);
  const [open66, setOpen66] = useState(false);
  const [open67, setOpen67] = useState(false);
  const [open68, setOpen68] = useState(false);
  const [open69, setOpen69] = useState(false);
  const [open70, setOpen70] = useState(false);
  const [open71, setOpen71] = useState(false);
  const [open72, setOpen72] = useState(false);
  const [open73, setOpen73] = useState(false);
  const [open74, setOpen74] = useState(false);
  const [open75, setOpen75] = useState(false);
  const [open76, setOpen76] = useState(false);
  const [open77, setOpen77] = useState(false);
  const [open78, setOpen78] = useState(false);
   const [open79, setOpen79] = useState(false);
  const [open80, setOpen80] = useState(false);
  const [open81, setOpen81] = useState(false);
  const [open82, setOpen82] = useState(false);
   const [open83, setOpen83] = useState(false);
  const [open84, setOpen84] = useState(false);
  const [open85, setOpen85] = useState(false);
  const [open86, setOpen86] = useState(false);
  const [open87, setOpen87] = useState(false);
   const [open88, setOpen88] = useState(false);
  const [open89, setOpen89] = useState(false);
  const [open90, setOpen90] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickOpen33 = () => {
    setOpen33(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClickOpen4 = () => {
    setOpen4(true);
  };
  const handleClickOpen5 = () => {
    setOpen5(true);
  };
  const handleClickOpen6 = () => {
    setOpen6(true);
  };
  const handleClickOpen7 = () => {
    setOpen7(true);
  };
  const handleClickOpen8 = () => {
    setOpen8(true);
  };
  const handleClickOpen9 = () => {
    setOpen9(true);
  };
  const handleClickOpen10 = () => {
    setOpen10(true);
  };
  const handleClickOpen11 = () => {
    setOpen11(true);
  };

  const handleClickOpen13 = () => {
    setOpen13(true);
  };

  const handleClickOpen35 = () => {
    setOpen35(true);
  };
  const handleClickOpen36 = () => {
    setOpen36(true);
  };
  const handleClickOpen37 = () => {
    setOpen37(true);
  };
  const handleClickOpen38 = () => {
    setOpen38(true);
  };
  const handleClickOpen39 = () => {
    setOpen39(true);
  };
  const handleClickOpen40 = () => {
    setOpen40(true);
  };
  const handleClickOpen41 = () => {
    setOpen41(true);
  };
  const handleClickOpen42 = () => {
    setOpen42(true);
  };
  const handleClickOpen43 = () => {
    setOpen43(true);
  };
  const handleClickOpen44 = () => {
    setOpen44(true);
  };
  const handleClickOpen45 = () => {
    setOpen45(true);
  };
  const handleClickOpen46 = () => {
    setOpen46(true);
  };
  const handleClickOpen47 = () => {
    setOpen47(true);
  };
  const handleClickOpen48 = () => {
    setOpen48(true);
  };
  const handleClickOpen49 = () => {
    setOpen49(true);
  };
  const handleClickOpen50 = () => {
    setOpen50(true);
  };
  const handleClickOpen51 = () => {
    setOpen51(true);
  };
  const handleClickOpen52 = () => {
    setOpen52(true);
  };
  const handleClickOpen53 = () => {
    setOpen53(true);
  };
    const handleClickOpen54 = () => {
    setOpen54(true);
  };
  const handleClickOpen55 = () => {
    setOpen55(true);
  };
  const handleClickOpen56 = () => {
    setOpen56(true);
  };
  const handleClickOpen57 = () => {
    setOpen57(true);
  };

   const handleClickOpen58 = () => {
    setOpen58(true);
  };
  const handleClickOpen59 = () => {
    setOpen59(true);
  };
  const handleClickOpen60 = () => {
    setOpen60(true);
  };
  const handleClickOpen61 = () => {
    setOpen61(true);
  };
  const handleClickOpen62 = () => {
    setOpen62(true);
  };
  const handleClickOpen63 = () => {
    setOpen63(true);
  };
    const handleClickOpen64 = () => {
    setOpen64(true);
  };
    const handleClickOpen65 = () => {
    setOpen65(true);
  };
    const handleClickOpen66 = () => {
    setOpen66(true);
  };
  const handleClickOpen67 = () => {
    setOpen67(true);
  };
const handleClickOpen68 = () => {
    setOpen68(true);
};
const handleClickOpen69 = () => {
    setOpen69(true);
};
const handleClickOpen70 = () => {
    setOpen70(true);
};
const handleClickOpen71 = () => {
    setOpen71(true);
};
const handleClickOpen72 = () => {
    setOpen72(true);
};
const handleClickOpen73 = () => {
    setOpen73(true);
};
const handleClickOpen74 = () => {
    setOpen74(true);
};
const handleClickOpen75 = () => {
    setOpen75(true);
};
const handleClickOpen76 = () => {
    setOpen76(true);
};
const handleClickOpen77 = () => {
    setOpen77(true);
};
const handleClickOpen78 = () => {
    setOpen78(true);
};
const handleClickOpen79 = () => {
    setOpen79(true);
};
const handleClickOpen80 = () => {
    setOpen80(true);
};
const handleClickOpen81 = () => {
    setOpen81(true);
};
const handleClickOpen82 = () => {
    setOpen82(true);
};
const handleClickOpen83 = () => {
    setOpen83(true);
};
const handleClickOpen84 = () => {
    setOpen84(true);
};
const handleClickOpen85 = () => {
    setOpen85(true);
};
const handleClickOpen86 = () => {
    setOpen86(true);
};
const handleClickOpen87 = () => {
    setOpen87(true);
};
const handleClickOpen88 = () => {
    setOpen88(true);
};
const handleClickOpen89 = () => {
    setOpen89(true);
};
const handleClickOpen90 = () => {
    setOpen90(true);
};  
  const handleClose = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpen5(false);
    setOpen6(false);
    setOpen7(false);
    setOpen8(false);
    setOpen9(false);
    setOpen10(false);
    setOpen11(false);
    setOpen13(false);
    setOpen33(false);
    setOpen35(false);
    setOpen36(false);
    setOpen37(false);
    setOpen38(false);
    setOpen39(false);
    setOpen40(false);
    setOpen41(false);
    setOpen42(false);
    setOpen43(false);
    setOpen44(false);
    setOpen45(false);
    setOpen46(false);
    setOpen47(false);
    setOpen48(false);
    setOpen49(false);
    setOpen50(false);
    setOpen51(false);
    setOpen52(false);
    setOpen53(false);
    setOpen54(false);
    setOpen55(false);
    setOpen56(false);
    setOpen57(false);
    setOpen58(false);
    setOpen59(false);
    setOpen60(false);
    setOpen61(false);
    setOpen62(false);
    setOpen63(false);
    setOpen64(false);
    setOpen65(false);
    setOpen66(false);
    setOpen67(false);
    setOpen68(false);
    setOpen69(false);
    setOpen70(false);
    setOpen71(false);
    setOpen72(false);
    setOpen73(false);
    setOpen74(false);
    setOpen75(false);
    setOpen76(false);
    setOpen77(false);
    setOpen78(false);
    setOpen79(false);
    setOpen80(false);
    setOpen81(false);
    setOpen82(false);
    setOpen83(false);
    setOpen84(false);
    setOpen85(false);
    setOpen86(false);
    setOpen87(false);
    setOpen88(false);
    setOpen89(false);
    setOpen90(false);
  };

    return (
        <>
         <div>
    <NavBar/>
  </div>
    <div className="lending-partner-list">

      <div className="lending-content">
        <div className="lending-text">
        <h1>
            Lending partner of <span className="credit-haat-color">CreditHaat</span>
          </h1>
        </div>
        <div className="lending-image">
          <img src={pimage} alt="Lending Partners" />
        </div>
      </div>
    </div>
        
      <div className='newallcontainer'>
      {/* ---------------------------------------0--------------------------------- */}
      <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={landt} alt='Lenderimage'></img>
            <p>  LTFS</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹15,00,000</p>
           <p> Features: Personal Loan for salaried and self-employed individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://planet.ltfs.com/LTFS-CL/'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/landtfs_new'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen13}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open13}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Mr. Vinod Varadan
                    <br />
                    Company name: L&T Finance
                    <br />
                    Tel: 1800 1020 476
                    <br />
                    Email: gro@ltfs.com
                    <br />
                    CustomerCare: customercare@ltfs.com
                    <br />
                    {/* www.ltfs.com | https://sachet.rbi.org.in/ */}
                    <a href="www.ltfs.com">www.ltfs.com</a> | <a href="https://sachet.rbi.org.in/">https://sachet.rbi.org.in/</a>
                    <br/>
                    GRO link: <a href="https://www.ltfinance.com/grievance-redressal">https://www.ltfinance.com/grievance-redressal</a>
                    <br/>
                  </div>
                </DialogContent>
              </BootstrapDialog>
            </div>
          </div>
           </div>

{/*-------------------------------------1-----------------------------*/}
         <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={abflimage} alt='Lenderimage'></img>
            <p>  Aditya Birla Capital</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹5,00,000</p>
           <p> Features: Personal Loan for salaried and self-employed individuals</p>
           
           <div className='anothertext'>
                       <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://oneapp.abfldirect.com/esb/login?dsa_hash=f7f2d316f76e394a1908bb386f629084f8e486d30281835bed9b2b9d0cafb77e&utm_source=CHR&utm_medium=CPI&utm_campaign=CHAPP'>Apply now</a></button><span>
           {/* <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='	https://oneapp.abfldirect.com/esb/login?dsa_hash=f7f2d316f76e394a1908bb386f629084f8e486d30281835bed9b2b9d0cafb77e&utm_source=CHAPP&utm_medium=CHAPP&utm_campaign=webpp'>Apply now</a></button><span> */}
           <button className="secondonebutton" onClick={handleClickOpen}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div

                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Ms. Shruti Sarraf
                    <br />
                    Company name: Aditya Birla Capital
                    <br />
                    Tel: +918045860196
                    <br />
                    Email: grievance.finance@adityabirlacapital.com
                    <br />
                    CustomerCare: care.finance@adityabirlacapital.com
                    <br />
                    GRO link: <a href='https://www.adityabirlacapital.com/loans/grievance-form'>https://www.adityabirlacapital.com/loans/grievance-form</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

  {/*-------------------------------------2-----------------------------*/}
  <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={adit} alt='Lenderimage'></img>
            <p>  Aditya Birla Capital-BL</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹10,00,000</p>
           <p> Features: End-to-end Digital Process (from Login to Loan Amount <br/>Disbursement)</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://udyogplus.adityabirlacapital.com/?redirecttype=campaign&utm_source=ABCD_Partnership&utm_campaign=ABCD_PR1015&utm_medium=ABCD_PR1015_publisherid&utm_content=CHAPP'>Apply now</a></button><span>
           <button className="secondonebutton" onClick={handleClickOpen53}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open53}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Ms. Shruti Sarraf
                    <br />
                    Company name: Aditya Birla Capital
                    <br />
                    Tel: +918045860196
                    <br />
                    Email:
                    grievance.finance@adityabirlacapital.com
                    <br />
                    CustomerCare: care.finance@adityabirlacapital.com
                    <br />
                    GRO link: <a href='https://www.adityabirlacapital.com/loans/grievance-form'>https://www.adityabirlacapital.com/loans/grievance-form</a>

                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/* ---------------------------3-------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <a href="https://bhanixfinance.com/ourpartners.html" target="_blank" rel="">
            <img src={bhaniximage} alt="Lenderimage" />
            </a>
            <p>   Bhanix Finance And Investment Limited (CASHe)</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000 - ₹3,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://web.cashe.co.in/VjcvdkZ0b0ZFVDZDMlFGOE1LQzRmTlo0WmRDRUpDdHErcm5IUytZWWgwVWJ4bVdhc0l0QnNSbnQ3Y1RyVWFkRVhhdmlCdjBLbnIzNzNCQmtQTFlIc3E0RGkrWnRTVXJtUlVvT1ljYjNYVy9oZXNvK1BwWEoybFJxR3VhaGRUK3o='>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/cashe_new'>Apply now</a> */}
           </button><span>
             <button className="secondonebutton" onClick={handleClickOpen33}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open33}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    Grievance Redressal Officer: Mr. Pushpinder Kaur
                    <br />
                    Company name: BHANIX FINANCE AND INVESTMENT LIMITED (CASHe)
                    <br />
                    Tel: 9983107444
                    <br />
                    Email:Grievance@bhanix.in
                    <br/>
                    Instant Digital Personal Loan in 10 minutes
                    <br/>
                    Monthly Interest Rate (reducing balance method) :  Upto 3%
                    <br/>
                    Repayment Tenure : 9,12 & 18 months
                    <br/>
                    Processing Fee : Upto 5.5%
                    <br/>
                    GRO Link: <a href='https://www.cashe.co.in/contact-us/'>https://www.cashe.co.in/contact-us/</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
            </div>
          </div>
           </div>
           

        {/* --------------------------------4----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <a href="http://earlysalary.in/" target="_blank" rel="">
            <img src={fibeimage} alt='Lenderimage'></img>
            </a>
            <p>  Fibe</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹8,0 000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
            <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://fibe.onelink.me/BuuV?af_xp=custom&pid=Credithaat&af_dp=es25022015%3A%2F%2F'>Apply now</a></button><span>
           {/* <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/earlysalary_consent_oj'>Apply now</a></button><span> */}
           <button className="secondonebutton" onClick={handleClickOpen1}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open1}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    Grievance Redressal Officer: Mr. Amit Nosina 
                    <br />
                    Company name: EarlySalary Services Private Limited 
                    <br />
                    Tel: 020-67639797 
                    <br />
                    Email:grievance@earlysalary.com
                    <br />
                    CustomerCare Mail : care@earlysalary.com  
                    <br />
                    <a href='https://www.earlysalary.in/grievance-redressal/'>https://www.earlysalary.in/grievance-redressal/</a>
                    </div>
                </DialogContent>
              </BootstrapDialog>
            </div>
          </div>
           </div>

        {/* --------------------------------5----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={finnableimage} alt='Lenderimage'></img>
            <p>  Finnable</p> 
            </div>
           <div className='secondonetext'>
           <p> Amount range:₹50,000 - ₹10,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://play.google.com/store/apps/details?id=com.finnable.customer'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/finnable'>Apply now</a> */}
           </button><span>
            <button className="secondonebutton" onClick={handleClickOpen47}>Know more</button></span>
 <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open47}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Mr. Akshay Raja<br />
                    Company name: Finnable Technologies Private Limited
                    <br />
                    Address:Indiqube Edge, 2nd Floor, SY, 4, 6/4, Plot NO 571/630, <br/>Outer Ring Rd, Ambalipura, Bellandur, Bengaluru, Karnataka 560103
                    <br/>
                    Email: gro@finnable.com
                    <br />
                    Contact phone: 9900119762
                    <br />
                    GRO link - <a href='https://www.finnable.com/grievance-redressal-policy/'>https://www.finnable.com/grievance-redressal-policy/</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------6----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={finzyimage} alt='Lenderimage'></img>
            <p>Finzy</p> 
            </div>
           <div className='secondonetext'>
           <p> Amount range:₹50,000 - ₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://finzy.com/borrow'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/finzy'>Apply now</a> */}
           </button><span>
                       <button className="secondonebutton" onClick={handleClickOpen55}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open55}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Sunil S
                    <br />
                    Company name: Bridge Fintech Solutions Private Limited
                    <br />
                    Contact phone: 9513330562
                    <br />
                    Email: grievances@finzy.com
                    <br />
                    CustomerCare: 9341300300 ,support@finzy.com
                    <br />
                    GRO link: <a href='https://finzy.com/contactus'>https://finzy.com/contactus</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------7----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={flexiloansimage} alt='Lenderimage'></img>
            <p>  FlexiLoans</p> 
            </div>
           <div className='secondonetext'>
           <p> Amount range:₹50,000-₹1,00,00,000</p>
           <p>  Features:Unsecured Business Loans for MSMEs</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loans.flexiloans.com/?nlp=1&partnerCode=62f5e7ab8d3qj&utm_source=partner&utm_medium=credithaat&utm_campaign=CreditHaatSMS'>Apply now</a></button><span>
           <button className="secondonebutton" onClick={handleClickOpen2}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open2}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Ms. Pranaali Sawant
                    <br />
                    Company name: Epimoney Private Limited
                    <br />
                    Tel: 8879758863
                    <br />
                    Email: nodal.grievance@epimoney.com
                    <br />
                    CustomerCare: 022-68219595  ,myaccount@flexiloans.com
                    <br />
                    Link- <a href='https://flexiloans.com/co-lenders'>https://flexiloans.com/co-lenders</a>  , privacy policy
                    link - <a href='https://flexiloans.com/regulatory'>https://flexiloans.com/regulatory</a>
                    <br/>
                    GRO link: <a href='https://flexiloans.com/grievance-redressal-mechanism'>https://flexiloans.com/grievance-redressal-mechanism</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------8----------------------------------------------- */}


        {/* --------------------------------9----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={homecreditimage} alt='Lenderimage'></img>
            <p>  HomeCredit</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹5,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.homecredit.co.in/en'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/hci'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen56}>Know more</button></span>
 <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open56}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Mr. Vishal Sharma
                    <br />
                    Company name: Home Credit India Finance Private Limited
                    <br />
                    Contact phone: 0124-6628713
                    <br />
                    Email: grievanceofficer@homecredit.co.in
                    <br />
                    CustomerCare: 0124-662-8888 , care@homecredit.co.in
                    <br/>
                    GRO link: <a href="https://www.homecredit.co.in/en/contact-us">https://www.homecredit.co.in/en/contact-us</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------10----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={iiflblimage} alt='Lenderimage'></img>
            <p> IIFL-BL</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹50,000-₹30,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://iifl-loans.finbox.in/?partnerCode=CH_KOIRUD&agentCode=applinkbl'>Apply now</a> */}
          <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.credithaat.com/pl_journey'>Apply now</a>  
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/iiflbl_old'>Apply now</a> */}
           </button><span>
            <button className="secondonebutton" onClick={handleClickOpen57}>Know more</button></span>
 <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open57}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Mr Hardik Panchal & Mrs. Kavita Menon
                    <br />
                    Company name: IIFL Finance Limited
                    <br />
                    Contact phone:  +91 22-45205810 & +91 22-68178410
                    <br />
                    Email: nodalofficer@iifl.com
                    <br />
                    CustomerCare: 1860-267-3000 or 7039-050-000, customer.care@iifl.com
                    <br/>
                    GRO link: <a href="https://www.iifl.com/finance/grievance-redressal-procedure">https://www.iifl.com/finance/grievance-redressal-procedure</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------11----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={iiflplimage} alt='Lenderimage'></img>
            <p>  IIFL-PL</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹5,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://iifl-loans.finbox.in/?partnerCode=CH_KHSLZR&agentCode=applink'>Apply now</a> */}
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.credithaat.com/pl_journey'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/iifl'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen58}>Know more</button></span>
 <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open58}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Mr Hardik Panchal & Mrs. Kavita Menon
                    <br />
                    Company name: IIFL Finance Limited
                    <br />
                    Contact phone:  +91 22-45205810 & +91 22-68178410
                    <br />
                    Email: nodalofficer@iifl.com
                    <br />
                    CustomerCare: 1860-267-3000 or 7039-050-000, 
                    <br/>
                    <a href="https://www.iifl.com/contact-us/raise-a-request">https://www.iifl.com/contact-us/raise-a-request</a>
                   <br/> GRO link: <a href="https://www.iifl.com/finance/grievance-redressal-procedure">https://www.iifl.com/finance/grievance-redressal-procedure</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
             {/* --------------------------------11----------------------------------------------- */}

             <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={iiflgold} alt='Lenderimage'></img>
            <p> IIFL-GOLD-LOAN</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹5,000-₹50,00,000</p>
           <p> Features: 	Gold Loan, Secured Credit</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.iifl.com/gold-loans'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/iiflgoldloan'>Apply now</a> */}
           </button><span>
          <button className="secondonebutton" onClick={handleClickOpen59}>Know more</button></span>
 <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open59}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Mr Hardik Panchal & Mrs. Kavita Menon<br />
                    Company name: IIFL Finance Limited
                    <br />
                    Contact phone:  +91 22-45205810 & +91 22-68178410
                    <br />
                    Email: nodalofficer@iifl.com
                    <br />
                    CustomerCare: 1860-267-3000 or 7039-050-000, gold-helpline@iifl.com
                    <br/>
                    GRO link: <a href="https://www.iifl.com/finance/grievance-redressal-procedure">https://www.iifl.com/finance/grievance-redressal-procedure</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div> 

        {/* --------------------------------12----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={incredimage} alt='Lenderimage'></img>
            <p>  Incred</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹10,000-₹10,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://play.google.com/store/apps/details?id=com.incred.customer&hl=en_IN&gl=IN'>Apply now</a></button><span>
           {/* <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/incred_choj'>Apply now</a></button><span> */}
           <button className="secondonebutton" onClick={handleClickOpen60}>Know more</button></span>
 <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open60}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer:  Ms. Rosy Dsouza<br />
                    Company name: InCred Financial Services Limited
                    <br />
                    Contact phone: 022-42117799
                    <br />
                    Email: care@incred.com
                    <br />
                    CustomerCare: 18001022192 , care@incred.com
                    <br/>
                    GRO link: <a href="https://www.incred.com/grievance/">https://www.incred.com/grievance/</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------13----------------------------------------------- */}

        {/* <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={indifiimage} alt='Lenderimage'></img>
            <p> Indifi</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹1,00,000-₹2,00,00,000</p>
           <p> Features:Business loan</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.indifi.com/associate/CreditHaat'>Apply now</a></button><span>
           <button className="secondonebutton" onClick={handleClickOpen3}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open3}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Mr. Naresh Kuma
                    <br />
                    Company name: Indifi Technologies
                    <br />
                    Tel: 8448895332
                    <br />
                    Email: grievances@indifi.com
                    <br />
                    CustomerCare: 9696555444,cs@indifi.com
                    <br />
                    GRO link:<a href="https://media.indifi.com/images/website/documents/Grievance_Redressal_Mechanism_Indifi_Technologies.pdf">https://media.indifi.com/images/website/documents/<br/>Grievance_Redressal_Mechanism_Indifi_Technologies.pdf</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div> */}

        {/* --------------------------------14----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={kreditbeeimage} alt='Lenderimage'></img>
            <p>  Kreditbee</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹1,000-₹3,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://a.krdt.be/02Je/chapi'>Apply now</a></button><span>
           {/* <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/kreditbee'>Apply now</a></button><span> */}
           <button className="secondonebutton" onClick={handleClickOpen4}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open4}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Ms. Asharani
                    <br />
                    Company name: Finnovation Tech Solutions Private Limited
                    <br />
                    Tel: 080-44292200 / 080-68534522
                    <br />
                    Email: help@kreditbee.in
                    <br />
                    CustomerCare: 080-44292200,help@kreditbee.in
                    <br />
                    GRO link: <a href="https://www.kreditbee.in/grievance-redressal">https://www.kreditbee.in/grievance-redressal</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------15----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={moneytapimage} alt='Lenderimage'></img>
            <p>  Moneytap</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹3,000-₹5 Lakh</p>
           <p>Features:Digital Credit Line</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://web.moneytap.com/fa/#/qual/quick-profile?utm_source=mpx_hicredit&utm_medium=Multi&utm_campaign=Pilot1&utm_content=CL'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/moneytap'>Apply now</a> */}
           </button><span>
            <button className="secondonebutton" onClick={handleClickOpen61}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open61}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Anjali Panwar
                    <br />
                    Company name: MWYN Tech Private Limited
                    <br />
                    Tel: +91 6361121526
                    <br />
                    Email: anjali@freo.money
                    <br />
                    CustomerCare: hello@freo.money
                    <br />
                    GRO link: <a href="https://freo.money/grievanceredressal">https://freo.money/grievanceredressal</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------16----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={moneyviewimage} alt='Lenderimage'></img>
            <p> MoneyView</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:₹5,000-₹5,00,000</p>
           <p> Features:Personal Loans for Salaried andSelf Employed Individuals</p>
           
           <div className='anothertext'>
            <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://moneyviewloans.app.link/MUxHSflNMab'>Apply now</a></button><span>
           {/* <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/moneyviewnew'>Apply now</a></button><span> */}
           <button className="secondonebutton" onClick={handleClickOpen5}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open5}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Mr. Rishov Bhattacharjee
                    <br />
                    Company name: Whizdm Innovations Private Limited
                    <br />
                    Email: grievance@moneyview.in
                    <br />
                    Phone number: 080 6939 0476
                    <br />
                    Address: 17/1, 1st and 2nd Floor, The Address Building, Outer Ring Road, Marathahalli, Kadubeesanahalli, Bangalore - 560103
                    <br/>
                    Timings: 9:00AM to 6:00PM (Monday to Friday - Excluding public holidays)
                    <br/>
                    GRO link: <a href="https://moneyview.in/grievance">https://moneyview.in/grievance</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------17----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={mpokketimage} alt='Lenderimage'></img>
            <p>mPokket</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹1,000-₹2,00,000</p>
           <p>Features:Short Term Personal Loans</p>
           <div className='anothertext'>
            <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://click.mpkt.to/jr2q/74y7t9t9'>Apply now</a></button><span>
           {/* <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.credithaat.com/pl_journey'>Apply now</a></button><span> */}
           <button className="secondonebutton" onClick={handleClickOpen54}>Know more</button></span>
 <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open54}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Raktim Addya<br />
                    Company name: Maybright Ventures Private Limited
                    <br />
                    Address: PS Srijan Corporate Park, Unit 1204, Sector V, Kolkata – 700091
                    <br/>
                    Email: grievance@mpokket.com
                    <br />
                    Contact phone: 03368157400
                    <br />
                    GRO link: <a href="https://www.mpokket.in/grievance-redressal-policy">https://www.mpokket.in/grievance-redressal-policy</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           
           </div>
        </div>
        </div>

        {/* --------------------------------18----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={naviimage} alt='Lenderimage'></img>
            <p> Navi</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://navi.com/'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/navi'>Apply now</a> */}
           </button><span>
            <button className="secondonebutton" onClick={handleClickOpen90}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open90}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficers: Bikram Ado
                      <br />
                    Company name: Navi Limited
                    <br />
                    Email: grievance.nfpl@navi.com
                    <br />
                    Contact phone:
                    <br/>
                    CustomerCare: 918147544555
                    <br />
                    GRO link: <a href="https://navi.com/customer-grievance-redressal">https://navi.com/customer-grievance-redressal</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------19----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={niraimage} alt='Lenderimage'></img>
            <p>  Nira</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://nira.onelink.me/Iptv?pid=credithaat_int&af_siteid=CHAPP&c=CHAPP&af_cost_model=CPI&af_ad_type=CHAPP&af_adset=APP&af_ad=App'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/nira'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen6}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open6}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficers: 1. Pranaya Kumar Biswal (General Queries)
                    <br/>
                      2. Sashikanta Parhi (Collection-related Complaints)
                      <br />
                    Company name: Shuhari Tech Ventures Private Limited
                    <br />
                    Email: grievance@nirafinance.com
                    <br />
                    Contact phone: 7618789180
                    <br/>
                    CustomerCare: 7259947885 , support@nirafinance.com
                    <br />
                    GRO link: <a href="https://www.nirafinance.com/support">https://www.nirafinance.com/support</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------20----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={prefrimage} alt='Lenderimage'></img>
            <p> Prefr</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://marketplace.creditvidya.com/creditHaat?utm_source=CHAPP&utm_campaign=CHApp'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://marketplace.creditvidya.com/creditHaat/GetStarted?startPage=base'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen7}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open7}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Nodal Desk
                    <br />
                    Company name: Dreamplug Technologies Pvt Ltd
                    <br />
                    Tel:  040-69882777
                    <br />
                    Email: nodal.officer@prefr.com
                    <br />
                    CustomerCare:  040 6988 1555  , wecare@prefr.com
                    
                    <br/>
                    GRO link: <a href="https://prefr.com/privacy_policy#grievance_redressal">https://prefr.com/privacy_policy#grievance_redressal</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------21----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={privoimage} alt='Lenderimage'></img>
            <p>Privo</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.appsflyer.com/com.privo.creditsaison?pid=credithaat_int&af_siteid=CHApp&c=App&af_cost_model=CPI&af_ad_type=App&af_adset=App&af_ad=App&af_click_lookback=7d&clickid=%s&advertising_id=App'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://play.google.com/store/apps/details?id=com.privo.creditsaison&referrer=af_tranid%3Dk8Ng2ivGjy7RiqlWBwWGgQ%26af_siteid%3DCHApp%26c%3DApp%26af_ad%3DApp%26pid%3Dcredithaat_int%26af_adset%3DApp'>Apply now</a> */}
           </button><span>
            <button className="secondonebutton" onClick={handleClickOpen63}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open63}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Emaad Khan
                    <br />
                    Company name: Kisetsu Saison Finance (India) Private Limited
                    <br />
                    Contact phone: +91 9962003070
                    <br />
                    Email: support@privo.in ,  support@creditsaison-in.com
                    <br />
                    CustomerCare:  1800-1038-961  , support@privo.in ,support@creditsaison-in.com
                    
                    <br/>
                    GRO link: <a href="https://privo.in/">https://privo.in/</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------22----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={stashfinimage} alt='Lenderimage'></img>
            <p>StashFin</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://stash.page.link/hct2024'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/stashfin'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen8}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open8}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Mr. Aditya Verma
                    <br />
                    Company name: Akara Capital Advisors Pvt Ltd/EQX Analytics Pvt Ltd. (LSP)
                    <br />
                    Tel: +91 9289108566 | 0124-6981222
                    <br />
                    Email: grievance.officer@stashfin.com
                    <br />
                    CustomerCare: +91 9289108566 | 0124-6981222 , grievance.officer@stashfin.com
                    <br/>
                    GRO link: <a href="https://www.stashfin.com/grievance-mechanism">https://www.stashfin.com/grievance-mechanism</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------23----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={tatacapitalimage} alt='Lenderimage'></img>
            <p>  Tata Capital</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://businessloan.tatacapital.com/online/loans/business-loans/home?sourceName=CREDITHAAT#!'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/tatacapital_old'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen9}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open9}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Sona Gaharwar
                    <br />
                    Company name: Tata Capital Limited
                    <br />
                    Tel: 022 6968 2392
                    <br />
                    Email: CCRO@tatacapital.com
                    <br />
                    CustomerCare: 1860 267 6060 , customercare@tatacapital.com
                    <br />
                    GRO link: <a href="https://www.tatacapital.com/contact-us/customer-grievances.html">https://www.tatacapital.com/contact-us/customer-grievances.html</a>
                    {/* connect@flexiloans.com */}
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

         {/* ------------------------------------------------------------------------------- */}

         <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={tatapl} alt='Lenderimage'></img>
            <p>  Tata Capital-PL</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹1,00,000-₹50,00,000</p>
           <p> Features: Lowest rate, Highest Offer</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.tatacapital.com/online/loans/personal-loans/home?sourceName=Credithaat&subsource=Credithaat&LEAD_SUB_SOURCE_1=Credithaat&cid=sms:pl:dec24:Credithaat::#'>Apply now</a></button><span>
           <button className="secondonebutton" onClick={handleClickOpen52}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open52}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Sona Gaharwar
                    <br />
                    Company name: Tata Capital Limited
                    <br />
                    Tel: 022 6968 2392
                    <br />
                    Email: CCRO@tatacapital.com
                    <br />
                    CustomerCare: 1860 267 6060 , customercare@tatacapital.com
                    <br />
                    GRO link: <a href="https://www.tatacapital.com/contact-us/customer-grievances.html">https://www.tatacapital.com/contact-us/customer-grievances.html</a>
                    {/* connect@flexiloans.com */}
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------24----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={rupeeimage} alt='Lenderimage'></img>
            <p>RupeeRedee</p> 
            </div>
           <div className='secondonetext'>
           {/* <p>Amount range: ₹20,000-₹5,00,000</p> */}
           <p>Amount range: ₹2,000-₹1,49,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.appsflyer.com/com.rupeeredee.app?pid=credithaat_int&c=CHAPP&af_adset=App&af_cost_model=CPI&af_click_lookback=7d&clickid=%s'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://play.google.com/store/apps/details?id=com.rupeeredee.app&referrer=af_tranid%3DFJ2hwMzuEz94KhLAStNDyg%26af_siteid%3DApp%26c%3DApp%26af_ad%3DApp%26pid%3Dcredithaat_int%26af_adset%3DCreditHaatApp'>Apply now</a> */}
           </button><span>
                       <button className="secondonebutton" onClick={handleClickOpen62}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open62}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Shivani Jha
                    <br />
                    Company name: MONEYMITRA IT SOLUTIONS PRIVATE LIMITED
                    <br />
                    Contact phone: 0124-4699111
                    <br />
                    Email: GRO@rupeeredee.com
                    <br />
                    CustomerCare: 0124-6914100 , care@rupeeredee.com
                    <br />
                    GRO link: <a href="https://www.rupeeredee.com/contact">https://www.rupeeredee.com/contact</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------25----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={upwardsimage} alt='Lenderimage'></img>
            <p>  Upwards</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.upwards.in/login?utm_source=partner_hicredit&utm_campaign=partner_hicredit&utm_medium=partner_hicredit'>Apply now</a></button><span>
           <button className="secondonebutton" onClick={handleClickOpen10}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open10}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Ketan Sali
                    <br />
                    Company name: Upwards Capital Private Limited
                    <br />
                    Contact phone: +91-6358874622
                    <br />
                    Email: grievance.redressal@lendingkart.com
                    <br />
                    CustomerCare: 1800-572-0202 , care@lendingkart.com
                    <br/>
                    GRO link: <a href="https://upwards.in/contact-us">https://upwards.in/contact-us</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------26----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={kisshtimage} alt='Lenderimage'></img>
            <p>Kissht</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://credit-haat.onelink.me/LP79?af_xp=custom&pid=Credit-Haat&c=Credit-Haat&is_retargeting=true&af_reengagement_window=7d&af_inactivity_window=7d&af_click_lookback=30d'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://play.google.com/store/apps/details?id=com.fastbanking&referrer=af_tranid%3DqZTvyWT76lwGuPOLhC6yQg%26af_siteid%3D%7Baffiliate_id%7D%26c%3D%7BCampaign%7D%26af_ad%3D%7BAd%7D%26pid%3Dcredithaat_int%26af_adset%3D%7BAdset%7D&pli=1'>Apply now</a> */}
           </button><span>
            <button className="secondonebutton" onClick={handleClickOpen64}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open64}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Reefat Shaikh
                    <br />
                    Company name: OnEMI Technology Solutions Limited
                    <br />
                    Contact phone: 08044745952
                    <br />
                    Email: care@kissht.com
                    <br />
                    CustomerCare: 080 44745884 / 080 62816309 , care@kissht.com
                    <br/>
                    GRO link: <a href="https://www.kissht.com/customer_grievance">https://www.kissht.com/customer_grievance</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
         {/*-------------------------------------27-----------------------------*/}
         <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={anq} alt='Lenderimage'></img>
            <p>  ANQ</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: Prepaid card</p>
           <p> Features: Assured approval for card issuance.</p>
           
           <div className='anothertext'>
            <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://anq.finance/?referrer=singular_click_id%3D03c469c0-ab9a-456b-b4d2-072c314b8e45'>Apply now</a></button><span>
            <button className="secondonebutton" onClick={handleClickOpen65}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open65}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Amarjeet Mahto
                    <br />
                    Company name: Anq Digital Finserv Private Limited
                    <br />
                    Contact phone: + 91-8050533435 
                    <br />
                    Email: nodal@anq.finance
                    <br />
                    CustomerCare: help@anq.finance
                    <br/>
                    GRO link: <a href="https://anq.finance/Grievance">https://anq.finance/Grievance</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
 {/*-------------------------------------28-----------------------------*/}
 <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={rupicard} alt='Lenderimage'></img>
            <p>  Rupicard</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: Prepaid card</p>
           <p> Features: Assured approval for card issuance.</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://play.google.com/store/apps/details?id=com.rupicard&referrer=utm_source%3Dpartner%26utm_medium%3DCREDITHAAT%26utm_campaign%3D'>Apply now</a></button><span>
           <button className="secondonebutton" onClick={handleClickOpen11}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open11}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Ms. Reema Dalvi
                    <br />
                    Company name: Rupicard
                    <br />
                    Contact phone: 022 4302 8888.
                    <br />
                    Email: nodal.officer@sbmbank.co.in
                    <br />
                    CustomerCare: support@rupicard.com
                    <br />
                    100% Guaranteed Credit Card,
                    <br/>
                    Upto 7% Interest on Fixed Deposit
                    <br/>
                    GRO link: <a href='https://www.sbm.bank.in/notice-board/grievance-redressal-mechanism'>https://www.sbm.bank.in/notice-board/grievance-redressal-mechanism</a>

                  </div>

                  
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
{/*----------------------------------------------new list added 12-march-2025-----------------------------------------*/}
                {/* --------------------------------29----------------------------------------------- */}

                <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={smcoin} alt='Lenderimage'></img>
            <p>Olyv (SmartCoin)</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹10,000-₹5,00,000</p>
           <p> Features: 	Loans for salaried and self employed</p>
           
           <div className='anothertext'>
            <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://smartcoin.onelink.me/KLIY/CredithaatMarketing'>Apply now</a></button><span>
           {/* <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.olyv.co.in/?utm_source=credithaat&utm_campaign=credithaat_link2'>Apply now</a></button><span> */}
           <button className="secondonebutton" onClick={handleClickOpen35}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open35}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Ms. Moushumi Mukherjee
                    <br />
                    Company name: SmartCoin Financials Private Limited
                    <br />
                    Contact phone: + 91 9986640571
                    <br />
                    Email: grievance@smartcoin.co.in
                    <br />
                    GRO link: <a href="https://web.olyv.co.in/grievance_redressal_policy.html">https://web.olyv.co.in/grievance_redressal_policy.html</a>
                    {/* CustomerCare: +91 9148380504 */}
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}
               {/* --------------------------------30----------------------------------------------- */}

               <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={branch} alt='Lenderimage'></img>
            <p>Branch</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹500-₹2,00,000</p>
           <p> Features: Loans for the way you live</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://play.google.com/store/apps/details?id=com.branch_international.branch.branch_demo_android&referrer=utm_source%3DCredithaat%26lead_id%3DCHAPP'>Apply now</a></button><span>
           <button className="secondonebutton" onClick={handleClickOpen36}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open36}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Mr. Vishal Kaushik
                    <br />
                    Company name: Branch International Financial Services Private Limited
                    <br />
                    Contact phone: +91 8655937427
                    <br />
                    Email: gro@branch.co
                    <br />
                    GRO link: <a href="https://branch.co/gr">https://branch.co/gr</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}
        {/* --------------------------------31----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={kinara} alt='Lenderimage'></img>
            <p>Kinara</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹1,00,000-₹75,00,000</p>
           <p> Features: Business Loan, SME Finance</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://kinaracapital.com/'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/kinaracapital'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen37}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open37}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Guna R
                    <br />
                    Company name: Kinara Capital Private Limited
                    <br />
                    Contact phone: 6364464958
                    <br />
                    Email: managercustomercare@kinaracapital.com
                    <br />
                    CustomerCare: 1800-103-2683 , help@kinaracapital.com
                    <br/>
                    GRO link: <a href="https://kinaracapital.com/customer-grievance-redressal-policy/">https://kinaracapital.com/customer-grievance-redressal-policy/</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}

             {/* --------------------------------32----------------------------------------------- */}

             <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={slice} alt='Lenderimage'></img>
            <p>Slice</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹5,000-₹5,00,000 </p>
           <p> Features: Instant approval</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://slice.go.link/glNS6'>Apply now</a></button><span>
           <button className="secondonebutton" onClick={handleClickOpen38}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open38}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Swetha S 
                    <br />
                    Company name: slice small finance bank
                    <br />
                    Contact Number : 080 4831 8328
                    <br />
                    Email: principal.nodalofficer@slicebank.com , nodalofficer@slicebank.com
                    <br/>
                    CustomerCare: 080 4832 99991800-121-1905 , help@sliceit.comcustomercare@nesfb.com
                    <br />
                    GRO link: <a href="https://slice.bank.in/documents/Policies/Customer-Grievance-Redressal-Mechanism-2.pdf" >https://slice.bank.in/documents/Policies/Customer-Grievance-Redressal-Mechanism-2.pdf</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}
         {/* --------------------------------33----------------------------------------------- */}

         <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={trustpaisa} alt='Lenderimage'></img>
            <p>Trust Paisa</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹1,000-₹1,00,000 </p>
           <p> Features: Approval on low scores, instant disbursals</p>
           
           <div className='anothertext'>
            <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://trustpaisa.com/?utm_source=credithaat&utm_medium=cpa&utm_campaign=CHAPP&click_id=CLICKID'>Apply now</a></button><span>
           {/* <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://trustpaisa.com/?utm_source=credithaat&utm_medium=cpa&utm_campaign=credithaat_cpa'>Apply now</a></button><span> */}
           <button className="secondonebutton" onClick={handleClickOpen39}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open39}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Mr.Sharath Kumar
                    <br />
                    Company name: Flexidigital Tech India Private Limited
                    <br />
                    Contact phone: 02269875199
                    <br />
                    Email: grievance@trustpaisa.com
                    <br/> 
                    CustomerCare: 02269875175 , help@trustpaisa.com
                    <br />
                    GRO link: <a  href="https://trustpaisa.com/grievance">https://trustpaisa.com/grievance</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}

         {/* --------------------------------35----------------------------------------------- */}

         <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={rupeek} alt='Lenderimage'></img>
            <p>Rupeek</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹50,00,000 </p>
           <p> Features: Paperless, 100% Safe</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://rupeek.com/'>Apply now</a>
           {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.credithaat.com/Rupeek'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen40}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open40}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Mr.Mohammed Imtiyaz
                    <br />
                    Company name: Rupeek Capital Private Limited
                    <br />
                    Tel: 080-68951717
                    <br />
                    Email: grievance@rupeek.com

                    <br />
                    CustoemerCare:  18004198000 , care@rupeek.com 

                    <br/>
                    GRO link: <a href="https://assets.rupeek.com/rcpl-website/rcpl-greivance-redressal.pdf">https://assets.rupeek.com/rcpl-website/rcpl-greivance-redressal.pdf</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}

        {/* --------------------------------36----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={ramfincorp} alt='Lenderimage'></img>
            <p>Ram Fincorp</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹5,000 - ₹1,25,000 </p>
           <p> Features: Instant approval</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://applyonline.ramfincorp.com/?utm_source=Credithaat'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://play.google.com/store/apps/details?id=com.ramfincorploan&hl=en_IN'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen41}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open41}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Mr. Samir Sethi
                    <br />
                    Company name: R. K. Bansal Pvt. Ltd
                    <br />
                    Contact phone: +91-9311417272
                    <br/>
                    Email : samir@ramfincorp.com
                    <br/>
                    Helpline no : +91-9599238889 & +91-9599196212
                    <br />
                    CustomerCare: info@ramfincorp.com
                    <br />
                    GRO link: <a href="https://www.ramfincorp.com/grievance_redressal_policy">https://www.ramfincorp.com/grievance_redressal_policy</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}

        {/* --------------------------------37----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={rupeek112} alt='Lenderimage'></img>
            <p>Rupee112</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000 to ₹4,00,000</p>
           <p> Features: Instant approval</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.rupee112.com/apply-now?utm_source=credithaat&utm_medium=credithaat&utm_campaign=CHAPP'>Apply now</a></button><span>
           <button className="secondonebutton" onClick={handleClickOpen42}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open42}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Divya Agnihotri
                    <br />
                    Company name: Aadhar India Finvest Limited
                    <br />
                    Contact phone: +91-9289971377
                    <br />
                    Email:  divya.agnihotri@aadharindiafinvest.com
                    <br />
                    CustomerCare: +91-9220644112 , care@rupee112.com
                    <br/> 
                    GRO link: <a href="https://www.rupee112.com/privacy-policy">https://www.rupee112.com/privacy-policy</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}
        {/* --------------------------------38----------------------------------------------- */}

             <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={poonawalla} alt='Lenderimage'></img>
            <p>Poonawalla Fincorp</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹5,00,000 </p>
           <p> Features: Instant approval</p>
           
           <div className='anothertext'>
            <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://instant-pocket-loan.poonawallafincorp.com/?utm_DSA_Code=PMH00235&UTM_Partner_Name=CREDITHAAT&UTM_Partner_Medium=CHAPP&UTM_Partner_AgentCode=PFLCREDITHAAT&UTM_Partner_ReferenceID=CLICKID'>Apply now</a></button>
           {/* <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://instant-pocket-loan.poonawallafincorp.com/?utm_DSA_Code=PMH00235&UTM_Partner_Name=CREDITHAAT&UTM_Partner_Medium=SMS&UTM_Partner_AgentCode=PFLCREDITHAAT&UTM_Partner_ReferenceID=CREDITHAATPFL00000001'>Apply now</a></button> */}
           <span>
           <button className="secondonebutton" onClick={handleClickOpen43}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open43}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Anooja Sodhi
                    <br />
                    Company name: Poonawalla Fincorp Limited
                    <br />
                    Contact phone: 020 67808090
                    <br />
                    Email: grievance@poonawallafincorp.com
                    <br />
                    CustomerCare: 1800 266 3201 , customercare@poonawallafincorp.com, grievance@poonawallafincorp.com
                    <br/>
                    GRO link: <a href="https://poonawallafincorp.com/documents/d/poonawalla-fincorp/grievance-redressal-officers">https://poonawallafincorp.com/documents/d/poonawalla-fincorp/grievance-redressal-officers</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}

        {/* --------------------------------39----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={unity} alt='Lenderimage'></img>
            <p>Unity SFB</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹5,00,000 </p>
           <p> Features: Instant approval</p>
           
           <div className='anothertext'>
            <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loans.theunitybank.com/unity-pl-ui/page/exclusion/login/logindetails?utm_source=partnership&utm_medium=credithaat&utm_campaign=CLICKID'>Apply now</a></button><span>
{/*             
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loans.theunitybank.com/unity-pl-ui/page/exclusion/login/logindetails?utm_source=partnership&utm_medium=credithaat&utm_campaign=CHAPP'>Apply now</a></button><span> */}
           <button className="secondonebutton" onClick={handleClickOpen44}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open44}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Mr. Mahendra Bindra
                    <br />
                    Company name: Unity Small Finance Bank 
                    <br />
                    Contact phone : 9152366104
                    <br />
                    Email: level3escalation@unitybank.co.in
                    <br/>
                    CustomerCare: 1800-209-1122 , care@unitybank.co.in
                    <br />
                    GRO link: <a href="https://unity.bank.in/contact-us">https://unity.bank.in/contact-us</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}


        {/* --------------------------------40----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={zype} alt='Lenderimage'></img>
            <p>Zype</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹10,000-₹5,00,000 </p>
           <p> Features: For Salaried Professional</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://zype.onelink.me/vx8a?af_xp=custom&pid=CustomerSource&af_dp=com.zype.mobile%3A%2F%2F&deep_link_value=myZype&af_click_lookback=30d&c=CH'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://zype.sng.link/Bjygt/4968?_dl=com.zype.mobile'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen45}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open45}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Mr. Paritosh Malondkar
                    <br />
                    Company name: Easy Platform Services Private Limited
                    <br />
                    Contact phone : +91 9930 344 937
                    <br />
                    Email: info@getzype.com
                    <br/>
                    CustomerCare: 080654 20207 , support@getzype.com
                    <br />
                    GRO link: <a href="https://www.getzype.com/grievance-redressal/">https://www.getzype.com/grievance-redressal/</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}


     {/* --------------------------------41----------------------------------------------- */}

     <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={tataneu} alt='Lenderimage'></img>
            <p>Tata Neu</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹25,000-₹10,00,000 </p>
           <p> Features: 100% digital loans process</p>
           
           <div className='anothertext'>
            <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.tataneu.com/v2/finance/pl-marketplace/landing?utm_source=Partnerships_external&utm_medium=CreditHaat&utm_campaign=MKT_ST-FS_HD-PRF_BS-ALL_PL-BOT_CH-AL_TP-PLC_DT-20250317_CT-PL_OJ-ACQ_LP-BR_BD-PLN_CO-PL_Credithaat&utm_code=generic&utm_channel=b2b2c_credithaat'>Apply now</a></button><span>
           {/* <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.tatadigital.com/v2/finance/pl-marketplace/landing?utm_source=CreditHaat&utm_medium=pl_offline&utm_campaign=pl_credithaat_campaign'>Apply now</a></button><span> */}
           <button className="secondonebutton" onClick={handleClickOpen46}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open46}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Mr. Nikhil Asopa
                    <br />
                    Company name: Tata Digital Private Limited
                    <br />
                    Contact phone : 
                    <br />
                    Email: grievances@tataneu.com
                    <br/>
                    CustomerCare:  customercare@tataneu.com
                    <br />
                    GRO link: <a href="https://www.tataneu.com/login/privacypolicy">https://www.tataneu.com/login/privacypolicy</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}

   {/* --------------------------------42----------------------------------------------- */}

   <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={hdfc} alt='Lenderimage'></img>
            <p>HDFC Credit Cards</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range:  </p>
           <p> Features: Apply for Credit Card Online - Get Instant Approval</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://applyonline.hdfcbank.com/cards/credit-cards.html?CHANNELSOURCE=MRTB&DSAcode=XVBP&LGcode=VP1&LCcode=VP2&LC2=CHAPP&SMcode=U2303#nbb'>Apply now</a></button><span>
           {/* <button className="secondonebutton" onClick={handleClickOpen47}>Know more</button></span> */}
           
            <button className="secondonebutton"><a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://www.hdfc.bank.in/important-messages/product-features-and-policy?icid=website_organic_footer_others:link:digitallendingimportantlinks"
                >
                  Know more
                </a></button>
                </span>
           {/* <Link 
              to="/lendingpartners/hdfc" 
              style={{ textDecoration: "none" }}
            >
              <button className="secondonebutton">
                Know more
              </button>
            </Link>
            </span> */}


           {/* <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open47}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Ms. Shalini Tandon
                    <br />
                    Company name: HDFC Ltd
                    <br />
                    Contact Number : 1800 266 4060
                    <br />
                    Email:  grievance.redressaldl@hdfcbank.com */}

                    <br />

                {/* </DialogContent> */}
              {/* </BootstrapDialog> */}
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}

 {/* --------------------------------43----------------------------------------------- */}

 <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={indiagold} alt='Lenderimage'></img>
            <p>IndiaGold</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range : ₹50,000-₹50,00,000	</p>
           <p> Features: Paperless, 100% Safe</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://indiagold.co/'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.credithaat.com/GoldJourney'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen48}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open48}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Mr. Prakhar Khandelwal
                    <br />
                    Company name: Flat White Capital Pvt. Ltd
                    <br />
                    Contact phone : +918068495878
                    <br />
                    Email:  help@indiagold.co
                    <br/>
                    CustomerCare: +918068495878 , support@indiagold.co
                    <br />
                    GRO link: <a href="https://indiagold.co/privacy-policy">https://indiagold.co/privacy-policy</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}

 {/* --------------------------------44----------------------------------------------- */}

 <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={lplate} alt='Lenderimage'></img>
            <p>Lendingplate</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range : ₹50,000 to ₹4,00,000	  </p>
           <p> Features: Digital, Quick Process</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.appsflyer.com/com.lendingplate?pid=credithaat_int&af_siteid=CHAPP&c=APP&af_ad_type=App&af_ad=App&af_click_lookback=30d&clickid=%s'>Apply now</a>
            {/* <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://bit.ly/LPCHAPP'>Apply now</a> */}
           </button><span>
           <button className="secondonebutton" onClick={handleClickOpen49}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open49}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Mr. Rajat Malpani
                    <br />
                    Company name:  Unifinz Capital India Limited (UCIL)
                    <br />
                    Contact phone : +91-70003517003 
                    <br />
                    Email: grievance@lendingplate.com 
                    <br/>
                    CustomerCare: +91–7373737316 , care@lendingplate.com
                    <br />
                    GRO link: <a href="https://lendingplate.com/policies">https://lendingplate.com/policies</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}


 {/* --------------------------------45----------------------------------------------- */}

 <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={kredit} alt='Lenderimage'></img>
            <p>Kredito24</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range : ₹500-₹50,000</p>
           <p> Features: Instant approval</p>
           
           <div className='anothertext'>
            <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://ajamservices.g2afse.com/click?pid=12&offer_id=2&sub1=CH&sub2=CLICKID'>Apply now</a></button>
           {/* <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://bit.ly/41k4YO7'>Apply now</a></button> */}
           <span>
           <button className="secondonebutton" onClick={handleClickOpen50}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open50}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer : Mr. Saman Bilgrami
                    <br />
                    Company name : Kredito24(Oneclickmoney Techplus Pvt Ltd) 
                    <br />
                    Contact phone : +91 124 692 0540
                    <br />
                    Email : feedback@kredito24.in 
                    <br/>
                    CustomerCare:  +91 124 692 0540 , +91 124 692 0541 , care@kredito24.in
                    <br />
                    GRO link: <a href="https://kredito24.in/page/privacy-policy">https://kredito24.in/page/privacy-policy</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}

{/* --------------------------------45----------------------------------------------- */}

<div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={ayushpay} alt='Lenderimage'></img>
            <p>AyushPay</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range : ₹10,000-₹15,00,000</p>
           <p> Features: Paper-less, minimal documentation<br></br>(Only Aadhar, Pan and 6 months bank statement), entirely digital loan</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://crht.ayushpay.com'>Apply now</a></button><span>
           <button className="secondonebutton" onClick={handleClickOpen51}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open51}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Veena Karevhan 
                    <br />
                    Company name: Nikunj Health Technologies Private Limited (“AyushPay”)
                    <br />
                    Contact phone: 
                    <br />
                    Email: care@ayushpay.com 
                    <br/>
                    CustomerCare: +91 9711221080 , care@ayushpay.com
                    <br />
                    GRO link: <a href="https://ayushpay.com/privacyPolicy#contact">https://ayushpay.com/privacyPolicy#contact</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}
{/*-----------------------------------------49---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={rapidrupeeimage} alt='Lenderimage'></img>
            <p>Rapid Rupee</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹1,000-₹60,000</p>
           <p> Features: NO bank statement, Quick approval</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.appsflyer.com/rapidrupee.app?pid=credithaat_int&af_siteid=CHAPP&c=CHAPP&af_cost_model=CPR&af_ad_type=Marketplace&af_click_lookback=7d&clickid=%s'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen66}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open66}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br /> GrievanceRedressalOfficer: Shaista Shaikh
                    <br />
                    Company name: AFG BUSINESS SOLUTIONS (INDIA) PRIVATE LIMITED
                    <br />
                    Contact phone: 912268492925
                    <br />
                    Email: grievance@afgbusinesssolutions.in
                    <br/>
                    CustomerCare: 02268740470 , care@rapidrupee.in
                    <br />
                    GRO link: <a href="https://www.rapidrupee.in/grievance-redressal-policy/">https://www.rapidrupee.in/grievance-redressal-policy/</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/*-----------------------------------------50---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={aryseimage} alt='Lenderimage'></img>
            <p>AryseFin</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹25,00,000</p>
           <p> Features: Instant approval</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://arysefin.com/PL-Affiliate?dsa=114521780&source=CHReferral&utm_campaign=CHApp&clickid=CLICKID'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen67}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open67}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Monika Kaushik
                    <br />
                    Company name: VIBHUPRADA SERVICES PRIVATE LIMITED
                    <br />
                    Contact phone: 020-4730-4552
                    <br />
                    Email: support@arysefin.com
                    <br/>
                    CustomerCare: 020-4730-4552 , support@arysefin.com
                    <br />
                    GRO link: <a href="https://www.arysefin.com/Grievance">https://www.arysefin.com/Grievance</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/*-----------------------------------------51---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={herofinimage} alt='Lenderimage'></img>
            <p>HeroFINCORP</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹5,00,000</p>
           <p> Features: Easy Personal loan for all purposes</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loans.apps.herofincorp.com/en/personal-loan?af_xp=custom&af_sub1=CHAPP&pid=CreditHaat&is_retargeting=true&utm_content=CLICKID&utm_source=partnership&utm_campaign=CreditHaat&af_reengagement_window=30d&c=Credithaat_new'>Apply now</a>
            </button><span>
                          <button className="secondonebutton" onClick={handleClickOpen68}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open68}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    GrievanceRedressalOfficer: Ms. Monica Arora
                    <br />
                    Company name: Hero Fincorp Ltd.
                    <br />
                    Contact phone: 0120 403 5320
                    <br />
                    Email: nodal.officer@herofincorp.com
                    <br/>
                    CustomerCare: Customer.Care@HeroFinCorp.com
                    <br />
                    GRO link: <a href="https://www.herofincorp.com/grievance-redressal">https://www.herofincorp.com/grievance-redressal</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/*-----------------------------------------52---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={fatakpayimage} alt='Lenderimage'></img>
            <p>FatakPay</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹10,000-₹2,00,000</p>
           <p> Features: Virtual credit facilities</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://web.fatakpay.com/authentication/login?utm_source=805_IS6A9&Utm_medium=CHAPP'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen69}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open69}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Ms. Adv. Varsha Manoharan
                    <br />
                    Company name: FatakPay Digital Pvt. Ltd.
                    <br />
                    Contact phone: +91-9076096209 / 07969699883
                    <br />
                    Email: escalation@fatakpay.com
                    <br/>
                    CustomerCare:  +91 9987178747 / 09240271272 , help@fatakpay.com
                    <br />
                    GRO link: <a href="https://www.fatakpay.com/redressal">https://www.fatakpay.com/redressal</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

         {/*-----------------------------------------53---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={flexsalaryimage} alt='Lenderimage'></img>
            <p>FlexSalary</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹3,00,000</p>
           <p> Features: Instant approval </p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://online.flexsalary.com/CustomerLogin/Index?CampaignID=577758859#x'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen70}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open70}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Prakash Rajan
                    <br />
                    Company name: Vivifi India Finance Private Limited
                    <br />
                    Contact phone: +91-91211-96333
                    <br />
                    Email: pno@vivifin.com
                    <br/>
                    CustomerCare: +91-40-4617-5151 , support@flexsalary.com
                    <br />
                    GRO link: <a href="https://www.vivifin.com/grievance-redressal-mechanism.php">https://www.vivifin.com/grievance-redressal-mechanism.php</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

         {/*-----------------------------------------54---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={anytimerupeimage} alt='Lenderimage'></img>
            <p>Anytime Rupee</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹2,000-₹30,000</p>
           <p> Features: Quick and hasslefree</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.appsflyer.com/com.anytimerupee?pid=credithaat_int&c=CHAPP&af_cost_model=CPI&af_ad_type=CHAPP&af_click_lookback=7d&clickid=%s&advertising_id={gaid}&is_incentivized={true\false}'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen88}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open88}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Komal Bisht
                    <br />
                    Company name: Pi Credit Services Private Limited
                    <br />
                    Contact phone: 9211752207
                    <br />
                    Email: gro@anytimerupee.com
                    <br/>
                    CustomerCare: +91 8065061330 , care@anytimerupee.com
                    <br />
                    GRO link: <a href="https://anytimerupee.com/refund-policy-2">https://anytimerupee.com/refund-policy-2</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

                 {/*-----------------------------------------55---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={Abhicashimage} alt='Lenderimage'></img>
            <p>Abhicash</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹2,000-₹50,000</p>
           <p> Features: Fast, simple and hassle-free </p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://abhicash.sng.link/Ddpes/90d6'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen71}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open71}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    {/* GrievanceRedressalOfficer:  */}
                    {/* <br /> */}
                    Company name: Abhicash Infotech Private Limited
                    <br/>
                    CustomerCare: 9999966040 , support@abhicash.in
                    <br />
                    GRO link: <a href="https://abhicash.in/grievancesAndRedressal">https://abhicash.in/grievancesAndRedressal</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

                 {/*-----------------------------------------56---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={mobikwikimage} alt='Lenderimage'></img>
            <p>MobiKwik-Zip Loan</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹2,00,000</p>
           <p> Features: Quick loans - no bank statement required</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://w6em.app.link/SB5HplfbVzb?%243p=a_credithaat&~campaign=CHAPP&~click_id=CLICKID'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen72}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open72}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    Principal Nodal Officer: Deepak Gagneja
                    <br/>
                    Nodal Officer: Prashant Gandhi
                    <br />
                    Company name: One MobiKwik Systems Limited
                    <br />
                    Contact phone: +918069898317
                    <br />
                    Email: nodal@mobikwik.com
                    <br/>
                    CustomerCare: 080-69808320
                    <br />
                    GRO link: <a href="https://www.mobikwik.com/grievancepolicy">https://www.mobikwik.com/grievancepolicy</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

                 {/*-----------------------------------------57---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={instamoneyimage} alt='Lenderimage'></img>
            <p>InstaMoney</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹5,000-₹10,000</p>
           <p> Features: Instant Personal Loan, Salaried users</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://instamoney.page.link/WhqG'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen89}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open89}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Mr. Vishal Poddar
                    <br />
                    Company name: Roctogen Services Private Limited
                    <br />
                    Contact phone:
                    <br />
                    Email: grievances@instamoney.app
                    <br/>
                    CustomerCare: grievances@instamoney.app
                    <br />
                    GRO link: <a href="https://www.instamoney.app/grievance-redressal-mechanism/">https://www.instamoney.app/grievance-redressal-mechanism/</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

                 {/*-----------------------------------------58---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={aspireblimage} alt='Lenderimage'></img>
            <p>Aspire-BL</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹10,000-₹5,00,000</p>
           <p> Features: Apply for Aspire Line of Credit and get upto 1Lakh of Limit per Month</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.aspirenbfc.in/login?code=ASPC6MEWI'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen73}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open73}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Manoj Kumar Rathi
                    <br />
                    Company name: Aspire Fintech Pvt Ltd
                    <br />
                    Contact phone: +91 6362 098 268
                    <br />
                    Email: compliance@letsaspire.in
                    <br />
                    GRO link: <a href="https://www.letsaspire.in/customer-grievances/">https://www.letsaspire.in/customer-grievances/</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
          </div>
        </div>
        </div>

        {/*-----------------------------------------59---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={ringimage} alt='Lenderimage'></img>
            <p>Ring</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹4,00,000</p>
           <p> Features: Quick and hassle-free process.</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.kissht.com/paywithring'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen74}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open74}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Reefat Shaikh
                    <br />
                    Company name: OnEMI Technology Solutions Limited
                    <br />
                    Contact phone: 08044745952
                    <br />
                    Email: care@kissht.com
                    <br />
                    CustomerCare: 080 44745880 / 080 62816300 , care@paywithring.com
                    <br/>
                    GRO link: <a href="https://www.paywithring.com/customer-grievance">https://www.paywithring.com/customer-grievance</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/*-----------------------------------------60---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={loan24image} alt='Lenderimage'></img>
            <p>Loans24</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹1,000-₹10,00,000</p>
           <p> Features: Lightning-fast processes</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.loans24.co.in/'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen75}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open75}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Chanda Khatri
                    <br />
                    Company name: Cars24 Financial Services Private Limited
                    <br />
                    Contact phone: +91-7428279331
                    <br />
                    Email: nbfc.grievances@cars24.com
                    <br />
                    CustomerCare: care.loans@cars24.com
                    <br/>
                    GRO link: <a href="https://www.loans24.co.in/contact-us/">https://www.loans24.co.in/contact-us/</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

    {/*-----------------------------------------61---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={bfslimage} alt='Lenderimage'></img>
            <p>BFSL</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹1,000-₹25,00,000</p>
           <p> Features: Instant loan approval, competitive rates</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.bajajfinservmarkets.in/apply-for-personal-loan-finservmarkets/?utm_source=Lead_Partnerships&utm_medium=SOL&utm_campaign=%7bvariable%7d&utm_content=Website&utm_term=CreditHaat'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen76}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open76}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Lipi Nayak
                    <br />
                    Company name: Bajaj Finserv Direct Limited
                    <br />
                    Contact phone: 7066114134
                    <br />
                    Email: grievance.officer@bajajfinservmarkets.in
                    <br />
                    CustomerCare: contact@bajajfinservmarkets.in
                    <br/>
                    GRO link: <a href="https://www.bajajfinservmarkets.in/legal-and-compliance/grievance-redressal">https://www.bajajfinservmarkets.in/legal-and-compliance/grievance-redressal</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

      {/*-----------------------------------------62---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={paisabazarimage} alt='Lenderimage'></img>
            <p>PaisaBazaar</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹5,00,000</p>
           <p> Features: Higher chances of approval</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.paisabazaar.com/digital-lending/?bank_type=0&utm_source=pb_aff&utm_medium=PBAFCH01&utm_term=CLICKID&utm_content=CPL&utm_campaign=Personal_Loan'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen77}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open77}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Ms. Jyotsna Popli
                    <br />
                    Company name: Paisabazaar Marketing and Consulting Private Limited
                    <br />
                    Contact phone: 0124-3509999 
                    <br />
                    Email: servicehead@paisabazaar.com
                    <br />
                    CustomerCare: +91 1800 258 5616 ,  care@paisabazaar.com
                    <br/>
                    GRO link: <a href="https://www.paisabazaar.com/grievance-redressal">https://www.paisabazaar.com/grievance-redressal</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

      {/*-----------------------------------------63---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={cashtoyouimage} alt='Lenderimage'></img>
            <p>Cash2you</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹1,000-₹40,000 </p>
           <p> Features: Instant cash loans</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://ajamservices.g2afse.com/click?pid=12&offer_id=10&sub1=CHAPP&sub2=CLICKID'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen78}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open78}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Saman Bilgrami
                    <br />
                    Company name: DESIGN SENSE STUDIO PRIVATE LIMITED
                    <br />
                    Contact phone: +91 796 508 2942
                    <br />
                    Email: grievance@cashtoyou.in
                    <br />
                    CustomerCare:  +91 796 508 2940 , +91 796 508 2941 , care@cashtoyou.in
                    <br/>
                    GRO link: <a href="https://cashtoyou.in/page/privacy-policy">https://cashtoyou.in/page/privacy-policy</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/*-----------------------------------------64---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={brightloansimage} alt='Lenderimage'></img>
            <p>BrightLoans</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹5,00,000</p>
           <p> Features: Quick loan, fast approval</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://brightloans.in/apply-now?utm_source=credithaat&utm_medium=web&utm_campaign=credithaat'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen79}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open79}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Mr. Jitender Yadav
                    <br />
                    Company name: AVINASH CAPITAL MARKETS PRIVATE LIMITED
                    <br />
                    Contact phone: +91-98-11-041-592
                    <br />
                    Email:
                    <br />
                    CustomerCare: +91-8800041445 , care@brightloans.in
                    <br/>
                    GRO link: <a href="https://brightloans.in/privacy-policy">https://brightloans.in/privacy-policy</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

              {/*-----------------------------------------64---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={rapidmoneyimage} alt='Lenderimage'></img>
            <p>RapidMoney</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹5,00,000</p>
           <p> Features: instant personal loans with fast approval </p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://web.rapidmoney.in/borrower/login?utm_source=CreditHatt&utm_extsource=partner&utm_medium=whatsapp&utm_campaign=abc&utm_campaignID=1234'>Apply now</a>
            </button><span>
          <button className="secondonebutton" onClick={handleClickOpen80}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open80}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Mr. Amit Agashe
                    <br />
                    Company name: MoneyTime Technology Solutions Pvt Ltd
                    <br />
                    Contact phone: +91 8097880793 
                    <br />
                    Email: grievance@rapidmoney.in
                    <br />
                    CustomerCare: support@rapidmoney.in
                    <br/>
                    GRO link: <a href="https://www.rapidmoney.in/privacy-policy">https://www.rapidmoney.in/privacy-policy</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

              {/*-----------------------------------------65---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={rupeeontimeimage} alt='Lenderimage'></img>
            <p>RupeeonTime</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹10,000-₹5,00,000</p>
           <p> Features: Instant smart approvals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://rupeeontime.com/'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen81}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open81}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    Chief Collection Officer: Shakti Singh Shekhawat
                    <br />
                    Company name: DEV-AASHISH CAPITALS PRIVATE LIMITED
                    <br />
                    Contact phone: +91-9289114097
                    <br />
                    Email: shakti.shekhawat@rupeeontime.com
                    <br />
                    CustomerCare: +91-9220912304 , care@rupeeontime.com
                    <br/>
                    GRO link: <a href="https://rupeeontime.com/contact-us">https://rupeeontime.com/contact-us</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-----------------------------------------66---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={loan112image} alt='Lenderimage'></img>
            <p>Loan112</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹10,000-₹5,00,000</p>
           <p> Features: Instant loans online easy and hassle-free</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.loan112.com/'>Apply now</a>
            </button><span>
          <button className="secondonebutton" onClick={handleClickOpen82}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open82}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    Chief Collection Officer: Shakti Singh Shekhawat 
                    <br />
                    Company name: DEVMUNI LEASING & FINANCE LIMITED
                    <br />
                    Contact phone: +91-9289114097
                    <br />
                    Email: shakti.shekhawat@loan112.com
                    <br />
                    CustomerCare: +91-9311912970 , care@loan112.com
                    <br/>
                    GRO link: <a href="https://www.loan112.com/contact-us">https://www.loan112.com/contact-us</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
              {/*-----------------------------------------67---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={bharatloansimage} alt='Lenderimage'></img>
            <p>BharatLoans</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹10,000-₹5,00,000</p>
           <p> Features: Swift approval</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.bharatloan.com/'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen83}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open83}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Tarun Kumar Saxena
                    <br />
                    Company name: SOLOMON CAPITAL PRIVATE LIMITED
                    <br />
                    Contact phone: +91-8282824-644
                    <br />
                    Email: info@bharatloan.com
                    <br />
                    CustomerCare: +91-8282824-644 , care@bharatloan.com
                    <br/>
                    GRO link: <a href="https://www.bharatloan.com/contact-us">https://www.bharatloan.com/contact-us</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
              {/*-----------------------------------------68---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={digicreditimage} alt='Lenderimage'></img>
            <p>Digicredit</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹20,000-₹1,00,000</p>
           <p> Features: Quick Processing</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://digicredit.in/?utm_source=CreditHaat&utm_medium=referral&utm_campaign=CH_LendersPage'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen84}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open84}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Digi Credit
                    <br />
                    Company name: ISEOUS
                    <br />
                    Contact phone: +919211728443
                    <br />
                    Email: support@digicredit.in
                    <br />
                    CustomerCare: +919211728443 , support@digicredit.in
                    <br/>
                    GRO link: <a href="https://digicredit.in/Contact-us">https://digicredit.in/Contact-us</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/*-----------------------------------------69---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={fibeimage} alt='Lenderimage'></img>
            <p>Fibe-LAMF</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹15,000-₹10,00,000</p>
           <p> Features: Hasslefree, Interest-only EMIs </p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://lamf.fibe.in/SignUp?utm_source=LAMF_CREDITHAAT&sourceId=LAMF'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen85}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open85}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Mr. Abhiroop Khairnar
                    <br />
                    Company name: Social Worth Technologies Private Limited
                    <br />
                    Contact phone : 
                    <br />
                    Email: grievance@fibe.in
                    <br />
                    CustomerCare: 020-67639797 , care@fibe.in
                    <br/>
                    GRO link: <a href="https://www.fibe.in/grievance-redressal/">https://www.fibe.in/grievance-redressal/</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-----------------------------------------70---------------------------------------------*/}

              {/*--------------------------------------------------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={zestmoneyimage} alt='Lenderimage'></img>
            <p>ZestMoney</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹5,000-₹1,00,000</p>
           <p> Features: 0% EMIs, Instant Approval</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.zestmoney.in/'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen86}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open86}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: Srinivas Pilli
                    <br />
                    Company name: Glimmer Technologies Private Limited
                    <br />
                    Contact phone : 022-68539501 / 079-64807777
                    <br />
                    Email: cxoforyou@zestmoney.in
                    <br />
                    CustomerCare: help@zestmoney.in
                    <br/>
                    GRO link: <a href="https://discover.zestmoney.in/complaints/">https://discover.zestmoney.in/complaints/</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-----------------------------------------71---------------------------------------------*/}
        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={idfcimage} alt='Lenderimage'></img>
            <p>IDFC</p> 
            </div>
           <div className='secondonetext'>
           <p>Amount range: ₹50,000-₹50,00,000</p>
           <p> Features: Personal Loan from IDFC Bank</p>
           
           <div className='anothertext'>
           <button className="firstonebutton">
            <a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://www.idfcfirst.bank.in/'>Apply now</a>
            </button><span>
            <button className="secondonebutton" onClick={handleClickOpen87}>Know more</button></span>
           <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open87}
              >
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div
                    gutterBottom
                    style={{
                      fontFamily: "Noto Serif",
                      color: "#3E2780",
                      fontSize: "18px",
                    }}
                  >
                    <br/>
                    GrievanceRedressalOfficer: 
                    <br />
                    Company name: IDFC FIRST Bank Ltd
                    <br />
                    Contact phone : 1800 10 888
                    <br />
                    Email: cro.giftcity@idfcfirstbank.com
                    <br/>
                    GRO link: <a href="https://www.idfcfirst.bank.in/support/grievance-redressal">https://www.idfcfirst.bank.in/support/grievance-redressal</a>
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/* --------------------------------ended--------------------------------------------- */}      
      </div>
      <NewHomePageFooter/>
      <NewCityFooter/>
      </>
    );
  }

export default NewAllPartners;

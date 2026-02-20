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
import fullertonimage from "../NewHomePage/NewHomePageImages/fullertonimage.png";
import homecreditimage from "../NewHomePage/NewHomePageImages/homecreditimage.png";
import iiflblimage from "../NewHomePage/NewHomePageImages/iiflblimage.png";
import iiflplimage from "../NewHomePage/NewHomePageImages/iiflplimage.png";
import incredimage from "../NewHomePage/NewHomePageImages/incredimage.png";
import indifiimage from "../NewHomePage/NewHomePageImages/indifiimage.png";
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/landtfs_new'>Apply now</a></button><span>
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
                    Tel: 1800 270 7000
                    <br />
                    Email: gro@ltfs.com
                    <br />
                    CustomerCare: customercare@ltfs.com
                    <br />
                    www.ltfs.com | https://sachet.rbi.org.in/
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
           href='	https://oneapp.abfldirect.com/esb/login?dsa_hash=f7f2d316f76e394a1908bb386f629084f8e486d30281835bed9b2b9d0cafb77e&utm_source=CHAPP&utm_medium=CHAPP&utm_campaign=webpp'>Apply now</a></button><span>
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
                    Email:
                    grievance.finance@adityabirlacapital.com
                    <br />
                    CustomerCare: care.finance@adityabirlacapital.com
                    <br />
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
           <p> Features: End-to-end Digital Process (from Login to Loan Amount Disbursement)</p>
           
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/cashe_new'>Apply now</a></button><span>
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
           href='https://loan.credithaat.com/h5/earlysalary_consent_oj'>Apply now</a></button><span>
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/finnable'>Apply now</a></button><span>
           <button className="secondonebutton">Know more</button></span>
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/finzy'>Apply now</a></button><span>
           <button className="secondonebutton">Know more</button></span>
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
                    GrievanceRedressalOfficer: Mr. Manish Lunia
                    <br />
                    Company name: Epimoney Private Limited
                    <br />
                    Tel: 022-62603800
                    <br />
                    Email: compliance@epimoney.com ,
                    nodal.grievance@epimoney.com
                    <br />
                    CustomerCare: 02268219595 ,connect@flexiloans.com
                    <br />
                    Link- https://flexiloans.com/co-lenders , privacy policy
                    link - https://flexiloans.com/regulatory
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

        {/* --------------------------------8----------------------------------------------- */}

        <div className='newallfirst'>
            <div className='firstoneimage'>
            <img src={fullertonimage} alt='Lenderimage'></img>
            <p>  Fullerton</p> 
            </div>
           <div className='secondonetext'>
           <p> Amount range:₹50,000 - ₹5,00,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/fullerton'>Apply now</a></button><span>
           <button className="secondonebutton">Know more</button></span>
           </div>
        </div>
        </div>

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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/hci'>Apply now</a></button><span>
           <button className="secondonebutton">Know more</button></span>
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/iiflbl_old'>Apply now</a></button><span>
           <button className="secondonebutton">Know more</button></span>
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/iifl'>Apply now</a></button><span>
           <button className="secondonebutton">Know more</button></span>
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
           href='https://loan.credithaat.com/iiflgoldloan'>Apply now</a></button><span>
           <button className="secondonebutton">Know more</button></span>
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
           href='https://loan.credithaat.com/h5/incred_choj'>Apply now</a></button><span>
           <button className="secondonebutton"><a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://www.incred.com/grievance.html"
                >
                  Know more
                </a></button></span>
           </div>
        </div>
        </div>

        {/* --------------------------------13----------------------------------------------- */}

        <div className='newallfirst'>
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
                    GrievanceRedressalOfficer:
                    <br />
                    Company name: Indifi Technologies
                    <br />
                    Tel: 9696555444
                    <br />
                    Email: grievances@indifi.com
                    <br />
                    CustomerCare: 9696555444,cs@indifi.com
                    <br />
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>

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
           href='https://loan.credithaat.com/h5/kreditbee'>Apply now</a></button><span>
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
                    GrievanceRedressalOfficer: Ms. Meghana Shah
                    <br />
                    Company name: Finnovation Tech Solutions Private Limited
                    <br />
                    Tel: 080-44292200
                    <br />
                    Email: help@kreditbee.in
                    <br />
                    CustomerCare: 080-44292200,help@kreditbee.in
                    <br />
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/moneytap'>Apply now</a></button><span>
           <button className="secondonebutton">Know more</button></span>
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
           href='https://loan.credithaat.com/h5/moneyviewnew'>Apply now</a></button><span>
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
           <p>Amount range:₹1,000-₹50,000</p>
           <p>   Features:Short Term Personal Loans</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://app.credithaat.com/pl_journey'>Apply now</a></button><span>
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
                    GRO link - <a href="https://www.mpokket.in/grievance-redressal-policy">https://www.mpokket.in/grievance-redressal-policy</a>
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/navi'>Apply now</a></button><span>
           <button className="secondonebutton" >Know more</button></span>
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/nira'>Apply now</a></button><span>
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
                    GrievanceRedressalOfficer: Goutham R<br />
                    Company name: Shuhari Tech Ventures Private Limited
                    <br />
                    Email: goutham.r@nirafinance.com
                    <br />
                    CustomerCare: support@nirafinance.com
                    <br />
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://marketplace.creditvidya.com/creditHaat/GetStarted?startPage=base'>Apply now</a></button><span>
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
                    GrievanceRedressalOfficer: Mr. Moksh Jain
                    <br />
                    Company name: Shuhari Tech Ventures Private Limited
                    <br />
                    Tel: 9341 300 300
                    <br />
                    Email: nodal.officer@prefr.com
                    <br />
                    CustomerCare: 9341 300 300
                    <br />
                    info@prefr.com
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
           href='https://play.google.com/store/apps/details?id=com.privo.creditsaison&referrer=af_tranid%3Dk8Ng2ivGjy7RiqlWBwWGgQ%26af_siteid%3DCHApp%26c%3DApp%26af_ad%3DApp%26pid%3Dcredithaat_int%26af_adset%3DApp'>Apply now</a></button><span>
           <button className="secondonebutton">Know more</button></span>
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
           href='https://loan.credithaat.com/h5/stashfin'>Apply now</a></button><span>
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
                    <br /> GrievanceRedressalOfficer: Mr. Sanjeev Walia
                    <br />
                    Company name: EQX Analytics Private Limited
                    <br />
                    Tel: +91-9953595222
                    <br />
                    Email: grievance.officer@stashfin.com
                    <br />
                    CustomerCare:info@StashFin.com
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/tatacapital_old'>Apply now</a></button><span>
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
                    <br /> GrievanceRedressalOfficer: Rajesh Kumar
                    <br />
                    Company name: Tata Capital Limited
                    <br />
                    Tel: 022-68219546
                    <br />
                    Email: CCRO@tatacapital.com
                    <br />
                    CustomerCare: 022-68219546
                    <br />
                    connect@flexiloans.com
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
                    <br /> GrievanceRedressalOfficer: Rajesh Kumar
                    <br />
                    Company name: Tata Capital Limited
                    <br />
                    Tel: 022-68219546
                    <br />
                    Email: CCRO@tatacapital.com
                    <br />
                    CustomerCare: 022-68219546
                    <br />
                    connect@flexiloans.com
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
            <p>RupeeReddy</p> 
            </div>
           <div className='secondonetext'>
           {/* <p>Amount range: ₹20,000-₹5,00,000</p> */}
           <p>Amount range: ₹2,000-₹1,49,000</p>
           <p> Features: Personal Loans for Salaried Individuals</p>
           
           <div className='anothertext'>
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://play.google.com/store/apps/details?id=com.rupeeredee.app&referrer=af_tranid%3DFJ2hwMzuEz94KhLAStNDyg%26af_siteid%3DApp%26c%3DApp%26af_ad%3DApp%26pid%3Dcredithaat_int%26af_adset%3DCreditHaatApp'>Apply now</a></button><span>
           <button className="secondonebutton">Know more</button></span>
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
                    <br /> GrievanceRedressalOfficer: Mr. Venkatesh Dontul
                    <br />
                    Company name: Upwards Capital Private Limited
                    <br />
                    Tel: + 91 98921 56608
                    <br />
                    Email: venkatesh.dontul@go-upwards.com
                    <br />
                    CustomerCare: +91-77150 98615
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://play.google.com/store/apps/details?id=com.fastbanking&referrer=af_tranid%3DqZTvyWT76lwGuPOLhC6yQg%26af_siteid%3D%7Baffiliate_id%7D%26c%3D%7BCampaign%7D%26af_ad%3D%7BAd%7D%26pid%3Dcredithaat_int%26af_adset%3D%7BAdset%7D&pli=1'>Apply now</a></button><span>
           <button className="secondonebutton"><a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://www.kissht.com/customer_grievance"
                >
                  Know more
                </a></button></span>
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
           href='https://play.google.com/store/apps/details?id=com.anqmobileapp&%243p=a_credithaat&~campaign=%7Bcampaign_name%7D&~click_id=%7Bclick_id%7D&_branch_match_id=1332631632917155254&utm_source=CreditHaat&utm_campaign=%7Bcampaign_name%7D&utm_medium=paid%20advertising&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8wrTCwo0APhnMy8bH3notSUzBKPxMQSY1NLe1UjE%2BMC28T4ZLBoBlBUTdXcNTkxtyAxMz3PVtXcCcaOz0vMTVU1dwHL52QmZ8dnpoDloWygFADwtcDOcwAAAA%3D%3D'>Apply now</a></button><span>
           <button className="secondonebutton">Know more</button></span>
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
           href='	https://play.google.com/store/apps/details?id=com.rupicard&referrer=utm_source%3Dpartner%26utm_medium%3DCREDITHAAT%26utm_campaign%3D'>Apply now</a></button><span>
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
                    Tel: +080-69819393
                    <br />
                    Email:
                    support@rupicard.com
                    <br />
                    CustomerCare: support@rupicard.com
                    <br />
                    100% Guaranteed Credit Card,
                    <br/>
                    Upto 7% Interest on Fixed Deposit
                    <br/>

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
           href='https://app.olyv.co.in/?utm_source=credithaat&utm_campaign=credithaat_link2'>Apply now</a></button><span>
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
                    Ph: + 91 9986640571
                    <br />
                    Email: grievance@smartcoin.co.in
                    <br />
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
                    Company name: SmartCoin Financials Pvt Ltd.
                    <br />
                    Ph: + 91 8655937427
                    <br />
                    Email: gro@branch.co
                    <br />
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://loan.credithaat.com/h5/kinaracapital'>Apply now</a></button><span>
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
                    <br /> GrievanceRedressalOfficer: Mr. Narendra Laxman Pakhare
                    <br />
                    Company name: Kinara Capital Private Limited
                    <br />
                    Ph: + 91 6364464957
                    <br />
                    Email: headcustomercare@kinaracapital.com
                    <br />
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
                    <br /> GrievanceRedressalOfficer: Mr. Aashish Saxena
                    <br />
                    Company name: GaragePreneurs Internet Pvt Ltd
                    <br />
                    Contact Number : 080 6939 0473
                    <br />
                    Email: customergrievance@sliceit.com

                    <br />
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
           href='https://trustpaisa.com/?utm_source=credithaat&utm_medium=cpa&utm_campaign=credithaat_cpa'>Apply now</a></button><span>
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
                    Tel: +91 8045040500
                    <br />
                    Email: grievance@trustpaisa.com

                    <br />
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
           href='https://app.credithaat.com/Rupeek'>Apply now</a></button><span>
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://play.google.com/store/apps/details?id=com.ramfincorploan&hl=en_IN'>Apply now</a></button><span>
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
                    Helpline No : +91-9899985495
                    <br />
                    Email: info@ramfincorp.com
                    <br />
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
                    <br /> GrievanceRedressalOfficer: Mr. Jitendra
                    <br />
                    Company name: Dev-Aashish Capitals Private Limited
                    <br />
                    Phone Number: +91-9220644112
                    <br />
                    Email: care@rupee112.com
                    <br />
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
           href='https://instant-pocket-loan.poonawallafincorp.com/?utm_DSA_Code=PMH00235&UTM_Partner_Name=CREDITHAAT&UTM_Partner_Medium=SMS&UTM_Partner_AgentCode=PFLCREDITHAAT&UTM_Partner_ReferenceID=CREDITHAATPFL00000001'>Apply now</a></button><span>
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
                    <br /> GrievanceRedressalOfficer: Ms. Rati Mundra

                    <br />
                    Company name: Poonawalla Fincorp Limited
                    <br />
                    Contact Number : 020 67808090
                    <br />
                    Email: rati.mundra@poonawallafincorp.com
                    <br />
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
           href='https://loans.theunitybank.com/unity-pl-ui/page/exclusion/login/logindetails?utm_source=partnership&utm_medium=credithaat&utm_campaign=CHAPP'>Apply now</a></button><span>
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
                    Contact Number : 9152366104
                    <br />
                    Email: level3escalation@unitybank.co.in

                    <br />
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://zype.sng.link/Bjygt/4968?_dl=com.zype.mobile'>Apply now</a></button><span>
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
                    Contact Number : 022-2825 6467
                    <br />
                    Email: info@getzype.com

                    <br />
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
           href='https://www.tatadigital.com/v2/finance/pl-marketplace/landing?utm_source=CreditHaat&utm_medium=pl_offline&utm_campaign=pl_credithaat_campaign'>Apply now</a></button><span>
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
                    Company name: Tata Fintech Private Limited
                    <br />
                    Contact Number : 
                    <br />
                    Email: grievances@tatafinserv.com

                    <br />
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
           href='https://applyonline.hdfcbank.com/cards/credit-cards.html?CHANNELSOURCE=MRTB&DSAcode=XVBP&LGcode=VP1&LCcode=VP2&LC2=VP1&SMcode=U2303#nbb'>Apply now</a></button><span>
           {/* <button className="secondonebutton" onClick={handleClickOpen47}>Know more</button></span> */}
           <Link 
              to="/lendingpartners/hdfc" 
              style={{ textDecoration: "none" }}
            >
              <button className="secondonebutton">
                Know more
              </button>
            </Link>
            </span>


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
           href='https://app.credithaat.com/GoldJourney'>Apply now</a></button><span>
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
                    <br /> GrievanceRedressalOfficer: Ms. Prakhar Khandelwal
                    <br />
                    Company name: Flat White Capital Pvt. Ltd
                    <br />
                    Contact Number : +918068495878
                    <br />
                    Email:  help@indiagold.co.

                    <br />
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
           <button className="firstonebutton"><a 
           style={{ textDecoration: "none", color: "white" }}
           href='https://bit.ly/LPCHAPP'>Apply now</a></button><span>
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
                    <br /> GrievanceRedressalOfficer: Mr. Suhail Sheikh
                    <br />
                    Company name:  Unifinz Capital India Limited (UCIL)
                    <br />
                    Contact Number : 91–7373737316
                    <br />
                    Email: grievance@lendingplate.com 

                    <br />
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
           href='https://bit.ly/41k4YO7'>Apply now</a></button><span>
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
                    Company name : Kredito24(One Click Money Techplus Pvt. Ltd.) 
                    <br />
                    Contact Number : +91 124 692 0540
                    <br />
                    Email : feedback@kredito24.in 

                    <br />
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
                    <br /> GrievanceRedressalOfficer : Mr. Amit Kukreja 
                    <br />
                    Company name : Nikunj Health Technologies Private Limited (“AyushPay”)
                    <br />
                    Contact Number : 9711221080
                    <br />
                    Email :  amit.kukreja@AyushPay.com 

                    <br />
                  </div>
                </DialogContent>
              </BootstrapDialog>
           </div>
        </div>
        </div>
        {/*-------------------------------------------------------------------------------------- */}

        {/* --------------------------------ended--------------------------------------------- */}
      </div>
      <NewHomePageFooter/>
      <NewCityFooter/>
      </>
    );
  }

export default NewAllPartners;

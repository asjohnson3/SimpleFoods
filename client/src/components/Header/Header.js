
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// class Header extends Component {
//   state = {
//     open: false,
//     width: window.innerWidth
//   };

//   updateWidth = () => {
//     const newState = { width: window.innerWidth };

//     if (this.state.open && newState.width > 991) {
//       newState.open = false;
//     }

//     this.setState(newState);
//   };

//   toggleNav = () => {
//     this.setState({ open: !this.state.open });
//   };

//   componentDidMount() {
//     window.addEventListener("resize", this.updateWidth);
//   }

//   componentWillUnMount() {
//     window.removeEventListener("resize", this.updateWidth);
//   }

//   render() {
//     return (
//       <h3 className="font-italic">Facebook</h3>
//       <div className="title-name" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
//         <Link style={{color:'black'}} to="/">
//           SimpleFoods
//         </Link>
//       </div>
//     );
//   }
// }

// export default Header;
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <div className="pageHeader">

    <div className="title-name left">
      <a href="http:ww.google.com">
        <img src="https://kwsymphony.ca/wp-content/uploads/2018/08/kisspng-facebook-social-media-computer-icons-linkedin-soci-gray-5ac493cf1c2975.7867418415228323351154.png"></img>
      </a>
      <a href="http:ww.google.com">
        <img src="data:image/png;base64,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"></img>
      </a>
      <a href="http:ww.google.com">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEWAgID///97e3u9vb15eXn4+PiQkJDi4uKEhITa2trNzc37+/vJycmLi4uBgYHBwcHp6enz8/PU1NSWlpbe3t6pqamcnJzv7++jo6OwsLCOjo64uLivr6/n5+dzc3N0dHRTMpLDAAAOIUlEQVR4nO2d54KrrBaGCcausbeY7Ln/uzxoGguwASbqd95fM5PE8QkILFgFnRYobw3DaO3Xr7EhUhREvDyRUpFckXJboLvpz7lpNPkO03z/aPxhjP+8168uVtNZUZfai5NJygnCxPaa6H0RAyOEzh9C9GNhAhnklQJhEtyu+Jy9G3FrhEQYh0WQm+L7nybMzx2SlWyYEHWQ1s0d7qyjhO65u0K4ccJOYeGqEL47+nYJEXJqWwxxGELSWQ1hVxUQ+tXrnQ9CJ94FIWEscwEjT2gG7Wto2hkhwmGUcDwcoRk5t70SEt1iFoglNA3n3OyYEHEDDkvYOgjvmhBn+Shh272HJbzviZA8jHBqhIRth8ARvtt9F4QEEbQiTegbj3ewI83OCElHpZ9FitAPnMcb9k6IcE2NqBRhen2+XuydkEwaiYDwXuLHqxsmpMxn7jeoj1H7JjSL92U2Suhcs7po2tYwoigKiPr9EaNtm6LOQubNn9HmTRi8X9wmoRXESZKYpukzIn8yk6RKM/B2XPoMYeVsmzDjVmOsYgsiGgxh+enKWyTE6RTg6WRf4EfugNClntUtEjrTgKdTDQYcXNOEZgleeg212yHM5hAGcEh1XIrQc6hXNkiIizmELjNpFP6b0KzB5TZI2M4htJlPPZbgPWEKZpMtEkZzCO/sxxr/Rdgyj+j2CIM5hPGF+ZiVPwltZrI8DGHf9B2hx0wkGyT0TjPEExZJT5jc4Bi0RcIZE76AEIV2T3jPmMuVOyWsOMKudxPClP3zXgkTnpB0R3QyW2aiPBBht0+ITkl5YMJzSggrh73cgQjJYgid7DP71yMR1j46pUcmRBkhDNhtnEMRhoTQODQhJoTsZHEswj8TnW7HJkyQXxya8Bwjv2YJUXYkwvuRCPmVN7lbG/nsou1ghPlOCOUs4O5uXULI/XWvhNxOFHoQZtxfN0g4a5+G3U3s1BFa3F/3SsjuCHc6pzshnLUjzK2w0YOQPVvcJOGsXX1u7dJ90tsHITERpgEFJHMJN+AxNGdb3xN+UEho5fFDj47tpM9f46b3D4iq18vrUgGFk/NFzk8K6EHIbtMQpOypp/uJ9fr98WVcmZdn6RF8cOmEyA9C/4lxxNYe66l3gx8x+/8biAg1i7Dha90GqR1XneLYdoO2KMMOdMF1wqxu2igKmLiUIIjaIgsF65n+n0erE17CsnXF0QJmHhSWM3BrIg0Hpwx/ZGVCJ7t54wEfph3V18vCHrtAHeGC73DZtS8Ej3dK5uXnRu2sxUgIzXWujZ06Gh0agCrvFq50H8Y6hBgX6UQ4EqPEvaFV7mQdQlymc7onlOnylqqGW1mDEIfBcr6+HT39XbUj/NN8TaeR4+sZW90j+wqEZT4NMiK71ju26ybEKg34kG9cdXZVzYQ4m7WfMiG3nv5P829JL2E92kP9JLZzIvtejcV8ktmx0ddT9RLehqfApF9rZ5lFlGVlfWu9fLg/m5G2AUcrYTvUMnFQW6FDT+jkR4eYCtGg42+k66Y6wn96roQGHsEkyIb73MUyBtpdtKskozMhdCwtEj6C/r1A59F7xbgUR2IHoZbbCiN0MrVItMg27dsMExefa1f0SOq5L9OfzqkgLbudaRNhVKfjo6uKViNMomz+o0RWCgOR2OpaizCvFxru2Sw3YAmtRBgsthLwpVBd8Im1CqHfSi1Kyvv0pZeLjKXVPXfT1HuFSj1ltFDG+5UuqCrok8u4th0LVmAVf3D+aaqRtsWCbd/Ydbv/5AUDorPcCPPZmMgvn9le5HLL/P3jDr7uIlsdozAry7oo6rosM2aJ85YTsLOO92/87qZy2PyzRadrixSybXjnWxAjqzA8+9nc3Qo8JcvUTDCZcIiCQ/hFOisTcmeXfAtiVEaCZbZ59268Keiw13PV7IyOUHQmNVsfr/fXM8h/57U3tMBOcoMbcy/Ms+g3So2oTOgwaWFMtotia3RX2Lc5WzBkVri20g2qEn7Cvp+6sW9oJyc5l23GDJobPuc8uUSqhOz3bTCviy0ORmYxFNHyEBstsUiqhA1sQhghhpxi5r53xNwDs4CLFAYbRUImA0UMRxlnuoe+vxrYTEzTqzSiImEBmtBswYthtMAigkfU+Aa/G7lFYK+OUH7TJ4T+dDm4kmMsMvkgIjNl2PJzthphCb5pZqIY3JcaQqT7Es5gIxZIVmqEBrgL4HOF68VGewo+D5c2qXQ3VSJ04FIF9CRutTpDEY3ogPWpucTtQxsh44kFAlPYpc4sAY9zphG5gIJvEJ7hOAN2ZWY52nG6093gCl9iA3u+QYjAYAB8O8tlJ9wv+QH9uMFuIDunKRC+kjI81VAvsebBbIHNAfgQyFoYCoRngJFQ0xmu5ZrwBHM7WOAqrmQ3Veml8dCtOfKHiHQjQlu4kuymCoRwTqY6KS4nU8kMi1pkw7FaEBayMiG+0RNWRTv8Gyd5xVRvh+OVpJWoQAgsHNpsuiq5KlAm9BWMpiI39VUJ4WxIH2iWSocswed2LuBBtCXvU74N6S/YpMdyudn+pfjTG3BLPwix3MJNYaSh+yIYAmeFKA3r8yBicJBRyZnB8oQX+jTsTg00ofRk+NAn4BMOylzagLUJHZqQtlAtNUD6AN+i/0ciiqb4GqFLPTw1e8sLlVMdnn7Wf0xIpbNTG2jI80aB0I80m2Pmu4QpRah6lEt5g4KYvB8Tfv4+L8psTJsnVPbdowjpb+vHhNR6+aCE1HOo2kv9TRLSs4XqSEONpXg7Y2n+WTPiRpHQ/oBcAOFP50MqpZ3yjJ9ucsaPqXWppeihRlm6wNJM5Ix8TStv+vsNFR3UKBDgQfT1lTemv1/am4BzplgmyjXkx9bTGWwx0Da+2lBjD1nA929bwHC7lN5MlNzwfsqgtr3BxGPLHT8p9FKwo0bnB1XYLu02DT8XggewXEqy1QkLuguBNL3N7LBDXi7VF3+8m0hV8ur/P9WHMoXRlHYFAA+0KenfpnIyAzjoM+pLJN2I9IYP7O1c7sMvEIIHEWS5yWQ9YX3ac+YKOmkq14RKJzMwiTjwhpJtRHpPnzldk1uzKZ4BgwMYkKMplDubgR5s4HBA/i5VzvHhnhNt3Eh4YnSiHXIw7CL5T065M9AX78BZRMZKBCtPxktAzjhUJWQcLsDa/yIxY4CDbAt8fYm0a5qaxxBcgYLDIYljUg90AtiEnpLHkLznHqwb4kOfl3ohIvDcxNAn0JePm1UjdODTxqz+5zqXPuQClyoHnrK68veo6H3JOF0wUZFLonwgIGbc/hokLUVCxtpltsPw7AWqH4DBADMGWK4QMKFIyHrOsEUWwnTW4qaCrrfMAT55wOXvUNnPm7UFA2ZgvkTTD6OfM2bDhZlMVZpQPRqB6U/c143LqSQ8NhtUwrpAc1nxF0k5ogQx+04mu0LGTjEWAXs32A0mXDJfSf7TiBL+2D7hY2PDOhhgzBsukh2zF+SicJZJnZDLaFgJwn8vVsMXzq6Ckl9OYYe1LRUD89UJ2SWyMLarC6x06shNfN8/ddXgYq+xhLGWXHm1Sg1QByHvXlKJPeu7xHShVdZldkVDqei4pZ5q+KEWQiaupEMcyxQ0EiZ74csVK0V1ddJC6HDGoBlJJHzCDl9yOlW+OS2E7Bqk61zugnQDD4kWQLZK1NpDeghFO6Rxsyy5Jb7xG3SVhmRDmghZI6PvqemSrBFXwbLAVDAp3lKPdH4Ic6PN42mc+fHQECztTLUA4Kd0EaKzCLHL/jGZ3gRfLGGcot/Kbq/BG9NFiM5sRPCzIQJh2P1LGIWlIdzuMPUAaiREuBEbSr4d3AikcJ0Tlu1AgsVEyaCgpJGQzPxDe0+mnUa3MgQpZFGY3QI3HrCQKx2DTC+thKgc2bVI4nueRm17K4pb00Zefo+HDce7vtSCegmRNeHj/SjAPJBV6iNx3mo5aSZUiyZ5SSU4nZN2wvN0dekJVaWeQfR1Q7oJyfp5VnbkIWlP0qqfkKgYSN89LT+/6c5MvQohDls5XwXbsLRn2e0INQ5cb2Xt8qP8itt206GuotUa1yUTx0LG2BhJIKmgjpCvFaRHYZHPdliwGx02nEg94WoJ38/XNp4edPwqssbzY6pozTbs1CfBGsmp6yd2UDtaJ0BGq7ZhL4wvWUNWoVUClmpk/VbFeWqUQqtDo9Yn7ETMpKy+UVn7uox+TZGFoxn49EhcHXANwUIb41U3dOp7hL/SX3V4wuT/hHvXf4NQ1nNzH/oPEIoqHh9KxyfEpqAu96F0fMKLqLb6oeQQwujQhCEh1FUrY5u6EkJvTRP758oIoWwmtF0Il4RQOiXhHoQLQigbFbYL4eiEZIOk9yGcE0K1jOAbV1h1FTzc43bTLuAdcWm4j6QuOwpSTVy/aXVZ8bs6M+o+jhtVHw/SEY7Vhdm3ukiCvlYQW9LgKOq9QntCpfoKG1afWONR70khNf+G9fBdfhDGhxxrHoktnjW7jmjoP8M0n4TJ8Qjx7UQTHnAvw0kg4ReOgr+rdzq7d+08tbJKmxOufZbQ11agdgvCn/y1n/qH1ZGOaKjwXarCo32gR5Eq40PXsHS1VjX/oUCmN1ClMz2GtQ/LmsE6pGy0+T4Fo7CYSqvRzCLFWxaTrYKtJevpd9P9sphwfr5a7vLYyE3pwoWJ8fWA9zxp4JAP/RdUPGYTcexHOOPD/sU1nfN9Toy4EYV6DFStbvY3bVwGSoIO1eXOC+libr8QvmRDBSUHK4/7brObiQM75XAinJHa6n5uZF/y5FURxk7hjST6Ga0e79+9Itw0JB4oiT2XkCip0ua6sO7613RGdWAnE3ErU4R9U8aBsUm5E8Govf4HVyTibvtth9EAAAAASUVORK5CYII="></img>
      </a>
    </div>

    <div className="title-name center">
      <Link style={{color:'black'}} to="/">
        SimpleFoods
      </Link>
    </div>

    <div className="title-name right">
      <div className="right-text">
        <button type="button" class="btn btn-light signIn">Sign In</button>
        <button type="button" class="btn btn-light newUser">New Account</button>
      </div>
    </div>

    <div className="pages">
        <Link to="/" className='links'>
          Search
        </Link>
        <Link to="/saved" className='links'>
          Recipes
        </Link>
        <Link to="/stores" className='links'>
          Stores
        </Link>
        <Link to="/pantry" className='links'>
          Pantry
        </Link>
    </div>

  </div>
);

export default Header;






//centering a div

{/* style={{display: 'flex',justifyContent:'center', alignItems:'center'}} */}
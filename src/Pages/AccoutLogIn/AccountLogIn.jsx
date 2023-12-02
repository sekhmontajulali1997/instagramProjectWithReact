import MetaTag from "../../Components/MetaTag/MetaTag";
import { RiFacebookBoxFill } from "react-icons/ri";
import "./AccountLogin.scss";

const AccountLogin = () => {
  return (
    <>
      <MetaTag title="Instagram" />
      <div className="fullArea">
        <div className="container">
          <div className="heroSection">
            <div className="leftHero">
              <div className="imageSection">
                <img
                  src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk"
                  alt=""
                />
              </div>
            </div>
            <div className="rightHero">

                <div className="rightheroTop">
                <div className="logFromSection">
                <img src="https://i.ibb.co/ng7bSXh/Screenshot-1.png" alt="" />

                <form action="">
                  <input
                    type="text"
                    placeholder="Phone number, username, or email"
                  />
                  <input type="Password" placeholder="password" />

                  <button className="LoginButton">Log in</button>
                </form>

                <div className="orSection">
                  <hr />
                  <h4>OR</h4>
                  <hr />
                </div>


                <div className="fbLOG">

                    <div className="fb-icon">
                    <RiFacebookBoxFill />
                    </div>
                    <div className="logWithFB">
                    <h3>Log in with Facebook</h3>
                    </div>
               
                </div>
                
<div className="forgotPass">
    <h5>Forgot Password?</h5>
</div>

              </div>
                </div>
                <div className="rightheroBottom">
                <div className="signUpSection">

                <span>Dont have an account? </span>
                <a href="">Sign up</a>
              </div>

              <div className="GetApp">

                <span>Get the App</span>
                
              </div>

              <div className="AppDownImg">
                <div className="leftIm">
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
                
                </div>
                <div className="RightImg">
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
                </div>
              </div>
                </div>

              



           
            </div>




            
          </div>
        </div>
      </div>
    </>
  );
};

// export

export default AccountLogin;

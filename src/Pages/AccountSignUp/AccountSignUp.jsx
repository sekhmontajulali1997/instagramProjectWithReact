
import { RiFacebookBoxFill } from "react-icons/ri";
import MetaTag from "../../Components/MetaTag/MetaTag";
import "./AccountSignUp.scss";
const AccountSignUp = () => {
  return (
<>
<MetaTag title=" Sign up . Instagram " />

<div className="container">

<div className="rightHero">

<div className="rightheroTop">
<div className="logFromSection">
<img src="https://i.ibb.co/ng7bSXh/Screenshot-1.png" alt="" />

<span>Sign up to see photos and videos from your friends.</span>
<div className="fbLog">

  <a href="#"> <RiFacebookBoxFill /> Log in with Facebook</a>



</div>

<div className="orSection">
  <hr />
  <h4>OR</h4>
  <hr />
</div>

<form action="">
  <input
    type="text"
    placeholder="Phone number, username, or email"
  />
  <input
    type="text"
    placeholder="Full Name"
  />
  <input
    type="text"
    placeholder="Username"
  />
  <input type="Password" placeholder="password" />

<div className="pSection">
<p>People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a> 

</p>
  <p>By signing up, you agree to our <a href="#">Terms</a>  , <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a> .
</p>
</div>

  <button className="SingupButton">Sign up</button>
</form>



</div>
</div>
<div className="rightheroBottom">
<div className="signUpSection">

<span>Have an account?  </span> &nbsp;
<a href="">Log in</a>
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


</>
  ) 
  
};

export default AccountSignUp;

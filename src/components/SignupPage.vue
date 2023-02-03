<template>
  <router-link to="/"><img class="logo" src="/LOGO.png" /></router-link>
  <div class="main">
    <div class="title">Create an Account</div>

    <div class="forms">
      <div class="user">
        <p>Username</p>
        <input type="text" placeholder="myuserisname123" />
      </div>
      <div class="email">
        <p>Email address</p>
        <input type="text" placeholder="user.name@gmail.com" />
      </div>
      <div class="fname">
        <p>Firstname</p>
        <input type="text" placeholder="user" />
      </div>
      <div class="lname">
        <p>Lastname</p>
        <input type="text" placeholder="name" />
      </div>
      <div class="pass">
        <p>Password</p>
        <input type="text" />
      </div>
      <div class="conpass">
        <p>Confirm Password</p>
        <input type="text" />
      </div>
    </div>
    <div class="agree">
      <input type="checkbox" />
      <p>I Have Agree to the Terms & Privacy policy</p>
    </div>
    <router-link to="/home"
      ><button class="btn">CREATE ACCOUNT</button></router-link
    >
    <div class="or"></div>
    <div class="another">
      <router-link
        style="
          text-decoration: none;
          background-color: transparent;
          color: #000;
        "
        to="/home"
      >
        <div class="google">
          <img src="/google.png" />
          <p>Continue with Google</p>
        </div>
      </router-link>
      <router-link
        style="
          text-decoration: none;
          background-color: transparent;
          color: #000;
        "
        to="/home"
      >
        <div class="facebook">
          <img src="/facebook.png" />
          <p>Continue with facebook</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.logo {
  display: block;
  width: 339px;
  height: 55px;
  padding: 0px 5%;
  background-color: transparent;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;
  gap: 24px;
}
.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  /* or 127% */

  display: flex;
  align-items: center;

  color: #0e0e0e;
}
.or {
  width: 776px;
  height: 33px;
  background-image: url("/divlandscapebig.png");
}
.forms {
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 30px;
  margin: 10px;
}
.forms div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0px;
}
.forms p {
  height: 9px;
  left: 0%;
  right: 66.93%;
  top: 2.5px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 9.75px;
  line-height: 16px;

  display: flex;
  align-items: center;
  letter-spacing: 0.75px;
  text-transform: uppercase;

  color: #6e6e6e;
}
.forms input {
  width: 326.62px;
  height: 45px;
  left: 0px;
  top: 16.5px;
  border: none;
  border-radius: 5px;
  background-color: #fafafa;
}
.agree {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 7px;
}
.another {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 49px;
}
.another img {
  width: 32px;
  height: 32px;
  left: 16px;
  top: 11px;
}
.another div {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 78px 11px 16px;
  gap: 32px;

  width: 327px;
  height: 54px;

  border: 1px solid #000000;
  border-radius: 3px;
}
.btn {
  width: 326.62px;
  height: 44px;
  background: #00b54b;
  border-radius: 3px;
  top: 16.5px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: none;
  color: #ffffff;
}
.btn:hover {
  background-color: #008e3b;
}
.another div:hover,
img,
p {
  background-color: #f7f7f7;
}
@media only screen and (max-width: 773px) {
  .logo {
    margin: 0 auto;
    padding: 0px;
  }
  .forms {
    grid-template-columns: auto;
    gap: 10px;
    margin: 10px;
  }
  .another {
    flex-direction: column;
    gap: 10px;
  }
  .or {
    width: 330px;
    height: 9px;
    background-image: url("/orsmall.png");
  }
}
</style>

<template>
  <router-link to="/"><img class="logo" src="/LOGO.png" /></router-link>
  <div class="main">
    <div class="title">
      <p>Log into this website</p>
    </div>
    <div class="form">
      <div class="text">
        <div class="email">
          <p>Email address</p>
          <input type="text" placeholder="asdasdasd@gmail.com" />
        </div>
        <div class="password" placeholder="asdqwe123">
          <p>Password</p>
          <input type="password" />
        </div>
        <router-link
          style="
            text-decoration: none;
            background-color: transparent;
            color: #ffffff;
          "
          to="/home"
        >
          <button class="btn">LOG IN</button>
        </router-link>
      </div>
      <div class="line"></div>
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
            <p class="p">Continue with Google</p>
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
            <p class="p">Continue with facebook</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="register">
      <p>Can’t log in?</p>
      <p>
        If you don’t have an account you can
        <router-link to="/signup">register here!</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  background-color: transparent;
  display: block;
  width: 339px;
  height: 55px;
  padding: 0px 5%;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 70px;
  gap: 52px;
}
.title {
  width: 247px;
  height: 22px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  align-items: center;
  text-align: center;

  color: #0e0e0e;
}
.form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
}
.line {
  width: 121.73px;
  height: 227px;
  background-image: url("/divportrait.png");
}
.another {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
  gap: 10px;
}
.register {
  text-align: center;
  align-items: center;
  padding: 0px;
}
.text div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0px;
}
.text p {
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
.text input {
  width: 326.62px;
  height: 45px;
  left: 0px;
  top: 16.5px;
  border: none;
  border-radius: 5px;
  background-color: #fafafa;
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
.p,
img {
  background-color: #f7f7f7;
}

@media only screen and (max-width: 820px) {
  .logo {
    margin: 0 auto;
  }
  .main {
    margin: 30px;
  }
  .form {
    flex-direction: column;
  }
  .line {
    width: 327px;
    height: 51px;
    background-image: url("/divlandscape.png");
  }
}
</style>

<template>
  <div class="nav">
    <div class="logo"><img src="/LOGO.png" /></div>
    <div class="menuicon">
      <img src="/Component 5.png" />
    </div>
    <div id="links">
      <router-link
        style="
          text-decoration: none;
          background-color: transparent;
          color: #707070;
        "
        to="/about"
      >
        <button class="l1">ABOUT</button>
      </router-link>
      <router-link
        style="
          text-decoration: none;
          background-color: transparent;
          color: #ffffff;
        "
        to="/login"
      >
        <button class="l2">LOG-IN</button>
      </router-link>
      <router-link
        style="
          text-decoration: none;
          background-color: transparent;
          color: #575757;
        "
        to="/signup"
        ><button class="l3">SIGN UP</button>
      </router-link>
    </div>
  </div>
  <div class="info">
    <div class="textInfo">
      <div class="title">Rent your THINGS!</div>
      <div class="description">
        Why let your item/objects loiter around your house and make it messy
        when you can let other people rent it. Not only does it help you get
        rclass of it, you can also earn with it.
      </div>
      <router-link
        style="
          text-decoration: none;
          background-color: transparent;
          color: #fffcfc;
        "
        to="/login"
      >
        <button class="getstart">
          GET STARTED<img class="geticon" src="getstartedicon.png" />
        </button>
      </router-link>
    </div>
    <div class="pic">
      <img src="/Group 7.png" />
    </div>
  </div>
</template>

<style scoped>
* {
  background: #ffffff;
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10%;

  position: fixed;
  height: 64px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}
.logo {
  width: 296px;
  height: 48px;
  flex: none;
  order: 0;
  flex-grow: 0;
  background-color: transparent;
}
.menuicon {
  display: none;
}
#links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 25px;
}
.menu {
  display: none;
  background-color: transparent;
  border: none;
}
.l1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;

  color: #707070;
  width: 135px;
  height: 64px;
  background-color: transparent;
  border: none;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.l2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 16px;
  text-align: center;

  color: #ffffff;
  width: 136px;
  height: 35px;
  border: none;
  background-color: #00b54b;
  border: none;
  background: #00b54b;
  border-radius: 3px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}
.l3 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 16px;
  text-align: center;

  color: #575757;
  width: 146px;
  height: 35px;
  border: none;
  background-color: CDCDCD;
  border: none;
  background: #cdcdcd;
  border-radius: 3px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 150px 5%;
  gap: 10%;
}
.textInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 25px;
}
.pic {
  width: 453px;
  height: 584px;
}
.title {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;

  color: #1f2937;
}
.description {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  display: flex;
  align-items: center;
  text-align: justify;

  color: #4b5563;
}
.getstart {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;

  display: flex;
  align-items: center;

  color: #fffcfc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;

  width: 216px;
  height: 56px;
  left: 96px;
  top: 481px;

  background: #00b54b;
  border-radius: 3px;
  border: none;
}
.geticon {
  background-color: transparent;
  color: black;
}
@media only screen and (max-width: 849px) {
  .nav {
    padding: 0px 5%;
    flex-direction: column;
    height: 120px;
  }
  .info {
    margin: 10px 5%;
    align-items: center;
    flex-direction: column;
    padding: 150px 20%;
    gap: 20px;
  }
  .textInfo {
    align-items: center;
  }
}

@media only screen and (max-width: 648px) {
  .title {
    font-size: 30px;
  }
  .description {
    font-size: 15px;
  }
  .getstart {
    font-size: 15px;
    width: 196px;
    height: 36px;
  }
}
@media only screen and (max-width: 648px) {
  .title {
    font-size: 25px;
  }
  .description {
    font-size: 13px;
  }
  .getstart {
    font-size: 13px;
  }
  .l1 {
    font-size: 10px;
    width: 125px;
    height: 54px;
  }
  .l2 {
    font-size: 10px;
    width: 126px;
    height: 25px;
  }
  .l3 {
    font-size: 10px;
    width: 126px;
    height: 25px;
  }
}
.l2:hover,
.getstart:hover {
  background-color: #008e3b;
}
.l3:hover {
  background-color: #8a8a8a;
  color: #edebeb;
}
.l1:hover {
  border-bottom: 3px solid #000000;
}
</style>

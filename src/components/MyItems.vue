<template>
  <div class="main-nav">
    <div class="nav">
      <div class="logo">
        <router-link to="/">
          <img src="/LOGO.png" />
        </router-link>
      </div>
      <div class="links">
        <router-link
          style="
            text-decoration: none;
            background-color: transparent;
            color: #707070;
          "
          to="/myitems"
        >
          <button class="l1">
            <img src="/myitems.png" />
            <p>My Items</p>
          </button>
        </router-link>
        <router-link
          style="
            text-decoration: none;
            background-color: transparent;
            color: #ffffff;
          "
          to="/favourites"
        >
          <button class="l2">
            <img src="/favourites.png" />
            <p>Favourites</p>
          </button>
        </router-link>
        <router-link
          style="
            text-decoration: none;
            background-color: transparent;
            color: #575757;
          "
          to="/myaccount"
          ><button class="l3">
            <img src="/myaccount.png" />
            <p>My Account</p>
          </button>
        </router-link>
      </div>
    </div>
    <div class="othernav">
      <div class="navtext">
        <h1 style="font-weight: bold">My Items</h1>
        <p>1 item(s)</p>
      </div>
      <div class="close">
        <router-link
          style="
            text-decoration: none;
            background-color: transparent;
            color: #575757;
          "
          to="/home"
        >
          <img src="/Vector.png" />
        </router-link>
      </div>
    </div>
    <div class="additem">
      <router-link to="/additem">
        <p>Add item</p>
      </router-link>
    </div>
    <div class="mainContent">
      <div class="items">
        <div class="pic">
          <img src="/image1.png" />
        </div>
        <div class="txt">
          <h1>Tractor</h1>
        </div>
      </div>
      <div class="items">
        <div class="pic">
          <img src="/image1.png" />
        </div>
        <div class="txt">
          <h1>Drill</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-nav {
  background-color: #ffffff;
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
.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
}
.links button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 100px;
  height: 20px;
  border: none;
}
.navtext {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20px;
  padding: 0px;
  gap: 24px;
}
.othernav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0px;
  margin: 80px 10%;
  gap: 16px;
  left: 0px;
  right: 0px;
  top: 0px;
  height: 42px;
}
.close img {
  width: 20px;
  height: 20px;
  align-items: center;
}
.mainContent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3em;
  column-gap: 2em;
  justify-content: center;
  align-items: center;
  margin: 230px 15%;
}
.items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 180px;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 1px 1px 10px#eee;
}
.items img {
  border-radius: 20px;
  max-height: 100px;
  max-width: 200px;
  object-fit: cover;
}
.txt {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.txt h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  letter-spacing: -0.02em;

  color: #1f2937;
}
.txt p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* or 150% */

  color: #1f2937;
}
@media only screen and (max-width: 1171px) {
  .mainContent {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (max-width: 889px) {
  .mainContent {
    grid-template-columns: repeat(2, 1fr);
  }
  .nav {
    flex-direction: column;
    justify-content: flex-start;
    height: 90px;
  }
  .othernav {
    flex-direction: flex-start;
    align-items: center;
    gap: 0;
    margin: 110px 100px;
    padding: 0px;
  }
}
@media only screen and (max-width: 574px) {
  .mainContent {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 50%;
    margin-right: 50%;
  }
}
</style>

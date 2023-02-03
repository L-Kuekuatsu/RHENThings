<template>
  <div class="nav">
    <div class="logo">
      <router-link to="/home">
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
</template>

<style scoped>
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
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
}
</style>

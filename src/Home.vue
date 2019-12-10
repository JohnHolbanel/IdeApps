<template>
  <div id="app">
    <div class="header">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">IdeApps</b-navbar-brand>
          <b-navbar-nav>
            <!-- Profile picture -->
            <b-navbar-brand href="#">
              <img src="./assets/profile.jpg" @click="profileClicked" alt="Profile" height="32" width="32">
            </b-navbar-brand>
            <!-- Search bar -->
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2 searchbar" placeholder="Search for a project..."></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <!-- Left aligned nav items -->
            <b-navbar-nav class="nav-right-items">
              <b-navbar-brand href="#" style="font-size: 18px;">Projects</b-navbar-brand>
              <b-navbar-brand href="#" style="font-size: 18px;">Bookmarks</b-navbar-brand>
              <b-navbar-brand href="#" style="font-size: 18px;">Likes</b-navbar-brand>
            </b-navbar-nav>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"><i class="fas fa-comment-alt" style="padding-top: 5px; font-size:20px"></i></b-nav-item>
            <b-nav-item href="#"><i class="fas fa-users" style="padding-top: 5px; font-size:20px"></i></b-nav-item>
            <b-nav-item href="#" style="padding-top: 3px;">Sign out</b-nav-item>
          </b-navbar-nav>      
      </b-navbar>
    </div>
    <br><br>
    <!-- Boxes -->
    
    <div class="rectangle-background">
      <div class="rectangle-1">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas volutpat.</p>
      </div>
      <div class="rectangle-4">
        <h1>Languages</h1>
        <ul>
          <li>Lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
          <li>consectetur</li>
          <li>adipiscing</li>
          <li>eiusmod</li>
          <li>incididunt</li>
        </ul>
      </div>
      <div class="rectangle-3">
        <h1>Tools</h1>
        <ul>
          <li>Lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
          <li>consectetur</li>
          <li>adipiscing</li>
          <li>eiusmod</li>
          <li>incididunt</li>
        </ul>
      </div>
      <div class="rectangle-2">
        <h1>Description</h1>
        <img src="./assets/project.png" alt="Profile" height="175" width="175" style="float: right; padding-right: 10px;">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas volutpat consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
      </div>
      <a href="#"><i class="fab fa-github" style="float: right; margin-right: 445px; margin-top: -65px; font-size: 80px;"></i></a>
      <a href="#"><i class="fab fa-linkedin" style="float: right; margin-right: -235px; margin-top: -65px; font-size: 80px;"></i></a>
      <a href="#"><i class="fas fa-envelope-square" style="float: right; margin-right: -400px; margin-top: -65px; font-size: 80px;"></i></a>
    </div>
    
    <div class="actions">
      <button class="button" type="button" @click="undoClicked"><i class="fas fa-sync-alt" style="color: #02d2f2;"></i></button>
      <button class="button" type="button" @click="dislikeClicked"><i class="fas fa-times-circle" style="color: red; padding-left: 5px;"></i></button>
      <button class="button" type="button" @click="likeClicked"><i class="fas fa-heart" style="color: #00eab5; padding-left: 5px;"></i></button>
      <button id="tooltip-button-1" class="button" type="button" @click="expandClicked"><i class="fas fa-search-plus" style="color: #f5f507; padding-left: 5px;"></i></button>
    </div>
    <b-tooltip target="tooltip-button-1" placement="right">
      Click me for a more <b>in-depth</b> view!
    </b-tooltip>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    dislikeClicked: () => {
      console.log("X clicked!")
    },

    likeClicked: () => {
      console.log("Heart clicked!")
    },

    expandClicked: function() {
      this.$router.push("description")
    },

    undoClicked: function() {
      console.log(this.$router) // don't mind this
    },

    profileClicked: function() {
      this.$router.push("profile")
    }
  }
}
</script>

<style>
.bg-info {
  background-color: #1db4cc !important;
}

.searchbar {
  width: 350px !important;
}

.nav-right-items {
  margin-left: 1vw;
  padding-top: 0.3vw;
}

.fonts-awesome {
  font-size: 22.5px;
}

.fas {
  padding-right: 10px;
}

.rectangle-background {
  height: 550px;
  width: 1100px;
  background-color: #F6F8FA;
  margin: 0 auto;
  box-shadow: 0px 0px 5px;
  border: 1px solid #F6F8FA;;
}

.rectangle-1 {
  margin-left: 40px;
  margin-top: 25px;
  height: 175px;
  width: 425px;
  background-color: white;
  border: 1px solid #000000;
  box-shadow: 0px 0px 3px;
}

.rectangle-2 {
  margin-left: 40px;
  margin-top: 50px;
  height: 265px;
  width: 425px;
  background-color: white;
  border: 1px solid #000000;
  box-shadow: 0px 0px 3px;
}

.rectangle-3 {
  float: right;
  margin-right: 47.5px;
  margin-top: -175px;
  height: 400px;
  width: 200px;
  background-color: white;
  border: 1px solid #000000;
  box-shadow: 0px 0px 3px;
  position: relative;
}

.rectangle-4 {
  float: right;
  margin-right: 40px;
  margin-top: -175px;
  height: 400px;
  width: 300px;
  background-color: white;
  border: 1px solid #000000;
  box-shadow: 0px 0px 3px;
}

.actions {
  font-size: 60px;
  text-align: center;
  padding-top: 20px;
  cursor: default;
}

.button {
  border-radius: 50%;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none !important;
}

h1 {
  padding-left: 15px;
  font-family: 'Roboto', sans-serif;
}

p {
  padding-left: 10px;
  font-family: 'PT Serif', serif;
}

.rectangle-background li {
  font-family: 'PT Serif', serif;
}
</style>

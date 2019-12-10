<template>
  <div class="header">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">IdeApps</b-navbar-brand>
          <b-navbar-nav>
            <!-- Profile picture -->
            <b-navbar-brand href="#">
              <img src="./assets/profile.jpg" alt="Profile" height="32" width="32">
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
      <hr>
      <p>profile page!</p>
    </div>
</template>


<script>
export default {
  
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
</style>
<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/home">Home</b-nav-item>
        <b-nav-item to="/example">Example</b-nav-item>
        <b-nav-item to="/error">404</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: "Navbar"
};
</script>
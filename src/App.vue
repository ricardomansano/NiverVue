<template>
  <div id="app">

    <!-- [*AppBar] -->
    <md-toolbar class="md-primary"  style="max-height: 50px; padding: 0;">

      <!-- [*MainMenu] -->
      <md-menu style="margin-left: 0px;">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>menu</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item>
            <md-button to="/">
              <md-icon>home</md-icon>
              <p>Home</p>
            </md-button>
          </md-menu-item>

          <md-menu-item>
            <!-- [*QueryParams] - Passagem de parâmetros via router -->
            <md-button :to="{ name: 'niver', params: { title: 'Nivers' }}">
              <md-icon>cake</md-icon>
              <p>Aniversários</p>
            </md-button>
          </md-menu-item>

          <md-menu-item>
            <md-button  to="/hooks">
              <md-icon>device_hub</md-icon>
              <p>Hooks</p>
            </md-button>
          </md-menu-item>
        </md-menu-content>        
      </md-menu> 

      <div style="flex: 1 1 auto; text-align: right;">
        <md-button class="md-icon-button">
          <md-tooltip md-direction="top">Home</md-tooltip>
          <router-link to="/">
            <md-icon>home</md-icon>
          </router-link>
        </md-button>

        <md-button class="md-icon-button">
          <md-tooltip md-direction="top">Aniversários</md-tooltip>
           <!-- [*QueryParams] - Passagem de parâmetros via router -->
          <router-link :to="{ name: 'niver', params: { title: 'Nivers' }}">
            <md-icon>cake</md-icon>
          </router-link>
        </md-button>

        <md-button class="md-icon-button">
          <md-tooltip md-direction="top">Getter/Setter</md-tooltip>
          <router-link to="/hooks">
            <md-icon>device_hub</md-icon>
          </router-link>
        </md-button>
      </div>
    </md-toolbar>

    <!-- [*Router] Container do Roteador -->
    <router-view/>

  </div>
</template>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  /* [*StyleSheet] Ajustando botoes do menu*/
  p{
    display: inline-block;
    margin: 10px;
    min-width: 110px;
  }
</style>

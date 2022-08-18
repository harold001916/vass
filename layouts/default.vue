<template>
  <v-app>
   
    <v-app-bar
      fixed
      app
      color="white"
      flat
    >
    <v-row dense style="background:white;">
      <v-col dense cols="12" sm="6">
        <v-img src="/logo.png" contain max-height="50" max-width="150"></v-img>
      </v-col>
      <v-col dense cols="12" md="6">
        <v-row dense justify="center" align="center">
          <v-col dense>
            <v-btn elevation="0"  color="primary" block class="text-capitalize rounded-sm"> All </v-btn>
          </v-col>
          <v-col dense>
            <v-btn elevation="0" text block class="text-capitalize rounded-sm"> Branding </v-btn>
          </v-col>
          <v-col dense>
            <v-btn elevation="0" text block class="text-capitalize rounded-sm"> Web </v-btn>
          </v-col>
          <v-col dense>
            <v-btn elevation="0" text block class="text-capitalize rounded-sm"> photography </v-btn>
          </v-col>
          <v-col dense>
            <v-btn elevation="0" text block class="text-capitalize rounded-sm"> App </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
      
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app height="100" color="white">
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-row justify="center"> 
            <span> &copy; {{new Date().getFullYear()}} - <span class="primary--text">Sneak</span> All Right Reserved </span>
          </v-row>
          <v-row justify="center" >
        <v-btn icon color="grey-darken-1"><i class="fa-brands fa-facebook-f"></i> </v-btn>
        <v-btn icon color="grey-darken-1"><i class="fa-brands fa-twitter"></i></v-btn>
        <v-btn icon color="grey-darken-1"><i class="fa-solid fa-globe"></i></v-btn>
        <v-btn icon color="grey-darken-1"><i class="fa-brands fa-google-plus-g"></i></v-btn>
        <v-btn icon color="grey-darken-1"><i class="fa-brands fa-youtube"></i></v-btn>
      </v-row>
        </v-col>
      </v-row>
      
      
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
     
    }
  }
}
</script>

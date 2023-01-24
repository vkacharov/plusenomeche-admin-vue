<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
</script>

<template>
    <authenticator :hide-sign-up="true">
    <template v-slot="{ user, signOut }">
      <div class="top">
        Мечето
        <a @click.stop="signOut">
          <font-awesome-icon icon="fa-solid fa-right-from-bracket" size="2xl"/>
        </a>
      </div>
      <header>
        <div class="wrapper">
          <HelloWorld />

          <nav>
            <RouterLink to="/">Дарители</RouterLink>
            <RouterLink to="/donations">Дарения</RouterLink>
            <RouterLink to="/causes">Каузи</RouterLink>
            <RouterLink to="/expenses">Разходи</RouterLink>
            <RouterLink to="/statistics">Статистики</RouterLink>
          </nav>
        </div>
      </header>

      <RouterView />
      
    </template>
  </authenticator>

  <notifications position="bottom left" />
  </template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  padding: 1rem 1rem;
  border-top: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    grid-area: menu;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  .top {
    grid-area: top;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
  }

  .top button {
    width: 150px;
  }
}
</style>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

const darkMode: Ref<boolean> = ref(getDarkModeCookie() ?? userPrefersDarkMode());
const mobileNavbarIsOpened: Ref<boolean> = ref(false);

/**
 * Returns true if the user's browser is set to prefer dark mode
 */
function userPrefersDarkMode(): boolean {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/**
 * Returns the value of the dark mode preference if it exists, else null
 */
function getDarkModeCookie(): boolean | null {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith("darkmode-portfolio="))
    ?.split("=")[1];
  return match !== null ? match == 'true' : null;
}

/**
 * Sets the dark mode cookie to the current value
 */
function setDarkModeCookie(): void {
  document.cookie = `darkmode-portfolio=${darkMode.value}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year
}

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  setDarkModeCookie();
}

function openCloseNavbarMobile() {
  mobileNavbarIsOpened.value = !mobileNavbarIsOpened.value;
}
</script>

<template>
  <div id="wrapper" :class="{'theme-light': !darkMode, 'theme-dark': darkMode}">
    <header>
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
<!--          <a class="navbar-item" @click="$router.push({name: 'home'})">-->
<!--            <img alt="event manager logo" src="@/assets/logo-eventmanager.png">-->
<!--          </a>-->

          <a @click="openCloseNavbarMobile" :class="{'is-active': mobileNavbarIsOpened}" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" :class="{'is-active': mobileNavbarIsOpened}" class="navbar-menu">
          <div class="navbar-start">
            <a @click="$router.push({name: 'home'})" class="navbar-item">
              Accueil
            </a>

            <a @click="$router.push({name: 'projets'})" class="navbar-item">
              Projets
            </a>

            <a @click="$router.push({name: 'portfolio-iut'})" class="navbar-item">
              Portfolio d'apprentissage
            </a>

<!--            <a @click="$router.push({name: 'portfolio-iut'})" class="navbar-item">-->
<!--              Portfolio IUT-->
<!--            </a>-->

            <!-- Sous-menu -->
<!--            <div class="navbar-item has-dropdown is-hoverable">-->
<!--              <a class="navbar-link"></a>-->

<!--              <div class="navbar-dropdown">-->
<!--                <RouterLink v-if="apiStore.estConnecte" :to="{name: 'singleUser', params:{id: apiStore.utilisateurConnecte.id}}" class="navbar-item">-->
<!--                  Mon profil-->
<!--                </RouterLink>-->
<!--                <a v-if="apiStore.estConnecte" @click="$router.push({name: 'settings'})" class="navbar-item">-->
<!--                  Paramètres-->
<!--                </a>-->
<!--                <hr v-if="apiStore.estConnecte" class="navbar-divider">-->
<!--                <a @click="$router.push({name: 'terms'})" class="navbar-item">-->
<!--                  Mentions légales-->
<!--                </a>-->
<!--              </div>-->
<!--            </div>-->
          </div>

          <div class="navbar-end">
            <a class="navbar-item" href="https://github.com/ivelter" target="_blank">
              <img v-if="darkMode" src="/img/github.png" alt="github logo">
              <img v-else src="/img/github-black.png" alt="github logo">
            </a>

            <a class="navbar-item" href="https://www.linkedin.com/in/ilan-velter-b130ba264/">
              <img v-if="darkMode" src="/img/linkedin.png" alt="linkedin logo">
              <img v-else src="/img/linkedin-black.png" alt="linkedin logo">
            </a>

            <a class="navbar-item" href="mailto:ivelter0@gmail.com">
              <img v-if="darkMode" src="/img/email.png" alt="email illustration">
              <img v-else src="/img/email-black.png" alt="email illustration">
            </a>

            <hr class="navbar-divider">

            <a class="navbar-item" @click="toggleDarkMode">
              <img v-if="darkMode" alt="dark mode sun icon" src="@/assets/sun-dark.webp">
              <img v-else alt="light mode sun icon" src="@/assets/sun-light.webp">
            </a>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#wrapper.theme-light {
  min-height: 100vh;
  background-color: rgb(225, 235, 250);
}

#wrapper.theme-dark {
  background-color: #14161a;
}

header {
  width: 100%;
}

main {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

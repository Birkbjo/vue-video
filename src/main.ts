import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue'

const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN
const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID
const app = createApp(App)
app.use(router)

if (auth0Domain && auth0ClientId) {
  const auth0 = createAuth0({
    domain: auth0Domain,
    clientId: auth0ClientId,
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
  app.use(auth0)
} else {
  console.warn('Auth0 domain and/or client ID not configured')
}

app.mount('#app')

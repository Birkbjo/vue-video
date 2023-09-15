import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import LoginView from '../../views/LoginView.vue'
import HomeView from '../../views/HomeView.vue'
import * as auth0 from '@auth0/auth0-vue'

vi.mock('@auth0/auth0-vue')
const auth0Mock = vi.mocked(auth0)

auth0Mock.useAuth0 = vi.fn().mockReturnValue({
  isAuthenticated: true,
  isLoading: false,
  loginWithRedirect: () => {},
  user: {
    name: 'Birk Johansson'
  }
})

describe('LoginView', () => {
  it('renders properly', () => {
    const wrapper = mount(LoginView)
    expect(wrapper.text()).toContain('Velkommen')
  })
})

describe('HomeView', () => {
  it('renders properly',() => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Velkommen')
    expect(wrapper.text()).toContain('Birk Johansson')
    expect(wrapper.findComponent({ name: 'UploadButton' }).exists())
  })
})

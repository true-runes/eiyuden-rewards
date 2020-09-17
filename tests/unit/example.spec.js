import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = '百英雄伝攻略真書へようこそ！'
    const wrapper = shallowMount(Header, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

import { shallowMount } from '@vue/test-utils'
import MyButton from './MyButton.vue'

describe("test", () => {
  const wrapper = shallowMount(MyButton, {props: {seafood: 'calamari'}});
  it("stupidly tests implementation details", () => {
    // hover over the word "seafood" to see that it has the same TS type "calamari | tuna" as in MyButton.vue
    expect(wrapper.vm.seafood).toBe('calamari');
  });
});

import { shallowMount } from '@vue/test-utils'
import Vuex, { ActionTree } from 'vuex';
import AddForm from "@/components/AddForm.vue";
describe("AddForm.vue", () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(AddForm)
        expect(wrapper.contains('div')).toBe(true)
    })
})

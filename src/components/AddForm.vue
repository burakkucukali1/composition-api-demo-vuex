<template>
  <div class="app" >
    <form @submit.prevent="onSubmit">
      <div class="row mt-3">
        <div class="col-12">
          <label>Ad</label>
          <input
            type="text"
            name="name"
            class="w-100"
            v-model="name"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12">
          <label>Soyad</label>
          <input
            type="text"
            name="surname"
            class="w-100"
            v-model="surname"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12">
          <label>Telefon</label>
          <input
            type="text"
            name="phone"
            class="w-100"
            v-model="phone"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <button
            type="submit"
            class="w-100 text-white"
            :class="isUpdate ? 'bg-danger' : 'bg-info'"
          >
            {{ isUpdate ? "Güncelle" : "Ekle" }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  reactive,
  ref,
  toRefs,
  watchEffect,
  onMounted,
  watch,
} from "@vue/composition-api";
import UseContacts from "../composables/UseContacts";
 import { useState } from "vuex-composition-helpers";

export default {
  props: {
    updateID1: String,
  },
  setup(props, { emit, refs }) {
      
    const name = ref(null);
    const surname = ref(null);
    const phone = ref(null);
    const isUpdate = ref(false);

    const { submitForm, contactList } = UseContacts();
    const { contacts } = useState({
      contacts: "contacts",
    });

    // Adding operation
    const onSubmit = () => {
      if (name.value === "") return;
      const formData = {
        id: "_" + Math.random().toString(36).substr(2, 9),
        name: name.value,
        surname: surname.value,
        phone: phone.value,
        isUpdate: false,
      };
      emit("addFormData", formData);
      clearForm();
    };
 
    function clearForm() {
      name.value = "";
      surname.value = "";
      phone.value = "";
      isUpdate.value = false;
    }

    return {
      name,
      surname,
      phone,
      isUpdate,
      onSubmit,
      contactList,
    };
  },
};
</script>



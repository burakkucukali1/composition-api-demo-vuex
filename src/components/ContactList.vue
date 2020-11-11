<template>
  <div>
    <h1>Contact List</h1>
       
    <div
      class="body d-flex justify-content-between border-bottom border-secondary"
    >
      <div class="name col-4"><b>Ad</b></div>
      <div class="surname col-4"><b>Soyad</b></div>
      <div class="phone col-4"><b>Telefon</b></div>
      <div></div>
    </div>
    <div
      class="body d-flex justify-content-between"
      v-for="(item, index) in contacts"
      :key="index"
    >
      <!-- <div class="name col-4">{{ item.id }}</div> -->
      <div class="name col-4">{{ item.name }}</div>
      <div class="surname col-4">{{ item.surname }}</div>
      <div class="phone col-4">{{ item.phone }}</div>
      <div class="operators d-flex pr-2">
        <div>
          <a @click="gotoUpdate(item.id)"><i class="fas fa-edit"></i></a>
        </div>
        <div>
          <a @click="gotoDelete(item.id)"
            ><i class="fas fa-minus-circle"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from "@vue/composition-api";
import { useGetters, useState, useActions } from "vuex-composition-helpers";

import UseContacts from "../composables/UseContacts";
export default {

  setup(props, { emit }) {
    const contacts = ref(null);
    const { contactList } = UseContacts();
    contacts.value = contactList.value;

    function gotoUpdate(id) {
      emit("onUpdate", id);
    }
    function gotoDelete(id){
        emit("onDelete",id)
    }

    return {
      contacts,
      gotoUpdate,
      gotoDelete,
      };
  },
};
</script>

<style>
</style>

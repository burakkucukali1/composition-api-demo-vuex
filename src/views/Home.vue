<template>
  <div class="home">
    <div class="container">
      <h2>Add Form</h2>
      <AddForm
        @addFormData="saveFormData"
        :updateID1="updateID"
        ref="addForm"
      />
      <ContactList @onUpdate="editContact" @onDelete="deleteContact" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddForm from "../components/AddForm.vue";
import ContactList from "../components/ContactList.vue";
import UseContacts from "../composables/UseContacts";
import { ref } from "@vue/composition-api";
import { useState } from "vuex-composition-helpers";

export default {
  name: "Home",
  components: {
    AddForm,
    ContactList,
  },
  setup(props, { refs }) {
    // REFs
    const addForm = ref(null);
    const updateID = ref(null);
    const dropwdownIndex = ref(null);

    // Getting Functions
    const {
      submitForm,
      updateContact,
      deleteContact,
      setUpdateInputs,
    } = UseContacts();

    // Add and Update Operations
    const saveFormData = (formData) => {
      if (updateID.value) {
        formData.id = updateID.value;
        formData.isUpdate = true;
        return updateContact(formData);
      } else {
        return submitForm(formData);
      }
    };

    // Setting form to update
    const editContact = (id) => {
      updateID.value = id;
      setUpdateInputs(id, addForm);
    };
    // Delete Operation
    const deleteContactInfo = (id) => {
      return deleteContact(id);
    };
    
    return {
      saveFormData,
      editContact,
      deleteContact,
      updateID,
      addForm,
      setUpdateInputs,
    };
  },
};
</script>

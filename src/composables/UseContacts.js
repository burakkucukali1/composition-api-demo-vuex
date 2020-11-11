import { ref } from "@vue/composition-api"
import { useState, useActions } from "vuex-composition-helpers";

export default function UseContacts() {

    const contactList = ref(null)

    const { add, update, deleteItem } = useActions({
        add: 'add',
        update: 'update',
        deleteItem: 'deleteItem'
    })

    const { contacts } = useState({
        contacts: 'contacts'
    })
    contactList.value = contacts.value

    // FUNCTIONS to Vuex
    function submitForm(data) {
        add(data)
        console.log("Added id => ", data.id)
    }
    function updateContact(payload) {
        update(payload)
        console.log("Updated data => ", payload)
    }
    function setUpdateInputs(id, compRef) {
        const index = contacts.value.findIndex((item) => item.id === id);
        const contact = contacts.value;

        compRef.value.isUpdate = true;
        compRef.value.name = contact[index].name;
        compRef.value.surname = contact[index].surname;
        compRef.value.phone = contact[index].phone;
    }
    function deleteContact(deleteID) {
        deleteItem(deleteID)
        console.log("Deleted data => ", deleteID)
    }

    return {
        submitForm, contactList, updateContact, deleteContact, setUpdateInputs
    }

}

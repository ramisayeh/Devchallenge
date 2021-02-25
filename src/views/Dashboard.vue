<template>
    
<div class="p-fluid p-formgrid p-grid">
    <div class="p-field p-col-12 p-md-6">
        <label for="firstname6">Firstname</label>
        <InputText id="firstname6" type="text" />
    </div>
    <div class="p-field p-col-12 p-md-6">
        <label for="lastname6">Lastname</label>
        <InputText id="lastname6" type="text" />
    </div>
    <div class="p-field p-col-12">
        <label for="address">Address</label>
        <Textarea id="address" rows="4" />
    </div>
    <div class="p-field p-col-12 p-md-6">
        <label for="city">City</label>
        <InputText id="city" type="text" />
    </div>
    <div class="p-field p-col-12 p-md-3">
        <label for="state">State</label>
        <Dropdown inputId="state" v-model="selectedState" :options="states" optionLabel="name" placeholder="Select" />
    </div>
    <div class="p-field p-col-12 p-md-3">
        <label for="zip">Zip</label>
        <InputText id="zip" type="text" />
    </div>
    </div>
</template>

<script>
    export default {
        name: " Dashboard"
        
    }
</script>

<style scoped>

</style>
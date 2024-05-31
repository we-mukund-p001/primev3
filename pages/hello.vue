
<template>

    <Editor v-model="value" editorStyle="height: 320px" :pt="{
      root:{class:' flex flex-column-reverse'},
      header:{class:' text-red-500'}
    }" />

</template>

<script setup>
import Editor from 'primevue/editor';

const value = ref('');
</script>

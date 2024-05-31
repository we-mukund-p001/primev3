<template>
  <div>
    <div id="editor" ref="editor">
      <p>Hello World!</p>
      <p>Some initial <strong>bold</strong> text</p>
      <p><br /></p>
    </div>
  </div>
</template>

<script setup>
const quill = new Quill('#editor', {
  theme: 'snow'
});
</script>

<style scoped>

</style>
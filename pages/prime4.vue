<template>

  <div class=" flex  align-items-center justify-content-between  w-full ">
<!--    left-->
    <div class="flex flex-row align-items-center gap-2 ">
    <div>
    <Button  severity="secondary" icon="pi pi-times" class="bg-white hover:bg-gray-100 border-none " />
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-2rem border-round-lg p-2 bg-white hover:bg-gray-100 cursor-pointer" viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.845 3.845a2.883 2.883 0 0 0 0 4.077L5.432 9.51c.012-.014.555.503.568.49l4-4c.013-.013-.504-.556-.49-.568L7.922 3.845a2.883 2.883 0 0 0-4.077 0m1.288 11.462a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.484.484 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.484.484 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.484.484 0 0 0 .272-.274z" opacity="0.5" />
      <path fill="currentColor" d="M19.967 9.13a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.485.485 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.485.485 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.485.485 0 0 0 .272-.273z" opacity="0.2" />
      <path fill="currentColor" d="M16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.482.482 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.485.485 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.485.485 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.485.485 0 0 0 .273-.274z" opacity="0.7" />
      <path fill="currentColor" d="M10.568 6.49c-.012.014-.555-.503-.568-.49l-4 4c-.013.013.504.556.49.568l9.588 9.587a2.883 2.883 0 1 0 4.078-4.077z" />
    </svg>
    <div>
      <p class="my-0 text-base font-semibold ">LA Product Designs</p>
      <p class="my-0 text-base text-gray-500 font-light ">Draft campaign</p>
    </div>
    <i class="pi pi-pencil text-gray-500 hover:text-blue-500 cursor-pointer"/>
    </div>

<!--    right-->
    <div class="flex flex-row  align-items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
      <path fill="currentColor" d="M2 5v16h4v5.094l1.625-1.313L12.344 21H22V5zm2 2h16v12h-8.344l-.281.219L8 21.906V19H4zm20 2v2h4v12h-4v2.906L20.344 23h-7.5l-2.5 2h9.312L26 30.094V25h4V9z" />
    </svg>
    <p class="font-bold hover:underline cursor-pointer ">Feedback</p>
    <p class="text-gray-500 ">Draft saved 10 seconds ago</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "prime4"
}
</script>

<style scoped>

</style>
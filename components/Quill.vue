<template>
  <div class="flex flex-column-reverse">
    <QuillEditor toolbar="#my-toolbar" >
      <template #toolbar>
        <div id="my-toolbar">
          <div class="flex flex-wrap">
          <!-- Add buttons as you would before -->
          <div class="">
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
          </div>
          <p class="my-0 text-gray-400  mx-2">|</p>
            <div>
              <button class="ql-align" value=""></button>
              <button class="ql-align" value="center"></button>
              <button class="ql-align" value="right"></button>
            </div>
          <p class="my-0 text-gray-400  mx-2">|</p>
            <div>
            <button class="ql-list" value="bullet"></button>
            <button class="ql-list" value="ordered"></button>
            </div>
          <p class="my-0 text-gray-400  mx-2">|</p>
            <div class="">
              <button class="ql-attach">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600 w-12" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8 8c-2.248 0-4 1.752-4 4s1.752 4 4 4h2a1 1 0 1 1 0 2H8c-3.352 0-6-2.648-6-6s2.648-6 6-6h2a1 1 0 1 1 0 2zm5-1a1 1 0 0 1 1-1h2c3.352 0 6 2.648 6 6s-2.648 6-6 6h-2a1 1 0 1 1 0-2h2c2.248 0 4-1.752 4-4s-1.752-4-4-4h-2a1 1 0 0 1-1-1m-6 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" />
                </svg>
              </button>
              <button class="ql-image"></button>
              <button class="ql-attach">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600" width="1em" height="1em" viewBox="0 0 1200 1200">
                  <path fill="currentColor" d="M471.701 1111.207C677.774 906.278 838.97 742.464 1018.27 566.612c59.195-61.825 96.687-122.337 112.472-181.532c27.626-111.707-14.849-208.44-88.793-284.137C970.914 29.909 894.947-3.635 814.047.312s-160.812 44.726-239.74 122.337L71.146 627.78l82.874 80.899l503.16-503.158c51.63-49.087 113.07-95.365 183.505-88.793c107.317 15.066 202.091 146.416 177.587 238.754c-31.071 81.924-73.905 119.289-133.189 178.571c-180.341 179.88-320.956 318.983-496.253 494.279c-65.88 60.199-108.486 76.498-169.692 19.732c-31.571-31.571-45.383-62.484-41.437-92.739c4.379-35.301 24.363-59.717 47.355-82.873l459.748-459.75c21.003-21.04 68.836-61.425 88.793-43.409c15.311 35.521-24.12 69.425-43.408 88.793l-422.26 422.259l80.899 82.874L813.06 540.961c73.069-75.365 125.566-167.46 43.409-252.566c-90.862-77.988-186.583-25.923-254.539 41.437L142.182 789.58c-47.355 47.355-74.323 98.658-80.899 153.908c-5.188 77.454 29.733 139.628 76.953 187.451c44.385 44.143 92.336 68.594 151.936 69.061c71.656-2.869 142.112-50.066 181.529-88.793" />
                </svg>
              </button>
            </div>
            <!-- But you can also add your own -->
        </div>
        </div>
      </template>
    </QuillEditor>
  </div>
</template>

<script setup>
 import {QuillEditor} from '@vueup/vue-quill'
 import '@vueup/vue-quill/dist/vue-quill.snow.css';

 const toolbarOptions = [
   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
   ['blockquote', 'code-block'],
   ['link', 'image', 'video', 'formula'],

   [{ 'header': 1 }, { 'header': 2 }],               // custom button values
   [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
   [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
   [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
   [{ 'direction': 'rtl' }],                         // text direction

   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
   [{ 'font': [] }],
   [{ 'align': [] }],

   ['clean']                                         // remove formatting button
 ];

 const options = ref({
   modules:{
     toolbar:toolbarOptions
   },
   placeholder: 'composre here...',
   readOnly:false,
   theme:'snow'
 });

</script>

<style>
.ql-container{
  min-height: 250px;
  height:100%;
}
.ql-editor{
  min-height:100px;
  height:100%;
}

</style>
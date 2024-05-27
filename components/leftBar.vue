<template>
<div class="lg:w-3  min-h-screen bg-gray-100 hidden md:flex flex-column justify-content-between border-1 border-gray-300">
<div class="flex flex-column gap-4 lg:gap-0">

  <div class="flex p-2 lg:p-4  flex-wrap  lg:flex-row flex-column justify-content-center  align-items-center">

    <Avatar image="/thomas-lean.png" class="w-4rem h-4rem mr-1 cursor-pointer" size="" shape="circle"/>

    <div class=" lg:flex hidden flex-column">
      <p class="text-base m-1 font-normal">Welcome back</p>
      <p class="text-xl font-semibold m-1">Sarah Smith</p>
    </div>
    <div>
      <Badge class=" bg-red-600 hover:bg-red-700 cursor-pointer mx-3 my-2 lg:my-0" value="5"></Badge>
    </div>
    <div>
      <Button class=" bg-white hover:bg-gray-200 lg:flex hidden"  label="hello" severity="secondary" outlined><i
          class=" m-1 pi pi-cog"></i></Button>

    </div>
  </div>


<!--top buttons-->
<div class=" lg:mx-4 flex flex-column gap-2 lg:gap-0 ">


    <div
               class="no-underline text-gray-500 text-base flex align-items-center justify-content-center lg:justify-content-between lg:px-4 lg:border-round-xl cursor-pointer "
>
  <div class="flex align-items-center justify-content-center lg:justify-content-start    gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="flex w-4 lg:w-1rem " viewBox="0 0 16 16">
      <path fill="currentColor"
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"/>
    </svg>
    <InputText class=" lg:flex hidden bg-gray-100  border-gray-100 border-0 w-full hover:bg-white shadow-none" placeholder="Search"
               type="text" v-model="value1"/>
  </div>

</div>




  <NuxtLink exact-active-class="bg-white"  to="/dashboard"
       class="no-underline text-gray-500 text-base  flex align-items-start justify-content-center lg:justify-content-between lg:px-4 py-2 lg:py-0  lg:border-round-xl cursor-pointer hover:bg-white"
      >
    <div class="flex align-items-start  justify-content-center gap-2">
      <svg  xmlns="http://www.w3.org/2000/svg"  class="w-4 lg:w-1rem  lg:mt-3 flex-shrink-0 "  viewBox="0 0 20 20">
        <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
          <path
              d="M1 10h1.389v7a.5.5 0 0 0 .5.5H16.11a.5.5 0 0 0 .5-.5v-7H18a.5.5 0 0 0 .33-.875l-8.5-7.5a.5.5 0 0 0-.66 0l-8.5 7.5A.5.5 0 0 0 1 10m1.889-1h-.567L9.5 2.667L16.678 9h-.567a.5.5 0 0 0-.5.5v7H3.39v-7a.5.5 0 0 0-.5-.5"/>
          <path
              d="M10.708 11.5h-2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-2.5 5v-4h2.5v4z"/>
        </g>
      </svg>
      <p class="lg:flex 	hidden">Dashboard</p>
    </div>
    <svg  class="lg:flex hidden flex-shrink-0 lg:mt-3" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
      <path fill="currentColor" fill-rule="evenodd"
            d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
            clip-rule="evenodd"/>
    </svg>
  </NuxtLink>

  <NuxtLink exact-active-class="bg-white" to="/projectManager"
       class="no-underline text-gray-500 text-base  flex align-items-start justify-content-center lg:justify-content-between lg:px-4 py-2 lg:py-0 lg:border-round-xl cursor-pointer hover:bg-white"
      >
    <div class="flex align-items-start  justify-content-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class=" lg:mt-3 w-4 lg:w-1rem  flex-shrink-0  "  viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
          <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2"/>
        </g>
      </svg>
      <p class="lg:flex hidden">Project Manager</p>
    </div>
    <svg class="lg:flex hidden lg:mt-3  flex-shrink-0 " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
      <path fill="currentColor" fill-rule="evenodd"
            d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
            clip-rule="evenodd"/>
    </svg>
  </NuxtLink>
  <NuxtLink exact-active-class="bg-white" to="/information"
       class="no-underline text-gray-500 text-base  flex align-items-start justify-content-center lg:justify-content-between lg:px-4  py-2 lg:py-0 lg:border-round-xl cursor-pointer hover:bg-white"
       >
    <div class="flex align-items-start  justify-content-center  gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 lg:w-1rem  lg:mt-3  flex-shrink-0 "  viewBox="0 0 24 24">
        <path fill="currentColor"
              d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/>
      </svg>
      <p class="lg:flex hidden">Information</p>
    </div>
    <svg class="lg:flex hidden lg:mt-3  flex-shrink-0 " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
      <path fill="currentColor" fill-rule="evenodd"
            d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
            clip-rule="evenodd"/>
    </svg>
  </NuxtLink>

  <NuxtLink exact-active-class="bg-white" to="/sales"
       class="no-underline text-gray-500 text-base  flex align-items-start justify-content-center lg:justify-content-between lg:px-4 py-2 lg:py-0  lg:border-round-xl cursor-pointer hover:bg-white"
     >
    <div class="flex align-items-start  justify-content-center  gap-2">
      <svg xmlns="http://www.w3.org/2000/svg"  class="w-4 lg:w-1rem lg:mt-3  flex-shrink-0 "  viewBox="0 0 24 24">
        <g fill="none">
          <path
              d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
          <path fill="currentColor"
                d="M16.586 3A2 2 0 0 1 18 3.586L20.414 6A2 2 0 0 1 21 7.414V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7.414A2 2 0 0 1 3.586 6L6 3.586A2 2 0 0 1 7.414 3zM19 9H5v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zm-4 2a1 1 0 0 1 1 1a4 4 0 0 1-8 0a1 1 0 1 1 2 0a2 2 0 0 0 3.995.15L14 12a1 1 0 0 1 1-1m1.586-6H7.414l-2 2h13.172z"/>
        </g>
      </svg>
      <p class="lg:flex hidden">Sales</p>
    </div>
    <div class="lg:flex hidden align-items-center gap-2">
      <Badge class="bg-blue-600 hover:bg-blue-700 lg:mt-3  flex-shrink-0 " value="5"></Badge>
      <svg class="lg:mt-3  flex-shrink-0 " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
        <path fill="currentColor" fill-rule="evenodd"
              d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
              clip-rule="evenodd"/>
      </svg>
    </div>
  </NuxtLink>

  <NuxtLink exact-active-class="bg-white" to="/analytics"
       class="no-underline text-gray-500 text-base  flex align-items-start justify-content-center lg:justify-content-between lg:px-4 py-2 lg:py-0  lg:border-round-xl cursor-pointer hover:bg-white"
       >
    <div class="flex align-items-start  justify-content-center  gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 lg:w-1rem lg:mt-3  flex-shrink-0 " viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.488 15A9.004 9.004 0 0 1 12 21A9 9 0 0 1 9 3.512M12 3a9 9 0 0 1 9 9h-9z"/>
      </svg>
      <p class="lg:flex hidden">Analytics</p>
    </div>
    <svg class="lg:flex hidden lg:mt-3  flex-shrink-0 " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
      <path fill="currentColor" fill-rule="evenodd"
            d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
            clip-rule="evenodd"/>
    </svg>
  </NuxtLink>
  <NuxtLink exact-active-class="bg-white" to="/crypto"
       class="no-underline text-gray-500 text-base  flex align-items-start justify-content-center lg:justify-content-between lg:px-4 py-2 lg:py-0  lg:border-round-xl cursor-pointer hover:bg-white"
       >
    <div class="flex align-items-start  justify-content-center  gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 lg:w-1rem lg:mt-3  flex-shrink-0  " viewBox="0 0 16 16">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M1.75 8.25h2.5l2-4.5l3.5 8.5l2-4h2.5"/>
      </svg>
      <p  class="lg:flex hidden">Crypto</p>
    </div>
    <svg  class="lg:flex hidden lg:mt-3  flex-shrink-0 " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
      <path fill="currentColor" fill-rule="evenodd"
            d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5"
            clip-rule="evenodd"/>
    </svg>
  </NuxtLink>

  <div class="no-underline text-gray-500 text-base flex lg:hidden align-items-center justify-content-center lg:justify-content-between lg:px-4 py-2 lg:py-0 lg:border-round-xl cursor-pointer hover:bg-white"
  >
    <div class="flex align-items-center  justify-content-center  gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 lg:w-1rem " viewBox="0 0 24 24">
        <path fill="currentColor" d="m14.136 3.361l.995-.1zm-.152-.82L13.095 3zm.447 2.277l.795-.607zm.929.384l-.134-.99zm1.238-.82l.633.773zm.687-.473l.305.953zm.702.035l.398-.917zm.637.538l-.707.707zm.894.894l.707-.707zm.538.637l.917-.398zm.035.702l.952.304zm-.472.687l-.774-.633zm-.822 1.239l-.99-.134zm.385.928l-.606.795zm1.457.295l.099-.995zm.82.152l.458-.889zm.47.521l.93-.367zm.001 2.926l-.93-.368zm-.472.52l.459.89zm-.82.153l-.099-.995l-.033.003l-.032.006zm0 0l.1.995l.033-.003l.032-.005zm-1.456.295l-.606-.795zm-.384.929l-.991.133zm.821 1.238l-.774.633zm.472.687l-.953.304zm-.035.702l-.918-.398zm-.538.637l.707.707zm-.894.893l-.707-.707zm-.637.538l.398.918zm-.702.035l-.304.953zm-.687-.472l.633-.774l-.008-.006zm0 0l-.633.774l.008.007zm-1.238-.82l.133-.992zm-.929.384l.795.606zm-.295 1.456l-.995-.1zm-.152.82L13.095 21zm-.521.472l-.368-.93zm-2.926 0l.368-.93zm-.52-.472l.888-.458zm-.153-.82l-.995.1zm-.295-1.456l-.795.607zm-.928-.384l-.134-.992zm-1.239.82l-.633-.773l-.016.013l-.015.013zm0 0l.633.775l.016-.013l.015-.014zm-.687.473l.304.952zm-.702-.035l-.398.917zm-.637-.538l.707-.707zm-.894-.894l-.707.707zm-.538-.637l.918-.397zm-.035-.702l.953.305zm.472-.687l.774.633zm.821-1.239l.992.134zm-.384-.928l.606-.795zm-1.457-.295l-.1.995zm-.82-.152L3 13.095zm-.47-.521l-.93.367zm0-2.926l-.93-.368zm.47-.52l-.458-.89zm.82-.153v-1h-.05l-.049.005zm0 0v1h.05l.05-.005zm1.457-.295l-.606-.795zm.385-.928l.991-.134zM4.38 7.4l.774-.632zm-.472-.687l.953-.304zm.035-.702l-.917-.397zm.538-.637l.707.707zm.894-.893l-.707-.707zm.637-.538l-.398-.918zm.702-.035l.304-.953zm.687.472l.633-.774zm1.238.821l.134-.991zm.93-.385l-.796-.606zm.294-1.456l.995.1zm.152-.82l-.889-.458zm.521-.471l.368.93zm2.926 0l.367-.93zm1.668 1.192a9.346 9.346 0 0 0-.068-.575a2.02 2.02 0 0 0-.19-.604L13.095 3c-.023-.045-.018-.061-.005.018c.015.089.028.213.051.443zm.095.95c.063.082.043.119.008-.076c-.033-.186-.06-.447-.103-.874l-1.99.199c.04.394.074.748.125 1.03c.049.27.135.625.37.933zm0 0l-1.59 1.212a2 2 0 0 0 1.857.77zm.739-.605a13.01 13.01 0 0 1-.691.545c-.163.113-.151.073-.048.06l.267 1.982c.384-.052.696-.242.922-.4c.235-.162.51-.388.816-.639zm1.016-.65a2.02 2.02 0 0 0-.561.292c-.14.1-.297.229-.455.358l1.266 1.548c.179-.146.276-.225.35-.277c.065-.047.056-.031.009-.016zm1.404.07a2 2 0 0 0-1.404-.07l.609 1.905zm.946.748a8.862 8.862 0 0 0-.417-.402a2.02 2.02 0 0 0-.53-.346l-.794 1.835c-.046-.02-.053-.036.007.017c.068.06.157.147.32.31zm.894.894l-.894-.894l-1.414 1.414l.894.894zm.748.946a2.02 2.02 0 0 0-.346-.53a9.385 9.385 0 0 0-.402-.416L18.81 6.083c.163.163.25.252.31.32c.053.06.037.053.017.007zm.07 1.404a2 2 0 0 0-.07-1.404l-1.835.795zm-.65 1.016a8.54 8.54 0 0 0 .358-.455c.106-.148.22-.332.292-.561l-1.905-.609c.015-.047.03-.056-.016.01c-.052.073-.13.17-.277.349zm-.605.739c-.013.103-.053.115.06-.048c.107-.155.273-.358.545-.69l-1.548-1.267c-.25.306-.477.581-.64.816c-.157.226-.347.538-.399.922zm0 0l-1.982-.267a2 2 0 0 0 .77 1.857zm.95.095a13.02 13.02 0 0 1-.874-.103c-.195-.035-.158-.055-.076.008l-1.212 1.59c.308.235.662.321.934.37c.281.05.635.085 1.029.125zm1.179.258a2.02 2.02 0 0 0-.604-.19a9.346 9.346 0 0 0-.575-.068l-.199 1.99a9.1 9.1 0 0 1 .443.05c.08.014.063.019.018-.004zm.943 1.043a2 2 0 0 0-.943-1.043L21 10.906zm.14 1.198c0-.204 0-.407-.011-.579a2.017 2.017 0 0 0-.13-.62L21 10.906c-.018-.047-.012-.063-.006.017c.006.09.006.215.006.446zm0 1.264v-1.264h-2v1.264zm-.14 1.198c.088-.223.117-.437.129-.62c.011-.171.011-.374.011-.578h-2c0 .231 0 .356-.006.446c-.006.08-.012.064.006.017zm-.943 1.043a2 2 0 0 0 .943-1.043L21 13.095zm-1.179.258c.204-.02.405-.04.575-.068c.18-.03.39-.08.604-.19L21 13.095c.044-.023.061-.018-.018-.005a7.673 7.673 0 0 1-.443.051zm.065-.008l-.329-1.973zm-1.014.103c-.083.063-.12.043.075.008c.186-.033.447-.06.874-.103l-.199-1.99c-.393.04-.748.074-1.029.125c-.271.049-.626.135-.934.37zm0 0l-1.213-1.59a2 2 0 0 0-.77 1.857zm.604.738a13.074 13.074 0 0 1-.545-.69c-.113-.163-.073-.151-.06-.048l-1.981.267c.052.384.241.696.399.922c.163.235.389.51.639.816zm.65 1.016a2.02 2.02 0 0 0-.292-.56c-.1-.141-.229-.297-.358-.456l-1.548 1.267c.146.179.225.275.277.349c.047.065.032.057.016.01zm-.07 1.405a2 2 0 0 0 .07-1.405l-1.905.61zm-.748.946c.145-.145.288-.287.402-.417c.12-.138.25-.309.346-.53l-1.835-.795c.02-.046.036-.052-.017.008c-.06.068-.147.156-.31.32zm-.894.893l.894-.893l-1.414-1.414l-.894.893zm-.946.749a2.02 2.02 0 0 0 .53-.347c.129-.113.272-.257.416-.402l-1.414-1.414a7.889 7.889 0 0 1-.32.31c-.06.054-.053.038-.007.018zm-1.404.07a2 2 0 0 0 1.404-.07l-.795-1.835zm-1.016-.65c.158.129.314.258.455.358c.148.105.332.219.561.292l.609-1.905c.047.015.056.03-.01-.016a7.745 7.745 0 0 1-.349-.277zm.008.006l1.25-1.561zm-.747-.61c-.103-.015-.115-.055.048.058c.155.108.358.273.69.545l1.267-1.547c-.306-.251-.581-.477-.816-.64c-.226-.158-.538-.347-.922-.399zm0 0l.267-1.983a2 2 0 0 0-1.857.77zm-.095.949c.043-.427.07-.689.103-.874c.035-.195.055-.159-.008-.076l-1.59-1.213c-.235.308-.321.663-.37.934c-.05.282-.085.636-.125 1.03zm-.259 1.179c.11-.214.16-.424.19-.604c.03-.17.049-.371.07-.575l-1.99-.2a8.292 8.292 0 0 1-.052.444c-.013.08-.018.063.005.018zm-1.041.943a2 2 0 0 0 1.041-.943L13.095 21zm-1.2.14c.205 0 .408 0 .58-.011c.182-.012.396-.04.62-.13L13.095 21c.047-.018.063-.012-.017-.006a7.77 7.77 0 0 1-.446.006zm-1.263 0h1.264v-2h-1.264zm-1.198-.14c.223.088.437.117.62.129c.171.011.374.011.578.011v-2c-.231 0-.356 0-.446-.006c-.08-.006-.064-.012-.017.006zm-1.043-.943a2 2 0 0 0 1.043.943l.735-1.86zm-.258-1.179c.02.204.04.405.068.575c.03.18.08.39.19.604l1.78-.916c.023.044.018.061.005-.018a7.668 7.668 0 0 1-.051-.443zm-.095-.95c-.063-.082-.043-.12-.008.076c.033.185.06.447.103.874l1.99-.199c-.04-.394-.074-.748-.125-1.03c-.049-.27-.135-.625-.37-.933zm0 0l1.59-1.212a2 2 0 0 0-1.857-.77zm-.739.605c.333-.272.536-.438.691-.545c.163-.113.151-.073.048-.06l-.267-1.982c-.384.052-.696.242-.922.4c-.235.162-.51.388-.816.639zm.031-.027L6.737 18.87zm-1.047.677a2.02 2.02 0 0 0 .561-.292c.14-.1.297-.229.455-.358L6.77 18.845a7.767 7.767 0 0 1-.35.277c-.065.047-.056.032-.009.016zm-1.404-.07a2 2 0 0 0 1.404.07l-.609-1.905zm-.947-.748c.145.145.288.288.418.402c.137.12.308.25.53.346l.794-1.835c.046.02.053.036-.007-.017a7.694 7.694 0 0 1-.32-.31zm-.893-.894l.894.894l1.414-1.414l-.894-.894zm-.748-.946c.095.22.226.392.346.53c.114.129.257.272.402.416l1.414-1.414a7.733 7.733 0 0 1-.31-.32c-.053-.06-.037-.053-.017-.007zm-.07-1.404a2 2 0 0 0 .07 1.404l1.835-.795zm.65-1.016a8.54 8.54 0 0 0-.358.455a2.02 2.02 0 0 0-.292.561l1.905.609c-.016.047-.03.056.016-.01c.052-.073.13-.17.277-.349zm.604-.739c.014-.103.054-.115-.059.048c-.107.155-.273.358-.545.69l1.548 1.267c.25-.306.477-.581.64-.816c.157-.226.347-.538.399-.922zm0 0l1.983.267a2 2 0 0 0-.77-1.857zm-.95-.095c.428.043.69.07.875.103c.195.035.158.055.075-.008l1.213-1.59c-.308-.235-.662-.321-.934-.37c-.281-.05-.635-.085-1.03-.125zm-1.178-.258c.214.11.424.16.604.19c.17.028.371.048.575.068l.199-1.99a7.675 7.675 0 0 1-.443-.05c-.08-.014-.063-.019-.018.004zM1.14 13.83a2 2 0 0 0 .943 1.043L3 13.095zM1 12.632c0 .204 0 .407.011.579c.012.182.04.396.13.62L3 13.094c.018.047.012.063.007-.017A7.745 7.745 0 0 1 3 12.632zm0-1.264v1.264h2v-1.264zm.14-1.199a2.02 2.02 0 0 0-.129.62c-.012.172-.011.375-.011.58h2c0-.232 0-.357.007-.447c.005-.08.011-.064-.007-.017zm.943-1.041a2 2 0 0 0-.943 1.041l1.86.736zm1.179-.26c-.204.021-.405.04-.575.07c-.18.03-.39.08-.604.19L3 10.905c-.045.023-.061.018.018.005a7.65 7.65 0 0 1 .443-.051zm.1-.004v2zm0 0v2zm.85-.09c.083-.063.12-.043-.076-.008c-.185.033-.447.06-.874.103l.2 1.99c.393-.04.747-.074 1.029-.125c.271-.049.626-.135.934-.37zm0 0l1.213 1.59a2 2 0 0 0 .769-1.857zm-.605-.739c.272.332.438.536.546.691c.113.163.073.151.059.048l1.982-.267c-.052-.384-.241-.695-.399-.922c-.163-.235-.39-.51-.64-.816zm-.65-1.017c.073.23.186.413.292.562c.1.14.229.297.358.455L5.155 6.77a7.742 7.742 0 0 1-.277-.35c-.047-.065-.031-.057-.016-.01zm.07-1.403a2 2 0 0 0-.07 1.403l1.905-.608zm.748-.947c-.145.145-.288.287-.402.417a2.02 2.02 0 0 0-.346.53l1.835.795c-.02.046-.036.053.017-.008c.06-.068.147-.156.31-.32zm.894-.893l-.894.893L5.19 6.082l.894-.893zm0 0l1.414 1.414zm.946-.749a2.02 2.02 0 0 0-.53.347a9.385 9.385 0 0 0-.416.402l1.414 1.414c.163-.164.252-.251.32-.31c.06-.054.053-.038.007-.018zm1.404-.07a2 2 0 0 0-1.404.07l.795 1.835zm1.016.65c-.158-.129-.314-.257-.455-.357a2.02 2.02 0 0 0-.561-.293L6.41 4.861c-.047-.015-.056-.03.01.016c.073.053.17.131.349.278zm.739.605c.103.014.115.054-.048-.059a13.022 13.022 0 0 1-.69-.545L6.768 5.155c.306.25.581.476.816.64c.226.157.538.346.922.398zm0 0l-.267 1.982a2 2 0 0 0 1.857-.77zm.095-.95c-.043.428-.07.69-.103.875c-.035.195-.055.158.008.075l1.59 1.213c.235-.308.321-.663.37-.934c.05-.281.086-.636.125-1.03zm.258-1.178a2.02 2.02 0 0 0-.19.604c-.028.17-.048.371-.068.575l1.99.199a9.1 9.1 0 0 1 .05-.443c.014-.08.019-.062-.004-.018zm1.043-.943a2 2 0 0 0-1.043.943L10.905 3zM11.368 1c-.204 0-.407 0-.579.011a2.02 2.02 0 0 0-.62.129L10.906 3c-.047.018-.063.012.017.007c.09-.006.215-.007.446-.007zm1.264 0h-1.264v2h1.264zm1.198.14a2.02 2.02 0 0 0-.62-.129C13.04.999 12.837 1 12.633 1v2c.231 0 .356 0 .446.007c.08.005.064.011.017-.007zm1.043.943a2 2 0 0 0-1.043-.943L13.095 3zM15 12a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5zm-3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5zm-3 3a3 3 0 0 1 3-3V7a5 5 0 0 0-5 5zm3 3a3 3 0 0 1-3-3H7a5 5 0 0 0 5 5z" />
      </svg>
    </div>

  </div>
</div>

</div>

<!--  last buttons-->
<div  class="flex flex-column gap-4 lg:mx-4 lg:gap-0">
  <NuxtLink exact-active-class="bg-white" to="/support"
       class="no-underline text-gray-500 text-base flex align-items-start justify-content-start lg:justify-content-between lg:px-4 py-2 lg:py-0 lg:border-round-xl cursor-pointer hover:bg-white"
       >
    <div class="flex align-items-start  justify-content-center  gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 lg:w-1rem  flex-shrink-0 lg:mt-3 "  viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8"/>
      </svg>
      <p class="lg:flex hidden">Support</p>
    </div>

  </NuxtLink>

  <div
       class=" text-gray-500 flex align-items-start text-base justify-content-start lg:justify-content-between lg:px-4 py-2 lg:py-0 lg:border-round-xl cursor-pointer hover:bg-white"
       :class="toggle.toggle8 === true? 'bg-white' : ''">
    <div class="flex align-items-start  justify-content-center  gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 lg:w-1rem flex-shrink-0 lg:mt-3 " viewBox="0 0 16 16">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M5.25 2.25h-3.5v12h3.5m5.5-9.5l3.5 3.5l-3.5 3.5m-5-3.5h8.5"/>
      </svg>
      <p class="lg:flex hidden">Sign Out</p>
    </div>

  </div>
</div>


</div>
</template>

<script setup>

const value1 = ref()


// click glow
const toggle = reactive({
  toggle1: false,
  toggle2: false,
  toggle3: false,
  toggle4: false,
  toggle5: false,
  toggle6: false,
  toggle7: false,
  toggle8: false
})
const groupFx = {
  one: function changCol() {
    toggle.toggle1 = !toggle.toggle1;
    toggle.toggle2 = false
    toggle.toggle3 = false
    toggle.toggle4 = false
    toggle.toggle5 = false
    toggle.toggle6 = false
    toggle.toggle7 = false
    toggle.toggle8 = false

  },
  two: function changCol() {
    toggle.toggle2 = !toggle.toggle2;
    toggle.toggle1 = false
    toggle.toggle3 = false
    toggle.toggle4 = false
    toggle.toggle5 = false
    toggle.toggle6 = false
    toggle.toggle7 = false
    toggle.toggle8 = false

  },
  three: function changCol() {
    toggle.toggle3 = !toggle.toggle3;
    toggle.toggle2 = false
    toggle.toggle1 = false
    toggle.toggle4 = false
    toggle.toggle5 = false
    toggle.toggle6 = false
    toggle.toggle7 = false
    toggle.toggle8 = false

  },
  four: function changCol() {
    toggle.toggle4 = !toggle.toggle4;
    toggle.toggle2 = false
    toggle.toggle3 = false
    toggle.toggle1 = false
    toggle.toggle5 = false
    toggle.toggle6 = false
    toggle.toggle7 = false
    toggle.toggle8 = false

  },
  five: function changCol() {
    toggle.toggle5 = !toggle.toggle5;
    toggle.toggle2 = false
    toggle.toggle3 = false
    toggle.toggle4 = false
    toggle.toggle1 = false
    toggle.toggle6 = false
    toggle.toggle7 = false
    toggle.toggle8 = false

  },
  six: function changCol() {
    toggle.toggle6 = !toggle.toggle6;
    toggle.toggle2 = false
    toggle.toggle3 = false
    toggle.toggle4 = false
    toggle.toggle5 = false
    toggle.toggle1 = false
    toggle.toggle7 = false
    toggle.toggle8 = false

  },
  seven: function changCol() {
    toggle.toggle7 = !toggle.toggle7;
    toggle.toggle2 = false
    toggle.toggle3 = false
    toggle.toggle4 = false
    toggle.toggle5 = false
    toggle.toggle6 = false
    toggle.toggle1 = false
    toggle.toggle8 = false

  },
  eight: function changCol() {
    toggle.toggle8 = !toggle.toggle8;
    toggle.toggle2 = false
    toggle.toggle3 = false
    toggle.toggle4 = false
    toggle.toggle5 = false
    toggle.toggle6 = false
    toggle.toggle7 = false
    toggle.toggle1 = false

  },


}

</script>
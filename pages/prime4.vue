<template>

  <div class=" flex  align-items-center justify-content-between mt-3 w-full px-2 md:px-4 ">
<!--    left-->
    <div class="flex flex-row align-items-center gap-0 md:gap-2 ">
    <div>
    <Button  severity="secondary" icon="pi pi-times" class="bg-white hover:bg-gray-100 border-none " />
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-2rem border-round-lg p-2 bg-white hover:bg-gray-100 cursor-pointer shadow-1	" viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.845 3.845a2.883 2.883 0 0 0 0 4.077L5.432 9.51c.012-.014.555.503.568.49l4-4c.013-.013-.504-.556-.49-.568L7.922 3.845a2.883 2.883 0 0 0-4.077 0m1.288 11.462a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.484.484 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.484.484 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.484.484 0 0 0 .272-.274z" opacity="0.5" />
      <path fill="currentColor" d="M19.967 9.13a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.485.485 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.485.485 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.485.485 0 0 0 .272-.273z" opacity="0.2" />
      <path fill="currentColor" d="M16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.482.482 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.485.485 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.485.485 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.485.485 0 0 0 .273-.274z" opacity="0.7" />
      <path fill="currentColor" d="M10.568 6.49c-.012.014-.555-.503-.568-.49l-4 4c-.013.013.504.556.49.568l9.588 9.587a2.883 2.883 0 1 0 4.078-4.077z" />
    </svg>
    <div>
      <p class="my-0 text-xs md:text-base font-semibold ">LA Product Designs</p>
      <p class="my-0 text-xs md:text-base text-gray-500 font-light ">Draft campaign</p>
    </div>
    <i class="pi pi-pencil text-gray-500 hover:text-blue-500 cursor-pointer"/>
    </div>

<!--    right-->
    <div class="md:flex hidden flex-row  align-items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
      <path fill="currentColor" d="M2 5v16h4v5.094l1.625-1.313L12.344 21H22V5zm2 2h16v12h-8.344l-.281.219L8 21.906V19H4zm20 2v2h4v12h-4v2.906L20.344 23h-7.5l-2.5 2h9.312L26 30.094V25h4V9z" />
    </svg>
    <p class="font-bold hover:underline cursor-pointer text-xs md:text-base ">Feedback</p>
    <p class="text-gray-500 text-xs md:text-sm">Draft saved 10 seconds ago</p>
    </div>
  </div>


<!--main-->
<div class=" relative ">
  <Stepper :pt="{
        nav: {class: ' w-11 md:w-9 lg:w-7  xl:w-5 m-auto '},
        root:{class: ' '},
        panelContainer:{class: ' '},
        stepperpanel:{class:'  '},
      }">
    <StepperPanel header="Header I">
      <template #header>
        <div class="flex flex-row align-items-center  cursor-pointer  px-2 py-1 border-round-3xl gap-1 text-xs md:text-base text-gray-600 "
             :class="!glowBtn.one? ' border-2 border-purple-500 bg-purple-100':''"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8 12.5l3 3l5-6" />
              <circle cx="12" cy="12" r="10" />
            </g>
          </svg>
       <p class="my-0">1. Contacts</p>
        </div>
      </template>
      <template #content="{ nextCallback }">
        <div class="flex flex-column h-12rem">
          <div class="flex flex-row  justify-content-between" >
            <div>
            <p>one</p>
            <p>one</p>
            </div>
            <div>
            <p>one</p>
            <p>one</p>
            </div>
            <div>
            <p>one</p>
            <p>one</p>
            </div>
          </div>
        </div>
        <div class="flex pt-4 justify-content-end">
          <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback(); fObj.btn2()" />
        </div>
      </template>
    </StepperPanel>
    <StepperPanel header="Header II">
      <template #header>
        <div class="flex flex-row align-items-center cursor-pointer  px-2 py-1 border-round-3xl gap-1 text-xs md:text-base  text-gray-600"
             :class="!glowBtn.two? '  border-2 border-purple-500 bg-purple-100':''"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 14L1 8l11-6l11 6zm0 4L1.575 12.325l2.1-1.15L12 15.725l8.325-4.55l2.1 1.15zm0 4L1.575 16.325l2.1-1.15L12 19.725l8.325-4.55l2.1 1.15zm0-10.275L18.825 8L12 4.275L5.175 8zM12 8" />
          </svg>
          <p class="my-0">2. Steps</p>
        </div>
      </template>
      <template #content="{ prevCallback, nextCallback }" >
        <div class=" flex justify-content-center bg-gray-100">
          <div class="flex flex-column  align-items-center md:w-8 lg:w-5 ">
        <div class="flex flex-row align-items-center text-xs lg:text-base bg-white hover:bg-purple-50 cursor-pointer p-2 border-round-3xl gap-1 w-5 md:w-4 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-purple-500" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.238 10.81l-.569 1.694a4.325 4.325 0 0 1-2.757 2.76l-1.713.569a.288.288 0 0 0 0 .548l1.713.569a4.318 4.318 0 0 1 2.736 2.738l.568 1.715a.287.287 0 0 0 .548 0l.59-1.694a4.323 4.323 0 0 1 2.735-2.738l1.714-.569a.288.288 0 0 0 0-.548l-1.692-.59a4.318 4.318 0 0 1-2.757-2.76l-.569-1.715a.289.289 0 0 0-.448-.126a.288.288 0 0 0-.099.148m-8.43-4.914l-.413 1.231a3.145 3.145 0 0 1-2.006 2.007l-1.246.414a.21.21 0 0 0 0 .398l1.246.415a3.14 3.14 0 0 1 1.99 1.99l.413 1.248a.21.21 0 0 0 .398 0l.43-1.232a3.145 3.145 0 0 1 1.99-1.99l1.245-.415a.21.21 0 0 0 0-.398l-1.23-.43A3.141 3.141 0 0 1 7.62 7.128l-.414-1.247a.21.21 0 0 0-.398.016m7.849-3.422l-.207.616a1.572 1.572 0 0 1-1.002 1.004l-.623.207a.104.104 0 0 0-.052.16a.104.104 0 0 0 .052.039l.623.207a1.57 1.57 0 0 1 .995.995l.206.624a.105.105 0 0 0 .2 0l.214-.616a1.573 1.573 0 0 1 .995-.995l.623-.207a.105.105 0 0 0 0-.2l-.615-.214a1.571 1.571 0 0 1-1.003-1.004l-.207-.624a.105.105 0 0 0-.199.008" />
          </svg>
          <p class="my-0 font-bold">When it begins...</p>
        </div>
            <div class="border-1 py-2 border-gray-400"></div>

        <Card class="mx-2 md:mx-0">
          <template #title>
            <div class=" relative flex flex-column pl-1 md:pl-4">
            <div class="flex justify-content-between">
            <div class="flex align-items-center gap-2 ">
              <div class="flex  p-1 border-round-3xl shadow-1 " >
              <svg xmlns="http://www.w3.org/2000/svg" class="text-purple-600" width="1em" height="1em" viewBox="0 0 20 20">
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4M3.5 15V5h13v10z" />
                  <path d="m17.324 4.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88M15.642 5H4.345l5.612 4.841z" />
                </g>
              </svg>
              </div>
            <p class="text-sm md:text-base  font-semibold my-0">1.Email</p>
            </div>
            <div class="flex align-items-center gap-3">
              <div class="flex text-gray-500   gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </g>
              </svg>
              <p class="text-sm md:text-base my-0 " >Day 1</p>
              </div>
                <InputSwitch v-model="checked.one" />
              <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                  <circle cx="8" cy="2.5" r=".75" />
                  <circle cx="8" cy="8" r=".75" />
                  <circle cx="8" cy="13.5" r=".75" />
                </g>
              </svg>
            </div>
            </div>
            <p class="text-sm md:text-base text-gray-500 "> Subject: <span class="text-gray-900"> Reaching out </span></p>
              <svg class="absolute cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="bottom:19%; right:100% " viewBox="0 0 24 24">
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                  <path fill="currentColor" d="M9 4.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1.5 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m6-6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M15 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M16.5 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" />
                </g>
              </svg>
            </div>

          </template>
          <template #content>
            <div class="pl-1 md:pl-4 text-xs md:text-base">
            <p class="m-0">Hay {first_name},</p>
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed</p>
            </div>
          </template>
        </Card>

              <div class="border-1 py-2 border-gray-400"></div>
            <Card  class="mx-2 md:mx-0">
              <template #title>
                <div class=" relative flex flex-column pl-1 md:pl-4">
                  <div class="flex flex-row justify-content-between">
                    <div class="flex align-items-start gap-2 ">
                      <div class="flex  p-1 border-round-3xl shadow-1 " >
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-700" width="1em" height="1em" viewBox="0 0 48 48">
                          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                            <path d="M44 24V9H4v30h20m20-5H30m9-5l5 5l-5 5" />
                            <path d="m4 9l20 15L44 9" />
                          </g>
                        </svg>
                      </div>
                      <p class="text-sm md:text-base  font-semibold my-0">2.Follow-up Email</p>
                    </div>
                    <div class="flex align-items-center gap-3">
                      <div class="flex text-gray-500  gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </g>
                        </svg>
                        <p class=" text-sm md:text-base my-0">Day 4</p>
                      </div>
                      <InputSwitch v-model="checked.two" />
                      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                          <circle cx="8" cy="2.5" r=".75" />
                          <circle cx="8" cy="8" r=".75" />
                          <circle cx="8" cy="13.5" r=".75" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="flex flex-row align-items-center md:gap-2">
                  <p class=" text-sm md:text-base text-gray-500"> Subject: <span class="text-gray-900"> Reaching out </span></p>
                    <div class="md:flex hidden text-xs border-1 py-1 px-2 border-round-3xl border-gray-200">Threaded Follow-up</div>
                  <svg class="absolute cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="bottom:19%; right:100% " viewBox="0 0 24 24">
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                      <path fill="currentColor" d="M9 4.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1.5 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m6-6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M15 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M16.5 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" />
                    </g>
                  </svg>
                  </div>
                </div>

              </template>
              <template #content>
                <div class="pl-1 md:pl-4 text-xs md:text-base">
                  <p class="m-0">Hay {first_name},</p>
                  <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed</p>
                </div>
              </template>
            </Card>
            <div class="border-1 py-2 border-gray-400"></div>
            <Card class="relative  mx-2 md:mx-0 ">
              <template #title>
                <div class="flex flex-column pl-1 md:pl-4">
                  <div class="flex justify-content-between">
                    <div class="flex align-items-center gap-2">
                      <div class="flex  p-1 border-round-3xl shadow-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-500" width="0.88em" height="1em" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </div>
                      <p class=" text-sm md:text-base  font-semibold my-0">2.Connect - Automatic</p>
                    </div>
                    <div class="flex align-items-center gap-3">
                      <div class="flex text-gray-500  gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </g>
                        </svg>
                        <p class="text-sm md:text-base my-0">Day 10</p>
                      </div>
                      <InputSwitch v-model="checked.three" />
                      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                          <circle cx="8" cy="2.5" r=".75" />
                          <circle cx="8" cy="8" r=".75" />
                          <circle cx="8" cy="13.5" r=".75" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <svg class="absolute cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="bottom:50%; right:95% " viewBox="0 0 24 24">
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                      <path fill="currentColor" d="M9 4.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1.5 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m6-6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M15 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M16.5 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" />
                    </g>
                  </svg>
                </div>

              </template>
              <template #content>
                <div class="pl-1 md:pl-4">
                  <p class="m-0 text-sm md:text-base font-bold text-gray-900 ">Connection message:</p>
                  <p class="m-0 text-xs md:text-base">Hay {first_name}, Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                </div>
              </template>
            </Card>
            <div class="border-1 py-2 border-gray-400"></div>
            <Card class=" mx-2 md:mx-0">
              <template #title>
                <div class=" relative flex flex-column pl-1 md:pl-4">
                  <div class="flex justify-content-between">
                    <div class="flex align-items-center gap-2 ">
                      <div class="flex  p-1 border-round-3xl shadow-1 " >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                          <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4M3.5 15V5h13v10z" />
                            <path d="m17.324 4.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88M15.642 5H4.345l5.612 4.841z" />
                          </g>
                        </svg>
                      </div>
                      <p class="text-sm md:text-base  font-semibold my-0">1.Email</p>
                    </div>
                    <div class="flex align-items-center gap-3">
                      <div class="flex text-gray-500 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </g>
                        </svg>
                        <p class="text-sm md:text-base my-0">Day 1</p>
                      </div>
                      <InputSwitch v-model="checked.four" />
                      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                          <circle cx="8" cy="2.5" r=".75" />
                          <circle cx="8" cy="8" r=".75" />
                          <circle cx="8" cy="13.5" r=".75" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p class="text-sm md:text-base text-gray-500"> Subject: <span class="text-gray-900"> Reaching out </span></p>
                  <svg class="absolute cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="bottom:19%; right:100% " viewBox="0 0 24 24">
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                      <path fill="currentColor" d="M9 4.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1.5 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m6-6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M15 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M16.5 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" />
                    </g>
                  </svg>
                </div>

              </template>
              <template #content>
                <div class="pl-1 md:pl-4 text-xs md:text-base ">
                  <p class="m-0">Hay {first_name},</p>
                  <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed</p>
                </div>
              </template>
            </Card>
            <div class="border-1 py-2 border-gray-400"></div>


       <div @click="openMenu()" :class="!menu? 'mb-8':'mb-2 border-1 border-purple-500'" class=" p-2 border-round-lg shadow-1 bg-white cursor-pointer ">
         <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 50 50">
           <path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15" />
           <path fill="currentColor" d="M16 24h18v2H16z" />
           <path fill="currentColor" d="M24 16h2v18h-2z" />
         </svg>
       </div>

      <div v-if="menu" class=" mb-8 flex gap-2 shadow-1 border-round-xl bg-white  w-full justify-content-around align-items-center ">
        <div class="flex flex-column align-items-center hover:bg-gray-100 cursor-pointer p-4 gap-2 ">
          <div class=" border-round-3xl shadow-1 px-2 py-1 cursor-pointer hover:bg-gray-100 ">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-purple-700" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" />
          </svg>
          </div>
          <p class="my-0 text-sm font-semibold " >Email</p>
          </div>

        <div class="flex flex-column align-items-center hover:bg-gray-100 cursor-pointer p-4 gap-2 " >
          <div  class=" border-round-3xl shadow-1 px-2 py-1  cursor-pointer hover:bg-gray-100 " >
          <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-700" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5l8-5v5h2V6c0-1.1-.9-2-2-2m-8 7L4 6h16zm7 4l4 4l-4 4v-3h-4v-2h4z" />
          </svg>
          </div>
          <p class="my-0  text-sm font-semibold ">Follow-up</p>
          </div>

        <div class="flex flex-column align-items-center hover:bg-gray-100 cursor-pointer p-4 gap-2 ">
          <div  class=" border-round-3xl shadow-1 px-2 py-1  cursor-pointer hover:bg-gray-100 " >
          <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-500" width="1.5em" height="1.5em" viewBox="0 0 32 32">
            <path fill="currentColor" d="M8.268 28H2.463V9.306h5.805zM5.362 6.756C3.506 6.756 2 5.218 2 3.362a3.362 3.362 0 0 1 6.724 0c0 1.856-1.506 3.394-3.362 3.394M29.994 28h-5.792v-9.1c0-2.169-.044-4.95-3.018-4.95c-3.018 0-3.481 2.356-3.481 4.794V28h-5.799V9.306h5.567v2.55h.081c.775-1.469 2.668-3.019 5.492-3.019c5.875 0 6.955 3.869 6.955 8.894V28z" />
          </svg>
          </div>
          <p class="my-0  text-sm font-semibold " >Linkedin</p>
        </div>

        <div  class="flex flex-column align-items-center hover:bg-gray-100 cursor-pointer p-4 gap-2 ">
          <div  class=" border-round-3xl shadow-1 px-2 py-1  cursor-pointer hover:bg-gray-100  ">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-500" width="1.5em" height="1.5em" viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76c-24.3-12.24-26.3-13.24-45.4.95c-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39s-47.34-61.62-50.53-76.48s5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3c-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160 160 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64s54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159 159 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374Z" />
          </svg>
          </div>
          <p class="my-0  text-sm font-semibold " >Call</p>
        </div>

        <div  class="flex flex-column align-items-center hover:bg-gray-100 cursor-pointer p-4 gap-2 ">
          <div  class=" border-round-3xl shadow-1 px-2 py-1  cursor-pointer hover:bg-gray-100 ">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600" width="1.5em" height="1.5em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22 5.18L10.59 16.6l-4.24-4.24l1.41-1.41l2.83 2.83l10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44A9.9 9.9 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z" />
        </svg>
          </div>
          <p class="my-0  text-sm font-semibold " >Task</p>
          </div>

      </div>

<!--            card2-->
       <div class="mb-8 flex flex-column  shadow-1 border-round-xl bg-white  w-full ">
<!--        envalop-->
         <div class="flex flex-row justify-content-between w-full px-3 ">
           <div class="flex align-items-center gap-2">
             <div class="flex  p-1 border-round-3xl shadow-1 " >
               <svg xmlns="http://www.w3.org/2000/svg" class="text-purple-600" width="1em" height="1em" viewBox="0 0 20 20">
                 <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                   <path d="M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4M3.5 15V5h13v10z" />
                   <path d="m17.324 4.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88M15.642 5H4.345l5.612 4.841z" />
                 </g>
               </svg>
             </div>
             <p class="font-bold">Send Automatic Email</p>
           </div>
           <p class="text-gray-600">x</p>
         </div>
<!--          subject-->
         <div class="flex justify-content-between shadow-1 px-3 text-xs">
         <div>
           <p class="text-gray-500 font-semibold" >
           Subject: <span class="font-bold text-gray-900">Reaching out</span>
           </p>
         </div>

         <div class="flex font-bold gap-1 text-xs text-gray-900" >
           <p>{ }</p>
           <p>CC</p>
           <p>BCC</p>
         </div>

         </div>
<!--buttons-->
         <div class="flex gap-2 shadow-1 px-3">
           <div class="flex my-2 p-2 align-items-center gap-1 shadow-1 border-round-md text-xs font-bold ">
             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
               <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 20c-3.2 0-4-2.667-4-4H3v2a2 2 0 0 0 2 2zm0 0a3 3 0 0 0 3-3v-7m0-6H7a2 2 0 0 0-2 2v10M18 4h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1m0-6v6" />
             </svg>
             <p class="my-0 text-gray-900">Templates</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
               <g fill="none" fill-rule="evenodd">
                 <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                 <path fill="currentColor" d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z" />
               </g>
             </svg>
           </div>
           <div class="flex my-2 p-2 align-items-center gap-1 shadow-1 border-round-md  text-xs font-bold ">
              <p class="my-0">{ }</p>
             <p class="my-0 text-gray-900">Templates</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
               <g fill="none" fill-rule="evenodd">
                 <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                 <path fill="currentColor" d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z" />
               </g>
             </svg>
           </div>
         </div>
<!--         mail-->
        <div class="flex flex-column  text-xs font-semibold px-3">
  <p>Hay <span class="bg-purple-100">{first_name}</span></p>
  <p class="w-8">I noticed <span class="bg-purple-100">{company}</span>  is growing really fast in the <span class="bg-purple-100">{industry}</span>  space, and so i wanted to reach out</p>
  <p class="w-9">Our tools helps you grow faster by letting you export leads from Linkedin and reach out automatically.</p>
  <p>Intrested?</p>
</div>
<!--         text editor-->
 <div>
   

 </div>


       </div>

          </div>

        </div>

        <div class="flex py-3 justify-content-between bg-white fixed px-3 " style="bottom:0%; right:0%; left:0% ">
          <Button label="Back" severity="secondary" class=" bg-white shadow-1 hover:bg-gray-100 "   icon="pi pi-arrow-left" @click="prevCallback(); fObj.btn1()" >
            <i class="pi pi-angle-left" ></i>
            <p class="my-0 md:mx-5 text-xs md:text-base">Previous</p>
          </Button>
          <div class="flex align-items-center gap-2">
            <p class=" md:flex hidden  text-xs  font-semibold my-0">Your Campaign will be sent to</p>
            <div class=" flex align-items-center gap-2 text-xs border-1 py-1 px-2 border-round-3xl border-purple-600 hover:bg-purple-200 bg-purple-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20">
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
                  <path d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.469 3.469 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0" />
                  <path d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5" />
                  <path d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
                </g>
              </svg>
              <p class="my-0 font-semibold">24 Contacts</p></div>

          </div>
          <Button label="Next"  icon="pi pi-angle-right" iconPos="right" class="bg-purple-600 border-none hover:bg-purple-700" @click="nextCallback(); fObj.btn3()" >

            <p class="my-0  md:mx-5 text-xs md:text-base">Next</p>
            <i class="pi pi-angle-right" ></i>
          </Button>
        </div>
      </template>
    </StepperPanel>
    <StepperPanel header="Header III">
      <template #header>
        <div class="flex flex-row align-items-center   cursor-pointer  px-2 py-1 border-round-3xl gap-1 text-xs md:text-base text-gray-600"
             :class="!glowBtn.three? '  border-2 border-purple-500 bg-purple-100':''"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2" />
          </svg>
          <p class="my-0">3. Settings</p>
        </div>
      </template>
      <template #content="{ prevCallback, nextCallback }">
        <div class="flex flex-column h-12rem">
          <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
        </div>
        <div class="flex pt-4 justify-content-between">
          <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback();  fObj.btn2()" />
          <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback();  fObj.btn4()" />
        </div>
      </template>
    </StepperPanel>
    <StepperPanel header="Header IV">
      <template #header>
        <div class="flex flex-row align-items-center   cursor-pointer px-2 py-1 border-round-3xl gap-1 text-xs md:text-base text-gray-600"
        :class="!glowBtn.four? '  border-2 border-purple-500 bg-purple-100':''"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
            <path fill="currentColor" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32" />
          </svg>
          <p class="my-0">4. Overview</p>
        </div>
      </template>
      <template #content="{ prevCallback }">
        <div class="flex flex-column h-12rem">
          <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
        </div>
        <div class="flex pt-4 justify-content-start">
          <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback();  fObj.btn3()" />
        </div>
      </template>
    </StepperPanel>
  </Stepper>
  <Button label="Secondary" severity="secondary" class="lg:flex hidden gap-2 absolute px-2 shadow-1 " style="bottom: 95%; right:2%" text>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
      <path fill="currentColor" d="M234.49 111.07L90.41 22.94A20 20 0 0 0 60 39.87v176.26a20 20 0 0 0 30.41 16.93l144.08-88.13a19.82 19.82 0 0 0 0-33.86M84 208.85V47.15L216.16 128Z" />
    </svg>
   <p class="my-0 font-bold" > Tutorial </p>
  </Button>

</div>

</template>

<script setup>
const glowBtn = reactive ({
  one:false,
  two:true,
  three:true,
  four:true
})

const fObj = {
  btn1: function changeCol() {
    glowBtn.one = !glowBtn.one
    glowBtn.two = true
    glowBtn.three = true
    glowBtn.four = true
  },
  btn2: function changeCol() {
    glowBtn.two = !glowBtn.two
    glowBtn.one = true
    glowBtn.three = true
    glowBtn.four = true
  },
  btn3: function changeCol() {
    glowBtn.three = !glowBtn.three
    glowBtn.two = true
    glowBtn.one = true
    glowBtn.four = true
  },
  btn4: function changeCol() {
    glowBtn.four = !glowBtn.four
    glowBtn.two = true
    glowBtn.three = true
    glowBtn.one = true
  },
}




const checked = reactive({
  one:false,
  two:false,
  three:false,
  four:false,
});

const menu = ref(false)
function openMenu(){
  menu.value = !menu.value
  console.log(menu.value)
}

</script>

<style scoped>

</style>
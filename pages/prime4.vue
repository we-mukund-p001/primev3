<template>

  <div class=" flex  align-items-center justify-content-between  w-full px-4 ">
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


<!--main-->
<div class=" relative ">
  <Stepper :pt="{
        nav: {class: 'w-5 m-auto '},
        root:{class: ' '},
        panelContainer:{class: '  '},
        stepperpanel:{class:'  '},


      }">
    <StepperPanel header="Header I">
      <template #header>
        <div class="flex flex-row align-items-center border-1 border-white hover:border-black-alpha-90 hover:bg-purple-100 cursor-pointer  p-2 border-round-3xl gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8 12.5l3 3l5-6" />
              <circle cx="12" cy="12" r="10" />
            </g>
          </svg>
       <p class="my-0">1.Contacts</p>
        </div>
      </template>
      <template #content="{ nextCallback }">
        <div class="flex flex-column h-12rem">
          <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
        </div>
        <div class="flex pt-4 justify-content-end">
          <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
        </div>
      </template>
    </StepperPanel>
    <StepperPanel header="Header II">
      <template #header>
        <div class="flex flex-row align-items-center border-1 border-white hover:border-black-alpha-90 hover:bg-purple-100 cursor-pointer  p-2 border-round-3xl gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 14L1 8l11-6l11 6zm0 4L1.575 12.325l2.1-1.15L12 15.725l8.325-4.55l2.1 1.15zm0 4L1.575 16.325l2.1-1.15L12 19.725l8.325-4.55l2.1 1.15zm0-10.275L18.825 8L12 4.275L5.175 8zM12 8" />
          </svg>
          <p class="my-0">2.Steps</p>
        </div>
      </template>
      <template #content="{ prevCallback, nextCallback }" >
        <div class="  flex justify-content-center bg-gray-100">
          <div class="flex flex-column  align-items-center w-5 ">
        <div class="flex flex-row align-items-center border-white hover:border-black-alpha-90 bg-white cursor-pointer  p-2 border-round-3xl gap-1 w-4 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-purple-500" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.238 10.81l-.569 1.694a4.325 4.325 0 0 1-2.757 2.76l-1.713.569a.288.288 0 0 0 0 .548l1.713.569a4.318 4.318 0 0 1 2.736 2.738l.568 1.715a.287.287 0 0 0 .548 0l.59-1.694a4.323 4.323 0 0 1 2.735-2.738l1.714-.569a.288.288 0 0 0 0-.548l-1.692-.59a4.318 4.318 0 0 1-2.757-2.76l-.569-1.715a.289.289 0 0 0-.448-.126a.288.288 0 0 0-.099.148m-8.43-4.914l-.413 1.231a3.145 3.145 0 0 1-2.006 2.007l-1.246.414a.21.21 0 0 0 0 .398l1.246.415a3.14 3.14 0 0 1 1.99 1.99l.413 1.248a.21.21 0 0 0 .398 0l.43-1.232a3.145 3.145 0 0 1 1.99-1.99l1.245-.415a.21.21 0 0 0 0-.398l-1.23-.43A3.141 3.141 0 0 1 7.62 7.128l-.414-1.247a.21.21 0 0 0-.398.016m7.849-3.422l-.207.616a1.572 1.572 0 0 1-1.002 1.004l-.623.207a.104.104 0 0 0-.052.16a.104.104 0 0 0 .052.039l.623.207a1.57 1.57 0 0 1 .995.995l.206.624a.105.105 0 0 0 .2 0l.214-.616a1.573 1.573 0 0 1 .995-.995l.623-.207a.105.105 0 0 0 0-.2l-.615-.214a1.571 1.571 0 0 1-1.003-1.004l-.207-.624a.105.105 0 0 0-.199.008" />
          </svg>
          <p class="my-0 font-bold">When it begins...</p>
        </div>
            <div class="border-1 py-2 border-gray-400"></div>

        <Card>
          <template #title>
            <div class=" relative flex flex-column pl-4">
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
            <p class="text-base  font-semibold my-0">1.Email</p>
            </div>
            <div class="flex align-items-center gap-3">
              <div class="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </g>
              </svg>
              <p class="text-base my-0">Day 1</p>
              </div>
                <InputSwitch v-model="checked" />
              <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                  <circle cx="8" cy="2.5" r=".75" />
                  <circle cx="8" cy="8" r=".75" />
                  <circle cx="8" cy="13.5" r=".75" />
                </g>
              </svg>
            </div>
            </div>
            <p class="text-base text-gray-500 "> Subject: <span class="text-gray-900"> Reaching out </span></p>
              <svg class="absolute" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="bottom:19%; right:100% " viewBox="0 0 24 24">
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                  <path fill="currentColor" d="M9 4.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1.5 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m6-6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M15 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M16.5 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" />
                </g>
              </svg>
            </div>

          </template>
          <template #content>
            <div class="pl-4">
            <p class="m-0">Hay {first_name},</p>
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed</p>
            </div>
          </template>
        </Card>

              <div class="border-1 py-2 border-gray-400"></div>
            <Card>
              <template #title>
                <div class=" relative flex flex-column pl-4">
                  <div class="flex justify-content-between">
                    <div class="flex align-items-center gap-2 ">
                      <div class="flex  p-1 border-round-3xl shadow-1 " >
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-700" width="1em" height="1em" viewBox="0 0 48 48">
                          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                            <path d="M44 24V9H4v30h20m20-5H30m9-5l5 5l-5 5" />
                            <path d="m4 9l20 15L44 9" />
                          </g>
                        </svg>
                      </div>
                      <p class="text-base  font-semibold my-0">2.Follow-up-Email</p>
                    </div>
                    <div class="flex align-items-center gap-3">
                      <div class="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </g>
                        </svg>
                        <p class="text-base my-0">Day 4</p>
                      </div>
                      <InputSwitch v-model="checked" />
                      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                          <circle cx="8" cy="2.5" r=".75" />
                          <circle cx="8" cy="8" r=".75" />
                          <circle cx="8" cy="13.5" r=".75" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="flex flex-row align-items-center gap-2">
                  <p class="text-base text-gray-500"> Subject: <span class="text-gray-900"> Reaching out </span></p>
                    <div class=" text-xs border-1 py-1 px-2 border-round-3xl border-gray-200">Threaded Follow-up</div>
                  <svg class="absolute" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="bottom:19%; right:100% " viewBox="0 0 24 24">
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                      <path fill="currentColor" d="M9 4.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1.5 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m6-6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M15 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M16.5 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" />
                    </g>
                  </svg>
                  </div>
                </div>

              </template>
              <template #content>
                <div class="pl-4">
                  <p class="m-0">Hay {first_name},</p>
                  <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed</p>
                </div>
              </template>
            </Card>
            <div class="border-1 py-2 border-gray-400"></div>
            <Card class="relative">
              <template #title>
                <div class="  flex flex-column pl-4">
                  <div class="flex justify-content-between">
                    <div class="flex align-items-center gap-2">
                      <div class="flex  p-1 border-round-3xl shadow-1 " >
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-500" width="0.88em" height="1em" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </div>
                      <p class="text-base  font-semibold my-0">2.Connect - Automatic</p>
                    </div>
                    <div class="flex align-items-center gap-3">
                      <div class="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </g>
                        </svg>
                        <p class="text-base my-0">Day 10</p>
                      </div>
                      <InputSwitch v-model="checked" />
                      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                          <circle cx="8" cy="2.5" r=".75" />
                          <circle cx="8" cy="8" r=".75" />
                          <circle cx="8" cy="13.5" r=".75" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <svg class="absolute" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="bottom:50%; right:97% " viewBox="0 0 24 24">
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                      <path fill="currentColor" d="M9 4.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1.5 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m6-6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M15 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M16.5 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" />
                    </g>
                  </svg>
                </div>

              </template>
              <template #content>
                <div class="pl-4">
                  <p class="m-0 font-bold text-gray-900">Connection message:</p>
                  <p class="m-0">Hay {first_name}, Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                </div>
              </template>
            </Card>
            <div class="border-1 py-2 border-gray-400"></div>
            <Card>
              <template #title>
                <div class=" relative flex flex-column pl-4">
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
                      <p class="text-base  font-semibold my-0">1.Email</p>
                    </div>
                    <div class="flex align-items-center gap-3">
                      <div class="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </g>
                        </svg>
                        <p class="text-base my-0">Day 1</p>
                      </div>
                      <InputSwitch v-model="checked" />
                      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                          <circle cx="8" cy="2.5" r=".75" />
                          <circle cx="8" cy="8" r=".75" />
                          <circle cx="8" cy="13.5" r=".75" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p class="text-base text-gray-500"> Subject: <span class="text-gray-900"> Reaching out </span></p>
                  <svg class="absolute" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="bottom:19%; right:100% " viewBox="0 0 24 24">
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                      <path fill="currentColor" d="M9 4.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1.5 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m6-6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M15 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M16.5 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" />
                    </g>
                  </svg>
                </div>

              </template>
              <template #content>
                <div class="pl-4">
                  <p class="m-0">Hay {first_name},</p>
                  <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed</p>
                </div>
              </template>
            </Card>

          </div>

        </div>

        <div class="flex pt-4 justify-content-between fixed ">
          <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" >
            <i class="pi pi-angle-left" ></i>
            <p class="my-0 mx-5">Previous</p>

          </Button>
          <div class="flex align-items-center gap-2">
            <p class="text-sm font-semibold my-0">Your Campaign will be sent to</p>
            <div class=" flex align-items-center gap-2 text-xs border-1 py-1 px-2 border-round-3xl border-purple-600 bg-purple-100">
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
          <Button label="Next"  icon="pi pi-angle-right" iconPos="right" @click="nextCallback" >

            <p class="my-0 mx-5">Next</p>
            <i class="pi pi-angle-right" ></i>
          </Button>
        </div>
      </template>
    </StepperPanel>
    <StepperPanel header="Header III">
      <template #header>
        <div class="flex flex-row align-items-center border-1 border-white hover:border-black-alpha-90 hover:bg-purple-100 cursor-pointer  p-2 border-round-3xl gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2" />
          </svg>
          <p class="my-0">3.Settings</p>
        </div>
      </template>
      <template #content="{ prevCallback, nextCallback }">
        <div class="flex flex-column h-12rem">
          <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
        </div>
        <div class="flex pt-4 justify-content-between">
          <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
          <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
        </div>
      </template>
    </StepperPanel>
    <StepperPanel header="Header IV">
      <template #header>
        <div class="flex flex-row align-items-center border-1 border-white hover:border-black-alpha-90 hover:bg-purple-100 cursor-pointer  p-2 border-round-3xl gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256">
            <path fill="currentColor" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32" />
          </svg>
          <p class="my-0">1.Contacts</p>
        </div>
      </template>
      <template #content="{ prevCallback }">
        <div class="flex flex-column h-12rem">
          <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
        </div>
        <div class="flex pt-4 justify-content-start">
          <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
        </div>
      </template>
    </StepperPanel>
  </Stepper>
  <Button label="Secondary" severity="secondary" class="flex gap-2 absolute" style="bottom: 95%; right:2%" text raised>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
      <path fill="currentColor" d="M234.49 111.07L90.41 22.94A20 20 0 0 0 60 39.87v176.26a20 20 0 0 0 30.41 16.93l144.08-88.13a19.82 19.82 0 0 0 0-33.86M84 208.85V47.15L216.16 128Z" />
    </svg>
    Tutorial
  </Button>

</div>

</template>

<script setup>
const glowBtn = reactive ({
  one:true,
  two:true,
  three:true,
  four:true
})




const checked = ref(false);


</script>

<style scoped>

</style>
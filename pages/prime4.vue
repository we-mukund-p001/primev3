<template>

  <div class=" flex  align-items-center justify-content-between mt-3 w-full px-2 md:px-4 relative ">
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


    <Button label="Secondary" severity="secondary" class="lg:flex hidden gap-2 absolute px-2 shadow-1" style="bottom: -75%; right:2%" text>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
        <path fill="currentColor" d="M234.49 111.07L90.41 22.94A20 20 0 0 0 60 39.87v176.26a20 20 0 0 0 30.41 16.93l144.08-88.13a19.82 19.82 0 0 0 0-33.86M84 208.85V47.15L216.16 128Z" />
      </svg>
      <p class="my-0 font-bold" > Tutorial </p>
    </Button>
  </div>


<!--main-->
<div class="  ">
  <Stepper :pt="{
        nav: {class: ' w-12 md:w-9 lg:w-7  xl:w-5 m-auto   '},
        root:{class: ' '},
        panelContainer:{class: ' '},
        stepperpanel:{class:'  '},
      }">
    <StepperPanel header="Header I">
      <template #header>
        <div class="flex flex-row align-items-center  cursor-pointer md:px-2 px-1 py-1 border-round-3xl gap-1 text-xs lg:text-base text-gray-600 "
             :class="!glowBtn.one? ' border-2 border-purple-500 bg-purple-100':''"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class=""  width="1em" height="1em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8 12.5l3 3l5-6" />
              <circle cx="12" cy="12" r="10" />
            </g>
          </svg>
       <p class="my-0">1.Contacts</p>
        </div>
      </template>
      <template #content="{ nextCallback }">
        <div class="flex flex-column">
          <div class="w-full flex flex-column align-items-center relative h-screen	 gap-3">
            <div class="flex flex-column align-items-start w-11 md:w-9  lg:w-7 xl:w-6  gap-1">
              <p class="my-0 text-lg md:text-xl font-semibold">Select contacts</p>
            <p class="my-0 text-xs md:text-sm text-gray-400 ">Preview a list of contacts that will be in your campaign</p>
            </div>
          <Card class=" w-11 md:w-9  lg:w-7 xl:w-6 " :pt="{
                  body:{class:'px-3 pb-3 pt-1'}
                }"  >
            <template #title>
              <div class="flex flex-row text-sm align-items-center border-bottom-1 gap-3 border-gray-200">
                <TriStateCheckbox v-model="checkBox.six" />
                <p>Select 4 contacts</p>
              </div>
            </template>
            <template #content>
              <div class="flex md:flex-row flex-column gap-6 md:gap-0 justify-content-between">
                <div class="flex flex-column justify-content-between gap-3">
                  <!--       1-->
                  <div  class="flex flex-row align-items-center text-xs xl:text-sm gap-3">
                    <Checkbox v-model="checkBox.one" :binary="true" />
                    <div class="flex   flex-wrap  flex-row justify-content-center align-items-center gap-2">

                      <Avatar image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" class=" mr-1 cursor-pointer xl:w-3rem xl:h-3rem" shape="circle"/>

                      <div class="flex flex-column gap-1">
                        <p class="font-semibold my-0">Leslie Alexander</p>
                        <p class="my-0 font-normal text-gray-400">Product Designer</p>
                      </div>


                    </div>
                  </div>
                  <div  class="flex flex-row align-items-center text-xs xl:text-sm  gap-3">
                    <Checkbox v-model="checkBox.two" :binary="true" />
                    <div class="flex   flex-wrap flex-row justify-content-center align-items-center gap-2">

                      <Avatar image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" class="xl:w-3rem xl:h-3rem mr-1 cursor-pointer" shape="circle"/>

                      <div class="flex flex-column gap-1">
                        <p class="font-semibold my-0">Mark Henricks</p>
                        <p class="my-0 font-normal text-gray-400">Product Designer</p>
                      </div>


                    </div>
                  </div>
                  <div  class="flex flex-row align-items-center text-xs xl:text-sm  gap-3">
                    <Checkbox v-model="checkBox.three" :binary="true" />
                    <div class="flex   flex-wrap   flex-row  justify-content-center align-items-center gap-2">

                      <Avatar image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" class="xl:w-3rem xl:h-3rem mr-1 cursor-pointer" shape="circle"/>

                      <div class="flex flex-column gap-1">
                        <p class="font-semibold my-0">Ersad Basbag</p>
                        <p class="my-0 font-normal text-gray-400">Senior Product Designer</p>
                      </div>


                    </div>
                  </div>
                  <div  class="flex flex-row align-items-center text-xs xl:text-sm  gap-3">
                    <Checkbox v-model="checkBox.four" :binary="true" />
                    <div class="flex   flex-wrap   flex-row  justify-content-center align-items-center gap-2">

                      <Avatar image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" class="xl:w-3rem xl:h-3rem mr-1 cursor-pointer" size="" shape="circle"/>

                      <div class="flex flex-column gap-1">
                        <p class="font-semibold my-0">Cody Fisher</p>
                        <p class="my-0 font-normal text-gray-400">Product Designer</p>
                      </div>


                    </div>
                  </div>
                  <div  class="flex flex-row align-items-center text-xs xl:text-sm  gap-3">
                    <Checkbox v-model="checkBox.five" :binary="true" />
                    <div class="flex   flex-wrap   flex-row  justify-content-center align-items-center gap-2">

                      <Avatar image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png" class="xl:w-3rem xl:h-3rem mr-1 cursor-pointer" size="" shape="circle"/>

                      <div class="flex flex-column gap-1">
                        <p class="font-semibold my-0">Dianne Russel</p>
                        <p class="my-0 font-normal text-gray-400">Motion designer</p>
                      </div>


                    </div>
                  </div>


                </div>
                <div class="flex flex-column justify-content-between gap-3 pl-5 md:pl-0  ">
                  <!--       2-->
                  <div  class="flex flex-row text-xs xl:text-sm ">

                    <div class="flex   flex-wrap   flex-row  justify-content-center align-items-center gap-2">

                      <Avatar class="xl:w-3rem xl:h-3rem mr-1 text-gray-900 bg-white shadow-1 cursor-pointer overflow-hidden"  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16">
                          <defs>
                            <path id="biApple0" d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258s.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854s-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116c-.508.139-1.653.589-1.968.607c-.316.018-1.256-.522-2.267-.665c-.647-.125-1.333.131-1.824.328c-.49.196-1.422.754-2.074 2.237c-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472c.357.013 1.061.154 1.782.539c.571.197 1.111.115 1.652-.105c.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                          </defs>
                          <g fill="currentColor">
                            <use href="#biApple0" />
                            <use href="#biApple0" />
                          </g>
                        </svg>
                      </Avatar>
                      <div class="flex flex-column gap-1">
                        <p class="font-semibold my-0">Apple</p>
                        <p class="my-0 font-normal hover:underline cursor-pointer text-purple-700">apple.com</p>
                      </div>


                    </div>
                  </div>
                  <div  class="flex flex-row text-xs xl:text-sm ">

                    <div class="flex   flex-wrap   flex-row  justify-content-center align-items-center gap-2">

                      <Avatar class="xl:w-3rem xl:h-3rem mr-1 text-gray-900 bg-white shadow-1 cursor-pointer overflow-hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="currentColor" d="m12.169 10.306l1.111-1.937l3.774-.242l.132-.236l-3.488-.242l.82-1.414h6.47c1.99 0 3.46.715 2.887 2.8c-.17.638-.979 2.233-3.356 2.899c.507.06 1.76.616 1.54 2.057c-.384 2.558-3.69 3.774-5.533 3.774l-7.641.006l-.38-1.48l4.005-.28l.137-.237l-4.346-.264l-.467-1.755l6.178-.363l.137-.231l-11.096-.693l.534-.925l11.948-.775l.138-.231zm5 .385l1.1-.006c.738-.005 1.502-.34 1.783-1.018c.259-.632-.088-1.171-.55-1.166h-1.067zm-1.27 2.195l-1.326 2.305h1.265c.589 0 1.64-.292 1.964-1.128c.302-.781-.253-1.177-.638-1.177zM6.26 16.445l-.77 1.315l-5.49.01l.534-.923zm.385-10.216l4.417.006l.336 1.248l-5.276-.33zm5 2.245l.484 1.832l-7.542-.495l.528-.92zm-3.84 5.281l-.957 1.661l-5.32-.302l.534-.924z" />
                        </svg>
                      </Avatar>
                      <div class="flex flex-column gap-1">
                        <p class="font-semibold my-0">Nothat</p>
                        <p class="my-0 font-normal  hover:underline cursor-pointer text-purple-700">Nothat.com</p>
                      </div>


                    </div>
                  </div>
                  <div  class="flex flex-row text-xs xl:text-sm ">

                    <div class="flex   flex-wrap   flex-row  justify-content-center align-items-center gap-2">

                      <Avatar class="xl:w-3rem xl:h-3rem mr-1 text-white bg-gray-900 shadow-1 cursor-pointer overflow-hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88z" />
                        </svg>
                      </Avatar>
                      <div class="flex flex-column gap-1">
                        <p class="font-semibold my-0">Creathive</p>
                        <p class="my-0 font-normal  hover:underline cursor-pointer text-purple-700">creathive.com</p>
                      </div>


                    </div>
                  </div>
                  <div  class="flex flex-row text-xs xl:text-sm ">

                    <div class="flex   flex-wrap   flex-row  justify-content-center align-items-center gap-2">

                      <Avatar class="xl:w-3rem xl:h-3rem mr-1 text-gray-900 bg-white shadow-1 cursor-pointer overflow-hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M24 7.8L6.442 15.276q-2.184.925-3.668.925q-1.68 0-2.437-1.177q-.475-.756-.28-1.918q.196-1.162 1.036-2.478q.7-1.065 2.297-2.8a6.1 6.1 0 0 0-.784 1.848q-.42 1.792.756 2.632q.56.392 1.54.392q.783 0 1.764-.252z" />
                        </svg>
                      </Avatar>
                      <div class="flex flex-column gap-1">
                        <p class="font-semibold my-0">Nike</p>
                        <p class="my-0 font-normal hover:underline cursor-pointer text-purple-700">nike.com</p>
                      </div>


                    </div>
                  </div>
                  <div  class="flex flex-row text-xs xl:text-sm ">

                    <div class="flex   flex-wrap   flex-row  justify-content-center align-items-center gap-2">

                      <Avatar class="xl:w-3rem xl:h-3rem mr-1 text-gray-900 bg-white shadow-1 cursor-pointer overflow-hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M8.55 9.888c.921 0 1.658.23 2.221.742c.385.349.6.846.594 1.367a1.9 1.9 0 0 1-.594 1.373c-.527.484-1.348.742-2.22.742s-1.68-.258-2.215-.742a1.8 1.8 0 0 1-.603-1.373c0-.518.218-1.015.603-1.367c.5-.454 1.384-.742 2.214-.742m.003 3.67c.461 0 .888-.161 1.188-.458c.3-.3.433-.66.433-1.103c0-.424-.148-.821-.433-1.103c-.294-.29-.733-.454-1.188-.454s-.893.163-1.19.454c-.285.282-.434.679-.434 1.103a1.56 1.56 0 0 0 .434 1.103c.297.294.733.457 1.19.457M3.712 11.59q.24.061.466.163a1.4 1.4 0 0 1 .379.258c.197.206.309.482.306.767a.96.96 0 0 1-.379.778a2.1 2.1 0 0 1-.709.349a3.7 3.7 0 0 1-1.194.17c-.352 0-.546-.041-.813-.097l-.077-.016a4.7 4.7 0 0 1-.858-.278a.07.07 0 0 0-.042-.012a.084.084 0 0 0-.082.084v.203H.121v-1.478h.524a.76.76 0 0 0 .137.418c.212.26.44.36.657.44c.367.12.752.184 1.136.196c.553 0 .876-.134.946-.163l.009-.004l.006-.002c.062-.023.312-.114.312-.392c0-.274-.234-.334-.387-.373l-.022-.005c-.17-.046-.562-.088-.99-.133l-.152-.016a14 14 0 0 1-1.197-.175c-.498-.11-.694-.292-.816-.405l-.008-.008a1.02 1.02 0 0 1-.276-.7c0-.496.34-.796.758-.98a3.6 3.6 0 0 1 1.439-.289c.82.003 1.487.27 1.727.394c.097.052.145-.012.145-.06v-.149h.527v1.288h-.472a.9.9 0 0 0-.294-.491a1.3 1.3 0 0 0-.297-.179a3.1 3.1 0 0 0-1.251-.245c-.443 0-.867.085-1.08.215q-.199.124-.2.306c0 .173.146.242.22.263c.196.06.632.103.971.137l.204.021c.327.033 1.012.124 1.315.2m18.167-.997v-.479H24v.47h-.476c-.172 0-.242.033-.372.179l-1.427 1.63a.1.1 0 0 0-.019.07v.742a1 1 0 0 0 .012.103a.15.15 0 0 0 .1.09a1 1 0 0 0 .13.01h.486v.47H19.86v-.47h.46a1 1 0 0 0 .13-.01a.16.16 0 0 0 .104-.09a1 1 0 0 0 .009-.1v-.742c0-.025 0-.025-.033-.064L19.119 10.8c-.076-.079-.206-.206-.406-.206h-.458v-.47h2.588v.47h-.312c-.07 0-.118.07-.058.146l.879 1.051c.009.012.015.012.027.003s.894-1.045.9-1.054a.09.09 0 0 0-.018-.128a.1.1 0 0 0-.06-.018zm-6.284-.003h.485c.221 0 .26.085.263.291l.028 1.566l-2.582-2.324h-1.845v.47h.412c.297 0 .318.164.318.31v2.213c0 .128.001.295-.182.295h-.506v.467h2.164v-.47h-.528c-.212 0-.22-.097-.224-.303v-1.882l2.973 2.651h.757l-.04-2.996c.004-.218.019-.291.243-.291h.473v-.47h-2.209Z" />
                        </svg>
                      </Avatar>
                      <div class="flex flex-column gap-1">
                        <p class="font-semibold my-0">Sony Entertainment</p>
                        <p class="my-0 font-normal hover:underline cursor-pointer text-purple-700">sony.com</p>
                      </div>


                    </div>
                  </div>

                </div>
                <div class="md:flex hidden flex-column justify-content-between gap-3  ">
                  <!--       3-->
                  <div  class="flex flex-row align-items-center text-gray-400 justify-content-end gap-2 ">
                    <div   class="flex p-0 xl:p-1 border-round-3xl shadow-1 cursor-pointer hover:bg-gray-100  "  >
                      <svg xmlns="http://www.w3.org/2000/svg" class=" p-1 xl:p-0" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M5.733 2.043c1.217-1.21 3.221-.995 4.24.367l1.262 1.684c.83 1.108.756 2.656-.229 3.635l-.238.238a.653.653 0 0 0-.008.306c.063.408.404 1.272 1.832 2.692c1.428 1.42 2.298 1.76 2.712 1.824a.668.668 0 0 0 .315-.009l.408-.406c.876-.87 2.22-1.033 3.304-.444l1.91 1.04c1.637.888 2.05 3.112.71 4.445l-1.421 1.412c-.448.445-1.05.816-1.784.885c-1.81.169-6.027-.047-10.46-4.454c-4.137-4.114-4.931-7.702-5.032-9.47l.749-.042l-.749.042c-.05-.894.372-1.65.91-2.184zm3.04 1.266c-.507-.677-1.451-.731-1.983-.202l-1.57 1.56c-.33.328-.488.69-.468 1.036c.08 1.405.72 4.642 4.592 8.492c4.062 4.038 7.813 4.159 9.263 4.023c.296-.027.59-.181.865-.454l1.42-1.413c.578-.574.451-1.62-.367-2.064l-1.91-1.039c-.528-.286-1.146-.192-1.53.19l-.455.453l-.53-.532c.53.532.529.533.528.533l-.001.002l-.003.003l-.007.006l-.015.014a1.11 1.11 0 0 1-.136.106c-.08.053-.186.112-.319.161c-.27.101-.628.155-1.07.087c-.867-.133-2.016-.724-3.543-2.242c-1.526-1.518-2.122-2.66-2.256-3.526c-.069-.442-.014-.8.088-1.07a1.527 1.527 0 0 1 .238-.42l.032-.035l.014-.015l.006-.006l.003-.003l.002-.002l.53.53l-.53-.531l.288-.285c.428-.427.488-1.134.085-1.673z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div   class="flex   p-0 xl:p-1  border-round-3xl shadow-1 cursor-pointer hover:bg-gray-100 "  >
                      <svg xmlns="http://www.w3.org/2000/svg" class=" p-1 xl:p-0"  width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <g fill="currentColor">
                          <path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm10 0H8v14h8z" />
                          <path d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
                        </g>
                      </svg>
                    </div>
                    <div   class="flex   p-0 xl:p-1  border-round-3xl shadow-1 cursor-pointer hover:bg-gray-100 "  >
                      <svg xmlns="http://www.w3.org/2000/svg"  class=" p-1 xl:p-0" width="1.5em" height="1.5em" viewBox="0 0 20 20">
                        <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                          <path d="M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4M3.5 15V5h13v10z" />
                          <path d="m17.324 4.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88M15.642 5H4.345l5.612 4.841z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div  class="flex flex-row align-items-center text-gray-400 justify-content-end gap-2 ">
                    <div  class="flex   p-0 xl:p-1  border-round-3xl shadow-1 cursor-pointer hover:bg-gray-100 "  >
                      <svg xmlns="http://www.w3.org/2000/svg" class=" p-1 xl:p-0"  width="1.5em" height="1.5em" viewBox="0 0 20 20">
                        <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                          <path d="M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4M3.5 15V5h13v10z" />
                          <path d="m17.324 4.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88M15.642 5H4.345l5.612 4.841z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div  class="flex flex-row align-items-center text-gray-400 justify-content-end gap-2 ">
                    <div  class="flex   p-0 xl:p-1  border-round-3xl shadow-1 cursor-pointer hover:bg-gray-100 "  >
                      <svg xmlns="http://www.w3.org/2000/svg"  class=" p-1 xl:p-0" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <g fill="currentColor">
                          <path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm10 0H8v14h8z" />
                          <path d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
                        </g>
                      </svg>
                    </div>
                    <div  class="flex   p-0 xl:p-1  border-round-3xl shadow-1 cursor-pointer hover:bg-gray-100 "  >
                      <svg xmlns="http://www.w3.org/2000/svg" class=" p-1 xl:p-0"  width="1.5em" height="1.5em" viewBox="0 0 20 20">
                        <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                          <path d="M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4M3.5 15V5h13v10z" />
                          <path d="m17.324 4.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88M15.642 5H4.345l5.612 4.841z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div  class="flex flex-row align-items-center text-gray-400 justify-content-end gap-2 ">
                    <div  class="flex   p-0 xl:p-1  border-round-3xl shadow-1 cursor-pointer hover:bg-gray-100 "  >
                      <svg xmlns="http://www.w3.org/2000/svg" class=" p-1 xl:p-0"  width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <g fill="currentColor">
                          <path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm10 0H8v14h8z" />
                          <path d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
                        </g>
                      </svg>
                    </div>
                    <div  class="flex   p-0 xl:p-1  border-round-3xl shadow-1 cursor-pointer hover:bg-gray-100 "  >
                      <svg xmlns="http://www.w3.org/2000/svg" class=" p-1 xl:p-0"  width="1.5em" height="1.5em" viewBox="0 0 20 20">
                        <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                          <path d="M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4M3.5 15V5h13v10z" />
                          <path d="m17.324 4.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88M15.642 5H4.345l5.612 4.841z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div  class="flex flex-row align-items-center text-gray-400 justify-content-end gap-2 ">
                    <div  class="flex   p-0 xl:p-1  border-round-3xl shadow-1 cursor-pointer hover:bg-gray-100 "  >
                      <svg xmlns="http://www.w3.org/2000/svg" class=" p-1 xl:p-0"  width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <g fill="currentColor">
                          <path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm10 0H8v14h8z" />
                          <path d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
                        </g>
                      </svg>
                    </div>
                  </div>

                </div>

                <Card class=" xl:flex hidden  absolute" v-show="toast" style="bottom:29%; left:77% " :pt="{
                  body:{class:'p-3'}
                }">
                   <template #content >
                     <div class="flex flex-row align-items-center gap-8 ">
                     <div class="text-xs">
                    <p class="m-0 font-bold"> CSV added to contact</p>
                    <p class="m-0 text-gray-400 ">
                      your contacts in CSV have been added
                    </p>
                     </div>
                     <p @click="toggelToast" class="text-purple-600 m-0 text-sm cursor-pointer">okey</p>
                     </div>

                   </template>
                </Card>


              </div>
            </template>
          </Card>
          </div>
          </div>




<!--        nextBtn-->
        <div class="flex py-3  border-top-1 border-gray-100  bg-white fixed px-3 " style="bottom:0%; right:0%; left:0% ">

          <div class="flex align-items-center w-7 justify-content-end gap-2">
            <p class=" md:flex hidden  text-xs  font-semibold my-0">Your Campaign will be sent to</p>
            <div @click="toggelToast" class=" flex align-items-center gap-2 text-xs border-1 py-1 px-2 border-round-3xl border-purple-600 hover:bg-purple-200 bg-purple-100 cursor-pointer">
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
          <div class=" w-5 flex  justify-content-end">
          <Button label="Next"  icon="pi pi-angle-right" iconPos="right" class="bg-purple-600 border-none hover:bg-purple-700" @click="nextCallback(); fObj.btn2()" >

            <p class="my-0  md:mx-5 text-xs md:text-base">Next</p>
            <i class="pi pi-angle-right" ></i>
          </Button>
          </div>
        </div>
      </template>
    </StepperPanel>
    <StepperPanel header="Header II">
      <template #header>
        <div class="flex flex-row align-items-center cursor-pointer  md:px-2 px-1 py-1 border-round-3xl gap-1 text-xs lg:text-base  text-gray-600"
             :class="!glowBtn.two? '  border-2 border-purple-500 bg-purple-100':''"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 14L1 8l11-6l11 6zm0 4L1.575 12.325l2.1-1.15L12 15.725l8.325-4.55l2.1 1.15zm0 4L1.575 16.325l2.1-1.15L12 19.725l8.325-4.55l2.1 1.15zm0-10.275L18.825 8L12 4.275L5.175 8zM12 8" />
          </svg>
          <p class="my-0">2.Steps</p>
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

      <div v-if="menu" class="  mx-2 md:mx-0 mb-8 flex shadow-1 border-round-xl bg-white  md:w-full justify-content-around md:px-4 py-2 align-items-center ">

        <div  @click="visible = true" class="flex flex-column align-items-center hover:bg-gray-100 cursor-pointer p-2 md:p-3 gap-2 ">
          <div class=" border-round-3xl shadow-1 px-2 py-1 cursor-pointer hover:bg-gray-100 ">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-purple-700" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" />
          </svg>
          </div>
          <p class="my-0 text-xs md:text-sm font-semibold " >Email</p>
          </div>

        <div  @click="visible = true" class="flex flex-column align-items-center hover:bg-gray-100 cursor-pointer p-2 md:p-3 gap-2 " >
          <div  class=" border-round-3xl shadow-1 px-2 py-1  cursor-pointer hover:bg-gray-100 " >
          <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-700" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5l8-5v5h2V6c0-1.1-.9-2-2-2m-8 7L4 6h16zm7 4l4 4l-4 4v-3h-4v-2h4z" />
          </svg>
          </div>
          <p class="my-0  text-xs md:text-sm font-semibold ">Follow-up</p>
          </div>

        <div  @click="visible = true" class="flex flex-column align-items-center hover:bg-gray-100 cursor-pointer p-2 md:p-3 gap-2 ">
          <div  class=" border-round-3xl shadow-1 px-2 py-1  cursor-pointer hover:bg-gray-100 " >
          <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-500" width="1em" height="1em" viewBox="0 0 32 32">
            <path fill="currentColor" d="M8.268 28H2.463V9.306h5.805zM5.362 6.756C3.506 6.756 2 5.218 2 3.362a3.362 3.362 0 0 1 6.724 0c0 1.856-1.506 3.394-3.362 3.394M29.994 28h-5.792v-9.1c0-2.169-.044-4.95-3.018-4.95c-3.018 0-3.481 2.356-3.481 4.794V28h-5.799V9.306h5.567v2.55h.081c.775-1.469 2.668-3.019 5.492-3.019c5.875 0 6.955 3.869 6.955 8.894V28z" />
          </svg>
          </div>
          <p class="my-0  text-xs md:text-sm font-semibold " >Linkedin</p>
        </div>

        <div   @click="visible = true" class="flex flex-column align-items-center hover:bg-gray-100 cursor-pointer p-2 md:p-3 gap-2 ">
          <div  class=" border-round-3xl shadow-1 px-2 py-1  cursor-pointer hover:bg-gray-100  ">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-500" width="1em" height="1em" viewBox="0 0 512 512">
            <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76c-24.3-12.24-26.3-13.24-45.4.95c-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39s-47.34-61.62-50.53-76.48s5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3c-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160 160 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64s54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159 159 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374Z" />
          </svg>
          </div>
          <p class="my-0  text-xs md:text-sm font-semibold " >Call</p>
        </div>

        <div  @click="visible = true"  class="flex flex-column align-items-center hover:bg-gray-100 cursor-pointer p-2 md:p-3 gap-2 ">
          <div  class=" border-round-3xl shadow-1 px-2 py-1  cursor-pointer hover:bg-gray-100 ">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22 5.18L10.59 16.6l-4.24-4.24l1.41-1.41l2.83 2.83l10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44A9.9 9.9 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z" />
        </svg>
          </div>
          <p class="my-0  text-xs md:text-sm font-semibold " >Task</p>
          </div>

      </div>

<!--            card2-->
       <Dialog  v-model:visible="visible" modal class=" mb-8 flex flex-column  shadow-1 border-round-xl bg-white  w-10 md:w-8 lg:w-5 " :pt="{
         header:{class:'hidden '},
         content:{class:'border-round-lg px-3 py-2 '},

       }">
<!--        envalop-->
         <div class="flex flex-row align-items-center justify-content-between w-full mb-3 ">
           <div class="flex text-sm md:text-base align-items-center gap-3">
             <div class="flex  p-1 border-round-3xl shadow-1 " >
               <svg xmlns="http://www.w3.org/2000/svg" class="text-purple-600 text-lg " width="1em" height="1em" viewBox="0 0 20 20">
                 <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                   <path d="M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4M3.5 15V5h13v10z" />
                   <path d="m17.324 4.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88M15.642 5H4.345l5.612 4.841z" />
                 </g>
               </svg>
             </div>
             <p class="font-bold my-0 ">Send Automatic Email</p>
           </div>

           <svg  @click="visible = false" class="text-gray-400 hover:text-red-600 cursor-pointer my-2  " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
             <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5" />
           </svg>
         </div>
<!--          subject-->
         <div class="flex justify-content-between  border-1 border-x-none border-gray-200  text-xs">
         <div>
           <p class="text-gray-500 font-semibold" >
           Subject: <span class="font-bold text-gray-900">Reaching out</span>
           </p>
         </div>

         <div class="flex font-bold gap-1 text-xs text-gray-900" >
           <p class="cursor-pointer hover:text-blue-700" >{ }</p>
           <p class="cursor-pointer hover:text-blue-700" >CC</p>
           <p class="cursor-pointer hover:text-blue-700" >BCC</p>
         </div>

         </div>
<!--buttons-->
         <div class="flex gap-2   border-1 border-top-none border-x-none border-gray-200  ">
           <div class="flex my-2 p-2 align-items-center gap-1 shadow-1 border-round-md text-xs font-bold cursor-pointer hover:bg-gray-100 ">
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
           <div class="flex my-2 p-2 align-items-center gap-1 shadow-1 border-round-md  text-xs font-bold cursor-pointer hover:bg-gray-100 ">
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

<!--         both-->



         <ClientOnly>
           <Quill/>
         </ClientOnly>


         <!--         <Editor v-model="value" editorStyle="height: 320px" :pt="{-->
<!--      root:{class:' flex flex-column-reverse'},-->
<!--      header:{class:' text-red-500'}-->
<!--    }" />-->

<!--         end buttons-->
<div class="flex justify-content-between py-2 gap-1 md:gap-0 ">
  <Button @click="visible = false" class="text-xs font-semibold hover:bg-gray-100 bg-white text-gray-800 border-none shadow-1 p-1 md:p-2 " label="Save as template" >Save as template</Button>
  <div class="flex gap-1 md:gap-2">
    <Button @click="visible = false" class="text-xs font-semibold hover:bg-gray-100 bg-white text-gray-800 border-none shadow-1 p-1 md:p-2 " label="Send test email" >Send test email</Button>
    <Button @click="visible = false" class="text-xs font-semibold  md:px-6 bg-purple-600 hover:bg-purple-700 border-purple-700 text-purple-100  " label="Save" >Save</Button>
  </div>
</div>

       </Dialog>

          </div>

        </div>
<!--     endButtons-->
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
        <div class="flex flex-row align-items-center  cursor-pointer  md:px-2 px-1 py-1 border-round-3xl gap-1 text-xs lg:text-base text-gray-600"
             :class="!glowBtn.three? '  border-2 border-purple-500 bg-purple-100':''"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2" />
          </svg>
          <p class="my-0">3.Settings</p>
        </div>
      </template>
      <template #content="{ prevCallback, nextCallback }">
        <div class="flex justify-content-center ">
        <div class="flex flex-column w-12 md:w-9 lg:w-7 xl:w-5 xl:px-4 ">

<!--                setings-->
          <div class="flex flex-column gap-1 pb-4 border-bottom-1 border-gray-300">
            <p class="  text-xl lg:text-2xl font-bold my-0">Settings</p>
            <p class="text-gray-400 text-xs lg:text-sm my-0">Tweak these settings to fit your campaign and audience</p>
          </div>

<!--master-->
          <div class="flex flex-column gap-1 mt-5 mb-4">
            <p class="my-0 font-bold ">Master Switch</p>
            <p class="my-0 text-gray-400  text-xs lg:text-sm  ">Turn on or off your campaign</p>
          </div>

<!--      switch-->
          <Card class="mb-7" :pt="{
            body:{class:'py-2 px-3'}
          }">
            <template #content>
              <div class="flex justify-content-between">

                <div>
                  <p class="my-0 text-base font-semibold text-purple-400">Active</p>
                  <p class="my-0  text-xs lg:text-sm  text-gray-400">Campaign ready to send</p>
                </div>

                <InputSwitch v-model="Tpage.one" />



              </div>
            </template>
          </Card>

<!--          task stratigy-->
          <div class="flex flex-column gap-3">
            <div class="flex flex-column gap-1">
              <p class="my-0 text-base font-bold ">Task Stratigy</p>
              <p class="my-0 text-gray-400  text-xs lg:text-sm ">Choose to automate or manually approve tasks</p>
            </div>
            <div class="flex w-full gap-3">
            <div class="flex align-items-center   w-6 ">
              <label for="ingredient1" class=" p-2 shadow-1 border-round-xl flex flex-column w-full gap-3 cursor-pointer hover:bg-purple-50" :class="Tpage.two == 'Cheese'?'border-1  border-purple-500': '' "  >
                <div class="flex justify-content-between">
                  <svg xmlns="http://www.w3.org/2000/svg"  class="text-purple-600" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m9 4l2.5 5.5L17 12l-5.5 2.5L9 20l-2.5-5.5L1 12l5.5-2.5zm0 4.83L8 11l-2.17 1L8 13l1 2.17L10 13l2.17-1L10 11zM19 9l-1.26-2.74L15 5l2.74-1.25L19 1l1.25 2.75L23 5l-2.75 1.26zm0 14l-1.26-2.74L15 19l2.74-1.25L19 15l1.25 2.75L23 19l-2.75 1.26z" />
                  </svg>
              <RadioButton v-model="Tpage.two" inputId="ingredient1" name="pizza" value="Cheese" />

                </div>
                <div class="flex flex-column gap-1">
                  <p class="font-semibold text-sm my-0"> Automatic </p>
                  <p class="text-gray-400 text-xs my-0">Emails are made automatically</p>
                </div>

             </label>
            </div>
            <div class="flex align-items-center  w-6 ">
              <label for="ingredient2" class=" p-2  flex flex-column shadow-1 border-round-xl w-full gap-3 cursor-pointer hover:bg-purple-50" :class="Tpage.two == 'Mushroom'?'border-1  border-purple-500': '' " >
                <div class="flex justify-content-between">
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-purple-600" width="1em" height="1em" viewBox="0 0 256 256">
                    <path fill="currentColor" d="M58 76a58 58 0 0 1 116 0a6 6 0 0 1-12 0a46 46 0 0 0-92 0a6 6 0 0 1-12 0m138 46a25.87 25.87 0 0 0-14.59 4.49A26 26 0 0 0 142 110.1V76a26 26 0 0 0-52 0v87l-7.53-12.1a26 26 0 0 0-45 26.13l29.32 50A6 6 0 0 0 77.16 221l-29.29-50a14 14 0 0 1 24.25-14a1 1 0 0 0 .1.17l18.68 30A6 6 0 0 0 102 184V76a14 14 0 0 1 28 0v68a6 6 0 0 0 12 0v-12a14 14 0 0 1 28 0v20a6 6 0 0 0 12 0v-4a14 14 0 0 1 28 0v36c0 22.13-7.3 37.18-7.37 37.32a6 6 0 0 0 2.69 8a5.8 5.8 0 0 0 2.68.68a6 6 0 0 0 5.38-3.32c.35-.7 8.63-17.55 8.63-42.68v-36A26 26 0 0 0 196 122" />
                  </svg>
                  <RadioButton v-model="Tpage.two" inputId="ingredient2" name="pizza" value="Mushroom" />

                </div>
                <div class="flex flex-column gap-1">
                  <p class="font-semibold text-sm my-0"> Automatic </p>
                  <p class="text-gray-400 text-xs my-0">Emails are made automatically</p>
                </div>

             </label>
            </div>
</div>
      </div>

<!--          email-->
          <div class="mb-3">
          <div class=" mb-2 relative">
          <div class="flex flex-column gap-1 mt-6 mb-3">
            <p class="my-0 font-bold ">Email</p>
            <p class="my-0 text-gray-400  text-xs lg:text-sm  ">Outbond email settings</p>
          </div>


            <label for="name" class="text-xs font-semibold"> Senders Email Account</label>
          <Dropdown v-model="selectedEmail" :options="mail" optionLabel="name" placeholder="Stephen Hakime" class=" w-full pl-3" />
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute" style="bottom:10%; left:1%" width="1em" height="1em" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="7" r="5" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7m10 2.5l1.5 1.5l2.5-3" />
              </g>
            </svg>
            <p class="my-0 text-purple-700 text-sm absolute md:flex hidden" style="bottom:10%; right:6% " >stepham@wiza.com</p>
            </div>
       <div class="flex md:flex-row flex-column gap-2 w-full">
         <div class="md:w-6 relative">
           <label class="text-xs font-semibold" for="username"> <p class="my-1"> Send limit</p></label>
           <InputText id="username" class="w-full" v-model="value" placeholder="200"   aria-describedby="username-help" />
           <p class=" my-0 text-gray-400 absolute" style="bottom:14%; right: 3%" >per day</p>
         </div>
         <div class="md:w-6 relative">
           <label class=" flex align-items-center text-xs font-semibold" for="username">
              <p class="my-1"> Throttle limit</p>
             <svg xmlns="http://www.w3.org/2000/svg" class="" width="1em" height="1em" viewBox="0 0 24 24">
               <path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity="0.5" />
               <path fill="currentColor" d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" />
             </svg>
           </label>
           <InputText id="username" class="w-full" v-model="value" placeholder="5" aria-describedby="username-help" />
         <p class="my-0 absolute text-gray-400" style="bottom:14%; right:3%">seconds</p>
         </div>
       </div>
          </div>

<!--scheduling-->
<div class=" flex flex-column gap-2  mt-5 mb-4 ">

  <div>
    <p class="my-0 lg:text-lg font-semibold">Scheduling</p>
    <p class="my-0 py-1 text-gray-400  text-xs lg:text-sm  ">Control when email's are sent out</p>
  </div>
<!--  double dropdown-->
  <div class="flex md:flex-row flex-column align-items-end gap-3 md:gap-2 w-full">
    <div class="relative w-full md:w-6">
      <label class="text-xs font-semibold" for="username"> <p class="my-1"> Run time </p> </label>
      <Dropdown v-model="selectedTime" :options="Time" optionLabel="name" placeholder="Start now" class="w-full pl-3" />
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute" style="left:2%; bottom:20%" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
      </svg>
    </div>
    <div class="relative w-full md:w-6">
      <Dropdown v-model="selectedDeadline" :options="Deadline" optionLabel="name" placeholder="No deadline" class="w-full pl-3" />
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute" style="left:2%; bottom:30%" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
      </svg>
    </div>
  </div>

<div class="relative">
  <label for="name" class="text-xs font-semibold"> <p class="my-1">   Sending schedule</p></label>
  <Dropdown v-model="selectedSche" :options="Sche" optionLabel="name" placeholder="7am-9pm" class="w-full pl-3" />
  <svg xmlns="http://www.w3.org/2000/svg" class="absolute" style="bottom:20%; left:1%" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.5 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M16 3v4M8 3v4m-4 4h16m-5 8l2 2l4-4" />
  </svg>
 </div>

  <div class="relative">
    <label class=" flex align-items-center text-xs font-semibold" for="username">
      <p class="my-1">Fallback timezone</p>
      <svg xmlns="http://www.w3.org/2000/svg" class="" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity="0.5" />
        <path fill="currentColor" d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" />
      </svg>
    </label>
    <Dropdown v-model="selectedZone" :options="Zone" optionLabel="name" placeholder="Eastern Time" class="w-full pl-3" />
    <svg xmlns="http://www.w3.org/2000/svg"  class="absolute" style="bottom:20%; left:1%" width="1em" height="1em" viewBox="0 0 256 256">
      <path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6" />
    </svg>
  </div>

</div>


<!--          miscellanyous-->
  <div class=" flex flex-column gap-2  mt-5 mb-4">

            <div>
              <p class="my-0 lg:text-base font-semibold">Miscellaneous</p>
              <p class="my-0 pt-1 text-gray-400  text-xs lg:text-sm  ">Extra champagin settings</p>
            </div>

              <div class="relative">
                <label class=" flex align-items-center gap-1 text-xs font-semibold" for="username">
                  <p class="my-1"> Global CC</p>
                  <svg xmlns="http://www.w3.org/2000/svg" class="" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity="0.5" />
                    <path fill="currentColor" d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" />
                  </svg>
                </label>
                <InputText type="text" v-model="value " placeholder="add email"  class="w-full pl-4" />
                <svg xmlns="http://www.w3.org/2000/svg"  class="absolute" style="bottom:17%; left:1%"  width="1em" height="1em" viewBox="0 0 48 48">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                    <path d="M44 24V9H4v30h20m20-5H30m9-5l5 5l-5 5" />
                    <path d="m4 9l20 15L44 9" />
                  </g>
                </svg>
            </div>

            <div class="relative">
              <label class=" flex align-items-center gap-1 text-xs font-semibold" for="username">
                <p class="my-1">Global BCC</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity="0.5" />
                  <path fill="currentColor" d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" />
                </svg>
              </label>
              <InputText type="text" v-model="value " placeholder="add email"  class="w-full pl-4" />
              <svg xmlns="http://www.w3.org/2000/svg"  class="absolute" style="bottom:17%; left:1%"  width="1em" height="1em" viewBox="0 0 48 48">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                  <path d="M44 24V9H4v30h20m20-5H30m9-5l5 5l-5 5" />
                  <path d="m4 9l20 15L44 9" />
                </g>
              </svg>
             </div>

          </div>


<!--tracking-->
          <div class=" flex flex-column gap-2  mt-5 mb-8">

            <div class="border-bottom-1 py-2 border-gray-300">
              <p class="my-0 lg:text-lg font-semibold">Tracking</p>
              <p class="my-0 py-1 text-gray-400  text-xs lg:text-sm  ">Knowing whats  happening in your campagin</p>
            </div>

            <div class=" flex align-items-center justify-content-between border-bottom-1  border-gray-300 relative">

              <div class="">
                <p class="my-0  font-semibold">Track openings</p>
                <p class="mt-1 text-gray-400  text-xs lg:text-sm  ">Keet track of who's opening your emails</p>
              </div>

              <InputSwitch v-model="Tpage.three" />
            </div>

            <div class=" flex align-items-center justify-content-between border-bottom-1  border-gray-300 relative">

              <div class="">
                  <p class="my-0 font-semibold">Track link clicks</p>
                <p class="mt-1 text-gray-400  text-xs lg:text-sm  ">Track which links are most populer</p>
              </div>

              <InputSwitch v-model="Tpage.four" />
            </div>

            <div class=" flex align-items-center justify-content-between border-bottom-1  border-gray-300 relative">

              <div class="">
                <p class="my-0 font-semibold">Include unsubscribe link</p>
                <p class="mt-1 text-gray-400  text-xs lg:text-sm  ">Allow recipients to unsubscribe</p>
              </div>

              <InputSwitch v-model="Tpage.five" />
            </div>
          </div>



</div>
</div>
        <!--     endButtons-->
        <div class="flex py-3 justify-content-between bg-white border-top-1 border-gray-100 fixed px-3 " style="bottom:0%; right:0%; left:0% ">
          <Button label="Back" severity="secondary" class=" bg-white shadow-1 hover:bg-gray-100 "   icon="pi pi-arrow-left" @click="prevCallback(); fObj.btn2()" >
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
          <Button label="Next"  icon="pi pi-angle-right" iconPos="right" class="bg-purple-600 border-none hover:bg-purple-700" @click="nextCallback(); fObj.btn4()" >

            <p class="my-0  md:mx-5 text-xs md:text-base">Next</p>
            <i class="pi pi-angle-right" ></i>
          </Button>
        </div>

      </template>

    </StepperPanel>
    <StepperPanel header="Header IV">
      <template #header>
        <div class="flex flex-row align-items-center   cursor-pointer md:px-2 px-1 py-1 border-round-3xl gap-1 text-xs lg:text-base text-gray-600"
        :class="!glowBtn.four? '  border-2 border-purple-500 bg-purple-100':''"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
            <path fill="currentColor" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32" />
          </svg>
          <p class="my-0">4.Overview</p>
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


</div>

</template>

<script setup>

const value = ref('');

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
  }

import { ref } from "vue";

const visible = ref(false);


const checkBox = reactive({
  one:null,
  two:null,
  three:null,
  four:null,
  five:null,
  six:null

})

const toast = ref(true)
function toggelToast () {
  toast.value = !toast.value
}


const selectedEmail = ref();
const mail = ref([
  { name: 'Stephen Hakime', code: 'NY' },
  { name: 'Stephen Hakime 1', code: 'RM' },
  { name: 'Stephen Hakime 2', code: 'LDN' },
  { name: 'Stephen Hakime 3', code: 'IST' },
  { name: 'Stephen Hakime 4', code: 'PRS' }
]);

const selectedTime = ref();
const Time   = ref([
  { name: 'Start Now', code: 'NY' },
  { name: 'Start Tommorow', code: 'RM' },
  { name: ' Start Today', code: 'LDN' },
  ]);

const selectedDeadline = ref();
const Deadline = ref([
  { name: 'No Deadline', code: 'NY' },
  { name: 'Today', code: 'RM' },
  { name: 'Tomorrow', code: 'LDN' },
 ]);

const selectedSche = ref();
const Sche = ref([
  { name: '7am to 9PM (Monday to Friday)', code: 'NY' },
  { name: '7am to 7PM (Monday to Friday)', code: 'RM' },
  { name: '7am to 6PM (Monday to Friday)', code: 'LDN' },
  { name: '7am to 5PM (Monday to Friday)', code: 'IST' },
  { name: '7am to 4PM (Monday to Friday)', code: 'PRS' }
]);


const selectedZone = ref();
const Zone = ref([
  { name: 'Eastern Time', code: 'NY' },
  { name: 'Eastern Time', code: 'RM' },
  { name: 'Eastern Time', code: 'LDN' },
  { name: 'Eastern Time', code: 'IST' },
  { name: 'Eastern Time', code: 'PRS' }
]);


const Tpage = reactive({
  one:false,
  two:'',
  three:false,
  four:false,
  five:false,
})

</script>

<style scoped>

</style>
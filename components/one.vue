<template>
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
        <TriStateCheckbox v-model="checkBox.six"  @click="allCheck" variant="filled"/>
        <p>Select 4 contacts</p>
        <p v-show="go == false" class="text-xs text-red-700"> check atleast 4 checkboxes*</p>
      </div>
    </template>
    <template #content>
      <div class="flex md:flex-row flex-column gap-6 md:gap-0 justify-content-between">
        <div class=" hidden flex-column justify-content-between gap-3">
          <!--       1-->
          <div  class="flex flex-row align-items-center text-xs xl:text-sm  gap-3">
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
        <div class="  hidden flex-column justify-content-between gap-3 pl-5 md:pl-0  ">
          <!--       2-->
          <div  class="flex flex-row text-xs xl:text-sm  ">

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
        <div class=" hidden flex-column justify-content-between gap-3  ">
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
        <!-- new-->
        <div class=" flex flex-column w-full gap-2  ">
          <div class="grid  ">
            <div class="  col-8 md:col-6 xl:col-5">
              <div  class="flex flex-row align-items-center text-xs xl:text-sm  gap-3">
                <Checkbox v-model="checkBox.one" :binary="true" />
                <div class="flex   flex-wrap  flex-row justify-content-center align-items-center gap-2">

                  <Avatar image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" class=" mr-1 cursor-pointer xl:w-3rem xl:h-3rem" shape="circle"/>

                  <div class="flex flex-column gap-1">
                    <p class="font-semibold my-0">Leslie Alexander</p>
                    <p class="my-0 font-normal text-gray-400">Product Designer</p>
                  </div>


                </div>
              </div>
            </div>
            <div class="col md:flex hidden">
              <div  class="flex flex-row text-xs xl:text-sm  ">

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
            </div>
            <div class="col-2 md:flex hidden  justify-content-end">
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
            </div>
          </div>
          <div class="grid border-top-1 border-gray-100 ">
            <div class=" col-8 md:col-6 xl:col-5">
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
            </div>
            <div class="col md:flex hidden">
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
            </div>
            <div class="col-2 md:flex hidden justify-content-end ">
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
            </div>
          </div>
          <div class="grid border-top-1 border-gray-100 ">
            <div class=" col-10 md:col-6 xl:col-5">
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
            </div>
            <div class="col md:flex hidden">
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
            </div>
            <div class="col-2 md:flex hidden justify-content-end ">
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
            </div>
          </div>
          <div class="grid border-top-1 border-gray-100 ">
            <div class=" col-8 md:col-6 xl:col-5">
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
            </div>
            <div class="col md:flex hidden">
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
            </div>
            <div class="col-2 md:flex hidden justify-content-end ">
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
            </div>
          </div>
          <div class="grid border-top-1 border-gray-100 ">
            <div class="  col-8 md:col-6 xl:col-5">
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
            <div class="col md:flex hidden">
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
            <div class="col-2 md:flex hidden justify-content-end ">
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
          </div>

        </div>




        <Card class=" xl:flex hidden  absolute" v-show="toast" style="bottom:29%; right:0%" :pt="{
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
</template>
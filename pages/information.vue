<template>


  <div class="flex flex-column  mt-0 md:flex-row ">

    <!--     #####################################-->
    <!--   left nav  -->
    <leftBar/>


    <div class="lg:w-9">

      <!--      navbar-->
      <div class=" flex px-2 md:px-0  justify-content-between border-bottom-1 border-gray-300">
        <div class=" md:px-4  flex flex-row  align-items-center gap-2">
          <div class=" bg-gray-100 md:p-2 border-round-md cursor-pointer hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12H3.5">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/>
                </path>
                <path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12L10 19M3 12L10 5">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="12;0"/>
                </path>
              </g>
            </svg>
          </div>
          <p class=" text-lg md:text-2xl font-bold">Information</p>
          <Avatar image="https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_1280.png" shape="circle"/>
        </div>
        <div class="flex align-items-center md:px-4  md:gap-3 gap-2">
          <Button class=" bg-white  h-2.5rem flex justify-content-center    shadow-1  hover:bg-gray-100" label="hello" severity="secondary"
                  outlined><i class=" text-green-500  md:my-1 md:mx-1 pi pi-shield"></i></Button>
          <Button class=" bg-white   h-2.5rem flex justify-content-center  shadow-1  hover:bg-gray-100" label="hello" severity="secondary"
                  outlined><i class="pi pi-bell  md:my-1 md:mx-1"></i></Button>
          <Button @click="conformCheck" class=" bg-blue-600 text-white h-2.5rem md:px-5 border-none md:border-3 border-blue-600  hover:bg-blue-800 hover:border-blue-800"
                  severity="secondary" outlined>Confirm
          </Button>

        </div>
      </div>

      <div class="flex md:flex-row flex-column">


        <!--     ###################################-->
        <!--left info-->
        <div class=" md:w-7 px-4 ">
          <p class="font-bold text-xl mt-3 mb-0" >User Information</p>
          <p class="text-gray-500 mb-3 mt-2 text-lg">Enter the required information below to register. You can change it anytime.</p>


          <!--  Email address-->
          <div class="card flex justify-content-center mb-4 ">
            <div class="flex   flex-column w-full gap-2">
              <label>Email address</label>
              <div class="relative ">

                <InputText class="w-full" id="username" v-model="formValues.Email" :class="!conform.email? 'border-red-600':''"
                           aria-describedby="username-help"/>
                <i class="absolute pi pi-at text-gray-500" style="bottom:30%; right:3% "/>
              </div>
              <small v-show="!conform.email" id="username-help" class="text-xs text-red-500"><i
                  class="pi pi-exclamation-triangle"/> Please enter an email in the format username@domail.com</small>
            </div>
          </div>


          <!--  Full name-->
          <div class="card flex md:flex-row flex-column  justify-content-center gap-3 align-items-end mb-4">

            <div class="flex relative flex-column w-full md:w-6  gap-2">
              <label for="username">Full name</label>
              <InputText id="username" v-model="formValues.Name" :class="!conform.name? 'border-red-600':''"
                         aria-describedby="username-help" placeholder="First name"/>
              <i v-show="formValues.Name != '' " class=" absolute pi pi-times" style="bottom:17%; right:4%"/>
            </div>

            <div class="flex flex-column w-full md:w-6 gap-2">

              <InputText id="username" v-model="value" aria-describedby="username-help" placeholder="Second name"/>
            </div>

          </div>


          <!--address-->
          <div class="mb-4">
            <div class="card flex md:flex-row flex-column justify-content-between gap-3 align-items-end mb-2">

              <div class="flex flex-column md:w-4 xl:w-5 w-full gap-2">

                <label>Address <span v-show="!conform.selectedC || !conform.street" class="text-red-500 text-xs">Incompleate address*</span>
                </label>
                <Dropdown v-model="selectedCity" :options="cities" :class="!conform.selectedC? 'border-red-600' : '' "
                          optionLabel="name" placeholder="Select a City" checkmark :highlightOnSelect="false"/>

              </div>

              <div class="flex flex-column md:w-4 xl:w-5 w-full gap-2">

                <Dropdown optionLabel="name" placeholder="Albuqeurque" checkmark :highlightOnSelect="false" disabled/>
              </div>

              <div class="flex flex-column md:w-3 w-full gap-2">

                <InputText type="number" id="username" v-model="formValues.Number" aria-describedby="username-help"
                           placeholder="87101"/>
              </div>


            </div>

            <div class="flex flex-column ">

              <InputText id="username" v-model="formValues.Street" :class="!conform.street? 'border-red-600' : '' "
                         aria-describedby="username-help" placeholder="Street"/>
            </div>


          </div>
          

          <!--Houerly Rate-->
          <div class="mb-4">
            <p class="m-2">Hourly rate <span v-show="!conform.hrate" class="text-red-500 text-xs">Select one*</span></p>
            <div class=" flex gap-3 mb-2">

              <label class=" border-1 border-gray-200 border-round-lg hover:bg-blue-100 cursor-pointer p-2  w-6" :class="formValues.Hrate == 'Cheese'? 'bg-blue-100' : ''">
                <RadioButton v-model="formValues.Hrate" inputId="ingredient1" name="pizza" value="Cheese"/>
                <label for="ingredient1" class="ml-2">$10-20</label></label>
              <label class=" border-1 border-gray-200 border-round-lg hover:bg-blue-100 cursor-pointer p-2 w-6" :class="formValues.Hrate == 'Mushroom'? 'bg-blue-100' : ''">
                <RadioButton v-model="formValues.Hrate" inputId="ingredient2" name="pizza" value="Mushroom"/>
                <label for="ingredient2" class="ml-2">$20-40</label></label>
            </div>
            <div class=" flex gap-3 mb-2">

              <label class=" border-1 border-gray-200 border-round-lg hover:bg-blue-100 cursor-pointer p-2 w-6" :class="formValues.Hrate == 'Pepper'? 'bg-blue-100' : ''">
                <RadioButton v-model="formValues.Hrate" inputId="ingredient3" name="pizza" value="Pepper"/>
                <label for="ingredient3" class="ml-2">$40-80</label></label>
              <label class=" border-1 border-gray-200 border-round-lg hover:bg-blue-100 cursor-pointer p-2 w-6" :class="formValues.Hrate == 'Onion'? 'bg-blue-100' : ''">
                <RadioButton v-model="formValues.Hrate" inputId="ingredient4" name="pizza" value="Onion"/>
                <label for="ingredient4" class="ml-2">> $80 </label></label>
            </div>
          </div>


          <!--  choose your skill-->
          <div class=" flex justify-content-center">
            <div class="flex flex-column w-full ">
              <p class="m-2">Enter your Skill <span v-show="!conform.skill"
                                                     class="text-red-500 text-xs">add a skill* </span></p>
<!--              <Chips class="" v-model="formValues.Skill" :pt="{-->
<!--    inputToken:{-->
<!--      class:['w-screen']-->
<!--    }-->
<!--  }"/>-->
              <Chips ref="chipsRef" v-model="chipValues.skill" class="w-full" :pt="{
                container: {class: 'w-full'}
              }"/>



            </div>
          </div>


        </div>


        <!--########################-->
        <!--right info-->
        <div class="md:w-5 px-4 flex flex-column justify-content-between ">

          <div>
            <div class="mb-5">
              <!--  upload image-->
              <p class=" text-gray-500  font-semibold">Profile Photo</p>
              <div class="text-center relative">
                <Avatar :image='imageData' class="mr-2 h-6rem w-6rem" shape="circle"/>
                <div>
                  <i @click="openSelect"
                     class="absolute pi pi-pencil w-2rem  border-round-2xl bg-blue-300 hover:bg-blue-400 cursor-pointer text-white p-2 bm-2 ml-6 "
                     style="bottom: 3%; right:38%"/>

                </div>
              </div>
              <InputText v-show="!openImg" type="file" @change="customBase64Uploader($event)"/>


              <!--         <FileUpload  class="border-round-3xl" mode="basic" name="demo[]" url="/api/upload" accept="image/*"
              customUpload chooseLabel="Browse" @uploader="customBase64Uploader($event)"  />-->


            </div>


            <!--  emoji-->
            <div>
              <p class="font-semibold text-gray-500">Choose your main intrest <span v-show="!conform.selectedM"
                                                                                    class="text-red-500 font-medium text-xs">Select one*</span></p>
              <div class="card flex justify-content-center w-full ">
                <Dropdown v-model="selectedEmoji" :options="Emoji" optionLabel="name" placeholder="Select an intrest" checkmark :highlightOnSelect="true" class="w-full "
                          :class="!conform.selectedM? 'border-red-600':''"
                :pt="{
                            	item	:{
                              class:['flex','flex-row-reverse','justify-content-between']
                            }
                }"
                />
              </div>

            </div>
          </div>

          <div class="my-2">
          <Accordion :activeIndex="0">
            <AccordionTab header="People">
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

              </p>
            </AccordionTab>
            <AccordionTab header="Work">
              <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
              </p>
            </AccordionTab>
            <AccordionTab header="Info">
              <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
              </p>
            </AccordionTab>
          </Accordion>
          </div>






          <!--       Gender-->
          <div>
            <p class="font-semibold text-gray-500 "> Select your Gender</p>
            <div class="card flex justify-content-between ">

              <div class="flex align-items-center">
                <RadioButton v-model="formValues.Gender" inputId="ingredient10" name="pizza" value="Cheese"/>
                <label for="ingredient10" class="ml-2 cursor-pointer">Male</label>
              </div>
              <div class="flex align-items-center">
                <RadioButton v-model="formValues.Gender" inputId="ingredient11" name="pizza" value="Mushroom"/>
                <label for="ingredient11" class="ml-2 cursor-pointer">Female</label>
              </div>
              <div class="flex align-items-center">
                <RadioButton v-model="formValues.Gender" inputId="ingredient12" name="pizza" value="Pepper"/>
                <label for="ingredient12" class="ml-2 cursor-pointer">Non-binary</label>
              </div>


            </div>

          </div>


        </div>


      </div>

    </div>
  </div>


</template>
<script setup>
import LeftBar from "../components/leftBar";
// address dropdown
const selectedCity = ref();
const cities = ref([
  {name: 'New Mexico', code: 'NM'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
]);


// radio howerly ratr
const ingredient = ref('');


// emogi dropdown
const selectedEmoji = ref();
const Emoji = ref([
  {name: 'Education 🎓 ', code: 'NY'},
  {name: 'Yeeeeh, science 🔬', code: 'RM'},
  {name: 'Art 🎨', code: 'LDN'},
  {name: 'Politics 🏛️', code: 'IST'},
  {name: 'Sports ⚽', code: 'PRS'},
  {name: 'Games 🎮', code: 'GM'},
  {name: 'Animals 🐾', code: 'AN'},
  {name: 'Health 🏥', code: 'HT'},
  {name: 'Business 💼', code: 'BN'},
]);


// CHIPS
const value = ref();

// search
const value1 = ref();


const formValues = reactive({
  Email: '',
  Name: '',
  number: null,
  Street: '',
  Hrate: '',
  Skill: '',
  Gender: ''
})

const conform = reactive({
  email: true,
  name: true,
  number: true,
  street: true,
  hrate: true,
  skill: true,
  gender: true,
  selectedC: true,
  selectedM: true,
})

const regex = /@.*\.com$/;

// conform button
function conformCheck() {
  const containsLogo = regex.test(formValues.Email)
  if (!containsLogo) {
    conform.email = false
  } else {
    conform.email = true
  }

  if (formValues.Name === '') {
    conform.name = false
  } else {
    conform.name = true
  }

  if (selectedCity.value == null) {
    conform.selectedC = false
  } else {
    conform.selectedC = true
  }

  if (formValues.Street == '') {
    conform.street = false
  } else {
    conform.street = true
  }

  if (formValues.Hrate == '') {
    conform.hrate = false
  } else {
    conform.hrate = true
  }

  if (chipValues.value.skill == '') {
    conform.skill = false
  } else {
    conform.skill = true
  }

  if (selectedEmoji.value == null) {
    conform.selectedM = false
  } else {
    conform.selectedM = true
  }

}


const imageData = ref('/thomas-lean.png');

function changeImg() {

}

function customBase64Uploader(e) {
  const files = e.target.files;
  if (files && files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imageData.value = reader.result;
    }
    reader.readAsDataURL(files[0]);
  }

}


const openImg = ref(true)

function openSelect() {
  openImg.value = !openImg.value
}














const chipValues = ref({ skill: [] });
const chipsRef = ref(null);
console.log(chipValues.value.skill)
// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to update the color of the chips
function updateChipColors() {
  const chipsElements = chipsRef.value.$el.querySelectorAll('.p-chips-token');
  chipsElements.forEach(chip => {
    chip.style.color = getRandomColor();
  });
}

// Watcher to detect changes in the chipValues.skill array
watch(
    () => chipValues.value.skill,
    (newVal, oldVal) => {
      if (newVal.length !== oldVal.length) {
        // Change text color on every entry
        updateChipColors();
      }
    },
    { deep: true }
);

// Ensure chips are colored on initial mount
onMounted(() => {
  updateChipColors();
});

</script>
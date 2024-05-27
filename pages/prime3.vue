<template>

  <div class="flex flex-column md:flex-row min-h-screen	">

<!--left-->
    <div class="md:w-4 px-2 lg:px-5 xl:px-7 bg-blue-600">

      <div class="flex flex-row align-items-center text-white gap-2 mt-3">
        <svg class="text-4xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <g fill="currentColor">
            <path d="M15.907 11.998L10.332 9.23a1 1 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974z" />
            <path d="m11.463 4.054l5.579 3.323A4 4 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65a3.1 3.1 0 0 1-1.55.951c-.022.007-.045.005-.07.01q-.093.045-.191.08l-2.72.667l-1.992 2.48c-.18.227-.41.409-.67.534c.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154a10 10 0 0 0-3.375-2.989a10.1 10.1 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z" />
            <path d="M5.382 17.082v-6.457a3.7 3.7 0 0 1 .45-1.761a3.7 3.7 0 0 1 1.238-1.34a3.92 3.92 0 0 1 3.433-.245q.265.045.508.161l5.753 2.856q.123.075.236.165a2.13 2.13 0 0 0-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a10 10 0 0 0-2.5 3.496a9.9 9.9 0 0 0 .283 8.368a10 10 0 0 0 2.73 3.322a17 17 0 0 1-.424-2.729" />
            <path d="m19.102 16.163l-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.1 4.1 0 0 1-2 .53a3.95 3.95 0 0 1-1.983-.535a3.8 3.8 0 0 1-1.36-1.361a3.75 3.75 0 0 1-.51-1.85a2 2 0 0 1-.043-.26V9.143c0-.024.009-.046.01-.07q-.084.03-.162.07a1.8 1.8 0 0 0-.787 1.516v6.377a10.7 10.7 0 0 0 1.113 4.27a10.11 10.11 0 0 0 8.505-.53a10 10 0 0 0 3.282-2.858a9.9 9.9 0 0 0 1.75-3.97a19.6 19.6 0 0 1-2.845 2.216Z" />
          </g>
        </svg>
        <p class="text-2xl font-semibold ">Flowbite</p>
        <div class="flex flex-row align-items-center gap-2 cursor-pointer hover:text-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144" />
        </svg>
        <p class="text-xs">Go back</p>
        </div>
      </div>

      <div class="text-white border-round-lg bg-blue-500 mb-6 md:mb-0 py-3 px-3 xl:px-4">
        <p class=" text-xl lg:text-2xl  text-gray-100 mb-0 font-semibold ">Your selected plan</p>
        <p class="text-lg text-gray-200  mt-2">30-day free trial</p>

        <div class="flex flex-column gap-2 lg:gap-3 md:text-sm  xl:text-base text-gray-200">
          <div class="flex flex-row align-items-start gap-2 ">
          <i class="pi pi-check mt-1" style="color: lightgreen"></i>
          <p class="my-1">Individual configuration</p>
          </div>
          <div class="flex flex-row align-items-start gap-2 ">
            <i class="pi pi-check mt-1" style="color: lightgreen"></i>
            <p class="my-1">No setup, monthly, or hidden fees</p>
          </div>
          <div class="flex flex-row align-items-start gap-2 ">
          <i class="pi pi-check mt-1" style="color: lightgreen"></i>
          <p class="my-1">Team size:<span class="text-white">  1 developer </span></p>
        </div>
          <div class="flex flex-row align-items-start gap-2 ">
          <i class="pi pi-check mt-1" style="color: lightgreen"></i>
          <p class="my-1">Premium support: <span class="text-white"> 6 months </span></p>
        </div>
          <div class="flex flex-row align-items-start gap-2 ">
          <i class="pi pi-check mt-1" style="color: lightgreen"></i>
          <p class="my-1">Free updates: <span class="text-white"> 6 months </span></p>
        </div>
        </div>
      </div>

    </div>





<!--rignt-->
    <div class="card flex align-items-center justify-content-center md:w-8  ">
      <Stepper class=" w-full md:w-11 lg:w-9 xl:w-8 mt-3 md:mt-0 lg:mt-6 " :pt="{
        nav: {class: ' px-2  md:pl-3   md:w-30rem'}
      }">

        <StepperPanel  header="Header I ">
          <template #header>
            <div class="flex flex-column align-items-center cursor-pointer text-blue-500 hover:text-blue-700">
              <p v-show="!is_valid1" class="my-0">1</p>
            <svg v-show="is_valid1" class=" text-blue-700" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z" />
            </svg>
            <p class="text-xs my-1" :class="is_valid1? 'text-blue-700' : '' ">Personal info</p>
            </div>
          </template>

          <template #content="{ nextCallback }">
            <div class="flex flex-column ">

              <div class=" w-full">

                <!--      headings-->
                <div class="w-full">
                  <p class="font-bold text-xl lg:text-2xl ">Tell us about yourself</p>
                  <p class="text-gray-500 lg:text-lg" >What is your profession ?</p>
                </div>

                <!--      3buttons-->
                <div class="flex flex-column w-full gap-3">
                  <Button @click="toggelBool" label="Secondary" severity="secondary" :class="bools.one? 'border-2 border-blue-600 text-blue-600': ''" class="w-full p-3 flex flex-row align-items-center justify-content-between " >
                    <div class="flex flex-row gap-2 text-sm lg:text-base ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <g fill="currentColor">
                          <path fill-rule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0zm4.5 14.25a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25" clip-rule="evenodd" />
                          <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743q-.134.134-.274.257m2.019-4.124l6.474-6.475a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25q0 .189-.01.375" />
                        </g>
                      </svg>
                      <p class="my-0">I’m a Designer</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                      <path fill="currentColor" fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </Button>

                  <Button @click="toggelBool2" label="Secondary" severity="secondary" :class="bools.two? 'border-2 border-blue-600 text-blue-600': ''" class="w-full p-3 flex flex-row align-items-center justify-content-between" >
                    <div class="flex flex-row gap-2 text-sm lg:text-base ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path fill="currentColor" fill-rule="evenodd" d="M10.218 3.216a.75.75 0 1 0-1.436-.431l-3 10a.75.75 0 0 0 1.436.43l3-10ZM4.53 4.97a.75.75 0 0 1 0 1.06L2.56 8l1.97 1.97a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m6.94 6.06a.75.75 0 0 1 0-1.06L13.44 8l-1.97-1.97a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0" clip-rule="evenodd" />
                      </svg>
                      <p class="my-0">I’m a Developer</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                      <path fill="currentColor" fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </Button>
                  <p v-show="!label" class="text-red-600 font-light text-xs my-0">Please choose one*</p>
                  <Button  @click="handleClick(); is_valid1 ? nextCallback() : ''" label="Next: Account info"  class="w-full  text-sm lg:text-base" />

                  <p class="text-xs lg:text-sm my-0">Already have an account? <span class="text-blue-500 cursor-pointer hover:underline">Login here</span></p>

                </div>

              </div>



            </div>

          </template>
        </StepperPanel>
        <StepperPanel header="Header II">
          <template #header >
            <div class="flex flex-column align-items-center cursor-pointer hover:text-blue-700" :class="is_valid1? 'text-blue-500':''">
              <p v-show="!is_valid2" class="my-0">2</p>
              <svg v-show="is_valid2" class=" text-blue-700" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z" />
              </svg>
              <p class="text-xs my-1" :class="is_valid2? 'text-blue-700' : '' ">Account info</p>
            </div>
          </template>

          <template #content="{ prevCallback, nextCallback }">

            <div class="flex flex-column gap-3 md:gap-4 ">
              <p class="font-bold text-2xl lg:text-2xl pt-3 my-0 ">Account details</p>
<!--              input-->
              <div class="flex flex-column md:flex-row gap-3 md:gap-2 lg:gap-4">
                <div class="flex flex-column w-full gap-2">
                  <label for="username" class="text-xs font-semibold">First Name</label>
                  <InputText class="bg-gray-100 w-full text-sm" id="username" aria-required="true" v-model="formValue.Name" aria-describedby="username-help" placeholder="e.g. Bonnie Green" />
                  <small id="username-help"  v-show="!valueCheck.name" class="text-xs font-light text-red-600">Please enter name*</small>
                </div>
                <div class="flex flex-column w-full gap-2">
                  <label for="username" class="text-xs font-semibold">Email</label>
                  <InputText class="bg-gray-100 w-full text-sm"  id="username" v-model="formValue.Email" aria-describedby="username-help" placeholder="name@flowbite.com" />
                  <small v-show="!valueCheck.email" class="text-xs font-light text-red-600">Incorrect format*</small>
                </div>
              </div>
              <div class="flex flex-column md:flex-row gap-3 md:gap-2 lg:gap-4">
                <div class="flex flex-column w-full gap-2">
                  <label for="username" class="text-xs  font-semibold">Password</label>
                  <InputText type="password" class="bg-gray-100 w-full text-sm" id="username" v-model="formValue.Pass" aria-describedby="username-help" placeholder="•••••••"/>
                  <small   v-show="!valueCheck.pass" class="text-xs font-light text-red-600"> Please enter password*</small>
                </div>
                <div class="flex flex-column w-full gap-2">
                  <label for="username" class="text-xs  font-semibold">Conform Password </label>
                  <InputText type="password" class="bg-gray-100 w-full text-sm" id="username" v-model="formValue.rePass" aria-describedby="username-help" placeholder="•••••••" />
                  <small   v-show="!valueCheck.check" class="text-xs font-light text-red-600">Password did't match*</small>
                </div>
              </div>
              <div class="flex flex-column md:flex-row gap-3 md:gap-2 lg:gap-4">
              <div class="flex flex-column w-full gap-2"  >
                <label for="username" class=" flex flex-row align-items-center gap-1 text-xs  font-semibold">
                  <p class="my-0" > Select Language </p>
                  <svg  xmlns="http://www.w3.org/2000/svg" class="w-1rem text-gray-500" viewBox="0 0 256 256">
                    <path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16" />
                  </svg>
                  </label>
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select" checkmark :highlightOnSelect="false" class="w-full bg-gray-100 " :pt="{
                  input:{class:'text-sm'}
                }" />
                <small   v-show="!valueCheck.selectedC" class=" text-xs font-light text-red-600">No language selected*</small>
              </div>
              <div class="flex flex-column w-full gap-2">
                <label for="username" class="text-xs  font-semibold">Phone</label>
                <InputText type="number" class="bg-gray-100 w-full text-sm"  id="username" v-model="formValue.Number" aria-describedby="username-help" placeholder="+91 54 465145" />
                <small   v-show="!valueCheck.number" class="text-xs font-light text-red-600">Enter phone number*</small>
              </div>
            </div>
<!--                checkbox-->
              <div class="flex flex-row align-items-start  w-11 gap-2  ">
                <Checkbox v-model="Check1" binary required class=""
                :pt="{
                  box:{
                    class:['h-1rem', 'w-1rem']
                  }
                }"
                />
                <p class="text-xs my-0">By signing up, you are creating a Sendinblue account, and you agree to Flowbite's <span class="text-blue-500 cursor-pointer hover:underline"> Terms of Use</span>  and  <span class="text-blue-500 cursor-pointer hover:underline">Privacy Policy</span></p>
              </div>
              <div class="flex flex-column align-items-start w-11 gap-2  ">
                <div class="flex flex-row align-items-start gap-2">
                <Checkbox  v-model="Check2" binary class=""
                           :pt="{
                  box:{
                    class:['h-1rem', 'w-1rem']
                  }
                }"
                />
                <p class="text-xs my-0">Please don't send me any marketing communications.</p>
                </div>
                <p v-show="!valueCheck.checkBox" class="text-xs text-red-600 font-light my-0">Please fill the check boxes</p>
              </div>
            </div>

            <Button  @click="formCheck(); is_valid2 ? nextCallback() : '' " type="submit" label="Next: Confirmation"  class="w-full mt-3 text-sm" />

          </template>
        </StepperPanel>
        <StepperPanel header="Header III">
          <template #header>
            <div class="flex flex-column align-items-center cursor-pointer hover:text-blue-700" :class="is_valid2? 'text-blue-500':''">
              <p class="my-0">3</p>

              <p class="text-xs my-1">Confirmation</p>
            </div>
          </template>
          <template #content="{ prevCallback }">
            <div class="flex flex-column h-12rem">
             <div>

               <svg xmlns="http://www.w3.org/2000/svg" class="w-1 text-green-700" viewBox="0 0 24 24">
                 <path fill="currentColor" d="m10.95 12.7l-1.4-1.4q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712l2.1 2.125q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.3-.712t-.3-.713t-.712-.3t-.713.3zM12 21.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.638T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9" />
               </svg>
               <p class="font-bold text-4xl my-3">Verified</p>
               <p class="text-xl text-gray-500 font-medium">You have successfully verified your account.</p>
               <Button label="Login to your Account" class="w-full" />

             </div>
            </div>





          </template>
        </StepperPanel>

      </Stepper>
    </div>

  </div>



</template>

<script setup>
const active = ref(0);

const showPannel = reactive ({
  Pannel1:true,
  Pannel2:true,
  Pannel3:true,
})





const bools = reactive({
  one:false,
  two:false
})

const is_valid1 = ref(false)
const label = ref(true)
function toggelBool(){
  bools.one = !bools.one
  bools.two = false

}

function toggelBool2(){
  bools.two = !bools.two
  bools.one = false

}

function handleClick() {
  if (bools.one || bools.two) {
    is_valid1.value = true
    label.value = true
    console.log('hello')
  }
  else {
    is_valid1.value = false
    label.value = false
  }
}

// second
const selectedCity = ref();
const cities = ref([
  { name: 'English ', code: 'NY' },
  { name: 'Hindi', code: 'RM' },
  { name: 'French', code: 'LDN' },
  { name: 'German', code: 'IST' },
  { name: 'Abcd', code: 'PRS' }
]);

const formValue = reactive({
  Name:'',
  Email:'',
  Pass:'',
  rePass:'',
  Number:null,
})
const valueCheck = reactive({
  name:true,
  email:true,
  pass:true,
  check:true,
  number:true,
  selectedC: true,
  checkBox:true

})

const Check1 = ref(false)
const Check2 = ref(false)

const regex = /@.*\.com$/;

const is_valid2 = ref(false)

function formCheck(){
  const containdLogo = regex.test(formValue.Email)
  if(!containdLogo){
    valueCheck.email = false
  } else {
    valueCheck.email = true
  }

  if(formValue.Name === ''){
    valueCheck.name = false
  } else {
    valueCheck.name = true
  }

  if(formValue.Pass === ''){
    valueCheck.pass = false
  } else {
    valueCheck.pass = true
  }

  if(formValue.Pass != formValue.rePass){
    valueCheck.check = false
  } else {
    valueCheck.check = true
  }

if(formValue.Number === null){
  valueCheck.number = false
} else {
  valueCheck.number = true
}

  if (selectedCity.value == null) {
    valueCheck.selectedC = false
  } else {
    valueCheck.selectedC = true
  }

  if(Check1.value == false || Check2.value == false){
    valueCheck.checkBox = false
  } else {
    valueCheck.checkBox = true
  }
if( valueCheck.email === true && valueCheck.name === true && valueCheck.pass === true && valueCheck.check === true && valueCheck.number === true && valueCheck.selectedC === true && valueCheck.checkBox === true){
    is_valid2.value = true
  } else {
  is_valid2.value = false
}
}


</script>


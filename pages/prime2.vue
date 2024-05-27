<template>

 <div class="flex flex-column-reverse md:flex-row min-h-screen	">
<!--left-->
   <div class=" w-full md:w-6 flex flex-column align-items-center justify-content-center px-4 xl:px-8">


<!--button-->
<div class="flex flex-column w-full ">
  <p class="font-bold text-lg">Your Best Work Starts Here</p>

  <div class="flex relative gap-3">
    <Button label="  Sign up with Google" severity="secondary" class=" text-gray-900 bg-white border-gray-300 hover:bg-gray-200 w-6 text-xs lg:text-base  "  />
    <svg class="absolute" style=" bottom:28%; right:94%" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
      <path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38" />
      <path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21" />
      <path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9" />
      <path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68" />
      <path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4" />
    </svg>
    <Button label="Sign up with Github" severity="secondary" class=" text-gray-900 bg-white border-gray-300 hover:bg-gray-200 w-6  text-xs lg:text-base  "  />
    <svg  class="absolute" style="bottom:28%; right:42%" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
      <path fill="currentColor" fill-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.98 7.98 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0" clip-rule="evenodd" />
    </svg>
  </div>

<!--lines-->
 <div class="flex align-items-center gap-4 mt-2 text-gray-500">
   <div class="w-6 border-bottom-1 border-gray-300"></div>
   <p>or</p>
   <div class="w-6 border-bottom-1 border-gray-300  "></div>
 </div>


</div>

<!-- inputs-->

<div class="w-full flex flex-column gap-3 my-3">
       <div class="flex flex-column gap-2">
           <label for="username" class="text-sm font-semibold"> What should we call you ? </label>
           <InputText id="username" v-model="formValues.Name" aria-describedby="username-help" placeholder="e.g. Bonnie Green"  />
         <small id="username-help" v-show="!bools.name" class="text-xs text-red-500 font-light">Enter your username to reset your password. *</small>
       </div>
       <div class="flex flex-column gap-2">
       <label for="username"  class="text-sm font-semibold">Email </label>
       <InputText id="username" v-model="formValues.Email" aria-describedby="username-help" placeholder="name@flowbite.com"  />
         <small id="username-help" v-show="!bools.email" class="text-xs text-red-500 font-light"> Please enter correct email format.* </small>
     </div>
       <div class="flex flex-column gap-2">
       <label for="username"  class="text-sm font-semibold">Password </label>
       <inputText type="password" id="username" v-model="formValues.Pass" aria-describedby="username-help" placeholder="••••••••••••" />
         <small id="username-help" v-show="!bools.pass"  class="text-xs text-red-500 font-light">Enter your username to reset your password.*</small>
     </div>
</div>

<!--       checkbox-->
       <div class="card flex flex-column gap-3 mb-3  line-height-3 ">
         <div class="flex flex-row gap-2">
         <Checkbox v-model="Check1" variant="filled" binary />
         <p class="text-xs lg:text-sm my-0 font-light text-gray-600">By signing up, you are creating a Sendinblue account, and you agree to Flowbite’s
         <span class="text-blue-500 cursor-pointer hover:underline">  Terms of Use</span>and <span class="text-blue-500 cursor-pointer hover:underline"> Privacy Policy</span>  .</p>
         </div>
         <div class="flex flex-row gap-2 font-light">
         <Checkbox v-model="Check2" variant="filled" binary />
         <p class="text-xs lg:text-sm my-0  text-gray-600">Email me about product updates and resources.</p>
         </div>
         <span v-show="!bools.check" class="text-red-500 text-xs font-light"> please agree with our T&C by clicking the checkboxes* </span>
         </div>

       <Button @click="valueCheck" label="Sign Up" class="w-full" />
<div class="w-full">
    <p class="text-xs lg:text-sm text-gray-600">Already have an account? <span class="text-blue-500  cursor-pointer hover:underline">Login here </span> </p>
</div>



   </div>









<!--right-->
   <div class=" bg-blue-600  w-full md:w-6 flex flex-column px-4 xl:px-7 	 justify-content-center">
<!--flowbite-->
<div class="flex flex-row align-items-center text-white gap-2 text-2xl font-medium ">
  <svg class="cursor-pointer hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <g fill="currentColor">
      <path d="M15.907 11.998L10.332 9.23a1 1 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974z" />
      <path d="m11.463 4.054l5.579 3.323A4 4 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65a3.1 3.1 0 0 1-1.55.951c-.022.007-.045.005-.07.01q-.093.045-.191.08l-2.72.667l-1.992 2.48c-.18.227-.41.409-.67.534c.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154a10 10 0 0 0-3.375-2.989a10.1 10.1 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z" />
      <path d="M5.382 17.082v-6.457a3.7 3.7 0 0 1 .45-1.761a3.7 3.7 0 0 1 1.238-1.34a3.92 3.92 0 0 1 3.433-.245q.265.045.508.161l5.753 2.856q.123.075.236.165a2.13 2.13 0 0 0-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a10 10 0 0 0-2.5 3.496a9.9 9.9 0 0 0 .283 8.368a10 10 0 0 0 2.73 3.322a17 17 0 0 1-.424-2.729" />
      <path d="m19.102 16.163l-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.1 4.1 0 0 1-2 .53a3.95 3.95 0 0 1-1.983-.535a3.8 3.8 0 0 1-1.36-1.361a3.75 3.75 0 0 1-.51-1.85a2 2 0 0 1-.043-.26V9.143c0-.024.009-.046.01-.07q-.084.03-.162.07a1.8 1.8 0 0 0-.787 1.516v6.377a10.7 10.7 0 0 0 1.113 4.27a10.11 10.11 0 0 0 8.505-.53a10 10 0 0 0 3.282-2.858a9.9 9.9 0 0 0 1.75-3.97a19.6 19.6 0 0 1-2.845 2.216Z" />
    </g>
  </svg>
<p class="cursor-pointer hover:text-blue-800">Flowbite</p>
</div>

     <!--heading-->
<div class="flex flex-column text-white">
<p class="text-3xl lg:text-5xl my-0 font-bold"> Explore the world’s leading designs potfolios </p>
<p class="text-base lg:text-lg my-2 font-light text-gray-300">Millions of designers and agencies around the world showcase their
  portfolio work on Flowbite - the home to the world’s best design and
  creative professionals.</p>
</div>


<!--circles-->
<div class="flex flex-row align-items-center  gap-5 my-2">
  <AvatarGroup class="border-right-1 border-gray-400 cursor-pointer my-3 pr-5">
    <Avatar class="border-none"  image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"  shape="circle" />
    <Avatar class="border-none"  image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"  shape="circle" />
    <Avatar class="border-none"  image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"  shape="circle" />
    <Avatar class="border-none" image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-3.png"  shape="circle" />

  </AvatarGroup>
<p class="text-sm font-light text-gray-300">Rated Best Over <span class="text-white">15.7k</span> Reviews</p>
</div>


   </div>



 </div>

</template>

<script setup>

const bools = reactive({
  name:true,
  email:true,
  pass:true,
  check:true,

})

const formValues = reactive({
Name:'',
  Email:'',
  Pass:'',
})

const Check1 = ref(false)
const Check2 = ref(false)

const regex = /@.*\.com$/;

function valueCheck () {
  const containsLogo = regex.test(formValues.Email)
  if(!containsLogo) {
    bools.email = false
  } else {
    bools.email = true
  }

if (formValues.Name === ''){
  bools.name = false
} else {
  bools.name = true
}

if(formValues.Pass === ''){
  bools.pass = false
} else {
  bools.pass = true
}

if(Check1.value == false || Check2.value == false){
  bools.check = false
} else {
  bools.check = true
}

}





</script>
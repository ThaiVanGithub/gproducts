<template>
   <section class="contact-section bg-dark text-dark py-5 mt-5">
     <div class="container ">
       <div class="text-center mb-5">
     
         <h2 class="section-title text-success">Liên hệ với chúng tôi ngay</h2>
  
       </div>
 
       <div class="row g-5">
         <!-- Contact Form -->
         <div class="col-lg-6">
           <a-card class="contact-card bg-light" :bordered="false">
             <h4 class="mb-4">Send me your messages</h4>
             
             <a-form layout="vertical ">
               <a-form-item label="Your name" class="text-light">
                 <a-input 
                   v-model:value="formData.name" 
                   placeholder="Your name"
                   class="custom-input"
                 >
                   <template #prefix>
                     <UserOutlined class="text-primary" />
                   </template>
                 </a-input>
               </a-form-item>
 
               <a-form-item label="Email" class="text-light">
                 <a-input 
                   v-model:value="formData.email" 
                   placeholder="your Email"
                   type="email"
                   class="custom-input"
                 >
                   <template #prefix>
                     <MailOutlined class="text-primary" />
                   </template>
                 </a-input>
               </a-form-item>
 
               <a-form-item label="Title" class="text-light">
                 <a-input 
                   v-model:value="formData.subject" 
                   placeholder="Title"
                   class="custom-input"
                   
                 >
                   <template #prefix>
                     <NotificationOutlined class="text-primary" />
                   </template>
                 </a-input>
               </a-form-item>
 
               <a-form-item label="Anything else?" class="text-light" >
                 <a-textarea 
                   v-model:value="formData.message" 
                   placeholder="..."
                   
                   :rows="6"
                   class="custom-input border"
                 />
               </a-form-item>
 
               <a-button 
                 type="primary" 
                 size="large" 
                 block 
                 @click="handleSubmit"
                 class="send-btn"
               >
                 <SendOutlined /> Send
               </a-button>
             </a-form>
           </a-card>
         </div>
 
         <!-- Contact Info -->
         <div class="col-lg-6">
           <div class="ps-lg-4">
             <a-card class="info-card bg-light" >
               <h4 class="mb-4">Contact infromation</h4>
               
               <div class="contact-info-item mb-4 ">
                 <div class="icon-wrapper bg-primary">
                  <i class="fa-solid fa-envelope text-white"></i>
                 </div>
                 <div class="ms-3">
                   <h6>Email</h6>
                   <p class="mb-0 text-muted">Vanthaia7@gmail.com</p>
                 </div>
               </div>
 
               <div class="contact-info-item mb-4">
                 <div class="icon-wrapper bg-primary">
                  <i class="fa-solid fa-phone text-white"></i>
                 </div>
                 <div class="ms-3">
                   <h6>Phone number</h6>
                   <p class="mb-0 text-muted">0336 483 290</p>
                 </div>
               </div>
 
               <div class="contact-info-item mb-4">
                 <div class="icon-wrapper bg-primary">
                  <i class="fa-solid fa-location-dot text-light"></i>
                 </div>
                 <div class="ms-3">
                   <h6>Address</h6>
                   <p class="mb-0 text-muted">Cao Lãnh, Đồng Tháp</p>
                 </div>
               </div>
 
               <div class="social-links mt-5">
                 <h6 class="mb-3">Social media</h6>
                 <div class="d-flex gap-3">
                   <a href="#" class="social-icon github">
                    <i class="fa-brands fa-github"></i>
                   </a>
                   <a href="#" class="social-icon linkedin">
                    <i class="fa-brands fa-linkedin"></i>
                   </a>
                   <a href="#" class="social-icon facebook">
                    <i class="fa-brands fa-facebook"></i>
                   </a>
                 </div>
               </div>
             </a-card>
 
             <!-- Map -->
             <div class="mt-4">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0966092835347!2d105.79010831540242!3d21.02880848599841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab584c5b43d7%3A0x7f6c7b23b6b7e6e5!2zSGFub2kgVG93ZXI!5e0!3m2!1sen!2s!4v1658902343750!5m2!1sen!2s" 
                 width="100%" 
                 height="250" 
                 style="border:0;" 
                 allowfullscreen="" 
                 loading="lazy" 
                 class="rounded-3"
               ></iframe>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 </template>
 
 <script setup>
 import { ref } from 'vue';
 import '@/styles/contact.css';
 
 const formData = ref({
   name: '',
   email: '',
   subject: '',
   message: ''
 });
 
 const handleSubmit = () => {
   // Xử lý submit form
   console.log('Form submitted:', formData.value);
   // Reset form
   formData.value = {
     name: '',
     email: '',
     subject: '',
     message: ''
   };
 };
 </script>
 
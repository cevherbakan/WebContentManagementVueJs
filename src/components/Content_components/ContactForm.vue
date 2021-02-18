<template>
    <form role="form" class="contactForm">
              <div class="form-group">
                <div class="validation"></div>
                <input v-model="mail.name" type="text" name="name" class="form-control" id="name" placeholder="Ad Soyad" data-rule="minlen:4" data-msg="*" />

                <p style="color:#903025;">{{warnName}}</p>
              </div>
              <div class="form-group">
                <input v-model="mail.email" type="email" class="form-control" name="email" id="email" placeholder="Email Adresi" data-rule="email" data-msg="*" />

                <p style="color:#903025;">{{warnEmail}}</p>
              </div>
              <div class="form-group">
                <input v-model="mail.subject" type="text" class="form-control" name="subject" id="subject" placeholder="Konu" data-rule="minlen:4" data-msg="*" />
                <p style="color:#903025;">{{warnSubject}}</p>
              </div>
              <div class="form-group">
                <textarea v-model="mail.message" class="form-control" name="message" rows="5" data-rule="required" data-msg="*" placeholder="Mesajınız"></textarea>
                <p style="color:#903025;">{{warnMesaage}}</p>
              </div>
              <div><button @click="sendMail()" type="submit">Gönder</button></div>
    </form>
</template>

<script>
import axios from "axios";
import store from "../store";

export default {
  data() {
    return {
      warnName:"",
      warnEmail:"",
      warnMesaage:"",
      warnSubject:"",
      mail:{
        name:"",
        email:"",
        subject:"",
        message:""
      }
    };
  },
   methods:{
    sendMail: function(){
       axios
        .get("http://www.geoplugin.net/json.gp")
        .then((response) => {

          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });

        console.log(window.location.host);

    var url = store.state.base_url+"mail.php";
    this.warnEmail="";
    this.warnName="";
    this.warnSubject="";
    this.warnMesaage="";

    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var key=true;

    if(!re.test(this.mail.email))
    {
      this.warnEmail="* Lütfen Eposta adresinizi uygun formatta giriniz !";
      key = false;
    }
    if(!(this.mail.name.length>4 && this.mail.name.length<250))
    {
      this.warnName="* Lütfen ad ve soyad alanını 4 ile 250 karakter arasında giriniz !";
      key = false;
    }
    if(!(this.mail.subject.length>4 && this.mail.subject.length<250))
    {
      this.warnSubject="* Lütfen konu alanını 4 ile 250 karakter arasında giriniz !";
        key = false;
    }
    if(!(this.mail.message.length>4 && this.mail.message.length<500))
    {
      this.warnMesaage="* Lütfen mesaj alanını 4 ile 500 karakter arasında giriniz !";
      key = false;
    }


    if(key == false)
    {
      return false;
    }

      var datas = {
        name: this.mail.name,
        email: this.mail.email,
        subject: this.mail.subject,
        message: this.mail.message

      };

      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {
          if(response.data==true)
          {
            location.reload();
          }
          //console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });

    }

  }
};
</script>
<style>
</style>
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth",{
    state : () => ({
        authUser: null,
        authErrors: [],
        authStatus:  null,
        token: null,
        firstName:null,
        lastName:null,
        email:null,
    }),
    // getters:{
    //     user: (state)=>state.authUser,
    //     errors: (state)=>state.authErrors,
    //     status: (state)=>state.authStatus,
    //     token: (state)=>state.token,
    // },
    actions:{
        setUserDetails(res) {
            console.log('setUserDetails', res.data)
            this.$state.id = res.data.user.id
            this.$state.token = res.data.token
            this.$state.firstName = res.data.user.first_name
            this.$state.lastName = res.data.user.last_name
            this.$state.email = res.data.user.email
        },
        // getToken () {
        //     return null;
        // },
        async getToken(){
            //get token
            const data = await axios.get("/sanctum/csrf-cookie");
            this.token = data.data;

        },
        async getUser() {
            //get token
            await this.getToken();
            //get users
            const data = await axios.get("/api/user");
            this.authUser = data.data;
        },
    async handleLogin(data) {
      this.authErrors = [];
      await this.getToken();

      try {
        await axios.post("/login", {
          email: data.email,
          password: data.password,
        });
        this.router.push("/");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleRegister(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await axios.post("/register", {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });
        this.router.push("/");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleLogout() {
      await axios.post("/logout");
      this.authUser = null;
    },
    async handleForgotPassword(email) {
      this.authErrors = [];
      this.getToken();
      try {
        const response = await axios.post("/forgot-password", {
          email: email,
        });
        this.authStatus = response.data.status;
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleResetPassword(resetData){
      this.authErrors=[];
      try {
        const response = await axios.post('/reset-password', resetData);
        this.authStatus = response.data.status;
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    }
    }
})
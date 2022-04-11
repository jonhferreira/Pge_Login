<template>
  <div class="container-login">
    <div class="img-box">
      <img src="../assets/img/fachada_pge.png" />
    </div>

    <div class="content-box">
      <div class="form-box">
        <img src="../assets/img/logo.png" />
        <div class="input-box">
          <span>Usuário</span>
          <input v-model="user" placeholder="Digite o usuário" />
        </div>
        <div class="input-box">
          <span>Senha</span>
          <input
            type="password"
            v-model="password"
            placeholder="Digite a senha"
          />
        </div>
        <div class="remember">
          <a href="#"> Esqueceu sua senha ou bloqueou seu usuário?</a>
        </div>
        <div class="input-box">
          <input @click="send()" type="submit" value="Entrar" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
.container-login {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
}
.img-box {
  width: 50%;
  height: 100%;
  background-color: #eceef0;
}
.img-box img {
  width: 100%;
  height: 100%;
}
.content-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.content-box .form-box {
  width: 75%;
}

.content-box .form-box .ul {
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-box .form-box .ul li {
  list-style: none;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 7px;
  cursor: pointer;
  transition: 0.3s;
}

.content-box .form-box .ul .li:hover {
  background: #f7f9fa;
}

.content-box .form-box img {
  margin-bottom: 15px;
  text-align: center;
  width: 75%;
}

.content-box .form-box .input-box {
  margin-bottom: 20px;
}

.content-box .form-box .input-box input {
  width: 100%;
  padding: 10px;
  outline: none;
  font-weight: 400;
  border: none;
  font-size: 17px;
  color: #32324f;
  background-color: #ecf2f7;
  border-radius: 5px;
}

.content-box .form-box .input-box span {
  font-size: 16px;
  margin-bottom: 5px;
  display: inline-block;
  color: #32324f;
  font-weight: 400;
}

.content-box .form-box .input-box input::placeholder {
  color: #a9adb6;
}

.content-box .form-box .input-box input[type="submit"] {
  background: #4aa4ee;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
  font-size: 20px;
  transition: 0.3s;
}

.content-box .form-box .input-box input[type="submit"]:hover {
  background: #3286ca;
}

.content-box .form-box .remember {
  margin-bottom: 20px;
  color: #32324f;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.content-box .form-box .remember a {
  text-decoration: none;
  color: #4aa4ee;
}

.content-box .form-box .remember a:hover {
  color: #3286ca;
}

@media (max-width: 868px) {
  .container-login .img-box {
    display: none;
  }

  .container-login .content-box {
    width: 100%;
  }

  .container-login .content-box .form-box {
    width: 100%;
    padding: 40px;
    background: #ffffff;
    margin: 50px;
  }
}

@media (max-width: 450px) {
  .container-login .content-box .form-box .remember {
    flex-wrap: wrap;
  }

  .container-login .content-box .form-box .remember a {
    margin-top: 20px;
  }
}
</style>

<script>
import api from "../plugins/axios";
export default {
  data() {
    return {
      user: "",
      password: "",
    };
  },

  methods: {
    async send() {
      var data = {
        user: this.user,
        password: this.password,
      };

      await api
        .post("users/login", data)
        .then((response) => {
          localStorage.getItem("token", response.data.token);
          alert(response.data.mensagem);
          this.$router.push("/home");
        })
        .catch((error) => {
          alert("Usuário ou senha inválido");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
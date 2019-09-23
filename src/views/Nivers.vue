<template>
  <div class="niver">
    <!-- [*QueryParams] Recupera queryparams passados no routerLink -->
    <h1>{{ $route.params.title }}</h1>

      <!-- [*Form] -->
      <form @submit="onClickSubmit" style="display: flex;">
        <md-field style="max-width: 200px;">
          <label>Aniversariante</label>
          <md-input type="text" v-model="person" required/>
        </md-field>
        &nbsp;
        <md-field style="max-width: 200px;">
          <label>Niver</label>
          <md-input type="date" v-model="birthday" required/>
        </md-field>
        &nbsp;

        <!-- [*CustomButton] Utilizando o CSS no [color] -->
        <button class="button">INSERIR</button>
      </form>

      <!-- [*LoopCreation] Varre os aniversarios preenchidos no array 
              o v-for funciona como o ngFor do Angular, criando uma cadeia de componentes
              baseando-se no array passado como parametro -->
      <!-- [*Interop] o @delete associa a funcao delNiver do Parent -->
      <NiverItem v-for="(niver) in nivers"
          :niver="niver"
          :key="niver"
          @delete="delNiver" 
      />

  </div>
</template>

<script>
import NiverItem from './NiverItem.vue'

export default {
  name: 'niver',
  components: {
    NiverItem // [*LoopCreation] Para usar uma classe em outro precisa registra-la
  },
  data(){
    return {
      nivers: Array(),
      person: '',
      birthday: ' ' 
    }
  },
  methods:{
    // [*Submit]
    onClickSubmit(e) {
      this.nivers.push({ list: [this.birthday, this.person] } )

      // Limpa o valor dos campos depois do submit
      this.person = ''
      this.birthday = ' '
      e.preventDefault();
    },
    // [*Delete_Item]
    delNiver(idx) {
        this.nivers.splice(idx, 1)
    }
  }
}
</script>

<style>
  /* [*CustomButton] Definicao do CSS*/
  .button {
      padding: 10px;
      margin-top: 12px;
      border-radius: 5px;
      border: none;
      color: #fff;
      background-color: #007bff;
      font-size: 14px;
      width: 100px;
      height: 40px; 
  }
  .button:hover{
      background-color: #0069d9;
  }
</style>
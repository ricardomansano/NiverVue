<template>
    <!-- [*Template_Item] -->
    <div class="NiverItem" style='
        margin: 0;
        margin-bottom: 2;
        border-bottom-color: #ff0000;
        border-bottom-style: dotted;
        border-bottom-width: 1;'
        >

        <md-button class="md-icon-button"
            @click="delNiver()" style="margin: -5px; margin-top: 10px;"> 
            <md-icon>delete_forever</md-icon>
        </md-button>
        
        | <md-switch v-model="Ativo" value="1" class="md-primary">Ativo</md-switch>
        | {{niver.list[0]}}
        | {{niver.list[1]}}

    </div>
</template>

<script>
export default {
  name: 'niver-item',
  props: ['niver', 'idx'], // [*InputParams] No Vue os parametros sao facilmente acessados via this.PARAM 
  data(){
    return {
      nivers: Array(),
      person: '',
      birthday: ' ',
      Ativo: []
    }
  },
  methods:{
    delNiver() {
        // [*Interop] Gera um EMIT para a funcao delNiver do Parent
        this.$emit('delete', this.idx)
    }
  }
}
</script>

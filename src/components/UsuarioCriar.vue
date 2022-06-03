<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Adicionar Usuário</h3>
            <form action="" @submit.prevent="enviarFormulario">
                <div class="form-group">
                    <label for="">Nome</label>
                    <input type="text" name="" id="" class="form-control" v-model="usuario.nome" required>
                </div>
                <div class="form-group">
                    <label for="">Email</label>
                    <input type="email" name="" id="" class="form-control" v-model="usuario.email" required>
                </div>
                <div class="form-group">
                    <label for="">Telefone</label>
                    <input type="text" name="" id="" class="form-control" v-model="usuario.telefone" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Adicionar</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { db } from '../firebaseDb'
export default {
    data() {
        return {
            usuario: {
                // nome: '',
                // email: '',
                // telefone: ''
            }
        }
    },
    methods: {
        enviarFormulario(event) {
            // alert(JSON.stringify(this.usuario))
            // console.log(this.usuario);
            event.preventDefault();
            db.collection("usuarios").add(this.usuario)
            .then(() => {
                alert('Usuário criado com sucesso!')
                this.usuario.nome = ''
                this.usuario.email = ''
                this.usuario.telefone = ''
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>
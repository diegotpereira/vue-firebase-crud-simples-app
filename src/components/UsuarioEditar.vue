<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Atualizar Usuário</h3>
            <form action="" @submit.prevent="atualizarFormulario">
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
                    <button class="btn btn-primary btn-block">Alterar</button>
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

            }
        }
    },
    created() {
        let dbRef = db.collection('usuarios').doc(this.$route.params.id)
        dbRef.get()
        .then((doc) => {
            this.usuario = doc.data()
        })
        .catch((error) => {
            console.log(error);
        })
    },
    methods: {
        atualizarFormulario(event) {
            event.preventDefault();
            db.collection('usuarios').doc(this.$route.params.id)
            .update(this.usuario)
            .then(() => {
                console.log("Usuário alterado com sucesso!");
                this.$router.push('/lista')
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>
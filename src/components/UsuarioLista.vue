<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuario in Usuarios" :key="usuario.key">
                        <td>{{ usuario.nome }}</td>
                        <td>{{ usuario.email }}</td>
                        <td>{{ usuario.telefone }}</td>
                        <td>
                            <router-link :to="{name: 'editar', params: {id: usuario.key }}" class="btn btn-primary">
                                Editar
                            </router-link>
                            <button class="btn btn-danger" @click.prevent="deletarUsuario(usuario.key)">Deletar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { db } from '../firebaseDb'

export default {
    data() {
        return {
            Usuarios:[]
        }
    },
    created() {
        db.collection('usuarios').onSnapshot((snapshotChange) => {
            this.Usuarios = []
            snapshotChange.forEach((doc) => {
                this.Usuarios.push({
                    key: doc.id,
                    nome: doc.data().nome,
                    email: doc.data().email,
                    telefone: doc.data().telefone
                })
            })
        })
    }
}
</script>
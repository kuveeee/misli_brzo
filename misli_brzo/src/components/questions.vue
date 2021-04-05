<template>
    <div>
        <!-- v-for s kojim ces iterirati po objektu iz firebasea -->
        <!-- Definiraj html pitanja: 1 pitanje 4 odgovora -->
        <div>
            {{pitanje}}
            pitanje
        </div>
    </div>
</template>
<script>
//0. Ukljuciti ovu komponentu u neki view -> recimo testkviz
//1. Definirati pitanja u firebaseu
//2. Definirati izgled komponente u htmlu
//3. Napisati funkciju koja dohvaca podatke iz firebasea
//4. "Spajanje podataka"
//5. Stilizirati css

import firebase from '@/firebase.js' //-> @ == src
export default {
    data() {
        return {
            pitanje: "",
            odgovor1: "",
            odgovor2: "",
            odgovor3: "",
            odgovor4: "",
        }
    },
    //jedna funkcija koja radi random na dohvacanju podataka iz firebase

    db.collection("pitanja_pov")
        .doc("id")
        .get()
        .then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                //lijeva strana : || == desna strana
                //tu punis varijable koje smo definirali u dati
                //varijable iz date  == doc.pitanja
                //
            } else {
                console.log("No such document!");
            }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

}
</script>
<style>

</style>

import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Dashboard')
    }

    async getHtml(){
        return `
            <h1>Breaking Bad</h1>
            <p>Bienvenue sur notre site dédié à la série emblématique Breaking Bad. Plongez dans l'univers captivant de Walter White, un professeur de chimie devenu baron de la drogue, et suivez sa transformation épique dans le monde du crime. Découvrez les personnages complexes, les rebondissements palpitants et l'exploration sans compromis des thèmes de la moralité et de la dualité. Préparez-vous à plonger dans une série inoubliable qui a redéfini le paysage télévisuel.</p>
            <a href="/quotes" data-link>Voir les quotes</a>
        `
    }
}
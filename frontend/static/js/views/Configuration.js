import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Configuration')
    }

    async getHtml(){
        return `
            <h1>Configuration</h1>
            <p>Les paramètres sont l'endroit où vous pouvez personnaliser et configurer divers aspects de votre expérience sur notre site. Ici, vous pouvez ajuster les préférences, modifier les options et adapter le site à vos besoins spécifiques. Explorez les paramètres pour trouver des fonctionnalités supplémentaires et personnaliser votre expérience selon vos préférences.</p>
        `
    }
}
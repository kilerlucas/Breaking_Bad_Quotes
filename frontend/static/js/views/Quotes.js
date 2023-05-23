import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Quotes')
    }

    async getHtml(){

        async function getData(url) {
            const response = await fetch(url)
            return response.json()
        }
        
        const data = await getData('/static/js/views/quote.json')

        let listQuotes = "<ul>"
        for(let i in data) {
            //console.log(i)
            listQuotes += `<li><a href='/quote-view/${data[i]['id']}' data-link>${data[i]['quote']}</a></li>`;
        }
        listQuotes +="</ul>"

        return `
            <h1>Quotes</h1>
        `+listQuotes
    }
}

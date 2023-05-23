import AbstractView from "./AbstractView.js"

export default class extends AbstractView {

    constructor(params) {
        super(params)
        this.setTitle('Visualiser Article')
    }

    async getHtml() {
        const quoteId = this.params.id;
      
        async function getData(url) {
          const response = await fetch(url);
          return response.json();
        }
      
        try {
          const data = await getData('/static/js/views/quote.json');
          const quote = data.find(item => item.id.toString() === quoteId);
      
          if (!quote) {
            throw new Error("Quote não encontrado");
          }
      
          return `
            <h1>${quote.id}</h1>
            <hr>
            <br>
            <p>"${quote.quote}"</p> 
            <strong>(${quote.author})</strong>
            <br>
            <br>
            <hr>
            <br>
            <a href='/quotes' data-link>Retourner</a>
          `;
        } catch (error) {
          console.error(error);
          return `<h1>Ocorreu um erro ao carregar o quote</h1>`;
        }
      }         
}
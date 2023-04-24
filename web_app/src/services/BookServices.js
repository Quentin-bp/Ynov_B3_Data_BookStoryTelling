import clientHelper from "./ClientService"
export default class BookServices {

    static getGenres(){
        return  clientHelper.get("genres") 
    }

    static getAuthors(){
        return  clientHelper.get("authors") 
    }

    static getBooks(){
        return  clientHelper.get("books") 
    }

    static getLanguages(){
        return  clientHelper.get("languages") 
    }
    static searchBooks(params){
        return clientHelper.get("search/"+ params.content +"&maxResults=5&orderBy=newest&printType=books&langRestrict=" + params.langage)
    }
    static handleError(error){
        console.error(error);
    }
}
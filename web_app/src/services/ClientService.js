import {env} from "../var/env";
export default class ClientService {


    static async get(link){
        let res = await fetch(env.REACT_APP_API_PATH + "/" + link);
        return res.json();
    }


    static async post(link,data){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        console.log(requestOptions);
        let res = await fetch(env.REACT_APP_API_PATH + "/" + link, requestOptions);
        return res.json();
    }
    /*
    static async get_without_json(link){
        let res = await fetch(env.REACT_APP_API_PATH + "/" + link);
        //console.log(res.json())
        return res.json();
    }
*/
    static handleError(error){
        console.error(error);
    }
}
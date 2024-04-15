import axios from "axios"

const baseurl = "http://localhost:51259/api/"


export default {
    data(url = baseurl + 'getfiltered_data?lang_id=1') {
        return {
            fetchAll: () => axios.get(url)
        }
    }
}
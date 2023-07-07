import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        
        key: 'cc29f4edd3814c66b8d49897dd6e7cfd'
    }
})
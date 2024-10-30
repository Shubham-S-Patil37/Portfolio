import axios from "axios";

const baseUrl = "http://localhost:5000"
const apiService = {

    sendEmail: async function (params) {
        try {
            await axios({
                method: "POST",
                url: baseUrl + "/sendEmail",
                data: params,
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(resp => { console.log("--------------------   " + resp.data); })
                .catch(err => console.log("///////////////////////  " + err))
        }
        catch (error) {
            console.log("error in sendEmail of apiService")
            console.log(error)
            return null;
        }
    }
}

export default apiService;
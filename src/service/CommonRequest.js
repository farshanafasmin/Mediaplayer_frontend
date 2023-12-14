// first step is to import axios library
import axios from "axios";

// define commonRequest function
export const commonRequest=async(method,url,body)=>{
    // api request configuration

    let requestConfig={
        method,
        url,
        data:body,
        headers:{
            "content-type":"application/json" //normal data
            // if we upload photo, it will be "content-type":"multipart/form-data"
        }
    }


    // api call using axios(common format)

    return await axios(requestConfig).then((response)=>{
        return response
    }).catch((err)=>{
        return err
    })
}
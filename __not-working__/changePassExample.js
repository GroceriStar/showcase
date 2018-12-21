import axios from 'axios'
import { API_ROOT } from '../utils/api-config'


const changePassword = (pass, accessToken) => {
  return new Promise((resolve, reject) => {
    axios.request({
     method: 'post',
     url: API_ROOT + `/api/userData/reset-password?access_token=${accessToken}`,//modify the reset method in
     data: {newPassword: pass }//         userdata.js backend call a different method to handle this
    }).then(response => {
      //  console.log(response)
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
    })
}
export default changePassword

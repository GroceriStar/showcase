import axios from 'axios'
import { API_ROOT } from '../utils/api-config'

const fetchUserData = (userId, accessToken) => {
  return new Promise((resolve, reject) => {
    axios.get(API_ROOT + `/api/userData/${userId}?access_token=${accessToken}`)
      .then((response) => {
      //  console.log(response)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
    })
}
export default fetchUserData

import axios from 'axios'
const getData = async(url)=>{
  try {
    let Res = await axios.get(url)
    return Res;
  } catch (error) {
    return error
  }
}

export default getData;
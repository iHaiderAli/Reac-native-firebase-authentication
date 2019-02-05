import { HEADERS , HEADERS_PROTECTED }  from '../config/constants'

export function handleErrors(response) {
  console.log("handle error",response)
  if (!response.ok) {
    throw Error(response);
  }
  return response;
}


export function getHeaders(route){
  if (route == '/authenticate') {
    return true
  }
}
export function findIndexInData(data, property, value) {
  if(value){
    for(var i = 0, l = data.length ; i < l ; i++) {
      if(data[i][property] === value) {
        return i;
      }
    }
  }
  return -1;
}

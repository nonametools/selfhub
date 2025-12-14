const STORAGE_KEY = 'selfhub_rawapi_v1';

function loadDB(){
  try{
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      tokens:{}, templates:{}, sequences:{}, icon:null
    };
  }catch(e){
    return {tokens:{}, templates:{}, sequences:{}, icon:null};
  }
}

function saveDB(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DB));
  }catch(e){}
}

let DB = loadDB();

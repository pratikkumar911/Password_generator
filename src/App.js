import React,{useState,useEffect} from "react"
import Header from './components/Header'
import Form from './components/Form'
import View from './components/View'

const ALPHABET = "abcdefghijklmnopqrstuvwxtz";
const NUMBERS = "0123456789"
const SYMBOLS = `~\`!@#$%^&*()_-+={[}]|\\:;"'<,>.?/`;

const includes = (a, b) => {
  for(let i = 0; i < b.length; ++i) {
    if(a.includes(b.charAt(i))) {
      return true;
    }
  }
  return false;
}

const validate = (pwd, options) => {  
  if(options.lowercase && !includes(pwd, ALPHABET)) {
    return false;
  }
  if(options.uppercase && !includes(pwd, ALPHABET.toUpperCase())) {
    return false;
  }
  if(options.numbers   && !includes(pwd, NUMBERS)) {
    return false;
  }
  if(options.symbols   && !includes(pwd, SYMBOLS)) {
    return false;
  }
  return true;
};

function App() {
  const [password,setPassword] = useState("");
  const [options,setOptions] = useState(()=>{
    return{
      length:10,
      uppercase:true,
      lowercase:true,
      numbers:true,
      symbols:true
    }
  });
  useEffect(()=>{
    const {length,uppercase,lowercase,numbers,symbols} = options;
    if(!uppercase&&!lowercase&&!symbols&&!numbers){
      setOptions({
        ...options,
        lowercase:true
      })
      return;
    }
    let values="";
    if (uppercase) {
      values += ALPHABET.toUpperCase();
    }

    if (lowercase) {
      values += ALPHABET;
    }

    if (numbers) {
      values += NUMBERS;
    }

    if (symbols) {
      values += SYMBOLS;
    }
    let pwd='';
    if(values.length>0){
      do{
        pwd='';
        for(let index, i=0;i<length;i++){
          index=Math.floor(Math.random()*values.length);
          pwd += values.charAt(index);
        }
      }while(pwd.length>3 && !validate(pwd,options));
    }
    setPassword(pwd)
  },[options]);

  const generate = () => {
    setOptions({
      ...options
    });
  }
  
  return (

    <>
      <Header/>
      <div className="app">
        <View password={password} 
              generate={generate}
        />
        <Form options={options} setOptions={setOptions}/>
      </div>
    </>
  );
}

export default App;

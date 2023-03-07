let data ={
  name:"daniel",
  email:"daniel748@gamil.com",
  password:"daniel849"
}
let fetching= async()=>{
  await fetch("/Signup",{
    method:"POST",
    header:"aapplication/json",
    body:{
      data:data
    }
  }).then((res)=>{
    return res.json();
  }).then((res)=>{
    console..log("sucess fullt ksksod")
  })
}
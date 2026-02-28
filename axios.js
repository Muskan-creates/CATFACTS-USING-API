let url="https://catfact.ninja/fact";

let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let facts=await getinfo();
    console.log(facts);

    let p=document.querySelector("#result");
    p.innerText=facts;
})

// API CALLING
async function getinfo(){
   try{ 
    let res=await axios.get(url);
    // console.log(res);
    // console.log(res.data);
   return(res.data.fact);
}catch(er){
    console.log("Error:-",er);
    return "No Fact Found";
}
}
//Creating the close button and append the child 

var listlength=document.getElementsByTagName("li");

for(let i=0;i<listlength.length;i++)
{
    let ele=document.createElement("span");
    let symbol=document.createTextNode("X");
    ele.className="closebutton";
    ele.appendChild(symbol);
    // console.log(ele);
    listlength[i].appendChild(ele);

}
//CLICKING ON CLOSE BUTTON TO HIDE THE CURRENT ELEMENT

var close=document.getElementsByClassName("closebutton");
console.log(close);
for(let i=0;i<close.length;i++)
{
    close[i].onclick=function(){
        let divele=this.parentElement;
        console.log(divele);
        divele.style.display="none";
    }
}

function newele(){
    var newli=document.createElement("li");
    var input=document.getElementById("input").value;
    var text=document.createTextNode(input);
    newli.appendChild(text);
    if(input==""){
        alert("write something");
    }
    else{
        document.getElementById("lists").appendChild(newli);

    }
    document.getElementById("input").value="";
    let spantag=document.createElement("span");
    var text=document.createTextNode("X");
    spantag.appendChild(text);
    newli.appendChild(spantag);
    newli.className="p";
    spantag.className="closebutton";
    var closelen=document.getElementsByClassName("closebutton");

    for(let i=0;i<closelen.length;i++)
    {
        closelen[i].onclick=function(){
            closelen[i].parentElement.style.display="none";
        }
    }

}
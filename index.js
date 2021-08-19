console.log("HEllo world")
localStorage.clear();
let subbtn= document.getElementById('subbtn');
showNotes();
subbtn.addEventListener("click",function(e)
{
  let addtxt = document.getElementById('addtxt');
  let notes = localStorage.getItem('notes');
  if(notes==null){
      notesobj=[];
  }
  else
  {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  showNotes();
});
function showNotes()
{
    let notes = localStorage.getItem('notes');
    if(notes==null)
    {
        notesobj=[];
    }
    else
    {
      notesobj = JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function(element, index)
    {
        html+=`<div class="card text-center">
        <div class="card-header">
          <h4>NOTE- ${index+1} </h4>
        </div>
        <div class="card-body">
          <p class="card-text">${element}</p>
          <a class="btn btn-primary" id="${index}" onclick="delnote(this.id)">DELETE NOTE</a>
        </div>
        <div class="card-footer text-muted">
        1s ago
        </div>
      </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesobj.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `<b class="center">Nothing to show! Use "Submit" and Add notes Yourself.</b><img src="img3.png">`;
    }
}
function delnote(index)
{
  let notes = localStorage.getItem('notes');
    if(notes==null)
    {
        notesobj=[];
    }
    else
    {
      notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    showNotes();
}
let rer= document.getElementById('re');
rer.addEventListener("click", function(e)
{
  let addtxt = document.getElementById('addtxt');
  addtxt.value = "";
});

let searchtxt= document.getElementById('searchtxt');
searchtxt.addEventListener("input",function(e)
{
  // console.log("hello");
  let inputtxt= searchtxt.value.toLowerCase();
  // console.log(inputtxt);
  let cards=document.getElementsByClassName("card");
  Array.from(cards).forEach(function(element){
    // console.log(element);
   let cardtxt = element.getElementsByTagName("p")[0].innerText;
  //  console.log(cardtxt);
    if(!(cardtxt.includes(inputtxt)))
    {
     element.style.display="none";
     }
     else{
      element.style.display="block";
     }
  });
})
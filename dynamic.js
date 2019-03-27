function loadJson(file,callback){
var xhr= new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
  if(xhr.readyState === 4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
}
xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  careerobjective(data.careerobjective);
  educationdetails(data.educationdetails);
  skills(data.skills);
})
var left=document.querySelector(".left");
function profile(p){
var image=document.createElement("img");
image.src=p.ig;
left.append(image);
var h2=document.createElement("h2");
h2.textContent=p.name;
left.append(h2);
var h3=document.createElement("h3");
h3.textContent=p.designation;
left.append(h3);
var h4=document.createElement("h3");
h4.textContent=p.place;
left.append(h4);
var h5=document.createElement("h3");
h5.textContent=p.mobileno;
left.append(h5);
var h6=document.createElement("h3");
h6.textContent=p.mailid;
left.append(h6);
}

var right=document.querySelector(".right");
function careerobjective(q){
  var b2=document.createElement("h2");
  b2.textContent="Career Objective";
  right.append(b2);
  var b3=document.createElement("hr");
  right.append(b3);
var b1=document.createElement("p");
b1.textContent=q.info;
right.append(b1);
}

function educationdetails(r){
  var c2=document.createElement("h2");
  c2.textContent="Education Details";
  right.append(c2);
  var c3=document.createElement("hr");
  right.append(c3);
  var c1=document.createElement("table");
  var tr1="<tr><th>qualification</th><th>institute</th><th>percentage</th><th>yop</th></tr>";
  var tr2=" ";
  for(var i=0;i<r.length;i++)
  {
    tr2=tr2+"<tr><td>"+r[i].qualification+"</td><td>"+r[i].institute+"</td><td>"+r[i].percentage+"</td><td>"+r[i].yop+"</td></tr>";
  }
  c1.innerHTML=tr1+tr2;
  right.append(c1);
}
function skills(s){
  var d1=document.createElement("h2");
  d1.textContent="skills";
  right.append(d1);
  var b3=document.createElement("hr");
  right.append(b3);
  // var d2=document.createElement("h3");
  // d2.textContent=s.name;
  // right.append(d2);
  var ul=document.createElement("ul");
  for(var i in s){
    var li=document.createElement("li");
    li.innerHTML=s[i].name+":"+s[i].info;
ul.append(li);

  }
right.append(ul);
}

function loadJson(file,callback){
var xhr= new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
	if (xhr.readyState === 4 && xhr.status=="200"){
		callback(xhr.responseText);
	}
};
xhr.send(null);
}
loadJson("dynamic.json",function(text){
let data=JSON.parse(text);
console.log(data);
profile1(data.profile1);
career(data.career);
education(data.education);
skills(data.skills);
})
var profile=document.querySelector(".profile");
function profile1(p){
	var image=document.createElement("img");
	image.src=p.image;
	profile.append(image);
	var h2=document.createElement("h2");
	h2.textContent=p.name;
	profile.append(h2);
	var h1=document.createElement("h1");
	h1.textContent=p.desigigination;
	profile.append(h1);
	var h3=document.createElement("h3");
	h3.textContent=p.phoneno;
	profile.append(h3);
	var h4=document.createElement("h4");
	h4.textContent=p.email;
	profile.append(h4);
}
	var acadamic=document.querySelector(".acadamic");
	function career(c){
		var h1=document.createElement("h1");
		h1.textContent="Career Objective";
		acadamic.append(h1);
		var hr=document.createElement("hr");
		acadamic.append(hr);
		var info=document.createElement("info");
		info.textContent=c.info;
		acadamic.append(info);
	}
function education(e){
	var h1=document.createElement("h1");
	h1.textContent="Education Details";
	acadamic.append(h1);
	var hr=document.createElement("hr");
	acadamic.append(hr);
	var table=document.createElement("table");
acadamic.append(table);
var tr2="<tr><th>Qualification</th><th>Institute</th><th>Percentage</th><th>Yop</th></tr>";
var tr1=" ";
for(var i=0;i<e.length;i++)
{
	tr1=tr1+"<tr><td>"+e[i].Qualification+"</td><td>"+e[i].Institute+"</td><td>"+e[i].Percentage+"</td><td>"+e[i].Yop+"</td></tr>";
}
   table.innerHTML=tr2+tr1;
   acadamic.append(table);
}
function skills(s){
	var h1=document.createElement("h1");
	h1.textContent="skills";
	acadamic.append(h1);
	var hr=document.createElement("hr");
	acadamic.append(hr);
	var ul=document.createElement("ul");
	for(var i in s)
	{
	var li=document.createElement("li");
	li.innerHTML=s[i].Name+":"+[i].Info;
	ul.append(li);
	}
	acadamic.append(ul);
}

const guides = [
  ["BDScript", "Variables with Json", "blue", "tag/bdfd/posts/variables-with-json"],
  ["Forgescript", "Basic Ticket System", "purple", "#"],
  ["HTML", "Basic Ticket System", "red", "#"],
  ];
  
a = document.getElementById("guidecards")
b = [];

for (i = 0; i <guides.length; i++) {
  
  let tag = guides[i][0];
  let title = guides[i][1];
  let colour = guides[i][2];
  let link = guides[i][3];
  
  b = b + "<div class=\"card3\" style=\"background-image: url(\'/logoImg/cardbg.png\');\"> <div class=\"top-container\"> <div class=\"Lol Lol--"+colour+"\">"+tag+"</div></div><div class=\"bottom-container\"><div class=\"middle\"><h4>"+title+"</h4></div><div class=\"bottom\"><a href=\"+link+\"><div class='button -blue center'>View Code</div></a></div></div></div>"
};

a.innerHTML = b;

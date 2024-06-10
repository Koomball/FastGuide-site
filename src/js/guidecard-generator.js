const guides = [
  ["BDScript", "Basic Ticket System", "blue"],
  ["BDScript", "Basic Ticket System", "blue"],
  ["BDScript", "Basic Ticket System", "blue"],
  ["BDScript", "Basic Ticket System", "blue"],
  ["Forgescript", "Basic Ticket System", "purple"],
  ["Forgescript", "Basic Ticket System", "purple"],
  ["Forgescript", "Basic Ticket System", "purple"],
  ["Forgescript", "Basic Ticket System", "purple"],
  ["HTML", "Basic Ticket System", "red"],
  ["HTML", "Basic Ticket System", "red"],
  ["HTML", "Basic Ticket System", "red"],
  ["HTML", "Basic Ticket System", "red"],
  ["BDScript", "Basic Ticket System", "blue"],
  ["BDScript", "Basic Ticket System", "blue"],
  ["BDScript", "Basic Ticket System", "blue"],
  ["BDScript", "Basic Ticket System", "blue"],
  ["Forgescript", "Basic Ticket System", "purple"],
  ["Forgescript", "Basic Ticket System", "purple"],
  ["Forgescript", "Basic Ticket System", "purple"],
  ["Forgescript", "Basic Ticket System", "purple"],
  ["HTML", "Basic Ticket System", "red"],
  ["HTML", "Basic Ticket System", "red"],
  ["HTML", "Basic Ticket System", "red"],
  ["HTML", "Basic Ticket System", "red"],
  ];
  
a = document.getElementById("guidecards")
b = [];

for (i = 0; i <guides.length; i++) {
  
  let x = guides[i][0];
  let y = guides[i][1];
  let colour = guides[i][2];
  
  b = b + "<div class=\"card3\" style=\"background-image: url(\'/logoImg/cardbg.png\');\"><div class=\"top-container\"> <div class=\"Lol Lol--"+colour+"\">"+x+"</div></div><div class=\"bottom-container\"><div class=\"middle\"><h4>"+y+"</h4></div><div class=\"bottom\"><a href=\"/tag/bdfd/posts/variables-with-json/\"><div class='button -blue center'>View Code</div></a></div></div></div>"
};

a.innerHTML = b;
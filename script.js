let bags =  0;
my_color_list = ["blue", "green", "yellow", "black", "orange"];
function noted(){
  for (colors in my_color_list) {
  if (bags < length(my_color_list)) {
    bags += 1;
    document.write("bag "+ bags + "is "+ colors)
  }
}
}

window.onload(noted());
console.log("hey")
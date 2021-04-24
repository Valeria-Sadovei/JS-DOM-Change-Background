let  colors = ["blue", "green", "yellow", "black", "orange", "pink","red" ];
    let i = 0;
    function changeColor() {
    let background = document.getElementById("body");
    if( i >= colors.length ) {
    i = 0;
    }
    background.style.backgroundColor = colors[i];
    i++;
};
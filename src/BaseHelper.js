var inputSize = document.getElementById('array_size');
var array_size = inputSize.value;
var inputTransitionSpeed = document.getElementById("transition_speed");
var inputGenerateArray = document.getElementById("generate_array");

var algorithmButtons=document.querySelectorAll(".algorithms button");

var barLength = [];
var visualBar = [];
var margin_size;
var arrayVisualElement = document.getElementById("array-visualization");
arrayVisualElement.style = "flex-direction:row";


inputGenerateArray.addEventListener("click",generate_array);
inputSize.addEventListener("input",update_array_size);

function generate_array()
{
    arrayVisualElement.innerHTML = "";

    for(var i = 0; i < array_size; i++)
    {
        barLength[i] = Math.floor(Math.random() * 0.5*(inputSize.max - inputSize.min) ) + 10;
        visualBar[i] = document.createElement("div");
        arrayVisualElement.appendChild(visualBar[i]);
        margin_size = 0.1;
        visualBar[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (barLength[i]) + "%;";
    }
}

function update_array_size()
{
    array_size = inputSize.value;
    generate_array();
}

window.onload = update_array_size();

for(var i = 0; i < algorithmButtons.length; i++)
{
    algorithmButtons[i].addEventListener("click",sortArray);
}

function sortArray()
{
    disable_buttons();

    this.classList.add("algorithm_selected");
    switch(this.innerHTML)
    {
        case "Bubble":BubbleSort();
            break;
        case "Selection":SelectionSort();
            break;
        case "Insertion":InsertionSort();
            break;
        case "Merge":MergeSort();
            break;
        case "Quick":QuickSort();
            break;
        case "Heap":HeapSort();
            break;
    }
}

function updateElement(id, value) {
    document.getElementById(id).value = value;
}

function updateSelectedSize(sizeSelected) {
    // document.getElementById("array_size_text").value = sizeSelected;
    updateElement("array_size_text", sizeSelected);
}

function updateSelectedSpeed(speedSelected) {
    // document.getElementById("transition_speed_text").value = speedSelected;
    updateElement("transition_speed_text", speedSelected);
}
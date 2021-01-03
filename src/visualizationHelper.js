var transitionSpeed = 1000;

var timeDelay = 10000/(Math.floor(array_size/10)*transitionSpeed);

var c_delay = 0;

inputTransitionSpeed.addEventListener("input",updateTransitionSpeed);

function updateTransitionSpeed()
{
    transitionSpeed = Math.pow(10, inputTransitionSpeed.value-1);
    
    timeDelay = 10000/(Math.floor(array_size/10)*transitionSpeed);
}

function updateVisualBar(arrayVisualElement, height, color)
{
    window.setTimeout(function(){
        arrayVisualElement.style = " margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay += timeDelay);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i = 0; i < algorithmButtons.length; i++)
        {
            algorithmButtons[i].classList = [];
            algorithmButtons[i].classList.add("algorithm_unselected");

            algorithmButtons[i].disabled = false;
            inputSize.disabled = false;
            inputGenerateArray.disabled = false;
            inputTransitionSpeed.disabled = false;
        }
    },c_delay += timeDelay);
}

function disable_buttons()
{
    for(var i = 0; i < algorithmButtons.length; i++)
    {
        algorithmButtons[i].classList = [];
        algorithmButtons[i].classList.add("algorithm_disabled");

        algorithmButtons[i].disabled = true;
        inputSize.disabled = true;
        inputGenerateArray.disabled = true;
        inputTransitionSpeed.disabled = true;
    }
}
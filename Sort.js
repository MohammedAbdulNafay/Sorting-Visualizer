let arraySize = 40, min = 4, max = 30;
let array = [arraySize];
let sortedArray = [arraySize];

generateArray();

function generateArray()
{
    for(var i = 0; i < arraySize; i++)
    {
        array[i] = generateArrayValue();
    }
}

function generateArrayValue()
{
    return Math.floor(Math.random()*(max-min)+min);
}

bubbleSort(array);

function bubbleSort(array)
{
    sortedArray = Array.from(array);

    for(var i = 0; i < arraySize; i++)
    {
        for(var j = 0; j < arraySize-1; j++)
        {
            if(sortedArray[j] > sortedArray[j+1])
            {
                var x = sortedArray[j];
                sortedArray[j] = sortedArray[j+1];
                sortedArray[j+1] = x;
            }
        }
    }

    return sortedArray;
}
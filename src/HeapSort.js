function HeapSort()
{
    c_delay = 0;
    heap_sort();
    enable_buttons();
}

function swap(i, j)
{
    updateVisualBar(visualBar[i], barLength[i], "red");
    updateVisualBar(visualBar[j], barLength[j], "red");

    var temp = barLength[i];
    barLength[i] = barLength[j];
    barLength[j] = temp;

    //updating height after swapping
    updateVisualBar(visualBar[i], barLength[i], "red");
    updateVisualBar(visualBar[j], barLength[j], "red");

    updateVisualBar(visualBar[i], barLength[i], "blue");
    updateVisualBar(visualBar[j], barLength[j], "blue");
}

function max_heapify(n, i)
{
    var largest = i;
    var l = 2*i+1;
    var r = 2*i+2;

    if(l < n && barLength[l] > barLength[largest])
    {
        if(largest != i)
        {
            updateVisualBar(visualBar[largest], barLength[largest], "blue");
        }
        largest=l;
        updateVisualBar(visualBar[largest], barLength[largest], "red");
    }

    if(r < n && barLength[r] > barLength[largest])
    {
        if(largest != i)
        {
            updateVisualBar(visualBar[largest], barLength[largest], "blue");
        }
        largest=r;
        updateVisualBar(visualBar[largest], barLength[largest], "red");
    }

    if(largest != i)
    {
        swap(i, largest);
        max_heapify(n, largest);
    }
}

function heap_sort()
{
    for(var i = Math.floor(array_size/2)-1; i >= 0; i--)
    {
        max_heapify(array_size, i);
    }

    for(var i = array_size-1; i > 0; i--)
    {
        swap(0, i);
        updateVisualBar(visualBar[i], barLength[i], "green");
        updateVisualBar(visualBar[i], barLength[i], "yellow");

        max_heapify(i, 0);

        updateVisualBar(visualBar[i], barLength[i], "blue");
        updateVisualBar(visualBar[i], barLength[i], "green");
    }
    updateVisualBar(visualBar[i], barLength[i], "green");
}

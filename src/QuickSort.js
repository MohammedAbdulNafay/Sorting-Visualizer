function QuickSort()
{
    c_delay = 0;
    quick_sort(0, array_size-1);
    enable_buttons();
}

function quick_partition(start, end)
{
    var i = start + 1;
    var piv = barLength[start] ;
    updateVisualBar(visualBar[start], barLength[start], "yellow");
    for(var j = start + 1; j <= end ; j++)
    {
        if ( barLength[j] < piv)
        {
            updateVisualBar(visualBar[j], barLength[j], "yellow");

            updateVisualBar(visualBar[i], barLength[i], "red");
            updateVisualBar(visualBar[j], barLength[j], "red");

            var temp = barLength[i];
            barLength[i] = barLength[j];
            barLength[j] = temp;

            updateVisualBar(visualBar[i], barLength[i], "red");
            updateVisualBar(visualBar[j], barLength[j], "red");

            updateVisualBar(visualBar[i], barLength[i], "blue");
            updateVisualBar(visualBar[j], barLength[j], "blue");

            i += 1;
        }
    }
    updateVisualBar(visualBar[start], barLength[start], "red");
    updateVisualBar(visualBar[i-1], barLength[i-1], "red");
    
    var temp = barLength[start];
    barLength[start] = barLength[i-1];
    barLength[i-1] = temp;

    updateVisualBar(visualBar[start], barLength[start], "red");
    updateVisualBar(visualBar[i-1], barLength[i-1], "red");

    for(var t = start; t <= i; t++)
    {
        updateVisualBar(visualBar[t], barLength[t], "green");
    }

    return i-1;
}

function quick_sort(start, end)
{
    if( start < end)
    {
        var piv_pos = quick_partition(start, end) ;     
        quick_sort(start, piv_pos-1);
        quick_sort(piv_pos+1, end) ;
    }
 }
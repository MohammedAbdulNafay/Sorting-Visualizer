function InsertionSort()
{
    c_delay = 0;
    for(var j = 0; j < array_size; j++)
    {
        updateVisualBar(visualBar[j], barLength[j], "yellow");

        var key = barLength[j];
        var i = j-1;
        while(i >= 0 && barLength[i] > key)
        {
            updateVisualBar(visualBar[i], barLength[i], "red");
            updateVisualBar(visualBar[i+1], barLength[i+1], "red");

            barLength[i+1] = barLength[i];
            
            updateVisualBar(visualBar[i], barLength[i], "red");
            updateVisualBar(visualBar[i+1], barLength[i+1], "red");
            
            updateVisualBar(visualBar[i], barLength[i], "blue");
            if(i == (j-1))
            {
                updateVisualBar(visualBar[i+1], barLength[i+1], "yellow");
            }
            else
            {
                updateVisualBar(visualBar[i+1], barLength[i+1], "blue");
            }
            i--;
        }
        barLength[i+1] = key;

        for(var t = 0; t < j; t++)
        {
            updateVisualBar(visualBar[t], barLength[t], "green");
        }
    }
    
    updateVisualBar(visualBar[j-1], barLength[j-1], "green");

    enable_buttons();
}
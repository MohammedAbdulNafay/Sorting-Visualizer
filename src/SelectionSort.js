function SelectionSort()
{
    c_delay = 0;
    for(var i = 0; i < array_size-1; i++)
    {
        updateVisualBar(visualBar[i], barLength[i], "red");
        index_min = i;
        for(var j = i+1; j < array_size; j++)
        {
            updateVisualBar(visualBar[j], barLength[j], "yellow");
            if(barLength[j] < barLength[index_min])
            {
                if(index_min != i)
                {
                    updateVisualBar(visualBar[index_min], barLength[index_min], "blue");
                }
                index_min = j;
                updateVisualBar(visualBar[index_min], barLength[index_min], "red");
            }
            else
            {
                updateVisualBar(visualBar[j], barLength[j], "blue");
            }
        }
        
        if(index_min != i)
        {
            var temp = barLength[index_min];
            barLength[index_min] = barLength[i];
            barLength[i] = temp;

            updateVisualBar(visualBar[index_min], barLength[index_min], "red");
            updateVisualBar(visualBar[i], barLength[i], "red");
            
            updateVisualBar(visualBar[index_min], barLength[index_min], "blue");
        }
        updateVisualBar(visualBar[i], barLength[i], "green");
    }

    updateVisualBar(visualBar[i],barLength[i], "green");

    enable_buttons();
}
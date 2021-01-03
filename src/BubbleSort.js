function BubbleSort()
{
    c_delay = 0;
    for(var i = 0; i < array_size-1; i++)
    {
        for(var j = 0; j < array_size-i-1; j++)
        {
            updateVisualBar(visualBar[j], barLength[j], "yellow");
            updateVisualBar(visualBar[j+1], barLength[j+1], "yellow");

            if(barLength[j] > barLength[j+1])
            {
                updateVisualBar(visualBar[j], barLength[j], "red");
                updateVisualBar(visualBar[j+1], barLength[j+1], "red");

                var temp = barLength[j];
                barLength[j] = barLength[j+1];
                barLength[j+1] = temp;

                updateVisualBar(visualBar[j],barLength[j], "red");
                updateVisualBar(visualBar[j+1],barLength[j+1], "red");
            }
            updateVisualBar(visualBar[j],barLength[j], "blue");
            updateVisualBar(visualBar[j+1], barLength[j+1], "blue");
        }
        updateVisualBar(visualBar[j],barLength[j], "green");
    }

    updateVisualBar(visualBar[0],barLength[0], "green");

    enable_buttons();
}
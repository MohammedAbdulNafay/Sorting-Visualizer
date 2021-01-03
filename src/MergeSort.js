function MergeSort()
{
    c_delay=0;
    merge_partition(0, array_size-1);
    enable_buttons();
}

function merge_sort(start, mid, end)
{
    var p = start, q = mid+1;
    var Arr = [], k = 0;

    for(var i = start; i <= end; i++)
    {
        if(p > mid)
        {
            Arr[k++] = barLength[q++];
            updateVisualBar(visualBar[q-1], barLength[q-1], "red");
        }
        else if(q > end)
        {
            Arr[k++] = barLength[p++];
            updateVisualBar(visualBar[p-1], barLength[p-1], "red");
        }
        else if(barLength[p] < barLength[q])
        {
            Arr[k++] = barLength[p++];
            updateVisualBar(visualBar[p-1], barLength[p-1], "red");
        }
        else
        {
            Arr[k++] = barLength[q++];
            updateVisualBar(visualBar[q-1], barLength[q-1], "red");
        }
    }

    for(var t = 0; t < k; t++)
    {
        barLength[start++] = Arr[t];
        updateVisualBar(visualBar[start-1], barLength[start-1], "green");
    }
}

function merge_partition(start, end)
{
    if(start < end)
    {
        var mid = Math.floor((start + end) / 2);
        updateVisualBar(visualBar[mid], barLength[mid], "yellow");

        merge_partition(start, mid);
        merge_partition(mid+1, end);

        merge_sort(start, mid, end);
    }
}
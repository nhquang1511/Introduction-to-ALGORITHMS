function insertion_sort(n){
    for(i = 1;i++;i<n.length){
        key = a[i]
        j = i - 1
        while(i>0 && a[i]>key){
            a[j+1] = a[j]
            j-=1
        }
        a[j+1] = key
    }
}
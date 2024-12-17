function insertion_sort(n){
    for(i = 1;i<n.length;i++){
        key = n[i]
        j = i - 1
        while(j>0 && n[j]>key){
            n[j+1] = n[j]
            j-=1
        }
        n[j+1] = key
    }
    return n
}
a = [1,5,3,2,9,6]
console.log(insertion_sort(a))
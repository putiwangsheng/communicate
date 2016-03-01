// 算法：js归并排序实现
// 数组ary从p到q是有顺序的，从q到r是有顺序的
    function merge(ary,p,q,r){
        var a = [],
            b = [];
        for(var i = p;i<=q;i++){
            a[a.length] = ary[i];
        }
        for(i = q+1;i<r+1;i++){
            b[b.length] = ary[i];
        }
        a[a.length] = Infinity;
        b[b.length] = Infinity;
        var newAry = [],
            m = 0,
            n = 0,
            len;
        for(i = 0,len = r-p+1;i<len;i++){
            if(a[m] <= b[n]){
                ary[p+i] = a[m];
                m++;
            }else{
                ary[p+i] = b[n];
                n++;
            }
        }
        return ary;
    }

    console.log(merge([12,9,10,1,3],1,2,4));

    function mergeSort(ary,p,r){
        if(p === r){
            return;
        }

        var middle = Math.floor((p + r)/2);
        mergeSort(ary, p, middle);
        mergeSort(ary, middle + 1, r);
        merge(ary, p, middle, r);

        return ary;
    }

    var ary = [2,5,3,1,4,6,8,9,7,10,23,12,7],
        len = ary.length;
    console.log(mergeSort(ary,0,len-1)); //[1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 12, 23]

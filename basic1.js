/**
 * Created by pl on 5/11/15.
 */


//basic 1

x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];

for (var index in x){
    console.log(x[index]);
}

//basic 2

x.push(100);
console.log(x);

//basic 3
y = [3, 1, 'Dojo'];
x.push(y);
console.log(x);

//basic 4
var z = 0;
for (var i=1; i<501; i++){
    z += i;
}
console.log(z);

//basic 5
w = [1, 5, 90, 25, -3, 0];
temp = 0;
for (var j=0; j<w.length; j++){
    if (temp > w[j]){
        temp = w[j];
    }
}
console.log(temp);

//basic 6
tump = 0;
for (var k=0; k< w.length; k++){
    tump += w[k];
}
tump = tump/ w.length;
console.log(tump);
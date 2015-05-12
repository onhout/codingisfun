/**
 * Created by pl on 5/12/15.
 */
//Standalone functions
x=[4, 15, 6, 3];
y=[7, 1, 3, 6, 2];
function sum(x, y){
    var temp = 0;
    for (var i in x){
        temp += x[i];
    }
    for (var j in y){
        temp += y[j];
    }
    console.log(temp);
}

function minimum(x){
    var temp=x[0];
    for (var i in x){
        if (temp > x[i]){
            temp = x[i];
        }
    }
    console.log(temp);
}

function average(x){
    var temp=0;
    for (var i in x){
        temp += x[i];
    }
    temp = temp/(x.length);
    console.log(temp);
}

//assigned to variables

var zesum = function sum(x, y){
    var temp = 0;
    for (var i in x){
        temp += x[i];
    }
    for (var j in y){
        temp += y[j];
    }
    console.log(temp);
};

var zeminimum = function minimum(x){
    var temp = x[0];
    for (var i in x){
        if (temp > x[i]){
            temp = x[i];
        }
    }
    console.log(temp);
};

var zeaverage = function average(x){
    var temp=0;
    for (var i in x){
        temp += x[i];
    }
    temp = temp/(x.length);
    console.log(temp);
};

var part1 = {
    sum: function sum(x, y){
        var temp = 0;
        for (var i in x){
            temp += x[i];
        }
        for (var j in y){
            temp += y[j];
        }
        console.log(temp);
    },
    minimum :function minimum(x){
        var temp=x[0];
        for (var i in x){
            if (temp > x[i]){
                temp = x[i];
            }
        }
        console.log(temp);
    },
    average :function average(x){
        var temp=0;
        for (var i in x){
            temp += x[i];
        }
        temp = temp/(x.length);
        console.log(temp);
    }
};

part1.sum(x, y);


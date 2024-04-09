let size= 0;
let my_array =[];
let result = {};

$("#3x3")[0].onclick= function(){
    size = 3;
    matrix_visibility("3x3");
}
$("#4x4")[0].onclick= function(){
    size = 4;
    matrix_visibility("4x4");
}
$("#5x5")[0].onclick= function(){
    size = 5;
    matrix_visibility("5x5");
}
$("#6x6")[0].onclick= function(){
    size = 6;
    matrix_visibility("6x6");
}
$("#7x7")[0].onclick= function(){
    size = 7;
    matrix_visibility("7x7");
}
$("#8x8")[0].onclick= function(){
    size = 8;
    matrix_visibility("8x8");
}

function matrix_visibility(matrix_size) {
    let curret_table = ("#table_") + matrix_size;
    $("#table_3x3")[0].style.visibility='hidden';
    $("#table_4x4")[0].style.visibility='hidden';
    $("#table_5x5")[0].style.visibility='hidden';
    $("#table_6x6")[0].style.visibility='hidden';
    $("#table_7x7")[0].style.visibility='hidden';
    $("#table_8x8")[0].style.visibility='hidden';
    $("#table_3x3")[0].style.visibility='hidden';
    $(curret_table)[0].style.visibility='visible';
    console.log(size);
return
}
$("#calculate")[0].onclick= function(){
   my_array = create_array();
   const url = 'http://127.0.0.1:5000/calculate'
   fetch(url, {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({array: my_array}),
   }).then(response => response.json()).then(json => {result = json;});
}
function create_array () {
    if (size = 3){
        array = [
            [1, document.getElementById("3_12").value,document.getElementById("3_13").value],
            [document.getElementById("3_21").value, 1, document.getElementById("3_23").value],
            [document.getElementById("3_31").value,document.getElementById("3_32").value, 1]
            ];
    }
    else if (size = 4){
        array = [
            [1,document.getElementById("4_12").value,document.getElementById("4_13").value,document.getElementById("4_14").value],
            [document.getElementById("4_21").value,1,document.getElementById("4_23").value,document.getElementById("4_24").value],
            [document.getElementById("4_31").value,document.getElementById("4_32").value,1,document.getElementById("4_34").value],
            [document.getElementById("4_41").value,document.getElementById("4_42").value,document.getElementById("4_43").value,1]
        ];
    }
    else if (size = 5){
        array = [
            [1,document.getElementById("5_12").value,document.getElementById("5_13").value,document.getElementById("5_14").value,document.getElementById("5_15").value],
            [document.getElementById("5_21").value,1,document.getElementById("5_23").value,document.getElementById("5_24").value,document.getElementById("5_25").value],
            [document.getElementById("5_31").value,document.getElementById("5_32").value,1,document.getElementById("5_34").value,document.getElementById("5_35").value],
            [document.getElementById("5_41").value,document.getElementById("5_42").value,document.getElementById("5_43").value,1,document.getElementById("5_45").value],
            [document.getElementById("5_51").value,document.getElementById("5_52").value,document.getElementById("5_53").value,document.getElementById("5_54").value,1]
        ];
    }
    else if (size = 6){
        array= [
            [1,document.getElementById("6_12").value,document.getElementById("6_13").value,document.getElementById("6_14").value,document.getElementById("6_15").value,document.getElementById("6_16").value],
            [document.getElementById("6_21").value,1,document.getElementById("6_23").value,document.getElementById("6_24").value,document.getElementById("6_25").value,document.getElementById("6_26").value],
            [document.getElementById("6_31").value,document.getElementById("6_32").value,1,document.getElementById("6_34").value,document.getElementById("6_35").value,document.getElementById("6_36").value],
            [document.getElementById("6_41").value,document.getElementById("6_42").value,document.getElementById("6_43").value,1,document.getElementById("6_45").value,document.getElementById("6_46").value],
            [document.getElementById("6_51").value,document.getElementById("6_52").value,document.getElementById("6_53").value,document.getElementById("6_54").value,1,document.getElementById("6_56").value],
            [document.getElementById("6_61").value,document.getElementById("6_62").value,document.getElementById("6_63").value,document.getElementById("6_64").value,document.getElementById("6_65").value,1]
        ];
    }
    else if (size = 7){
        array= [
            [1,document.getElementById("7_12").value,document.getElementById("7_13").value,document.getElementById("7_14").value,document.getElementById("7_15").value,document.getElementById("7_16").value,document.getElementById("7_17").value],
            [document.getElementById("7_21").value,1,document.getElementById("7_23").value,document.getElementById("7_24").value,document.getElementById("7_25").value,document.getElementById("7_26").value,document.getElementById("7_27").value],
            [document.getElementById("7_31").value,document.getElementById("7_32").value,1,document.getElementById("7_34").value,document.getElementById("7_35").value,document.getElementById("7_36").value,document.getElementById("7_37").value],
            [document.getElementById("7_41").value,document.getElementById("7_42").value,document.getElementById("7_43").value,1,document.getElementById("7_45").value,document.getElementById("7_46").value,document.getElementById("7_47").value],
            [document.getElementById("7_51").value,document.getElementById("7_52").value,document.getElementById("7_53").value,document.getElementById("7_54").value,1,document.getElementById("7_56").value,document.getElementById("7_57").value],
            [document.getElementById("7_61").value,document.getElementById("7_62").value,document.getElementById("7_63").value,document.getElementById("7_64").value,document.getElementById("7_65").value,1,document.getElementById("7_67").value],
            [document.getElementById("7_71").value,document.getElementById("7_72").value,document.getElementById("7_73").value,document.getElementById("7_74").value,document.getElementById("7_75").value,document.getElementById("7_76").value,1]
        ];
    }
    else if (size = 8){
        array= [
            [1,document.getElementById("8_12").value,document.getElementById("8_13").value,document.getElementById("8_14").value,document.getElementById("8_15").value,document.getElementById("8_16").value,document.getElementById("8_17").value,document.getElementById("8_18").value],
            [document.getElementById("8_21").value,1,document.getElementById("8_23").value,document.getElementById("8_24").value,document.getElementById("8_25").value,document.getElementById("8_26").value,document.getElementById("8_27").value,document.getElementById("8_28").value],
            [document.getElementById("8_31").value,document.getElementById("8_32").value,1,document.getElementById("8_34").value,document.getElementById("8_35").value,document.getElementById("8_36").value,document.getElementById("8_37").value,document.getElementById("8_38").value],
            [document.getElementById("8_41").value,document.getElementById("8_42").value,document.getElementById("8_43").value,1,document.getElementById("8_45").value,document.getElementById("8_46").value,document.getElementById("8_47").value,document.getElementById("8_48").value],
            [document.getElementById("8_51").value,document.getElementById("8_52").value,document.getElementById("8_53").value,document.getElementById("8_54").value,1,document.getElementById("8_56").value,document.getElementById("8_57").value,document.getElementById("8_58").value],
            [document.getElementById("8_61").value,document.getElementById("8_62").value,document.getElementById("8_63").value,document.getElementById("8_64").value,document.getElementById("8_65").value,1,document.getElementById("8_67").value,document.getElementById("8_68").value],
            [document.getElementById("8_71").value,document.getElementById("8_72").value,document.getElementById("8_73").value,document.getElementById("8_74").value,document.getElementById("8_75").value,document.getElementById("8_76").value,1,document.getElementById("8_78").value],
            [document.getElementById("8_71").value,document.getElementById("8_72").value,document.getElementById("8_73").value,document.getElementById("8_74").value,document.getElementById("8_75").value,document.getElementById("8_76").value,document.getElementById("8_77").value,1]
        ];
    }
    else{
        return false;
    }
    return array;
}

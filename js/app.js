// function getSizeValue(){
//     var selectedValue = $("#size option:selected").val(),
//     return parseInt(selectedValue);
// }
// function getCrust(){
//     var selectedCrust = $("#crust option:selected").val(),
//     return parseInt(selectedCrust);
// }
// function getTopping(){
//     var selectedTopping = $("#topping option:selected").val(),
//     return parseInt(selectedTopping);
// }
// function getQuantity(){
//     var selectedQuantity = $("#quantity option:selected").val(),
//     return parseInt(selectedQuantity);
// }
// function getTotalAmount(){
//     var totalAmount =(getSize() + getCrust() + getTopping()) * getQuantity();
//     alert("You have Ordered" + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you ");
// }

$(document).ready(function(){
        $("#order").click(function(){
            alert("hello")
                var selectedValue = parseInt($("#size option:selected").val()),
                var selectedCrust = parseInt($("#crust option:selected").val()),
                var selectedTopping = parseInt($("#topping option:selected").val()),
                var selectedQuantity =parseInt( $("#quantity option:selected").val()),
                var totalAmount =(selectedValue + selectedCrust + selectedTopping) * selectedQuantity;


                alert("You have Ordered" + selectedQuantity  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  totalAmount  +  ""  +  " Thank you ");

              
                preventDefault();
            }
        )
        
    }
)
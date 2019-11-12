$
(document).ready(
    function(){
        $("#test").click(function(){
           
            var selectedValue = parseInt($("#size option:selected").val());
            var selectedCrust = parseInt($("#crust option:selected").val());
            var selectedTopping = parseInt($("#topping option:selected").val());
            var selectedQuantity =parseInt( $("#quantity option:selected").val());
            var totalAmount = selectedValue+selectedCrust+selectedTopping;
            var final = totalAmount*selectedQuantity;

           
    



        alert("You have Ordered    : " + selectedQuantity  + " pizza.  "   +  " The Total Amount is kshs " +final   + "  Thank you ");
        
        }
        )



        $("#test1").click(
            function(){
                prompt("Enter your physical address below in the format starting with phone number i.e  -07333333-Lavington-Kaunda street-house 3");
                var selectedValue = parseInt($("#size option:selected").val());
            var selectedCrust = parseInt($("#crust option:selected").val());
            var selectedTopping = parseInt($("#topping option:selected").val());
            var selectedQuantity =parseInt( $("#quantity option:selected").val());
                var delivery = 250;
                var totalAmount = (selectedValue+selectedCrust+selectedTopping)*selectedQuantity;
                var final =delivery+totalAmount;

                alert("You have Ordered    : " + selectedQuantity  + " pizza.  "   + "Delivery cost is :"+delivery+ " The Total Amount is kshs " +final   + "  Our delivery team will contact you in a few ");
            }
        )
    }
)
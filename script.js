//document.getElementById("submit").onclick=function()
function submitForm()
            {
                document.getElementById("table").style.display="block";
                
                var table = document.getElementById("table");
                var row = table.insertRow();
                var fname = row.insertCell(0);
                var lname = row.insertCell(1);
                var addr = row.insertCell(2);
                var pin = row.insertCell(3);
                var gen = row.insertCell(4);
                var food = row.insertCell(5);
                var stat = row.insertCell(6);
                var coun = row.insertCell(7);

                var male=document.getElementById("male");
                var female=document.getElementById("female");
                var others=document.getElementById("others");

                if(male.checked==true){
                    gen.innerHTML=male.value;
                }
                else if(female.checked==true){
                    gen.innerHTML=female.value;

                }
                else if(others.checked==true){
                    gen.innerHTML=others.value;

                }
                food.value="";
                var select=document.getElementById("selectbox");
                for(var i=0; i<select.options.length; i++)
                {
                    if(select.options[i].selected===true)
                    {
                        food.value +=select.options[i].value+" ";
                        var res= food.value.split(" ").join("<br>");
                        food.innerHTML=res;
                    }
                }
                
                fname.innerHTML = document.getElementById("fname").value;
                lname.innerHTML = document.getElementById("lname").value;
                addr.innerHTML = document.getElementById("address").value;
                pin.innerHTML = document.getElementById("pincode").value;
                stat.innerHTML = document.getElementById("state").value;
                coun.innerHTML = document.getElementById("country").value;
                
                document.getElementById("btnsubmit").value = "";

                //document.getElementById("submit").reset();
            }
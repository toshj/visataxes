// 'purpose of visit' DOM change

function showHideUnivInfo(){

        if ( document.getElementById('purpose_of_visit').value == "student" || document.getElementById('purpose_of_visit').value == "teacher" )

        {

                document.getElementById('university_information').style.display = 'block';

        }

        else{

                document.getElementById('university_information').style.display = 'none';

        }

}

//did you file Tax Form in 2007, DOM Change

function showHideUinvInfo()

{
       if ( document.getElementById('prev_year_tax_filing').value == "No") 

       {
       
       prev_year_tax_filing = "No";
       
       document.getElementById('prev_tax_form').style.display = 'none';
       
       }

       else

       {

       document.getElementById('prev_tax_form').style.display = 'block';

        }

}


//function for combination of fname and mname
function cmb_name(){
        
        comb_fname_mname =document.getElementById("fname").value+" "+document.getElementById("mname").value;
        
        complete_name = document.getElementById("fname").value+" "+document.getElementById("mname").value+" "+document.getElementById("lname").value;

                document.getElementById("comb_fname_mname").value = comb_fname_mname; 
        
        document.getElementById("complete_name").value = complete_name;
        
        
} 

// single function for usaddress combination

function cmb_us_address()
{

if(!document.getElementById("us_street").value==""){
                comb_us_address1=document.getElementById("us_street").value;
        }
if(!document.getElementById("us_city").value==""){
                comb_us_address2=document.getElementById("us_city").value;
        }
        if(!document.getElementById("us_state").value==""){
                comb_us_address2=comb_us_address2+","+" "+document.getElementById("us_state").value;
        }
        if(!document.getElementById("us_zip").value==""){
                comb_us_address2=comb_us_address2+","+" "+document.getElementById("us_zip").value;
        }


        document.getElementById("comb_us_address2").value= comb_us_address2;

comb_us_address = comb_us_address1 + "," + "" + comb_us_address2 + "," + "" + "United States" ;

        document.getElementById("comb_us_address").value= comb_us_address;

}

//function for uscombination
function cmb_usaddress1(){
        document.getElementById("comb_us_address1").value=document.getElementById("us_street").value;
        cmb_us_address();
}
function cmb_usaddress2(){
        comb_us_address2="";
        if(!document.getElementById("us_city").value==""){
                comb_us_address2=document.getElementById("us_city").value;
        }
        if(!document.getElementById("us_state").value==""){
                comb_us_address2=comb_us_address2+","+" "+document.getElementById("us_state").value;
        }
        if(!document.getElementById("us_zip").value==""){
                comb_us_address2=comb_us_address2+","+" "+document.getElementById("us_zip").value;
        }
        document.getElementById("comb_us_address2").value= comb_us_address2;
        cmb_us_address();
}

//function for comb_foreign_address
function cmb_comb_foreignaddress()

{
        comb_foreign_address="";
        
        comb_foreign_address_street="";
        

        
        if(!document.getElementById("foreign_street").value==""){
                comb_foreign_address_street=document.getElementById("foreign_street").value;
        }
        if(!document.getElementById("foreign_city").value==""){
                comb_foreign_address=document.getElementById("foreign_city").value;
        }
        if(!document.getElementById("foreign_state").value==""){
                comb_foreign_address=comb_foreign_address+","+" "+document.getElementById("foreign_state").value;
        }
        if(!document.getElementById("foreign_zip").value==""){
                comb_foreign_address=comb_foreign_address+","+" "+document.getElementById("foreign_zip").value ;
        }
        
                if(!document.getElementById("residentcountry").value==""){



comb_foreign_address=comb_foreign_address+","+" "+document.getElementById("residentcountry").value;

}
                
document.getElementById("comb_foreign_address").value= comb_foreign_address;

document.getElementById("comb_foreign_address_street").value= comb_foreign_address_street;

}

//function for comb_university_address
function cmb_universityaddress(){
        comb_university_address="";
        if(!document.getElementById("university_street").value==""){
                comb_university_address=document.getElementById("university_street").value;
        }
        if(!document.getElementById("university_city").value==""){
                comb_university_address=comb_university_address+","+" "+document.getElementById("university_city").value;
        }
        if(!document.getElementById("university_state").value==""){
                comb_university_address=comb_university_address+","+" "+document.getElementById("university_state").value;
        }
        if(!document.getElementById("university_zip").value==""){
                comb_university_address=comb_university_address+","+" "+document.getElementById("university_zip").value;
        }
        comb_university_address=comb_university_address+","+" "+"United States"+","+" "+"Phone:";
        if(!document.getElementById("university_phone").value==""){
                comb_university_address=comb_university_address+" "+document.getElementById("university_phone").value;
        }
        document.getElementById("comb_university_address").value = comb_university_address;
}

//function for comb_current_visa_date
function cmb_current_visadate(){
        comb_current_visa_date="";
        if(!document.getElementById("visatype_yr_current").value==""){
                comb_current_visa_date=document.getElementById("visatype_yr_current").value;
        }
        if(!document.getElementById("date_visa_issued").value==""){
                comb_current_visa_date=comb_current_visa_date+","+" "+document.getElementById("date_visa_issued").value;
        }
        document.getElementById("comb_current_visa_date").value = comb_current_visa_date;
}

//function for comb_entry_visa_date

function cmb_entry_visadate()

{
        comb_entry_visa_date="";
        
        if(!document.getElementById("visa_entry").value=="")
        
          {
             
          comb_entry_visa_date=document.getElementById("visa_entry").value;
             
         }        
        
        if(!document.getElementById("date_entry").value=="")
        
            {
            
                comb_entry_visa_date=comb_entry_visa_date +","+" "+document.getElementById("date_entry").value;
                
            }
        
        document.getElementById("comb_entry_visa_date").value = comb_entry_visa_date;
}




//function for comb_tax_forms
function cmbcomb_taxforms(){
        comb_tax_forms="";
        comb_tax_forms="Year 2008"+","+document.getElementById("tax_forms").value;
        document.getElementById("comb_tax_forms").value = comb_tax_forms;
}

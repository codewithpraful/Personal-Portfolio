$(document).ready(function(){

$('#skill2').click(function(){
$('#skills').hide(function(){
    
})

})

$('#skill2').click(function(){
$('#skills2').show(function(){
 console.log('Text2 Is Hide')

})


})


$('#skill3').click(function(){
$('#skills2').hide(function(){
$('#skills3').show(function(){


})

})

$('#skill2').click(function(){
$('#skills3').hide(function(){

})

})
$('#skill').click(function(){
$('#skills2').hide(function(){

})

})

$('#skill').click(function(){
$('#skills').show(function(){
    
})

})


$('#skill').click(function(){
    $('#skills3').hide(function(){
        
    })
    
    })

    $('#skill3').click(function(){
        $('#skills').hide(function(){
            
        })
        
        })

})





})

var sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right = "0";
    
}
function closemenu(){
    sidemenu.style.right = "-200px";

}

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "chaudharyprashant83663@gmail.com",
        Password : "563D572FF1B392FE3640354FC5FA96323168",
        To : 'chaudharyprashant83663@gmail.com',
        From :'chaudharyprashant83663@gmail.com',
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
             + "<br> Email:" + document.getElementById("email").value
             + "<br> Message:" + document.getElementById("message").value
    }).then(
      message => alert(message)
    );


}
















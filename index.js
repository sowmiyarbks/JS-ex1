function myFunction() {

    var age = document.getElementById("myText").value;
    var birthYear = 2018 - age;

    document.getElementById('display').innerHTML = "Your Birth year is " + birthYear;

}



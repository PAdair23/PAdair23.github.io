var age;

age = prompt("Enter your age to see if you can get a discount!")
if (age >=65) {
    output = "Free Friday Coffee Night For Seniors!"
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
}
else {
    output = "Enjoy music and make memories!"
}

document.getElementById("verify").innerHTML = output; 
function optionKey() {
    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        for (let j = 1; j <= 26; j++) {
            var option = document.createElement("option");
            option.value = j;
            option.textContent = j;
            selects[i].appendChild(option);
        }
    }
}

function example1() {
    document.getElementById("originalMessage").value = "Lastima que ya se acabo la clase y quiero desayunar taquitos y no puedo".toUpperCase();
    document.getElementById("key1").value = 16;
    document.getElementById("key2").value = 12;
    document.getElementById("key3").value = 21;
    document.getElementById("key4").value = 3;
    document.getElementById("key5").value = 9;
    document.getElementById("key6").value = 6;
}

function example2() {
    document.getElementById("originalMessage").value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...".toUpperCase();
    document.getElementById("key1").value = 10;
    document.getElementById("key2").value = 11;
    document.getElementById("key3").value = 12;
    document.getElementById("key4").value = 4;
    document.getElementById("key5").value = 5;
    document.getElementById("key6").value = 6;
}

function clear1() {
    document.getElementById("originalMessage").value = "";
    document.getElementById("encryptedMessage").value = "";
    for (let i = 1; i <= 6; i++) {
        document.getElementById("key" + i).value = 1;
    }
}

function allows(event) {
    var keycode = event.KeyCode || event.which;
    var typeTool = String.fromCharCode(keycode);
    if (/[^A-Z\s]/.test(typeTool) && keycode != 13 && keycode != 8) {
        event.preventDefault();
    }
}

function capital(textArea) {
    textArea.value = textArea.value.toUpperCase();
}

function encript() {
    var message = document.getElementById("originalMessage").value;
    var output = "", k = 1;
    for (let i = 0; i < message.length; i++) {
        var letter = message.charCodeAt(i);
        var displacement = parseInt(document.getElementById("key" + k++).value);
        if (letter + displacement > 90) {
            output += String.fromCharCode(letter + displacement - 26);
        } else {
            output += String.fromCharCode(letter + displacement);
        }
        if (k > 6) k = 1;
    }
    document.getElementById("encryptedMessage").value = output.trim();
}

function saveKey() {
    var archive = document.createElement("a");
    var content = Array.from({ length: 6 }, (_, i) =>
        document.getElementById("key" + (i + 1)).value
    ).join(",");
    archive.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
    archive.setAttribute("download", "Key.txt");
    archive.click();
}

function saveMessage() {
    if (document.getElementById("encryptedMessage").value.trim() != "") {
        var archive = document.createElement("a");
        var content = document.getElementById("encryptedMessage").value;
        archive.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
        archive.setAttribute("download", "EncryptedMessage.txt");
        archive.click();
    } else {
        alert("There is no message to save");
    }
}

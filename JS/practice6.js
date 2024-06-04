function writeNote() {

    let writer = document.getElementById("writer");
    let content = document.getElementById("content");
    let writerValue = writer.value;
    let contentValue = content.value;

    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day = String(currentDate.getDate()).padStart(2, '0');
    let hours = String(currentDate.getHours()).padStart(2, '0');
    let minutes = String(currentDate.getMinutes()).padStart(2, '0');
    let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;


    let table = document.getElementById("table");
    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0); 
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2); 

    cell1.innerHTML = writerValue;
    cell2.innerHTML = contentValue;
    cell3.innerHTML = formattedDate;

  }
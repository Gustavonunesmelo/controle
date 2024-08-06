function addRecord() {
    const vehicleId = document.getElementById('vehicleId').value;
    const kmOut = document.getElementById('kmOut').value;
    const kmIn = document.getElementById('kmIn').value;
    const placeOut = document.getElementById('placeOut').value;
    const placeIn = document.getElementById('placeIn').value;
    const timeOut = document.getElementById('timeOut').value;
    const timeIn = document.getElementById('timeIn').value;

    if (!vehicleId || !kmOut || !kmIn || !placeOut || !placeIn || !timeOut || !timeIn) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const table = document.getElementById('recordsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell().textContent = vehicleId;
    newRow.insertCell().textContent = kmOut;
    newRow.insertCell().textContent = kmIn;
    newRow.insertCell().textContent = placeOut;
    newRow.insertCell().textContent = placeIn;
    newRow.insertCell().textContent = timeOut;
    newRow.insertCell().textContent = timeIn;

    // Clear form fields
    document.getElementById('vehicleForm').reset();
}

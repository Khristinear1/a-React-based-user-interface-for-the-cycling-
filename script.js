var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow === null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["nameId"] = document.getElementById("nameId").value;
    formData["destination"] = document.getElementById("destination").value;
    formData["kms"] = document.getElementById("kms").value;
    formData["burnedCal"] = document.getElementById("burnedCal").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("myRide").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.nameId;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.destination;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.kms;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.burnedCal;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nameId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("destination").value = selectedRow.cells[1].innerHTML;
    document.getElementById("kms").value = selectedRow.cells[2].innerHTML;
    document.getElementById("burnedCal").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nameId;
    selectedRow.cells[1].innerHTML = formData.destination;
    selectedRow.cells[2].innerHTML = formData.kms;
    selectedRow.cells[3].innerHTML = formData.burnedCal;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('myRide').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("nameId").value = '';
    document.getElementById("destination").value = '';
    document.getElementById("kms").value = '';
    document.getElementById("burnedCal").value = '';
    selectedRow = null;
}


let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal : ' + bmi;
        }else{
            result.innerHTML = 'Over weight : ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});
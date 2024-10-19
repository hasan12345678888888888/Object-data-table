var stdFirstName = document.getElementById("stdFirstName");
var stdLastName = document.getElementById("stdLastName");
var stdAge = document.getElementById("stdAge");
var stdEdu = document.getElementById("stdEdu");
var stdId = document.getElementById("stdId");
var studentList = [];
var tbody = document.querySelector(".tbody");

function render() {
    tbody.innerHTML = "";
    for (var i = 0; i < studentList.length; i++) {
        tbody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${studentList[i].firstname}</td>
                <td>${studentList[i].lastname}</td>
                <td>${studentList[i].age}</td>
                <td>${studentList[i].education}</td>
                <td>${studentList[i].id}</td>
                <td>
                    <button onclick="deleteData(${i})" class="btn btn-danger btn-sm">Delete</button>
                    <button onclick="editData(${i})" class="btn btn-warning btn-sm">Edit</button>
                </td>
            </tr>`;
    }
}

function addStudent() {
    var student = {
        firstname: stdFirstName.value,
        lastname: stdLastName.value,
        age: stdAge.value,
        education: stdEdu.value,
        id: stdId.value,
    };
    studentList.push(student);
    stdFirstName.value = "";
    stdLastName.value = "";
    stdAge.value = "";
    stdEdu.value = "";
    stdId.value = "";
    render();
}

function deleteData(index) {
    studentList.splice(index, 1);
    render();
}

function editData(index) {
    var newFirstName = prompt("Enter new first name", studentList[index].firstname);
    var newLastName = prompt("Enter new last name", studentList[index].lastname);
    var newAge = prompt("Enter new age", studentList[index].age);
    var newEducation = prompt("Enter new education", studentList[index].education);
    var newId = prompt("Enter new ID", studentList[index].id);

    studentList[index].firstname = newFirstName;
    studentList[index].lastname = newLastName;
    studentList[index].age = newAge;
    studentList[index].education = newEducation;
    studentList[index].id = newId;
    
    render();
}

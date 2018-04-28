$(document).ready(function() {
    getData();
});

function getData() {
    $.ajax({
        url: "http://localhost:8080/WebService/resources/greeting/2",
        method: "GET",
        success: function(data) {
            var html = "";
            for(var i = 0; i < data.length; i++) {
                html += "<p>" + data[i].id + ". " + data[i].name + ", " + data[i].email + ", " + data[i].message + " <button onclick='deleteId(" + data[i].id + ")'>x</button></p>";
            }
            $('.result').html(html);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function deleteId(id) {
    $.ajax({
        url: "http://janeto.us.to:7752/api/contact/" + id,
        method: "DELETE",
        success: function(data) {
            window.alert("Delete id " + id + " successfully !");
            getData();
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function create() {
    var name = $('input[name="name"]').val();
    var email = $('input[name="email"]').val();

    if (name == "" || email == "") {
        window.alert("Name and Email are required !");
    } else {
        $.ajax({
            url: "http://janeto.us.to:7752/api/contact",
            method: "POST",
            headers: {
                ContentType: "application/json"
            },
            data: {
                name: name,
                email: email,
                message: $('textarea').val()
            },
            success: function(data) {
                window.alert("Create successfully !");
                getData();
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
}

// function Fibonacci(n) {
//     if (n == 1 || n == 2) {
//         return 1;
//     } else {
//         return Fibonacci(n-2) + Fibonacci(n-1);
//     }
// }

// var student = {
//     age: 20,
//     name: "Hanh",
//     hi: function() {
//         window.alert("student says hello")
//     }
// };

// var student2 = {};
// student2.address = "JANETO";
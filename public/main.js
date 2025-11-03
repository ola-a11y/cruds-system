// // تعريف المتغيرات
// let title = document.getElementById("title");
// let price = document.getElementById("price");
// let taxes = document.getElementById("taxes");
// let ads = document.getElementById("ads");
// let discount = document.getElementById("discount");
// let total = document.getElementById("total");
// let count = document.getElementById("count");
// let category = document.getElementById("category");
// let create = document.getElementById("create");
// let search = document.getElementById("search");
// let searchMood = 'title'; // وضع البحث الافتراضي
// let mood = 'create'; // وضع الإضافة الافتراضي
// let tmp; // مؤقت لتخزين الفهرس أثناء التحديث

// // دالة لحساب الإجمالي
// function getTotal() {
//     if (price.value !== '') {
//         let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
//         total.innerHTML = `Total: ${result}`;
//         total.style.background = '#a00d02';
        
//     } else {
//         total.innerHTML = 'Total';
//         total.style.background = '#088178';
//     }
// }

// // تحميل البيانات من localStorage
// let dataPro;
// if (localStorage.product && localStorage.product !== "undefined") {
//     try {
//         dataPro = JSON.parse(localStorage.product);
//     } catch (error) {
//         console.error("خطأ في تحليل JSON:", error);
//         dataPro = [];
//     }
// } else {
//     dataPro = [];
// }

// // دالة الإنشاء أو التحديث
// create.onclick = function () {
//     let newPro = {
//         title: title.value.toLowerCase(),
//         price: price.value,
//         taxes: taxes.value,
//         ads: ads.value,
//         discount: discount.value,
//         total: total.innerHTML,
//         count: count.value,
//         category: category.value.toLowerCase(),
//     };

//     if (title.value !== '' && price.value !== '' && category.value !== '' && newPro.count <= 200) {
//         if (mood === 'create') {
//             if (newPro.count > 1) {
//                 for (let i = 0; i < newPro.count; i++) {
//                     dataPro.push(newPro);
//                 }
//             } else {
//                 dataPro.push(newPro);
//             }
//         } else {
//             dataPro[tmp] = newPro;
//             mood = 'create';
//             create.innerHTML = 'Create';
//             count.style.display = 'block';
//         }
//         clearData();
//     } else {
//         alert('Please fill in all required fields correctly.');
//     }

//     localStorage.setItem('product', JSON.stringify(dataPro));
//     showData();
// };

// // دالة لمسح حقول الإدخال
// function clearData() {
//     title.value = '';
//     price.value = '';
//     taxes.value = '';
//     ads.value = '';
//     discount.value = '';
//     total.innerHTML = 'Total';
//     count.value = '';
//     category.value = '';
// }

// // دالة لعرض البيانات
// function showData() {
//     getTotal();
//     let table = '';
//     for (let i = 0; i < dataPro.length; i++) {
//         table += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${dataPro[i].title}</td>
//             <td>${dataPro[i].price}</td>
//             <td>${dataPro[i].taxes}</td>
//             <td>${dataPro[i].ads}</td>
//             <td>${dataPro[i].discount}</td>
//             <td>${dataPro[i].total}</td>
//             <td>${dataPro[i].category}</td>
//             <td><button onclick="updateData(${i})" id="update">Update</button></td>
//             <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
//         </tr>`;
//     }
//     document.getElementById('tbody').innerHTML = table;

//     // عرض زر "حذف الكل"
//     let btnDelete = document.getElementById("deleteAll");
//     if (dataPro.length > 0) {
//         btnDelete.innerHTML = `<button onclick="deleteAll()">Delete All(${dataPro.length})</button>`;
//     } else {
//         btnDelete.innerHTML = '';
//     }
// }

// // دالة لحذف منتج مع تأكيد
// function deleteData(i) {
//     if (confirm("Are you sure you want to delete?")) {
//         dataPro.splice(i, 1);
//         localStorage.product = JSON.stringify(dataPro);
//         showData();
//     }
// }

// // دالة لحذف الكل مع تأكيد
// function deleteAll() {
//     if (confirm("Are you sure you want to delete all products?")) {
//         localStorage.clear();
//         dataPro = [];
//         showData();
//     }
// }

// // دالة لتحديث منتج
// function updateData(i) {
//     title.value = dataPro[i].title;
//     price.value = dataPro[i].price;
//     taxes.value = dataPro[i].taxes;
//     ads.value = dataPro[i].ads;
//     discount.value = dataPro[i].discount;
//     getTotal();
//     count.style.display = 'none';
//     create.innerHTML = 'Update';
//     mood = 'update';
//     tmp = i;
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// // دالة لتحديد وضع البحث
// function getSearchMood(id) {
//     if (id === "searchT") {
//         searchMood = 'title';
//     } else {
//         searchMood = 'category';
//     }
//     search.placeholder = `search by ${searchMood}`;
//     search.focus();
//     search.value = '';
//     showData();
// }

// // دالة للبحث
// function searchDate(value) {
//     let table = '';
//     for (let i = 0; i < dataPro.length; i++) {
//         if (searchMood === 'title' && dataPro[i].title.includes(value.toLowerCase())) {
//             table += generateTableRow(i);
//         } else if (searchMood === 'category' && dataPro[i].category.includes(value.toLowerCase())) {
//             table += generateTableRow(i);
//         }
//     }
//     document.getElementById('tbody').innerHTML = table;
// }

// // دالة مساعدة لإنشاء صف في الجدول
// function generateTableRow(i) {
//     return `
//     <tr>
//         <td>${i + 1}</td>
//         <td>${dataPro[i].title}</td>
//         <td>${dataPro[i].price}</td>
//         <td>${dataPro[i].taxes}</td>
//         <td>${dataPro[i].ads}</td>
//         <td>${dataPro[i].discount}</td>
//         <td>${dataPro[i].total}</td>
//         <td>${dataPro[i].category}</td>
//         <td><button onclick="updateData(${i})" id="update">Update</button></td>
//         <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
//     </tr>`;
// }

// // عرض البيانات عند تحميل الصفحة
// showData();

// Define variables
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let create = document.getElementById("create");
let search = document.getElementById("search");
let searchMood = 'title'; // Default search mode
let mood = 'create'; // Default creation mode
let tmp; // Temporary variable to store index during update

// Function to calculate the total
function getTotal() {
    if (price.value !== '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = `Total: ${result}`;
        total.style.background = '#a00d02';
        
    } else {
        total.innerHTML = 'Total';
        total.style.background = '#088178';
    }
}

// Load data from localStorage
let dataPro;
if (localStorage.product && localStorage.product !== "undefined") {
    try {
        dataPro = JSON.parse(localStorage.product);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        dataPro = [];
    }
} else {
    dataPro = [];
}

// Create or update function
create.onclick = function () {
    let newPro = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),
    };

    if (title.value !== '' && price.value !== '' && category.value !== '' && newPro.count <= 200) {
        if (mood === 'create') {
            if (newPro.count > 1) {
                for (let i = 0; i < newPro.count; i++) {
                    dataPro.push(newPro);
                }
            } else {
                dataPro.push(newPro);
            }
        } else {
            dataPro[tmp] = newPro;
            mood = 'create';
            create.innerHTML = 'Create';
            count.style.display = 'block';
        }
        clearData();
    } else {
        alert('Please fill in all required fields correctly.');
    }

    localStorage.setItem('product', JSON.stringify(dataPro));
    showData();
};

// Function to clear input fields
function clearData() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = 'Total';
    count.value = '';
    category.value = '';
}

// Function to display data
function showData() {
    getTotal();
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table += `
        <tr>
            <td>${i + 1}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">Update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
        </tr>`;
    }
    document.getElementById('tbody').innerHTML = table;

    // Show "Delete All" button
    let btnDelete = document.getElementById("deleteAll");
    if (dataPro.length > 0) {
        btnDelete.innerHTML = `<button onclick="deleteAll()">Delete All(${dataPro.length})</button>`;
    } else {
        btnDelete.innerHTML = '';
    }
}

// Function to delete a product with confirmation
function deleteData(i) {
    if (confirm("Are you sure you want to delete?")) {
        dataPro.splice(i, 1);
        localStorage.product = JSON.stringify(dataPro);
        showData();
    }
}

// Function to delete all with confirmation
function deleteAll() {
    if (confirm("Are you sure you want to delete all products?")) {
        localStorage.clear();
        dataPro = [];
        showData();
    }
}

// Function to update a product
function updateData(i) {
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    getTotal();
    count.style.display = 'none';
    create.innerHTML = 'Update';
    mood = 'update';
    tmp = i;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to set search mode
function getSearchMood(id) {
    if (id === "searchT") {
        searchMood = 'title';
    } else {
        searchMood = 'category';
    }
    search.placeholder = `search by ${searchMood}`;
    search.focus();
    search.value = '';
    showData();
}

// Search function
function searchDate(value) {
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        if (searchMood === 'title' && dataPro[i].title.includes(value.toLowerCase())) {
            table += generateTableRow(i);
        } else if (searchMood === 'category' && dataPro[i].category.includes(value.toLowerCase())) {
            table += generateTableRow(i);
        }
    }
    document.getElementById('tbody').innerHTML = table;
}

// Helper function to generate a table row
function generateTableRow(i) {
    return `
    <tr>
        <td>${i + 1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateData(${i})" id="update">Update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
    </tr>`;
}

// Show data on page load
showData();

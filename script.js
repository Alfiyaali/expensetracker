function savelocalStorage(event){
    event.preventDefault();

    const expense = event.target.expense.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const myObj = {
        expense,
        description,
        category
    }
    localStorage.setItem(myObj.expense, JSON.stringify(myObj));
    showUserOnScreen(myObj);
}

function showUserOnScreen(myObj){
    const parentElement = document.getElementById("listOfItems");
    const childElement = document.createElement('li');

    childElement.textContent = myObj.expense + " - "+myObj.description+" - "+myObj.category

    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button'
    deleteBtn.value = 'Delete Expense'
    deleteBtn.onclick = () =>{
        localStorage.removeItem(myObj.expense);
        parentElement.removeChild(childElement)
    }

    const editbtn = document.createElement('input');
    editbtn.type = 'button'
    editbtn.value = 'Edit Expense'
    editbtn.onclick = () =>{
        localStorage.removeItem(myObj.expense);
        parentElement.removeChild(childElement);
        document.getElementById("expense").value = myObj.expense;
        document.getElementById("description").value = myObj.description;
        document.getElementById("category").value = myObj.category;
    }
    childElement.appendChild(deleteBtn);
    childElement.appendChild(editbtn);
    parentElement.appendChild(childElement);
}
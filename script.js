// Utilities

function converStringToNumber(id){
    const value = document.getElementById(id).innerText;
    const covertedNumber = parseFloat(value);
    return covertedNumber;
}

// Blogs button in/back

document.getElementById('go-to-blogs').addEventListener('click', function(){
    window.location.href = 'blogs.html'
})



// task complete btn 

const allCompleteButtons = document.querySelectorAll('.complete-btn');
    for(let allCompleteButton of allCompleteButtons){
        allCompleteButton.addEventListener('click', function(event){
            alert('Board Updated Successfully')

            // decrease Task Assigned Value 
            const taskAssigned = converStringToNumber('task-assigned');
            document.getElementById('task-assigned').innerText = Math.max(0, taskAssigned - 1);

            // add Total completed tast Value
            const totalCompleteTask = converStringToNumber('total-complete-task');
            document.getElementById('total-complete-task').innerText = totalCompleteTask + 1;

            // Disable btn
            event.target.disabled = true;

            // Add History

            const history = document.getElementById('history');
            const p = document.createElement('p')
            const taskTitle = allCompleteButton.parentElement.parentElement.parentElement.childNodes[3].innerText;
            p.innerText = `You have Complete The Task ${taskTitle} at` 
            p.className = 'mb-7 p-3 bg-[#F4F7FF] rounded-lg'
            history.appendChild(p)

            


            

        })
    }

// Clear History btn 

document.getElementById('clear-history').addEventListener('click', function (){
    const historyelements = document.querySelectorAll('#history p')
        for(let historyelement of historyelements){
            historyelement.classList.add('hidden')
        }
})


// Change Background color Randomly

document.getElementById('color-btn').addEventListener('click', function(){
    const colorCode = Math.floor(Math.random()*10);
    if(colorCode === 1){
        document.getElementById('full-body').style.backgroundColor = '#ff9999'
    }
    else if(colorCode === 2){
        document.getElementById('full-body').style.backgroundColor = '#ff99e9'
    }
    else if(colorCode === 3){
        document.getElementById('full-body').style.backgroundColor = '#df99ff'
    }
    else if(colorCode === 4){
        document.getElementById('full-body').style.backgroundColor = '#bd99ff'
    }
    else if(colorCode === 5){
        document.getElementById('full-body').style.backgroundColor = '#99c0ff'
    }
    else if(colorCode === 6){
        document.getElementById('full-body').style.backgroundColor = '#99ffdd'
    }
    else if(colorCode === 7){
        document.getElementById('full-body').style.backgroundColor = '#99ff9b'
    }
    else if(colorCode === 8){
        document.getElementById('full-body').style.backgroundColor = '#d1ff99'
    }
    else if(colorCode === 9){
        document.getElementById('full-body').style.backgroundColor = '#ffe499'
    }
    else{
        document.getElementById('full-body').style.backgroundColor = '#ffb399'
    }
})


// Get current Date
const weekday = ['Sun','Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const fullDate = new Date();
let day = fullDate.getDay();
document.getElementById('day-name').innerHTML = weekday[day]

const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let month = fullDate.getMonth();
document.getElementById('month-name').innerHTML = monthName[month];

let date = fullDate.getDate();
document.getElementById('today-date').innerHTML = date;

let fullYear = fullDate.getFullYear();
document.getElementById('current-year').innerHTML = fullYear;


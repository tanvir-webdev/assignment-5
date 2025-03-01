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


// 





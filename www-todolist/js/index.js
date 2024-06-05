
function ajouterTache() {
    const taskField = document.getElementById('taskField');
    const taskList = document.getElementById('taskList');

    if (taskField.value) 
    {
        let newItem = document.createElement('li');
        newItem.innerHTML = taskField.value;
        taskList.appendChild(newItem);
        // taskList.innerHTML += `<li>${taskField.value}</li>`;
        //$(taskList).listview('refresh');


        $(newItem).on('swiperight', function(e){
            //console.log("swiperight");
            $(this).toggleClass('termine');
        });


        
            //taskField.select();

            $(newItem).on('swipeleft', function(e){
                //console.log("swipeleft");
                $(this).hide('slow', function(){
                    $(this).remove();

                });
              
            });
            
            
        //taskField.select();

        //$(taskField).on('swipeleft', function(e){
            //console.log("swipeleft");
           // $(this).remove();
       // });

        $(taskList).listview('refresh');
}

    }

    


function reinitialiserListe() {
    const taskField = document.getElementById('taskField');
    taskList.innerHTML = '';

    taskField.value = '';
    taskList.innerHTML = '';
    taskField.focus();
}

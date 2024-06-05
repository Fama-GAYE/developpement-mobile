
/*function ajouterTache() {
    const taskField = document.getElementById('taskField');
    const tasklistEncours = document.getElementById('tasklistEncours');
    const taskListTermine= document.getElementById('taskListTermine');

    if (taskField.value) 
    {
        let newItem = document.createElement('li');
        newItem.innerHTML = taskField.value;
        tasklistEncours.appendChild(newItem);
        // taskList.innerHTML += `<li>${taskField.value}</li>`;
        //$(taskList).listview('refresh');

            $(newItem).on('swiperight', function(e){

                tasklistEncours.appendChild(this);
            });


        
            //taskField.select();

            $(newItem).on('swipeleft', function(e){
                //console.log("swipeleft");
                $(this).hide('slow', function(){
                    $(this).remove();

                });
              
            });
            $(tasklistEncours).listview('refresh');
            $(taskListTermine).listview('refresh');
            
        //taskField.select();

        //$(taskField).on('swipeleft', function(e){
            //console.log("swipeleft");
           // $(this).remove();
       // });

        //$(taskList).listview('refresh');

    }
    taskField.value = '';
    taskField.focus();


}



function reinitialiserListe() {
    const taskField = document.getElementById('taskField');
    const task = document.getElementById("taskList");
    taskList.innerHTML = '';

    taskField.value = '';
    taskList.innerHTML = '';
    taskField.focus();
}*/


/*function ajouterTache() {
    const taskField = document.getElementById('taskField');
    const tasklistEncours = document.getElementById('tasklistEncours');
    const tasklistTermine = document.getElementById('tasklistTermine');

    if (taskField.value) {
        let newItem = document.createElement('li');
        newItem.innerHTML = taskField.value;
        tasklistEncours.appendChild(newItem);
        $(tasklistEncours).listview('refresh');

        $(newItem).on('swiperight', function(e) {
            tasklistEncours.removeChild(this);
            tasklistTermine.appendChild(this);
            $(tasklistEncours).listview('refresh');
            $(tasklistTermine).listview('refresh');
        });

        $(newItem).on('swipeleft', function(e) {
            supprimerTache(this, tasklistEncours);
        });
    }

    taskField.value = '';
    taskField.focus();
}

function supprimerTache(tache, listeParente) {
    $(tache).hide('slow', function() {
        listeParente.removeChild(tache);
        $(listeParente).listview('refresh');
    });
}

function reinitialiserListe() {
    const tasklistEncours = document.getElementById('tasklistEncours');
    const tasklistTermine = document.getElementById('tasklistTermine');
    const taskField = document.getElementById('taskField');

    tasklistEncours.innerHTML = '';
    tasklistTermine.innerHTML = '';
    taskField.value = '';

    $(tasklistEncours).listview('refresh');
    $(tasklistTermine).listview('refresh');
    taskField.focus();
}*/



function ajouterTache() {
    const taskField = document.getElementById('taskField');
    const taskListEncours = document.getElementById('taskListEncours');
    const taskListTermine = document.getElementById('taskListTermine');

    if (taskField.value) {
        let newItem = document.createElement('li');
        newItem.innerHTML = taskField.value;
        taskListEncours.appendChild(newItem);
        $(taskListEncours).listview('refresh');

        $(newItem).on('swiperight', function(e) {
            taskListEncours.removeChild(this);
            taskListTermine.appendChild(this);
            $(taskListEncours).listview('refresh');
            $(taskListTermine).listview('refresh');
        });

        $(newItem).on('swipeleft', function(e) {
            supprimerTache(this, taskListEncours);
        });

    }

    taskField.value = '';
    taskField.focus();
}

function supprimerTache(tache, listeParente) {
    $(tache).hide('slow', function() {
        listeParente.removeChild(tache);
        $(listeParente).listview('refresh');
    });
}

function reinitialiserListe() {
    const taskListEncours = document.getElementById('taskListEncours');
    const taskListTermine = document.getElementById('taskListTermine');
    const taskField = document.getElementById('taskField');

    taskListEncours.innerHTML = '';
    taskListTermine.innerHTML = '';
    taskField.value = '';

    $(taskListEncours).listview('refresh');
    $(taskListTermine).listview('refresh');
    taskField.focus();
}
/* Variables del manejo de la iteración y turnos */
var turn = parseInt(document.getElementById('turnNumber').textContent);
var iteration = parseInt(document.getElementById('iterationNumber').textContent);

/* Variables para identificar el elemento, el origen y el destino del evento de drop */
var element;
var sourceCol;
var targetCol;

/* Custom Dragula JS */
var drake = dragula([
  document.getElementById("ready"),
  document.getElementById("col2"),
  document.getElementById("col3"),
  document.getElementById("complete")
]);

drake.on("drop", function(el, target, source){
    el.className += "ex-moved";
    element = el;
    targetCol = target;
    sourceCol = source;
});

/* Event after drop */
drake.on("dragend", function(el){
  showStats();
});

/*
function removeButton(el) {
  if(el.getElementsByClassName('btn')[1] != null && el.parentNode.id != "ready"){
    el.getElementsByClassName('btn')[1].remove();
  }
}
*/

/* After iteration 3 each time a task is dropped to the second column, stats will be shown */
function showStats() {
  /* Cambia el valor de toReady para saber en que iteracion es pasada de ready a col2 */
  if(iteration == 3 && sourceCol.id == "ready" && targetCol.id == "col2"){
    element.getElementsByClassName('toReady')[0].innerHTML = iteration;
  }

  if (element.getElementsByClassName('toReady')[0].textContent == 3 && sourceCol.id == "ready" && targetCol.id == "col2") {
    /* Show StarDay label and set actual turn */
    if(element.getElementsByClassName('stats')[0].hasAttribute("hidden") && element.getElementsByClassName('startDay')[0].hasAttribute("hidden")){
      element.getElementsByClassName('stats')[0].attributes.removeNamedItem("hidden");
      element.getElementsByClassName('startDay')[0].attributes.removeNamedItem("hidden");
      element.getElementsByClassName('startDay')[0].innerHTML = turn;
    }
  } else if (element.getElementsByClassName('toReady')[0].textContent == 3 && sourceCol.id == "col3" && targetCol.id == "complete") {
    /*Show EndDay label and set actual turn*/
    if(element.getElementsByClassName('stats')[1].hasAttribute("hidden") && element.getElementsByClassName('endDay')[0].hasAttribute("hidden")){
      element.getElementsByClassName('stats')[1].attributes.removeNamedItem("hidden");
      element.getElementsByClassName('endDay')[0].attributes.removeNamedItem("hidden");
      element.getElementsByClassName('endDay')[0].innerHTML = turn;
    }
  }
}

/* Vanilla JS to add a new task */
function addTask() {
  /* Get task text from input */
  var inputTask = document.getElementById("taskText").value;
  /* Add task to the 'To Do' column */
  document.getElementById("ready").innerHTML +=
  "<li><div class='task'><div class='portlet'><div class='portlet-header'><form class='form-inline'><div class='form-group'><select class='form-control' id='names'><option></option><option>MG</option><option>AM</option><option>CT</option><option>PM</option><option>JS</option></select></div><div class='form-group'><label class='stats' hidden>SD</label><label class='startDay' hidden></label></div><div class='form-group'><label class='stats' hidden>ED</label><label class='endDay' hidden></label></div></form></div><div class='portlet-content'><p>" +  inputTask + "</p><br></div><div class='portlet-footer'><form class='form-inline'><div class='form-group'><div class='btn-group-toggle' data-toggle='buttons'><label class='btn btn-primary btn-sm'><input type='checkbox' checked autocomplete='off'>B</label></div></div><label class='toReady' hidden>"+ iteration + "</label><button type='button' class='btn btn-danger btn-sm' onclick='removeTask(this.parentNode.parentNode.parentNode.parentNode)'><span class='glyphicon glyphicon-trash'></span></button></form></div></div></div></li>"

  /* Clear task text from input after adding task */
  document.getElementById("taskText").value = "";
}

/* Funtion to add turns to the game with a limit of 99 */
function addTurn() {
  if(turn < 99){
    turn += 1;
  }
  document.getElementById('turnNumber').innerHTML = turn;
}

/* Funtion to add a new iteration to the game with a limit of 3 */
function addIteration() {
  if (iteration < 3){
    iteration += 1;
  }
  document.getElementById('iterationNumber').innerHTML = iteration;

  if(iteration >= 2 && document.getElementsByClassName("colLimits")[0].hasAttribute("hidden") && document.getElementsByClassName("colLimits")[1].hasAttribute("hidden")){
    document.getElementsByClassName("colLimits")[0].attributes.removeNamedItem("hidden");
    document.getElementsByClassName("colLimits")[1].attributes.removeNamedItem("hidden");
  }
}

/* Button to remove the actual task*/
function removeTask(idTask) {
  idTask.remove();
}

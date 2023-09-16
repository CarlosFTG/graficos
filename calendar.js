function makeCalendar(yearCalendar) {

    for (let i = 0; i < yearCalendar.length; i++) {

        var elemDiv = document.createElement('div');
        document.body.appendChild(elemDiv);
        elemDiv.className = 'calendar';
        elemDiv.style.display = "block";

        var ulDiv = document.createElement("ul");
        ulDiv.className = 'month';
        elemDiv.appendChild(ulDiv);

        var liDiv = document.createElement("li");
        liDiv.className = 'month';
        liDiv.appendChild(document.createTextNode(setMonth(yearCalendar[i].workingDays[0].day.getMonth() + 1)));
        ulDiv.appendChild(liDiv);

        var ulWeekDays = document.createElement("ul");
        ulWeekDays.className = "weekdays"
        elemDiv.appendChild(ulWeekDays);

        createDaysHeader(ulWeekDays);

        //se añaden los días al calendario
        var ulDays = document.createElement("ul");
        ulDays.className = 'days';
        elemDiv.appendChild(ulDays);


        let calendarStarted = false;
        for (let z = 0; z < yearCalendar[i].workingDays.length; z++) {

            var li = document.createElement("li");
            //li.appendChild(document.createTextNode(yearCalendar[i].workingDays[z].day.getDate()));
            if (!calendarStarted) {
                calendarStarted = true;
                getStartingDay(yearCalendar[i].workingDays[z].day, ulDays);
            } else {
                li = document.createElement("li");
                li.appendChild(document.createTextNode(yearCalendar[i].workingDays[z].day.getDate()));
                ulDays.appendChild(li);
            }

            //ulDays.appendChild(li);
            drawShift(yearCalendar[i].workingDays[z].turno, li);
        }
    }
}

//busca el día de la semana en que empieza el mes para poner
//el primer día del mes en él
function getStartingDay(day, ulDays) {
    if (day.getDay() == 1) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(day.getDate()));
        ulDays.appendChild(li);
    } else if (day.getDay() == 2) {
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(day.getDate()));
        ulDays.appendChild(li);
    }
    else if (day.getDay() == 3) {
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(day.getDate()));
        ulDays.appendChild(li);
    }
    else if (day.getDay() == 4) {
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(day.getDate()));
        ulDays.appendChild(li);
    }
    else if (day.getDay() == 5) {
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(day.getDate()));
        ulDays.appendChild(li);
    }
    else if (day.getDay() == 6) {
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(day.getDate()));
        ulDays.appendChild(li);
    }
    else if (day.getDay() == 6) {
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        ulDays.appendChild(li);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(day.getDate()));
        ulDays.appendChild(li);
    }
}

//pone color al día en función del turno
function drawShift(turno, li) {
    if (turno == "M") {
        li.className = 'morning'
    } else if (turno == 'T') {
        li.className = 'afternoon'
    } else if (turno == 'N') {
        li.className = 'night'
    } else {
        li.className = 'break'
    }

}

//crea la cabecera con el nombre de los días por cada mes
function createDaysHeader(ulWeekDays) {
    //HACER MÉTODO EXTERNO
    var liDaysM = document.createElement("li");
    var liDaysT = document.createElement("li");
    var liDaysW = document.createElement("li");
    var liDaysTh = document.createElement("li");
    var liDaysF = document.createElement("li");
    var liDaysSat = document.createElement("li");
    var liDaysSun = document.createElement("li");

    liDaysM.appendChild(document.createTextNode('L'));
    liDaysT.appendChild(document.createTextNode('M'));
    liDaysW.appendChild(document.createTextNode('X'));
    liDaysTh.appendChild(document.createTextNode('J'));
    liDaysF.appendChild(document.createTextNode('V'));
    liDaysSat.appendChild(document.createTextNode('S'));
    liDaysSun.appendChild(document.createTextNode('D'));

    ulWeekDays.appendChild(liDaysM);
    ulWeekDays.appendChild(liDaysT);
    ulWeekDays.appendChild(liDaysW);
    ulWeekDays.appendChild(liDaysTh);
    ulWeekDays.appendChild(liDaysF);
    ulWeekDays.appendChild(liDaysSat);
    ulWeekDays.appendChild(liDaysSun);
}

function setMonth(month) {
    switch (month) {
        case 1:
            return 'Enero';
        case 2:
            return 'Febrero';
        case 3:
            return 'Marzo';
        case 4:
            return 'Abril';
        case 5:
            return 'Mayo';
        case 6:
            return 'Junio';
        case 7:
            return 'Julio';
        case 8:
            return 'Agosto';
        case 9:
            return 'Septiembre';
        case 10:
            return 'Octubre';
        case 11:
            return 'Noviembre';
        case 12:
            return 'Diciembre';
        default:
            console.log('Sin mes');
    }


}
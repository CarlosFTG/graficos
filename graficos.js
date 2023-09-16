const yearCalendar = [];

var x = document.getElementById("calendar");

        function calculate() {
            
            const selectedDate = new Date(document.querySelector('input[type="date"]').value);
            const turno = document.querySelector('#turno').value
            const lastYearDay = new Date(selectedDate.getFullYear(), 11, 31);

            let monthCalendar = { workingDays: [] };

            let currentMonth;

            //comprobar que el día no es 31 de diciembre para que siga calculando
            while (selectedDate < lastYearDay) {
                //sumar un día
                let dayTomorrow = new Date(selectedDate.setDate(selectedDate.getDate() + 1));
                let workingDay = { day: dayTomorrow, turno: null };

                //se comprueba si sigue en días del mismo mes o cambia de mes
                if (currentMonth == selectedDate.getMonth() || currentMonth == null) {
                    currentMonth = selectedDate.getMonth()
                    let workingDay = { day: dayTomorrow, turno: null };
                    monthCalendar.workingDays.push(asignDay(workingDay));
                } else {
                    currentMonth++;
                    yearCalendar.push(monthCalendar);
                    monthCalendar = { workingDays: [] };
                    let workingDay = { day: dayTomorrow, turno: null };
                    monthCalendar.workingDays.push(asignDay(workingDay))
                }
            }
            yearCalendar.push(monthCalendar);
            makeCalendar(yearCalendar);
        }

        let counter = 0;
        function asignDay(workingDay) {

            if (counter < 2) {
                workingDay.turno = "M";
                counter++;
            } else if (counter < 4) {
                workingDay.turno = "T";
                counter++;
            } else if (counter < 6) {
                workingDay.turno = "N";
                counter++;
            } else if (counter < 10) {
                workingDay.turno = "D";
                counter++;
            } else {
                workingDay.turno = "M";
                //se pone a 1 para que el nuevo objeto no tenga el turno a null
                counter = 1;
            }

            return workingDay;
        }

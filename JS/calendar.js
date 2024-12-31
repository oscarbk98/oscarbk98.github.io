document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Vista inicial (mes)
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Cita con Sandra',
                start: '2024-03-15T10:00:00',
                end: '2024-03-15T11:00:00'
            },
            {
                title: 'Cita disponible',
                start: '2024-03-20T14:00:00',
                end: '2024-03-20T15:00:00'
            }
        ],
        dateClick: function (info) {
            alert('Fecha seleccionada: ' + info.dateStr);
            // Aquí puedes abrir un modal o formulario para agendar una cita
        },
        eventClick: function (info) {
            alert('Cita seleccionada: ' + info.event.title);
            // Aquí puedes abrir un modal para ver detalles de la cita
        },
        height: 'auto', // Altura automática
        contentHeight: 'auto', // Altura del contenido automática
        aspectRatio: 1.5, // Relación de aspecto (ajusta según sea necesario)
    });

    calendar.render();
});
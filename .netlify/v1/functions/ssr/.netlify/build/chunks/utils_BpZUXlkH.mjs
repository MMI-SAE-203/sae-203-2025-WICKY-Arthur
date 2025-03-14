function formatDate(date) {
    // Formater la date en français
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' };
    const DateString = new Date(date).toLocaleDateString('fr-FR', options);
    return DateString;
}
function formatDateAnnee(date) {
    // Formater la date en français
    const options = { year: 'numeric' };
    const DateString = new Date(date).toLocaleDateString('fr-FR', options);
    return DateString;
}
function formatDateNoHour(date) {
    // Formater la date en français
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const DateString = new Date(date).toLocaleDateString('fr-FR', options);
    return DateString;
}

export { formatDateAnnee as a, formatDateNoHour as b, formatDate as f };

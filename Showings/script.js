function updateTicketPrice() {
    const daySelect = document.getElementById('daySelect');
    const ticketPrice = document.getElementById('ticketPrice');
    const prices = {
        Monday: "$10.00",
        Tuesday: "$10.00",
        Wednesday: "$12.00",
        Thursday: "$12.00",
        Friday: "$13.00",
        Saturday: "$15.00",
        Sunday: "$15.00"
    };
    ticketPrice.textContent = prices[daySelect.value];
}

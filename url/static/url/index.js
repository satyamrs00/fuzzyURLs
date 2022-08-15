document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mainform').onsubmit = () => {
        console.log(document.getElementById('url').value);
        fetch('/', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'X-CSRFToken': document.querySelector('input[name="csrfmiddlewaretoken"]').value,
            },
            body: JSON.stringify({
                url: document.getElementById('url').value
            })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('short-url').innerHTML = window.location.href + data.short_url;
        });
        return false;
    }
});
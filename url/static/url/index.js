document.addEventListener('DOMContentLoaded', function() {

    console.log(document.getElementById('short-url').innerHTML);
    if(document.getElementById('short-url').innerHTML === '' || document.getElementById('short-url').innerHTML === null) {
        console.log('no short url');
        document.getElementById('short-url').style.display = 'none';
    }

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
            document.getElementById('short-url').innerHTML = `<h5>The fuzzzy one: </h5> ${window.location.href}${data.short_url}`;
            document.getElementById('short-url').style.display = 'block';
            if(data.toappend){
                document.getElementById('saved').innerHTML += `<div class="p-1"><span class="fs-5">${document.querySelector('input[name="url"]').value}</span><br><span class="fw-lighter">https://fuzzzyurls.com/${data.short_url}</span></div>`;
            }
        });
        return false;
    }
});
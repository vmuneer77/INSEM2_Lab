function openPage(page) {

    fetch(page, { method: "HEAD" })
        .then(response => {

            if (response.ok) {
                window.location.href = page;
            } 
            else {
                alert("Error: HTML page not found!");
            }

        })

        .catch(error => {
            alert("Error: Unable to open the page!");
        });

}
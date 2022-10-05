let users = null;

async function fetchUsers() {
    const response = await fetch('./users.json');
    usersJSON = await response.json();
    users = usersJSON;
    setUser(0);
}

window.onload = fetchUsers();

const setUser = (x) => {
    if (users == null)
        return;

    if (!users[x])
        x = 0;

    document.querySelector("#studentImage").src = users[x].image_url;
    let htmlData = `<table>
                        <tr>
                            <td>Name</td>
                            <td>: ${users[x].name}</td>
                        </tr>
                        <tr>
                            <td>Enrollment no.</td>
                            <td>: ${users[x].enrollment_no}</td>
                        </tr>
                        <tr>
                            <td>Registration no.</td>
                            <td>: ${users[x].reg_no}</td>
                        </tr>
                        <tr>
                            <td>DOB</td>
                            <td>: ${users[x].dob}</td>
                        </tr>
                        <tr>
                            <td>Mobile</td>
                            <td>: ${users[x].mobile}</td>
                        </tr>
                    </table>`;

    document.querySelector("#detailsContainer").innerHTML = htmlData;
}

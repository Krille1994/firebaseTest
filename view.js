getArray();
function view() {
    let html = '';
    html += `
    <input type="text" id="input">
    <button id="button" onclick="saveShit()">Save</button>
    <ul id="list">
    `;
    if (model.liste.length > 0) {
        for (let j = 0; j < model.liste.length; j++) {
        html += `
            <li>${model.liste[j]}</li>
        `;
        }
    }

    html += `
    </ul>
    `;

    document.getElementById('app').innerHTML = html;
}
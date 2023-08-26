var arr = []
let table = document.getElementsByTagName('table')
let cells = table[0].querySelectorAll('td');
cells.forEach(cell => {
        let link = cell.querySelector('a');
        if (link) {
            let url = link.href;
            arr.push(url)
        }
    });
console.log(JSON.stringify(arr));
Here's the translation of the code into English:

```javascript
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizeGlobalInformation() {
    const res = await fetch(url)
    const data = await res.json()
    const peopleConnected = (data.total_people_connected / 1e9)
    const peopleInTheWorld = (data.total_people_world / 1e9)
    const hours = parseInt(data.average_time)
    const minutes = Math.round((data.average_time - hours) * 100)
    const connectedPercentage = ((peopleConnected / peopleInTheWorld ) * 100).toFixed(2)

    const paragraph = document.createElement('p')
    paragraph.classList.add('charts-container__text')
    paragraph.innerHTML = `Did you know that the world has <span>${peopleInTheWorld} billion</span> people and that approximately <span>${peopleConnected} billion</span> are connected on some social network, spending an average of <span>${hours} hours</span> and <span>${minutes} minutes</span> online.<br>This means that approximately <span>${connectedPercentage}%</span> of people are connected on some social network.`

    const container = document.getElementById('charts-container')
    container.appendChild(paragraph)
}

visualizeGlobalInformation()
```

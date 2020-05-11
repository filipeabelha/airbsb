async function fetchHotel(url) {
    const hotelResponse = await fetch(url);
    const hotelJSON = await hotelResponse.json();
    const hotelDiv = document.querySelector('.hotel');

    hotelDiv.innerHTML += '<div class="row">';

    var cnt = 0;

    hotelJSON.forEach(hotel => {
        const elem = createHotel(hotel);
        hotelDiv.appendChild(elem);
        cnt++;
        if (cnt % 3 === 0) {
            hotelDiv.innerHTML += '</div><div class="row">';
        }
    });

    if (cnt % 3 !== 0) {
        hotelDiv.innerHTML += '</div>';
    }
}

function createHotel(hotel) {
    const div = document.createElement('div');
    div.classList.add('blog-post');
    div.innerHTML = `
    <a href="#">
        <div class="column card cardtop index">
            <img src="${hotel.photo}" width=250px>
            <p>${hotel.property_type}</p>
            <h3>${hotel.name}</h3>
            <h2>R$ ${hotel.price}</h2>
        </div>
    </a>
    `;
    return div;
}

fetchHotel('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72');

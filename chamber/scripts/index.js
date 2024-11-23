const weatherIcon = document.getElementById("iconDiv");
const weatherText = document.getElementById("textDiv");
const forecastDiv = document.getElementById("forecast");
const cards = document.getElementById("cards");
const directoryJSON = "data/members.json";

// Weather API URLs
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=19.51&lon=-98.87&units=metric&appid=63a5366e39ea031f1d1dfca52da22c5d";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=19.51&lon=-98.87&units=metric&appid=63a5366e39ea031f1d1dfca52da22c5d";

// Fetch and display current weather
async function fetchWeather() {
    try {
        const response = await fetch(weatherURL);
        if (!response.ok) throw new Error("Failed to fetch weather data");
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error(error);
    }
}

// Fetch and display weather forecast
async function fetchForecast() {
    try {
        const response = await fetch(forecastURL);
        if (!response.ok) throw new Error("Failed to fetch forecast data");
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error(error);
    }
}

// Display current weather
function displayWeather(data) {
    weatherIcon.innerHTML = "";
    weatherText.innerHTML = "";

    const icon = document.createElement("img");
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    icon.src = iconSrc;
    icon.alt = desc;

    weatherIcon.appendChild(icon);

    weatherText.innerHTML = `
        <p>${data.main.temp}&deg;C</p>
        <p>${desc}</p>
        <p>High: ${data.main.temp_max}&deg;C</p>
        <p>Low: ${data.main.temp_min}&deg;C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
    `;
}

// Display weather forecast
function displayForecast(data) {
    forecastDiv.innerHTML = "<h3>Weather Forecast</h3>"; // Clear and reset the forecast container

    const forecastItems = [data.list[5], data.list[13], data.list[21]];
    forecastItems.forEach((item, index) => {
        const day = new Date(item.dt * 1000).toDateString();
        const temp = item.main.temp;

        const forecastItem = document.createElement("p");
        forecastItem.innerHTML = `${day}: <strong>${temp}&deg;C</strong>`;
        forecastDiv.appendChild(forecastItem);
    });
}

// Fetch and display company data
async function fetchCompaniesData() {
    try {
        const response = await fetch(directoryJSON);
        if (!response.ok) throw new Error("Failed to fetch company data");
        const data = await response.json();
        displayCompanies(data);
    } catch (error) {
        console.error(error);
    }
}

// Filter companies by Gold and Silver membership
function getGoldAndSilver(members) {
    return members.filter(member => member.membershipLevel === 3 || member.membershipLevel === 2);
}

// Get random companies
function getRandomCompanies(members, count) {
    return members.sort(() => 0.5 - Math.random()).slice(0, count);
}

// Display companies in the spotlight section
function displayCompanies(members) {
    cards.innerHTML = ""; // Clear any existing cards

    const filteredMembers = getGoldAndSilver(members);
    const spotlightMembers = getRandomCompanies(filteredMembers, 3);

    spotlightMembers.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        const img = document.createElement("img");
        img.src = member.image;
        img.alt = member.name;
        img.loading = "lazy";
        img.width = 150;
        img.height = 150;

        const name = document.createElement("h3");
        name.textContent = member.name;

        const address = document.createElement("p");
        address.textContent = member.address;

        const phone = document.createElement("p");
        phone.textContent = `Phone: ${member.phone}`;

        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = "Visit Website";
        website.target = "_blank";

        const membershipLevel = document.createElement("p");
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel === 3 ? "Gold" : "Silver"}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);

        cards.appendChild(card);
    });
}

// Initialize the script
fetchWeather();
fetchForecast();
fetchCompaniesData();

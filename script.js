function clicked(zodiacSign) {
  document.querySelector('.popup-card-elements-container').style.display = 'none';
  document.querySelector('.loader-container').style.display = 'block';
  shopPopupCard(zodiacSign);
}

function shopPopupCard(zodiacSign) {
  document.getElementById('zodiac-signs-grid').classList.toggle('active');
  document.getElementById('popup-card').classList.toggle('active');

  getHoroscope(zodiacSign);
}

function getHoroscope(zodiacSign) {
  const URL = 'https://aztro.sameerkumar.website/?sign=' + zodiacSign + '&day=today';
  fetch(URL, {
    method: 'POST',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('API request failed');
      }
      return response.json();
    })
    .then(json => {
      document.getElementById('user-popup-card-daily-reading-text').innerHTML = json.description;
      document.getElementById('user-dominant-mood').innerHTML = json.mood;
      document.getElementById('user-lucky-color').innerHTML = json.color;
      document.getElementById('user-lucky-number').innerHTML = json.lucky_number;
      document.getElementById('user-lucky-time').innerHTML = json.lucky_time;
      document.querySelector('.loader-container').style.display = 'none';
      document.querySelector('.popup-card-elements-container').style.display = 'flex';
    })
    .catch(error => {
      console.error('Failed to fetch data from API:', error);
      // Display dummy data
      const dummyData = {
        description: 'Lorem ipsum dolor sit amet.',
        mood: 'Neutral',
        color: 'Gray',
        lucky_number: 0,
        lucky_time: 'N/A',
      };
      document.getElementById('user-popup-card-daily-reading-text').innerHTML = dummyData.description;
      document.getElementById('user-dominant-mood').innerHTML = dummyData.mood;
      document.getElementById('user-lucky-color').innerHTML = dummyData.color;
      document.getElementById('user-lucky-number').innerHTML = dummyData.lucky_number;
      document.getElementById('user-lucky-time').innerHTML = dummyData.lucky_time;
      document.querySelector('.loader-container').style.display = 'none';
      document.querySelector('.popup-card-elements-container').style.display = 'flex';
    });
}

//IMPORTANT NOTICE
document.addEventListener('DOMContentLoaded', function () {
  alert(
    'Important Notice\n\nDue to technical issues, the live data feature is temporarily unavailable. This website is currently displaying dummy data for demonstration purposes only. I apologize for any inconvenience.'
  );
});

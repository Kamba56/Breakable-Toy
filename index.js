const form = document.getElementById('ip-form');
const url = 'https://api.ipdata.co?api-key=c1f017f48c50c4ee00ede38731a70948562ef98bf2a1237773679178';

const setIpValue = async () => {
  await fetch(url)
  .then((res) => res.json())
  .then((data) => {
    form.ipAddress.value = data.ip;
  })
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await setIpValue();
  form.submit();
});

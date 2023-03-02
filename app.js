const loadPhones =async(searchingText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchingText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data)

}

const displayPhones =  (phones) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';
    phones.forEach(phone => {
    //   console.log(phone);  
      const {brand, image, phone_name} = phone;
      const phoneDiv = document.createElement('div');
      phoneDiv.classList.add('col');
      phoneDiv.innerHTML =` 
      <div class="card p-4 text-center ">
        <div>
        <img src="${image}" class="card-img-top w-50" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title">Brand:${brand}</h5>
            <p class="card-text">Phone-Name:${phone_name}</p>
        </div>
      </div>
      `;
      phoneContainer.appendChild(phoneDiv);
    });
}


document.getElementById('btn-search').addEventListener('click', 
function(){
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value ;
    loadPhones(searchValue);
})


loadPhones();
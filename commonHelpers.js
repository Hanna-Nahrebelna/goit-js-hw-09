import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const i=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];document.addEventListener("DOMContentLoaded",function(){new SimpleLightbox(".gallery-link a",{overlay:!0,spinner:!0,spinnerColor:"#ffffff",captionDelay:0,close:!0,showCounter:!0,captionsData:"title",captionPosition:"bottom",disableRightClick:!0,alertErrorMessage:"The requested content cannot be loaded. Please try again later.",disableScroll:!0,alertAutoClose:!1})});const a=document.querySelector(".gallery-list");a.addEventListener("click",p);function p(e){e.preventDefault();const t=e.target.closest(".gallery-item");if(!t||!t.querySelector("a"))return;t.getAttribute("href"),new SimpleLightbox(".gallery-link a").show()}const n=i.map(({preview:e,original:t,description:o})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${t}">
      <img
      class="gallery-image"
      src="${e}" 
      data-source="${t}" 
      alt="${o}" 
      />      
    </a>
  </li>`).join("");a.insertAdjacentHTML("beforeend",n);
//# sourceMappingURL=commonHelpers.js.map

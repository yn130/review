const section = document.querySelector('section');
const icecreams = [
  '내가 아인슈페너?!',
  '엄마는 외계인',
  '민트 초콜릿 칩',
  '뉴욕 치즈케이크',
  '아이스 초당옥수수',
  '초콜릿 무스',
  '체리쥬빌레',
  '뮤! 넌 내거야',
  '오레오 쿠키 앤 크림',
];
for (let i = 0; i <icecreams.length; i++){
  // const img = document.createElement("img");
  // img.src = `/quiz_javascript_dom/js_dom_quiz/image/icecream${i+1}.png`;
  // img.classList.add("image-box");

  // const h3 = document.createElement("h3");
  // h3.classList.add('text-center');
  // h3.textContent = `Top${i + 1}`;

  // const div = document.createElement("div");
  // div.textContent = icecreams[i];
  // div.classList.add("text-center");

  // const article = document.createElement('article');
  // article.classList.add("article-box");
  // article.appendChild(img);
  // article.appendChild(h3);
  // article.appendChild(div);

  // document.querySelector("section").appendChild(article);
  section.innerHTML += `
    <article class="article-box">
      <img src="/quiz_javascript_dom/js_dom_quiz/image/icecream${i+1}.png" class="image-box" alt="${icecreams[i]}">
      <h3 class="text-center">Top${i + 1}</h3>
      <div class="text-center">${icecreams[i]}</div>
    </article>`;

}

// icecreams.forEach((val, idx) => {
//     section.innerHTML += `
//     <article class="article-box">
//     <img src = "/quiz_javascript_dom/js_dom_quiz/image/icecream${idx+1}.png" class=img-box" alt ="${val}">
//     <h3 class = 'text-center'>top${idx + 1}</h3>
//     <div class = "text-center">${val}</div>
//     </article>`
// });

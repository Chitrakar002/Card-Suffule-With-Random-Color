// const cardData = ['One-1','Two-2','Three-3','Four-4','Five-5','Six-6','Seven-7','Eight-8','Nine-9'];
// const container = document.querySelector('.container');
// const btn = document.querySelector('.btn');
// cardData.forEach((data)=>{
//     // console.log(data);
// container.innerHTML += `<div class="ele">${data}</div>`
// })
// btn.addEventListener('click',()=>
// {
//     cardData.sort(()=>0.5-Math.random());
//     console.log(cardData);
//     container.innerHTML=" ";
//     cardData.forEach((data)=>{
// container.innerHTML += `<div class="ele">${data}</div>`

//     })

// })
const btn = document.querySelector('.btn');
const ele1 = document.querySelector('.ele1');
const ele2 = document.querySelector('.ele2');
const ele3 = document.querySelector('.ele3');
const ele4 = document.querySelector('.ele4');
const ele5 = document.querySelector('.ele5');
const ele6 = document.querySelector('.ele6');
const ele7 = document.querySelector('.ele7');
const ele8 = document.querySelector('.ele8');
const ele9 = document.querySelector('.ele9');
btn.addEventListener('click', ()=>{
    let H = Math.floor(Math.random()*361);
        let changedColor = `hsl(${H},100%,50%)`;
    ele1.style.backgroundColor=changedColor;
    ele1.textContent = changedColor;
    ele2.style.backgroundColor=changedColor;
    ele2.textContent = changedColor;
})
btn.addEventListener('click', ()=>{
    let H = Math.floor(Math.random()*361);
        let changedColor = `hsl(${H},100%,50%)`;
    // ele1.style.backgroundColor=changedColor;
    // ele1.textContent = changedColor;
    ele2.style.backgroundColor=changedColor;
    ele2.textContent = changedColor;
})
btn.addEventListener('click', ()=>{
    let H = Math.floor(Math.random()*361);
        let changedColor = `hsl(${H},100%,50%)`;
    ele3.style.backgroundColor=changedColor;
    ele3.textContent = changedColor;
})
btn.addEventListener('click', ()=>{
    let H = Math.floor(Math.random()*361);
        let changedColor = `hsl(${H},100%,50%)`;
    ele4.style.backgroundColor=changedColor;
    ele4.textContent = changedColor;
})
btn.addEventListener('click', ()=>{
    let H = Math.floor(Math.random()*361);
        let changedColor = `hsl(${H},100%,50%)`;
    ele5.style.backgroundColor=changedColor;
    ele5.textContent = changedColor;
})
btn.addEventListener('click', ()=>{
    let H = Math.floor(Math.random()*361);
        let changedColor = `hsl(${H},100%,50%)`;
    ele6.style.backgroundColor=changedColor;
    ele6.textContent = changedColor;
})
btn.addEventListener('click', ()=>{
    let H = Math.floor(Math.random()*361);
        let changedColor = `hsl(${H},100%,50%)`;
    ele7.style.backgroundColor=changedColor;
    ele7.textContent = changedColor;
})
btn.addEventListener('click', ()=>{
    let H = Math.floor(Math.random()*361);
        let changedColor = `hsl(${H},100%,50%)`;
    ele8.style.backgroundColor=changedColor;
    ele8.textContent = changedColor;
})
btn.addEventListener('click', ()=>{
    let H = Math.floor(Math.random()*361);
        let changedColor = `hsl(${H},100%,50%)`;
    ele9.style.backgroundColor=changedColor;
    ele9.textContent = changedColor;
})
// innerText or textContant
const colorInfo = document.querySelector('.colorInfo');

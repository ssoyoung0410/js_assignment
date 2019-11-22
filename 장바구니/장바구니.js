
const product = [
    {name: '상품1' , price : 3000 , quantity:1},
    {name: '상품2' , price : 6000 , quantity:3},
    {name: '상품3' , price : 2000 , quantity:7},
    {name: '상품4' , price : 8000 , quantity:4},
    {name: '상품5' , price : 8000 , quantity:1}
];


 //장바구니
const cart = document.querySelector('.cart');

product.forEach(function(e){
    //console.log(e);
    function total(quantity,price) {
        return quantity * price;
      }
    const template = `
    <li class="wo9IH">
    <div class="uu6c_">
        <div class="t2ksc">
        <div class="RR-M- SAvC5" role="button" tabindex="0">
            <canvas
            class="CfWVH"
            height="120"
            width="120"
            style="position: absolute; top: -5px; left: -5px; width: 40px; height: 40px;"
            ></canvas
            ><a
            class="_2dbep qNELH kIKUG"
            href="javascript:;"
            style="width: 56px; height: 56px;"
            ><img
                alt=""
                class="_6q-tv"
                src="https://instagram.ficn1-1.fna.fbcdn.net/vp/fca613a30c857f4a1223e776dda5ee3c/5E5A5018/t51.2885-15/sh0.08/e35/c0.113.902.902a/s640x640/72886902_2396254087369333_254301107456193890_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_cat=1"
            /></a>
        </div>
        <div class="enpQJ">
            <div class="d7ByH">
            <a
                class="FPmhX notranslate _0imsa "
                title="yeongdong07"
                href="javascript:;"
                >${e.name}</a
            >
            </div>
            <div class="wFPL8 "> ${e.price}원 × ${e.quantity}개 ＝  ${total(e.quantity,e.price)}원</div>
        </div>
        </div>
        <div class="Pkbci">
        <button
            class="sqdOP L3NKy y3zKF plus"
            type="button"
            style="margin-bottom: 2px;"
        >
            +
        </button>
        <button
            class="sqdOP L3NKy y3zKF "
            type="button"
            style="margin-top: 2px;"
        >
            -
        </button>
        </div>
    </div>
    </li>`;
    
   cart.innerHTML += template;
})




//총수량 , 총가격
 const sum = document.querySelector('.sum');
 sum.innerHTML = `
 <div
    aria-labelledby="f3d9261c43ccaf4 f143a2cc28ff4ec"
    class=" Igw0E rBNOH eGOV_ ybXk5 _4EzTm XfCBB HVWg4 ">
         <div class=" Igw0E IwRSH eGOV_ _4EzTm yC0tu "></div>
            <div class=" Igw0E IwRSH YBx95 vwCYk ">
              <div class=" Igw0E IwRSH eGOV_ _4EzTm " id="f3d9261c43ccaf4">
                 <div class="_7UhW9 xLCgt MMzan KV-D4 uL8Hv ">
                    <div class="_7UhW9 xLCgt qyrsm KV-D4 uL8Hv">
                       전체상품 개
                     </div>
                   </div>
                 </div>
                 <div
                   class=" Igw0E IwRSH eGOV_ _4EzTm DhRcB "
                   id="f143a2cc28ff4ec">
                   <div class="_7UhW9 xLCgt MMzan _0PwGv uL8Hv">
                     합계금액 원
                   </div>
                 </div>
               </div>
               <div class=" Igw0E rBNOH YBx95 ybXk5 _4EzTm soMvl ">
                 <button class="sqdOP L3NKy y3zKF " type="button">주문</button>
               </div>
             </div>
             <div class=" Igw0E IwRSH eGOV_ _4EzTm HVWg4 ">
               <hr class="W4P49" />
 </div>`
 




const p = document.querySelector('.plus');
p.addEventListener('click', function() {
  

})


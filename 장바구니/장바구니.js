// const product = [
//     {name: '상품1' , price : 5000 , quantity:1},
//     {name: '상품2' , price : 6000 , quantity:1},
//     {name: '상품3' , price : 2000 , quantity:1},
//     {name: '상품4' , price : 8000 , quantity:1},
//     {name: '상품5' , price : 8000 , quantity:1}
// ];

// product.forEach(function(element){
//     const sum = element.quantity;
// })


// const sum = product.quantity.reduce((pre,value,idx,arr) => {
//     //console.log(pre)//처음값
//     //console.log(value) //나머지값
//     //console.log(idx); //처리되고있는요소의 인덱스
//     //console.log(arr);
// });


function Product(name,price,quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.total = function() {
        return this.price * this.quantity;
    };
 }
 
 const data1 = new Product('상품1',1000,1); 
 const data2 = new Product('상품2',5000,1);
 const data3 = new Product('상품3',6000,1);
 const data4 = new Product('상품4',4000,1);
 const data5 = new Product('상품5',3000,1);


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
                       전체상품 ${data1.quantity + data2.quantity + data3.quantity + data4.quantity  + data5.quantity}개
                     </div>
                   </div>
                 </div>
                 <div
                   class=" Igw0E IwRSH eGOV_ _4EzTm DhRcB "
                   id="f143a2cc28ff4ec">
                   <div class="_7UhW9 xLCgt MMzan _0PwGv uL8Hv">
                     합계금액 ${data1.price + data2.price + data3.price + data4.price  + data5.price}원
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
 



 //장바구니
 const cart = document.querySelector('.cart');
 cart.innerHTML = `
 <ul class=" jjbaz _6xe7A">
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
                 >${data1.name}</a
             >
             </div>
             <div class="wFPL8 ">${data1.price}원 × ${data1.quantity}개 ＝ ${data1.total()}원</div>
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
     </li>
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
                 src="https://instagram.ficn1-1.fna.fbcdn.net/vp/6b39b876bcc58be5e69bcd2be0181e9b/5E52FCCE/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/72252777_607968436630378_9022523615931388192_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_cat=1"
             /></a>
         </div>
         <div class="enpQJ">
             <div class="d7ByH">
             <a
                 class="FPmhX notranslate _0imsa "
                 title="yeongdong07"
                 href="javascript:;"
                 >${data2.name}</a
             >
             </div>
             <div class="wFPL8 ">${data2.price}원 × ${data2.quantity}개 ＝ ${data2.total()}원</div>
         </div>
         </div>
         <div class="Pkbci">
         <button
             class="sqdOP L3NKy y3zKF "
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
     </li>
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
                 src="https://instagram.ficn1-1.fna.fbcdn.net/vp/f739d4cdda6e9458bc48a57736effca2/5E57C84B/t51.2885-15/sh0.08/e35/c0.112.901.901a/s640x640/75642480_172471183930322_5768703040712176780_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_cat=1"
             /></a>
         </div>
         <div class="enpQJ">
             <div class="d7ByH">
             <a
                 class="FPmhX notranslate _0imsa "
                 title="yeongdong07"
                 href="javascript:;"
                 >${data3.name}</a
             >
             </div>
             <div class="wFPL8 ">${data3.price}원 × ${data3.quantity}개 ＝ ${data3.total()}원</div>
         </div>
         </div>
         <div class="Pkbci">
         <button
             class="sqdOP L3NKy y3zKF "
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
     </li>
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
                 src="https://instagram.ficn1-1.fna.fbcdn.net/vp/5270622f7d47ecce9b778f21a6cc337a/5E5BA7C0/t51.2885-15/sh0.08/e35/s640x640/76887264_208021363553561_5607254450895274441_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_cat=1"
             /></a>
         </div>
         <div class="enpQJ">
             <div class="d7ByH">
             <a
                 class="FPmhX notranslate _0imsa "
                 title="yeongdong07"
                 href="javascript:;"
                 >${data4.name}</a
             >
             </div>
             <div class="wFPL8 ">${data4.price}원 × ${data4.quantity}개 ＝ ${data4.total()}원</div>
         </div>
         </div>
         <div class="Pkbci">
         <button
             class="sqdOP L3NKy y3zKF"
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
     </li>
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
                 src="https://instagram.ficn1-1.fna.fbcdn.net/vp/af55d441c794800ee50cd15ad06ba16a/5E51C35E/t51.2885-15/sh0.08/e35/c0.150.1200.1200a/s640x640/73398116_1470998589714585_8938698277383012699_n.jpg?_nc_ht=instagram.ficn1-1.fna.fbcdn.net&_nc_cat=1"
             /></a>
         </div>
         <div class="enpQJ">
             <div class="d7ByH">
             <a
                 class="FPmhX notranslate _0imsa "
                 title="yeongdong07"
                 href="javascript:;"
                 >${data5.name}</a
             >
             </div>
             <div class="wFPL8 ">${data5.price}원 × ${data5.quantity}개 ＝ ${data5.total()}원</div>
         </div>
         </div>
         <div class="Pkbci">
         <button
             class="sqdOP L3NKy y3zKF "
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
     </li>               
 </ul>`;

const p = document.querySelector('.plus');
p.addEventListener('click', function() {
  

})



// const app = document.getElementById('app');
// const render = function(list) {
//     let img = '';
//      list.forEach(data => {
//         img += `<div class="Nnq7C weEfm"><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;"><div class="eLAPa">
//         <div class="KL4Bh"><img class="FFVAD" decoding="auto" src="${data.src1}" style="object-fit: cover;"></div>
//         <div class="_9AhH0"></div></div><div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;">
//         <div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="${data.src2}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div>
//         <div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div>
//         <div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;">
//         <div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="${data.src3}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div>
//         <div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div></div>`
//       })
//       app.innerHTML += img;
// }
// render(dataList1);
// render(dataList2);
// render(dataList3);
// render(dataList4);
axios('https://my-json-server.typicode.com/it-crafts/mockapi/timeline?_page=1')
.then(function(list) {
    const app = document.getElementById('app');
    const render = function(list) {
        //console.log(list); 
        let img = '';
        list.forEach(data => {
            //console.log(data);
            img += `<div class="Nnq7C weEfm"><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;"><div class="eLAPa">
            <div class="KL4Bh"><img class="FFVAD" decoding="auto" src="${data.src1}" style="object-fit: cover;"></div>
            <div class="_9AhH0"></div></div><div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;">
            <div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="${data.src2}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div>
            <div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div>
            <div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;">
            <div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="${data.src3}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div>
            <div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div></div>`
          })
          app.innerHTML += img;
    }
render(list.data);

})


axios('https://my-json-server.typicode.com/it-crafts/mockapi/timeline?_page=2')
.then(function(list) {
  const app = document.getElementById('app');
  const render2 = function(list) {
      let img = '';
      console.log(list);
      list.forEach(data => {
          //console.log(data);
          img += `<div class="Nnq7C weEfm"><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;"><div class="eLAPa">
          <div class="KL4Bh"><img class="FFVAD" decoding="auto" src="${data.src1}" style="object-fit: cover;"></div>
          <div class="_9AhH0"></div></div><div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;">
          <div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="${data.src2}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div>
          <div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div>
          <div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;">
          <div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="${data.src3}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div>
          <div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div></div>`
        })
        app.innerHTML += img;
  }
render2(list.data);
})





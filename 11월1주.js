


const _loading = document.querySelector('._4emnV');
   
const timeline = (function() {
    const template = `<div class="Nnq7C weEfm"><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;"><div class="eLAPa">
        <div class="KL4Bh"><img class="FFVAD" decoding="auto" src="{{src1}}" style="object-fit: cover;"></div>
        <div class="_9AhH0"></div></div><div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div><div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;">
        <div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="{{  src2 }}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div>
        <div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div>
        <div class="v1Nh3 kIKUG _bz0w"><a href="javascript:;">
        <div class="eLAPa"><div class="KL4Bh"><img class="FFVAD" decoding="auto" src="{{ src3  }}" style="object-fit: cover;"></div><div class="_9AhH0"></div></div>
        <div class="u7YqG"><span aria-label="슬라이드" class="mediatypesSpriteCarousel__filled__32 u-__7"></span></div></a></div></div>`;
    const url = 'https://my-json-server.typicode.com/it-crafts/mockapi/timeline/';
    const selector = '#app';
    let page = 1;

      
        const render = async function() {
       
       
        // model
        const { data } = await axios(url+page++);
        const list = data.data.map(l => l.reduce((o, v, i) => (o[`src${i+1}`] = v, o), {})); //객체로바뀌어짐.
          console.log(data); // 이미지 15개!
          console.log({data}); //id : 1 데이터
         //console.log(list); 
         //console.log(page);

         window.addEventListener('scroll', async function(e) {
            if ($(window).scrollTop() == $(document).height() - $(window).height()) {                
                app.innerHTML += html; 
            } });
            
         // TODO info API에서 totalPage 받아와서, 거기까지만 요청하게 수정
        //  const pageInfo = axios('https://my-json-server.typicode.com/it-crafts/mockapi/timeline/info')
        //     .then(function(list){
        //         })  


        // controller
        let html = '';
        list.forEach(data => {
            html += template.replace(/{{ *(\w+) *}}/g, (m, key) => data[key] || ''); 
            //console.log(data);
        
        })
        

        // view
        const app = document.querySelector(selector);
        app.innerHTML += html;
        document.querySelectorAll('.fx7hk > a').forEach(tabButton => {
            tabButton.addEventListener('click', async function(e) {
                // TODO 버튼 누를 때는 1페이지로 새로 요청을 해야 함
               _loading.style.display = ''; 
                if('' === _loading.style.display) { //display block 일때
                    app.innerHTML = '';//화면지우기
                    var xhr = new XMLHttpRequest();       
                    xhr.open("GET" , 'https://my-json-server.typicode.com/it-crafts/mockapi/timeline/1' , true);               
                    xhr.onreadystatechange = function() {               
                        if(xhr.readyState == 4 && xhr.status == 200)
                        {
                            app.innerHTML += html;
                            //console.log(xhr.responseText);               
                        }
                
                    }               
                    xhr.send();               
                } 
           });
        });

        
    }

    return {
        render: render
    }


    
}());


const root = (async function() {
    
    await timeline.render();

}());

// var pageLoaded = 1;
// window.addEventListener('scroll', async function(e) {
//     // TODO 화면의 적절한 위치까지 갔을 때만 Ajax 요청
//     if ($(window).scrollTop() == $(document).height() - $(window).height()) { // TODO 100 대신 페이지의 거의 마지막에 닿은 Y좌표를 동적으로 가져온다
//         pageLoaded = pageLoaded + 1; 
//         console.log(url + pageLoaded);
//     }
    // if('' === _loading.style.display) {
        
    // }

    // // TODO info API에서 totalPage 받아와서, 거기까지만 요청하게 수정
    // const pageInfo = axios('https://my-json-server.typicode.com/it-crafts/mockapi/timeline/info')
    // .then(function(list){
    //       //list.data.data.totalPage; 
    //     })
    
   



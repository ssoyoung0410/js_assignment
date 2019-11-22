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
    const app = document.querySelector('#app');
    let page = 1;
    let totalPage = 1;

    const init = async function() {
        page = 1;
        axios(url + 'info').then(({data}) => {
            totalPage = data.data.totalPage;
        })
        moreTimeline();
    }

    const reset = async function() {
        app.innerHTML = '';
    }

    window.addEventListener('scroll', async function(e) {
        if($(window).scrollTop() != $(document).height() - $(window).height()) {
            return;
        }
        if('' === _loading.style.display) {
            return;
        }
        if(page > totalPage) {
            return;
        }

        moreTimeline();
    });

    const moreTimeline = async function() {
        _loading.style.display = ''; 
        const { data } = await axios(url+page++);
        const list = data.data.map(l => l.reduce((o, v, i) => (o[`src${i+1}`] = v, o), {})); //객체로바뀌어짐.
        let html = '';
        list.forEach(data => {
            html += template.replace(/{{ *(\w+) *}}/g, (m, key) => data[key] || ''); 
        })
        app.innerHTML += html;
        _loading.style.display = 'none'; 
        //console.log(list);
    }

    return {
        init: init,
        reset: reset
    }
}());

timeline.init();

document.querySelectorAll('.fx7hk > a').forEach(tabButton => {
    tabButton.addEventListener('click', async function(e) {
        if('' === _loading.style.display) {
            return;
        }
       timeline.reset();
       timeline.init();
   });
});
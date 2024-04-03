let url=window.location.ref;
let swLoc="unatask/service-worker.js";

if(navigator.serviceWorker){

if(url.includes('localhost')){
    swLoc='/service-worker.js';
}


    navigator.serviceWorker.register('/service-worker.js')
        .then(reg=>{
            // setTimeout(()=>{
            //     reg.sync.register('post-new-user');
            //     console.log("Se envió la información al servidor");
            // },3000);
        });
}
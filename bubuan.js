const viewer=document.querySelector('#image-viewer');
const viewerImage=viewer.querySelector('img');
document.querySelectorAll('.zoom-image').forEach(button=>button.addEventListener('click',()=>{
 const thumbnail=button.querySelector('img');
 viewerImage.src=button.dataset.full;
 viewerImage.alt=thumbnail.alt;
 viewer.querySelector('p').textContent=thumbnail.alt;
 viewer.showModal();
}));
viewer.querySelector('.close-viewer').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer){const box=viewer.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)viewer.close();}});

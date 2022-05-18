// target dom

const wrapper =document.querySelector('.qrCodeContent')
const btn =document.querySelector('.qrCodeBody button')
const inp =document.querySelector('.qrCodeBody input')
const img =document.querySelector('.qrcodeimg .genQr')
const tipOne =document.querySelector('.tipOne')
const loadAni =document.querySelector('.loadAnimation')
const tipTwo =document.querySelector('.tipTwo')
const popup =document.querySelector('.popup')
const popupP =document.querySelector('.popup p')



function tipOneClose (){
    tipOne.style.display ='none'
    tipTwo.style.display ='block'
}

function tipTwoClose (){
    tipTwo.style.display ='none'
}


const alerts =()=>{
    alertDiv.classList.add('active')
}
const generateFun=()=>{
        wrapper.classList.add('active')
    let inpVal =inp.value
    btn.innerText = "Generating QR Code...";
    if(!inpVal) return;
    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inpVal}`;
    popup.classList.add('active')
    img.addEventListener("load", () => {
        wrapper.classList.add("active");
        popupP.innerHTML =`<i class="fa fa-check-circle"></i>  Qr code generated successfully`
        popup.style.backgroundColor ='green'
        popup.style.color ='white'
        setTimeout(()=>{
            popup.classList.remove('active')
        },2000)

        btn.innerText = "Generate QR Code";
        loadAni.style.display ='none'
    
        // download qr code image



    });
}

inp.addEventListener('keyup',()=>{
    if(!inp.value.trim()){
        wrapper.classList.remove('active')
        inp.value =''
    }   
})

btn.addEventListener('click',generateFun)



const menu =document.querySelector('.menu')

function settingToggle (){
  menu.classList.toggle('active')
}


const aboutFun=()=>{
    const footer =document.querySelector('footer')
    footer.classList.toggle('active')
}
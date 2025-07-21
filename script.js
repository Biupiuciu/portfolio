let openProject;

const projects=[
    {
        name:"Chatime",
        link:"https://vimeo.com/950944485?share=copy",
        description:'A full-stack project was designed to to make it effortless for users to engage in live conversations, fostering seamless communication and connection.',
        img:"./asset/p1.png",
        stacks:["React","Vite","Tailwind CSS","Node.js","MongoDB","Express"]
    },
    {
        name:"GetItDone",
        link:"https://vimeo.com/1018831804?share=copy#t=0",
        description:'A full-stack to-do list application designed to enhance task management with intuitive drag-and-drop functionality.',
        img:"./asset/p2.png",
        stacks:["React","NextJs","Postgresql","CI/CD","AWS Cognito","Typescript","Zustand"]
    },
    {
        name:"Settlewise Lending",
        link:"https://settlewiselending.com.au/",
        description:'A responsive company website was developed to make it effortless for clients to explore lending services, learn about home loan options, and submit inquiries with ease.',
        img:"./asset/p3.png",
        stacks:["React","NextJs","Tailwind CSS","CloudFlare","Shadcn/ui"]
    }
];
const navibar=document.getElementById("navbar");
const naviOffset=navibar.offsetHeight;

window.addEventListener("scroll",()=>{
    if(window.scrollY>naviOffset&&window.scrollY<naviOffset+20){
        navibar.classList.add("stickInit");
    }else if(window.scrollY>naviOffset+20){
        navibar.classList.remove("stickInit");
        navibar.classList.add("stickTop");
    }else{
        navibar.classList.remove("stickTop");
        navibar.classList.remove("stickInit");
    }
});

    const div=document.getElementById("introduction");
    const text="Hi, I'm Boning Chen 👋 —— A Full Stack Developer with a Passion for Building Modern, Performant, and User-Friendly Products";
    let i=0;
    const speed = 40;


function showIntoduction(){
    if(i<text.length){
        div.textContent+=text.charAt(i);
        i++;
        setTimeout(showIntoduction,speed);
    }
}

showIntoduction();

function scrollToELE(name){
    if(!name){
        window.scrollTo({
        top:0,
        behavior:"smooth"
       });
        return
    }
    const ele=document.getElementById(name);
    const yPosition=ele.getBoundingClientRect().top+window.pageYOffset-200;
    if(ele){
       window.scrollTo({
        top:yPosition,
        behavior:"smooth"
       });
    }
}

function openCard(name){
   
    openProject=name;
    project=projects[openProject];
    console.log(project);

    document.querySelector(".projectTitle").innerHTML=project.name;
    document.getElementById("link").href=project.link;
    document.querySelector(".scroll p").innerHTML=project.description;
    document.querySelector(".scroll img").src=project.img;
    const techELE=document.querySelector(".techstack");
    techELE.innerHTML="";
    project.stacks.map((content)=>{
        const newELE=document.createElement('div');
        newELE.textContent=content;
        techELE.appendChild(newELE);
    })
    
    document.getElementById('overlay').style.display='block';
    document.getElementById('card').style.display='block';
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
}

function closeCard(){
    // document.getElementById(openProject).style.display='none';
    document.getElementById('overlay').style.display='none';
    document.getElementById('card').style.display='none';
    document.removeEventListener('wheel', preventScroll, { passive: false });
    document.removeEventListener('touchmove', preventScroll, { passive: false });
}

function preventScroll(e) {
    const contentELE = document.querySelector('.content');
    
    if (contentELE&&contentELE.contains(e.target)){
        // console.log("11");

        if(contentELE.scrollHeight>contentELE.clientHeight){
            return
        }
        e.preventDefault();
    }

    e.preventDefault();
}



function openMenu(e){
    console.log("1");
    event.stopPropagation();
    document.getElementById("navi-smallscreen-menu").classList.toggle('show');
    document.addEventListener('click',closeMenu);
}

function closeMenu(){
     document.getElementById("navi-smallscreen-menu").classList.toggle('show');
    document.removeEventListener('click',closeMenu);
}
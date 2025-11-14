const data=[
    {
        img:"https://i.pinimg.com/1200x/1c/8e/41/1c8e41010f17e2959d15abfa3e697c35.jpg",
        text:'Mumbai Indians won IPL in 2013'
    },
     {
        img:"https://i.pinimg.com/1200x/90/be/77/90be777e02786d35e122c3643706d345.jpg",
        text:'Mumbai Indians won IPL in 2015'
    },
     {
        img:"https://i.pinimg.com/1200x/3c/c0/68/3cc06893d6e98dfe4238d7bd7b31dca0.jpg",
        text:'Mumbai Indians won IPL in 2017'
    }, 
    {
        img:"https://api-timescontent.timesofindia.com/api/v1/image-path/view/jpg/607278",
        text:'Mumbai Indians won IPL in 2019'
    }, 
    {
        img:"https://i.pinimg.com/1200x/56/85/2f/56852f5efcddb448087207e5b2d8e6ed.jpg",
        text:'Mumbai Indians won IPL in 2020'
    }
];

var image=document.querySelector('img')
var h2=document.querySelector('h2')
var btn= document.querySelector('button')

let index=0

btn.addEventListener("click",function(){
    index++
    if(index>data.length){
        image.src="https://imgs.search.brave.com/KsTmjQmyW8MYELEjmZ5SxzVRdhyh_05Q1yZ15qmdq0Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbS5y/ZWRpZmYuY29tL2Ny/aWNrZXQvMjAyMy9k/ZWMvMTVyb2hpdC5q/cGc_dz02NzAmaD05/MDA"
        h2.textContent="Mumbai indians"
        index=0
        return
    }

    image.src=data[index].img
    h2.textContent=data[index].text
});
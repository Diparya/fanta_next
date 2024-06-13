"use client"
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

const Front = () => {
    var tl = gsap.timeline({scrollTrigger:{
        trigger: "#two",
        start: "0% 95%",
        end: "70% 50%",
        scrub:true,
        markers:false
        
    }})

    var tl2 = gsap.timeline({scrollTrigger:{
        trigger: "#three",
        start: "0% 95%",
        end: "20% 50%",
        scrub:true,
        markers:false
    }})

    useGSAP(() => {
        tl.to("#fanta",{
            top: "120%",
            left: "2%"
        },'or')

        tl.to("#Orange-slice",{
            top: "160%",
            left: "23%"
        },'or')

        tl.to("#Orange",{
            width: "15%",
            top: "173%",
            right: "10%"
        },'or')
        
        tl.to("#leaf",{
            top: "110%",
            left: "80%"
        },'or')
        
        tl.to("#leaf2",{
            top: "110%",
            left: "0%"
        },'or')

        tl2.from('#lemon1',{
            rotate: '-90deg',
            left: '-100%',
            top: '110%'
        },'ca')
        
        tl2.from('#cocacola',{
            rotate: '-90deg',
            left: '-100%',
            top: '110%'
        },'ca')
        
        tl2.from('#lemon2',{
            rotate: '90deg',
            left: '100%',
            top: '110%'
        },'ca')
        
        tl2.from('#pepsi',{
            rotate: '90deg',
            left: '100%',
            top: '110%'
        },'ca')
        
        tl2.to('#Orange-slice',{
            width: '20%',
            left: '40%',
            top: '208%'
        },'ca')
        
        tl2.to('#fanta',{
            width: '32%',
            left: '33%',
            top: '220%'
        },'ca')
      },[])
    
      return (
        <main className=" w-full h-full bg-orange-600 no-scrollbar">
          <nav className="flex items-center justify-between fixed w-full h-3 my-5 z-50">
                <a className=" ml-5" href="#">Logo</a>
                <div className="flex gap-12 mx-7">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Shop</a>
                    <a href="#">Contact</a>
                </div>
          </nav>
          
          <div id='one' className="no-scrollbar flex items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-r from-orange-400 to-orange-700">
                <h1 className="text-[25vw]">FANTA</h1>
                <img className="absolute z-20 w-[40%]" alt="fanta" id="fanta" src="Fanta.png"/>
    
                <img className="absolute z-10 w-[15%] top-[10%] left-[32%]" alt="Orange-slice" id="Orange-slice" src="Orange Slice.png"/>
                <img className="absolute z-30 w-[20%] top-[55%] right-[30%]" alt="Orange" id="Orange" src="Orange.png"/>
                <img className="absolute w-[18%] top-[10%] left-[0%] transform rotate-45" alt="leaf" id="leaf" src="orange leaf.png"/>
                <img className="absolute w-[20%] top-[58%] left-[80%] transform rotate-[-60deg]" alt="leaf2" id="leaf2" src="orange leaf 2.png"/>
                <img className="absolute w-[20%] top-[0%] right-[0%]" alt="palm" id="palm" src="palm.png"/>
          </div>
    
    
          <div id='two' className="flex w-full h-[100vh] bg-amber-900">
                <div className="flex items-start justify-center flex-col w-[50%] h-[100%]">
                    <svg className=" mt-[50vh] w-[90%] transform rotate-45" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#e2af49" d="M51.4,-58.8C67,-48.2,80.3,-32.3,82.9,-15.1C85.4,2.2,77.1,21,66.2,36.7C55.3,52.3,41.8,64.9,25.8,70.5C9.9,76.2,-8.4,74.8,-24.8,68.6C-41.2,62.4,-55.6,51.4,-62.5,37.2C-69.5,23,-68.8,5.5,-60.4,-5.2C-52,-15.8,-35.8,-19.6,-24.5,-31C-13.1,-42.4,-6.6,-61.3,5.7,-68C17.9,-74.8,35.8,-69.4,51.4,-58.8Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="flex items-start justify-center flex-col w-[50%] h-[100%]">
                    <h1 className=" text-[5vw]">Flavour Updated</h1>
                    <p className=" text-[1vw] w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolore magni quidem facilis! Deleniti iure, quae temporibus molestias corporis pariatur! Modi consequatur tempore aperiam perferendis quaerat voluptatibus ullam incidunt cum et distinctio saepe debitis, quo illo fugiat id obcaecati. Quisquam quia cumque et, obcaecati alias similique, error ex nihil corporis atque illum consequatur laudantium nostrum ipsam quibusdam maxime modi! Quod magni sint itaque recusandae sed minima consequatur ab accusamus libero! Voluptatum deserunt impedit sunt iusto expedita magnam ipsam laboriosam aliquid alias temporibus. Libero rem rerum architecto, ullam ducimus nostrum aperiam magnam tempora corrupti officiis quam eum provident nobis cum voluptates?</p>
                </div>
          </div>
    
    
          <div id='three' className="flex items-center justify-center gap-[5vw] w-[100%] h-[100vh] bg-red-950">
                <div className=" relative flex items-center justify-center flex-col gap-[2vh] w-[25vw] h-[70vh] mt-[10vh] rounded-lg bg-red-300">
                    <img id="lemon1" className=" absolute top-[-15%] w-[17vw]" src="lemon-slice.png" alt="lemon"/>
                    <img className=" absolute top-[-23%] size-[100%] object-cover" id="cocacola" src="Coke.png" alt="cocacola"/>
                    <h1 className=" mt-[40vh] text-[3vw]">Coca-Cola</h1>
                    <button className=" text-[1vw] rounded-xl border-none bg-orange-400 py-[1vw] px-[2vw]">Buy Now</button>
                </div>
                <div className=" relative flex items-center justify-center flex-col gap-[2vh] w-[25vw] h-[70vh] mt-[10vh] rounded-lg bg-orange-300">
                    <h1 className=" mt-[40vh] text-[3vw]">Fanta</h1>
                    <button className=" text-[1vw] rounded-xl border-none bg-orange-400 py-[1vw] px-[2vw]">Buy Now</button>
                </div>
                <div className=" relative flex items-center justify-center flex-col gap-[2vh] w-[25vw] h-[70vh] mt-[10vh] rounded-lg bg-blue-300">
                    <img id="lemon2" className=" absolute top-[-15%] w-[17vw]" src="lemon-slice.png" alt="lemon"/>
    
                    <img className=" absolute top-[-8%] w-[92%]" id="pepsi" src="Pepsi.png" alt="pepsi"/>
                    <h1 className=" mt-[40vh] text-[3vw]">Pepsi</h1>
                    <button className=" text-[1vw] rounded-xl border-none bg-orange-400 py-[1vw] px-[2vw]">Buy Now</button>
                </div>
            </div>
        </main>
      );
}

export default Front
import React, {useState} from "react";

export default function AuthorCard() {
  const [isActive, setIsActive] = useState({
    active: true,
    name: "education"
  })
    return (
        <div id="intro" class="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
              <div id="avatar" class="flex justify-center py-2">
                <img class="w-40" src="https://api.multiavatar.com/PA.svg " alt="JB image" />
              </div>
              <div id="content" class="prose lg:prose-xl px-2">
                <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">Ishmael Dukuly</h1>
                <small class="text-center block text-md text-gray-800">Thinker, Educator &amp; Front-end Developer</small>
                <p class="text-justify text-lg text-gray-800">
                  Hi! I'm Ishmael Dukuly, a computer programmer, and an passionate tech enthusiat. I love programming and I am currently  frond-end web developer. My goal is to become a software engineer and that's why I am always involve with programming. I have little skill in javaScript and React JS. If your want to have a modern website for your business, Then you have nothing to worry about because, I can build you a nice one that will meet your business needs.
                
                 </p>
                  <div className="p-6 max-w-full mx-auto">
                    <ul className="flex justify-center items-center gap-4">
                      <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "education" && 'bg-[#FF8F56]' }`}>
                        <a href="" id="education" className="font-roboto font-bold text-xl text-white">Education</a>
                      </li>
                      <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "work" && 'bg-[#FF8F56]' }`}>
                        <a href="" id="work" className="font-roboto text-xl">Work</a>
                      </li>
                      <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name === "hobbies" && 'bg-[#FF8F56]' }`}>
                        <a href="" id="hobbies" className="font-roboto text-xl">Hobbies</a>
                      </li>
                     
                    </ul>
                  </div>
              </div>
            </div>
    )
}
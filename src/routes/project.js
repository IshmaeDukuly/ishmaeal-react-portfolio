import React from 'react';
import MainNavBar from '../components/MainNavBar';
import pic from "../components/images/Phonebook.png";
import pic1 from "../components/images/portfolio.png";


export default function Projects() {
    return (
        <>
        <MainNavBar />
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    {/* <!--Card 1--> */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={pic} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl text-blue-700 mb-2">Phonebook in React</div>
        <p class="text-gray-700 text-base">
          This phonebook was designed in React. It is connected to firebase and it enables a user
          to store contacts and view contact details.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
    {/* <!--Card 2--> */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={pic1} alt="River" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl text-blue-700 mb-2">My Portfolio</div>
        <p class="text-gray-700 text-base">
          My portfolio project was done using React and Firebase. This project highlights my education,
          work experience and hobbies. It also contains a blog page and contact page.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
      </div>
    </div>
  </div>
  </>
    )
}
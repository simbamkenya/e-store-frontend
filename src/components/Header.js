import React from 'react'

function Header() {
  return (
    <header class="h-20 bg-white">
    <nav class="relative px-2 py-4">
      
      <div class="container mx-auto flex justify-between items-center">
          <img src="https://avrasys.hu/logoipsum-logo-54.svg" alt="Tailwindcss Navigation" />

          <ul class="hidden md:flex space-x-6">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <a href="#" class="bg-red-400 px-5 py-1 rounded-3xl hover:bg-red-500 text-white hidden md:flex" role="button">Sign In</a>

        {/*-- Mobile menu icon */}
        <button id="mobile-icon" class="">
          <i onclick="changeIcon(this)" class="fa-solid fa-cart-shopping"></i>kkk
        </button>
        
        </div>
      
    </nav>
  </header>
  )
}

export default Header




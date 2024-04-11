export default function Navbar(){
    return(
        <div id="main">
        <div class="container mx-auto">
          <div class="flex items-center justify-between py-6 lg:py-10">
            <a href="/" class="flex items-center">
              <span href="/" class="mr-2">
                <img src="./assets/img/logo.svg" alt="logo" />
              </span>
              <p class="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
                John Doe
              </p>
            </a>
            
            <div class="hidden lg:block">
              <ul class="flex items-center">
                <li class="group relative mr-6 mb-1">
                  <div class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <a href="/" class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
                    Intro
                  </a>
                </li>
                <li class="group relative mr-6 mb-1">
                  <div class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <a href="/blog" class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
                    Blog
                  </a>
                </li>
                <li class="group relative mr-6 mb-1">
                  <div class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <a href="/uses" class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
                    Uses
                  </a>
                </li>
                <li class="group relative mr-6 mb-1">
                  <div class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"></div>
                  <a href="/contact" class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">
                    Contact
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    
    );
}
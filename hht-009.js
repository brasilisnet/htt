var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813875/random-pics-025.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813875_random-pics-025.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813876/random-pics-026.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813876_random-pics-026.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105813877/random-pics-027.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105813877_random-pics-027.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
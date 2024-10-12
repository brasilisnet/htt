var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814307/random-pics-307.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814307_random-pics-307.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814308/random-pics-308.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814308_random-pics-308.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814309/random-pics-309.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814309_random-pics-309.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
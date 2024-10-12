var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814247/random-pics-247.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814247_random-pics-247.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814248/random-pics-248.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814248_random-pics-248.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814249/random-pics-249.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814249_random-pics-249.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
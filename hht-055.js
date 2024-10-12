var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814163/random-pics-163.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814163_random-pics-163.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814164/random-pics-164.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814164_random-pics-164.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814165/random-pics-165.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814165_random-pics-165.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
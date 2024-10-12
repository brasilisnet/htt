var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814217/random-pics-217.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814217_random-pics-217.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814218/random-pics-218.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814218_random-pics-218.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814219/random-pics-219.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814219_random-pics-219.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
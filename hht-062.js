var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814184/random-pics-184.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814184_random-pics-184.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814185/random-pics-185.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814185_random-pics-185.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814186/random-pics-186.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814186_random-pics-186.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
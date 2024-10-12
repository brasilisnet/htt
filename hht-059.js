var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814175/random-pics-175.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814175_random-pics-175.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814176/random-pics-176.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814176_random-pics-176.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814177/random-pics-177.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814177_random-pics-177.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
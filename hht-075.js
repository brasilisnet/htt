var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814223/random-pics-223.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814223_random-pics-223.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814224/random-pics-224.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814224_random-pics-224.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814225/random-pics-225.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814225_random-pics-225.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
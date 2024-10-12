var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814338/random-pics-337.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814338_random-pics-337.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814339/random-pics-338.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814339_random-pics-338.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814340/random-pics-339.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814340_random-pics-339.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814077/random-pics-103.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814077_random-pics-103.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814079/random-pics-104.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814079_random-pics-104.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814080/random-pics-105.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814080_random-pics-105.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814071/random-pics-100.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814071_random-pics-100.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814073/random-pics-101.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814073_random-pics-101.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814075/random-pics-102.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814075_random-pics-102.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
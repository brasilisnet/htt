var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814322/random-pics-322.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814322_random-pics-322.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814323/random-pics-323.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814323_random-pics-323.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814324/random-pics-324.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814324_random-pics-324.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814325/random-pics-325.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814325_random-pics-325.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814326/random-pics-326.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814326_random-pics-326.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814327/random-pics-327.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814327_random-pics-327.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
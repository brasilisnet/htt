var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814262/random-pics-262.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814262_random-pics-262.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814263/random-pics-263.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814263_random-pics-263.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814264/random-pics-264.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814264_random-pics-264.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
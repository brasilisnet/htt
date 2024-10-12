var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814283/random-pics-283.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814283_random-pics-283.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814284/random-pics-284.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814284_random-pics-284.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814285/random-pics-285.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814285_random-pics-285.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814154/random-pics-154.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814154_random-pics-154.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814155/random-pics-155.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814155_random-pics-155.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814156/random-pics-156.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814156_random-pics-156.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
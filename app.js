const pictureFlips = document.querySelectorAll('.pictureflipi'); // select all image elements
// Get a reference to the .pictureflipi.flipped element
const flippedElement = document.querySelector('.pictureflipi.flipped');

const pictureElements = document.querySelectorAll('.pictureflipi');

pictureElements.forEach((element) => {
  const imageIndex = Math.floor(Math.random() * 16) + 1;
  element.setAttribute('data-image', imageIndex);
  element.style.backgroundImage = `url(images/${imageIndex}.jpg)`;
});

setInterval(() => {
  const randomIndexes = getRandomIndexes(pictureFlips.length, 16, 18); // select between 3 and 5 random indexes
  const randomPictureFlips = randomIndexes.map(index => pictureFlips[index]); // select the random image elements
  
  randomPictureFlips.forEach(randomPictureFlip => {
    if (!randomPictureFlip.classList.contains('flipped')) { // if the image is not flipped
      randomPictureFlip.classList.add('flipped'); // flip the image
      setTimeout(() => {
        randomPictureFlip.classList.remove('flipped'); // after 5 seconds, flip the image back
      }, 2000);
    }
  });
}, 2000);

function getRandomIndexes(max, minCount, maxCount) {
  const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount; // select a random number of images to flip
  const indexes = new Set();
  
  while (indexes.size < count) {
    indexes.add(Math.floor(Math.random() * max)); // select random indexes until we have enough
  }
  
  return Array.from(indexes);
}

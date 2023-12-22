function toggleExpand(item) {
  // Toggle the display of the content associated with the clicked item
  var content = item.querySelector('.expandable-list-content');
  var arrow = item.querySelector('.arrow');

  content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
  arrow.classList.toggle('arrow-down', content.style.display === 'block');
}
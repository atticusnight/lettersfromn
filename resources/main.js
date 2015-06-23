var loadTree = function(){
  document.getElementById('tree-container').appendChild(document.createElement('div')).setAttribute('id', 'tree-cite');
  document.getElementById('tree-cite').setAttribute('class', 'fix-spacing');
  document.getElementById('tree-cite').innerHTML = 'Nunley, Donnie. &quot;Light Through the Fog.&quot; 16 November 2013. Online image. Flickr. 21 June 2015. &apos;https://www.flickr.com/photos/dbnunley/12261705236/&apos;'
  document.getElementById('tree-container').appendChild(document.createElement('img')).setAttribute('id', 'tree');
  document.getElementById('tree').setAttribute('src', '/resources/img/tree.gif');
}
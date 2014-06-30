//Define the layers
parentLayer = new Layer({x:0, y:0, width:350, height:128, image:"images/SlalomLogo.png"})
childLayer = new Layer({x:0, y:0, width:50, height:40, image:"images/Facebook.png"})
parentLayer.addSubLayer(childLayer)
parentLayer.center()

// Define a set of states with names (the original state is 'default')
parentLayer.states.add({
	enlarge: {scale: 1.2},
	shrink: {scale: .8},
})

// Set the default animation options
parentLayer.states.animationOptions = {
	curve: "spring(500,12,0)"
}

// On a click, go to the next state
parentLayer.on(Events.Click, function() {
	parentLayer.states.next()
})

// Make the layer draggable
parentLayer.draggable.enabled = true
originX = parentLayer.x
originY = parentLayer.y

// Add an animation to the end of a drag
parentLayer.on(Events.DragEnd, function(event, layer) {

  /* Snap back to origin */
  var animation;
  return animation = layer.animate({
    properties: {
      x: originX,
      y: originY
    },
    curve: "spring",
    curveOptions: {
      friction: 20,
      tension: 400,
      velocity: 20
    }
  });
});

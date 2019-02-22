document.querySelector('#blockHand').addEventListener(`click`, function (evt) {
    // Create a blank entity.
    var newVoxelEl = document.createElement('a-entity');
  
    // Use the mixin to make it a voxel.
    newVoxelEl.setAttribute('mixin', 'voxel');
  
    // Set the position using intersection point. The `snap` component above which
    // is part of the mixin will snap it to the closest half meter.
    newVoxelEl.setAttribute('position', evt.detail.intersection.point);
  
    // Add to the scene with `appendChild`.
    this.appendChild(newVoxelEl);
  });
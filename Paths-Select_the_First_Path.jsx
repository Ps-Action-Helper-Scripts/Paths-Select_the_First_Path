//////////////////////////////////////////
// Script Name: Paths - Select the First Path.jsx
// Usage: Selects a path via index number, rather than an absolute name (a limitation with Actions).
// Notes: The pathItems collection index starts at 0 (zero), change to [1] for the second path etc.
#target photoshop
activeDocument.pathItems[0].select();
//////////////////////////////////////////

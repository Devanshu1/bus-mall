'use strict';


var allProducts = [];



function Product ( name, id ) {
    this.name = name;
    this.id = id;
    this.votes = 0;

    allProducts.push( this );
}

function addProducts() {
    var bag = new Product( 'Bag', 'images/bag..jpg' );
    var banana = new Product( 'Banana', 'images/banana.jpg' );
    var bathroom = new Product( 'Bathroom', 'images/bathroom.jpg' );
    var boots = new Product( 'Boots', 'images/boots.jpg' );
    var breakfast = new Product( 'Breakfast', 'images/breakfast.jpg' );
    var bubblegum = new Product( 'Bubblegum', 'images/bubblegum.jpg' );
    var chair = new Product( 'Chair', 'images/chair.jpg' );
    var cthulhu= new Product( 'Cthulhu', 'images/cthulhu.jpg' );
    var dogduck= new Product( 'Dog-Duck', 'images/dog-duck.jpg');
    var dragon= new Product('Dragon', 'images/dragon.jpg');
    var petsweep= new Product( 'Pet Sweep', 'images/pet-sweep.jpg');
    var scissors= new Product('Scissors', 'images/scissors.jpg');
    var shark= new Product('Shark', 'images/shark.jpg');
    var tauntaun= new Product('Tauntaun', 'images/tauntaun.jpg');
    var unicorn= new Product('Unicorn', 'images/unicorn.jpg');
    var usb= new Product('USB', 'images/usb.gif');
    var watercan= new Product('Water Can', 'images/water-can.jpg');
    var wineglass= new Product('Wine Glass', 'images/wine-glass.jpg');
}

var tracker = {
    option1: document.createElement( 'img' ),
    option2: document.createElement( 'img' ),
    option3: document.createElement( 'img' ),
    displaySection: document.getElementById( 'display' ),
    votes:  0,


    randomIndex: function ( arr ) {
        return Math.floor( Math.random() * arr.length ); 
    },


    
    getIndices: function ( arr ) {
        var selectedIndices = [];
        
        // document.canvas.src = allProducts[tracker]
        var createSet = function () {
     // give an array of randomImages with no duplicates
    var images = [];
     do {
         var imgPath = randomImage();
         if ( !images.includes( imgPath ) ) { // does this random image exist in the images array
             images.push( imgPath );
         }
     } while ( images.length < 6 );
 
     return images; // ['images/water.', 'images/wine.', 'images/unicorn'];
 }
        do {
            var indexNum = this.randomIndex( arr );

            if ( !selectedIndices.includes( indexNum ) ) {
                selectedIndices.push( indexNum );
            }
        } while ( selectedIndices.length < 3 );

        return selectedIndices; 
    },

    displayOptions: function () {
        
        var randomProductsIndex = this.getIndices( allProducts ); 
        

         
        var index1 = randomProductsIndex[0]; 
        var index2 = randomProductsIndex[1]; 
        var index3 = randomProductsIndex[2]; 
        
        var product1 = allProducts[index1]; 
        var product2 = allProducts[index2]; 
        var product3 = allProducts[index3];

        this.option1.setAttribute('src', product1.id)
        this.option2.setAttribute('src', product2.id)
        this.option3.setAttribute('src', product3.id)
       
        this.displaySection.appendChild(this.option1)
        this.displaySection.appendChild(this.option2)
        this.displaySection.appendChild(this.option3)


        
        this.option1.setAttribute( 'data-index', index1 ); 
        this.option2.setAttribute( 'data-index', index2 );
        this.option3.setAttribute( 'data-index', index3 );
        
    },

    tallyVote: function ( target ) {
        this.votes += 1;

       
        var selectRest = allProducts[target.getAttribute( 'data-index')];
        selectRest.votes++;

        if ( this.votes > 4 ) {
            this.showResults();
        }
    },

    showResults: function () {
       
        this.displaySection.removeEventListener( 'click', voteHandler );
        console.table( allProducts );
    }
};



var display = document.getElementById( 'display' );
display.addEventListener( 'click', voteHandler, true );

function voteHandler (e) {

    tracker.tallyVote( e.target );
    tracker.displayOptions();
    // console.log( this.id + ' is listening; ' + e.target.id + ' was clicked' );
    // event.preventDefault();
    // event.target is what was clicked
}

// voteHandler();

//****INITIALIZE APP****//

addProducts();
tracker.displayOptions();
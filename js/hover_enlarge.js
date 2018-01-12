// show the large image
function showPreview( event ) {
    
    $( "#featured-preview" ).show();
};
// after mouse leave the wrap, hide large images
function hidePreview( event ) {
    
    $( "#featured-preview" ).hide();
}
// change to show the currently hovered image during the mouse moving
function updatePreview( index ) {
    
    $( "#featured-preview img" ).hide().eq( index ).show();
};
// move the large image horizontally
function movePreview( event ) {
    
    var content_position = $( "#featured-content" ).offset();
    
    $( "#featured-preview" ).css( "left", event.pageX - content_position.left - 300 );
};

$( document ).ready( function() {
    
    var content_elements = $( "#featured-content a" );
    var overlay_wrap = $( "#featured-overlay" );
    var overlay_elements = $( "div", overlay_wrap );
    
    overlay_elements.css( "opacity", 0 )
            
        .mousemove( movePreview )
            
        .mouseenter( function() {
                
            updatePreview( overlay_elements.index( this ) );
        })
        .click( function() {
            
            window.location.href = content_elements.eq( overlay_elements.index( this ) ).attr( "href" );
        })
        .show();
    
    overlay_wrap.mouseenter( showPreview ) 
            .mouseleave( hidePreview );
    
});
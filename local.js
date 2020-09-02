// shows all the page content after main image is loaded
// called by onLoad handler inline html
function show_content() {
    let waiters = document.querySelectorAll(".wait");
    waiters.forEach( w => {
        w.classList.remove( "hid" );
    });
}
